'use client'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import type { TemplateLocale } from '../../../types'
import type { Copy } from '../config'
import { Reveal, Words } from './Motion'
import { useCooviaBrand } from '../host'

export function Intro({ eyebrow, title, script, text, locale, children }: { eyebrow: Copy; title: Copy; script?: Copy; text?: Copy; locale: TemplateLocale; children?: ReactNode }) { const name=useCooviaBrand()[locale],t=(value:Copy)=>value[locale].replaceAll('COOVIA',name);return <section className="cv-intro cv-wrap"><Reveal><span className="cv-eyebrow">{t(eyebrow)}</span></Reveal><Words text={t(title)}/>{script && <p className="cv-script">{t(script)}</p>}{text && <Reveal delay={.18}><p className="cv-lead">{t(text)}</p></Reveal>}{children}</section> }
export function Heading({ eyebrow, title, locale }: { eyebrow: Copy; title: Copy; locale: TemplateLocale }) { const name=useCooviaBrand()[locale];return <Reveal><span className="cv-eyebrow">{eyebrow[locale].replaceAll('COOVIA',name)}</span><h2>{title[locale].replaceAll('COOVIA',name)}</h2></Reveal> }
export function CTA({ basePath, locale, title, text }: { basePath: string; locale: TemplateLocale; title: Copy; text?: Copy }) { const name=useCooviaBrand()[locale];return <section className="cv-wrap cv-section"><Reveal className="cv-cta" direction="scale"><span className="cv-eyebrow">{locale === 'zh' ? '一杯好时光' : 'A moment for you'}</span><h2>{title[locale].replaceAll('COOVIA',name)}</h2>{text && <p>{text[locale].replaceAll('COOVIA',name)}</p>}<Link className="cv-button" href={`${basePath}/menu`}>{locale === 'zh' ? '探索咖啡菜单' : 'Explore the Menu'}<span aria-hidden="true">◉</span></Link></Reveal></section> }
export function FAQ({ locale, items }: { locale: TemplateLocale; items?: { q: Copy; a: Copy }[] }) {
  const [active, setActive] = useState<number | null>(null), reduced = useReducedMotion(), name=useCooviaBrand()[locale]
  const questions = items ?? [
    { q: { zh: '这里的咖啡有什么特别？', en: 'What makes COOVIA coffee special?' }, a: { zh: '从产地、烘焙到萃取，我们关注每一个细节，用新鲜原料带来平衡而稳定的风味。', en: 'Thoughtfully sourced beans, careful brewing, and fresh ingredients make every cup balanced, consistent, and worth slowing down for.' } },
    { q: { zh: '可以外带吗？', en: 'Can I order takeaway?' }, a: { zh: '当然可以。到店选择喜欢的饮品，带着一杯好咖啡继续今天的旅程。', en: 'Yes. Stop by the café, choose your favourite, and take a freshly prepared cup with you.' } },
    { q: { zh: '有植物奶选择吗？', en: 'Do you have dairy-free options?' }, a: { zh: '可选择燕麦奶等植物奶。过敏原、配方及当日供应请向店员确认。', en: 'Ask our team about oat milk and other available alternatives. Please let us know about allergies before ordering.' } },
    { q: { zh: '除了咖啡，还有轻食吗？', en: 'Do you serve food as well as coffee?' }, a: { zh: '我们提供可颂、香蕉面包和季节烘焙，具体品种以门店当日供应为准。', en: 'Enjoy pastries and light bites alongside your coffee. Availability varies throughout the day.' } },
    { q: { zh: '可以预约座位吗？', en: 'Can I reserve a table?' }, a: { zh: '可以在预约页填写需求。本演示仅做本地校验，不会发送或创建真实预约。', en: 'Visit the reservation page. This demo validates locally only and does not send or create a real booking.' } },
    { q: { zh: '在哪里可以找到门店？', en: 'Where can I find COOVIA?' }, a: { zh: '在门店页查看 Melrose 咖啡馆的示例地址、营业时间与到店提示。', en: 'Our locations page lists the Melrose café demo address, hours, and useful information before you visit.' } },
  ]
  return <div className="cv-faq">{questions.map((item, i) => <div className="cv-faq-item" key={item.q.en}><h3><button id={`cv-q-${i}`} aria-expanded={active === i} aria-controls={`cv-a-${i}`} onClick={() => setActive(active === i ? null : i)}>{item.q[locale].replaceAll('COOVIA',name)}<motion.span animate={{ rotate: active === i ? 45 : 0 }} transition={{ duration: reduced ? 0 : .25 }}>+</motion.span></button></h3><AnimatePresence initial={false}>{active === i && <motion.div id={`cv-a-${i}`} role="region" aria-labelledby={`cv-q-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .3 }}><p>{item.a[locale].replaceAll('COOVIA',name)}</p></motion.div>}</AnimatePresence></div>)}</div>
}
