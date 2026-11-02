'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { brand, navigation } from '../config'
import { useCooviaBrand, useCooviaHost } from '../host'
import type { SiteTemplatePageProps } from '../../../types'
import '../theme.css'

export function Shell({ children, locale = 'zh', basePath }: SiteTemplatePageProps & { children: ReactNode }) {
  const host = useCooviaHost(), name = useCooviaBrand()[locale], pathname = usePathname(), router = useRouter(), reduced = useReducedMotion()
  const [open, setOpen] = useState(false), toggleRef = useRef<HTMLButtonElement>(null), menuRef = useRef<HTMLDivElement>(null)
  const root = locale === 'en' ? basePath.replace(/\/en$/, '') : basePath
  const href = (slug = '') => `${basePath}${slug ? '/' + slug : ''}` || '/'
  const languageHref = () => { const tail = pathname.slice(basePath.length); return `${root}${locale === 'zh' ? '/en' : ''}${tail}${window.location.search}${window.location.hash}` || '/' }
  useEffect(() => {
    document.documentElement.dataset.coovia = 'true'
    return () => { delete document.documentElement.dataset.coovia }
  }, [])
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
      if (event.key === 'Tab') {
        const focusable = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a,button') ?? [])].filter((item): item is HTMLElement => item !== null)
        const first = focusable[0], last = focusable.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', keydown)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', keydown) }
  }, [open])
  const logo = <>{host.lightLogo ? <img className="cv-host-logo" src={host.lightLogo} alt=""/> : <span className="cv-logo-mark">◉</span>}<strong>{name}</strong></>
  return <div data-template="coovia" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
    <a href="#cv-main" className="cv-skip">{locale === 'zh' ? '跳到正文' : 'Skip to content'}</a>
    <header className="cv-nav"><Link className="cv-brand" href={href()} aria-label={name}>{logo}</Link><nav className="cv-desktop-nav" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{navigation.slice(0, 4).map(n => <Link key={n.slug} href={href(n.slug)} aria-current={pathname === href(n.slug) ? 'page' : undefined}>{n.label[locale]}</Link>)}</nav><div className="cv-nav-actions"><Link href={locale === 'zh' ? `${root}/en${pathname.slice(basePath.length)}` : `${root}${pathname.slice(basePath.length)}` || '/'} onClick={event => { event.preventDefault(); router.push(languageHref()) }} className="cv-language" aria-label={locale === 'zh' ? 'Switch to English' : '切换为中文'}>{locale === 'zh' ? 'EN' : '中文'}</Link><Link className="cv-button cv-nav-reserve" href={href('reservation')}>{locale === 'zh' ? '预约座位' : 'Reserve a Table'}<span aria-hidden="true">◉</span></Link><button ref={toggleRef} className="cv-menu-toggle" aria-expanded={open} aria-controls="cv-menu" aria-label={locale === 'zh' ? (open ? '关闭菜单' : '打开菜单') : (open ? 'Close menu' : 'Open menu')} onClick={() => setOpen(!open)}><span className={open ? 'is-open' : ''}/><span className={open ? 'is-open' : ''}/></button></div></header>
    <AnimatePresence>{open && <motion.div id="cv-menu" ref={menuRef} className="cv-mobile-menu" role="dialog" aria-modal="true" aria-label={locale === 'zh' ? '导航菜单' : 'Navigation menu'} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: reduced ? 0 : .3 }}>{navigation.map((n, i) => <motion.div key={n.slug} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : i * .05 }}><Link href={href(n.slug)} onClick={() => setOpen(false)}>{n.label[locale]}</Link></motion.div>)}</motion.div>}</AnimatePresence>
    <main id="cv-main"><motion.div key={pathname} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>{children}</motion.div></main>
    <footer className="cv-footer"><div className="cv-footer-grid"><div><Link href={href()} className="cv-brand">{logo}</Link><p>{locale === 'zh' ? '一杯好咖啡，留住日常的好时光。' : 'Good coffee for the moments that make a day.'}</p><div className="cv-social">{['Instagram', 'Facebook', 'Tiktok'].map(s => <a href={`https://${s.toLowerCase()}.com`} key={s} target="_blank" rel="noreferrer">{s}</a>)}</div></div><div><h3>{locale === 'zh' ? '探索' : 'Explore'}</h3>{navigation.map(n => <Link key={n.slug} href={href(n.slug)}>{n.label[locale]}</Link>)}</div><div><h3>{locale === 'zh' ? '到店相聚' : 'Visit'}</h3><p>{brand.address[locale]}</p><p>{locale === 'zh' ? '周一至周五 · 7:00–18:00' : 'Mon–Fri · 7 AM–6 PM'}<br/>{locale === 'zh' ? '周六至周日 · 8:00–18:00' : 'Sat–Sun · 8 AM–6 PM'}</p><small>{locale === 'zh' ? '示例地址与营业时间' : 'Demo address and opening hours'}</small></div><div><h3>{locale === 'zh' ? '打个招呼' : 'Say Hello'}</h3><a href={`mailto:${brand.email}`}>{brand.email}</a><a href="tel:+15550142086">{brand.phone}</a></div></div><div className="cv-footer-bottom"><span>© {brand.year} {name}</span><span>{locale === 'zh' ? '用心冲煮，慢慢享受' : 'Poured with care in Los Angeles'}</span>{host.filing}{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}</div><div className="cv-footer-word" aria-hidden="true">{name}</div></footer>
    {host.marketplaceHref && <Link href={host.marketplaceHref} className="cv-market" aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} alt=""/>}<span>{name}</span></Link>}
  </div>
}
