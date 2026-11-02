'use client'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import type { TemplateLocale } from '../../../types'
import { drinks } from '../content/menu'
import { photo } from '../config'

export function CoffeeStage({ locale }: { locale: TemplateLocale }) {
  const reduced = useReducedMotion()
  const stage = useRef<HTMLDivElement>(null), cup = useRef<HTMLDivElement>(null)
  const metrics = useRef({ dx: 0, dy: 0, vh: 1000, scale: .4 })
  const { scrollY } = useScroll(), xTarget = useMotionValue(0), yTarget = useMotionValue(0), scaleTarget = useMotionValue(1), spinTarget = useMotionValue(0), opacityTarget = useMotionValue(1)
  const spring = { stiffness: 60, damping: 18, mass: .9 }
  const x = useSpring(xTarget, spring), y = useSpring(yTarget, spring), scale = useSpring(scaleTarget, spring), opacity = useSpring(opacityTarget, spring), rotate = useSpring(spinTarget, { stiffness: 40, damping: 16, mass: 1 })
  // 原站的杯子在前 0.8 屏内缩小并停靠右侧，随后随滚动旋转，近页尾渐隐。
  const updateScroll = useCallback((scroll: number) => {
    if (reduced) return
    const m = metrics.current, progress = Math.min(1, Math.max(0, scroll / (m.vh * .8))), eased = progress * progress * (3 - 2 * progress), rest = Math.max(0, scroll - m.vh * .8)
    xTarget.set(m.dx * eased + Math.sin(rest / 380) * 26 * eased)
    yTarget.set(m.dy * eased + Math.sin(rest / 240) * 12 * eased)
    scaleTarget.set(1 + (m.scale - 1) * eased)
    spinTarget.set(scroll * .22)
    const end = Math.max(document.documentElement.scrollHeight - m.vh, m.vh), start = end - m.vh * 1.15, finish = end - m.vh * .4
    opacityTarget.set(1 - Math.min(1, Math.max(0, (scroll - start) / (finish - start))))
  }, [reduced, xTarget, yTarget, scaleTarget, spinTarget, opacityTarget])
  useMotionValueEvent(scrollY, 'change', updateScroll)
  useEffect(() => {
    const measure = () => {
      if (!stage.current || !cup.current || reduced) return
      const rect = stage.current.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight
      const size = Math.min(vw < 700 ? 280 : 440, rect.width * .8), left = rect.left + (rect.width - size) / 2, top = rect.top + window.scrollY + (rect.height - size) / 2
      Object.assign(cup.current.style, { position: 'fixed', inset: 'auto', width: `${size}px`, height: `${size}px`, left: `${left}px`, top: `${top}px` })
      const edge = vw < 810 ? 16 : vw < 1200 ? 40 : Math.max(110 * .45, (Math.max(0, (vw - 1200) / 2) + 40) / 2)
      metrics.current = { dx: vw - edge - (left + size / 2), dy: vh * .6 - (top + size / 2), vh, scale: vw < 810 ? .42 : vw < 1200 ? .432 : .4 }
      updateScroll(window.scrollY)
    }
    measure(); window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [reduced, updateScroll])
  return <div ref={stage} className="cv-coffee-stage" aria-label={locale === 'zh' ? '拉花咖啡与环绕咖啡豆' : 'Latte art coffee and orbiting beans'}>
    <div className="cv-orbit" aria-hidden="true"/><div className="cv-orbit cv-orbit-inner" aria-hidden="true"/>
    <div className={reduced ? 'cv-cup-static' : 'cv-cup-layer'}><motion.div ref={cup} className="cv-cup" style={reduced ? {} : { x, y, scale, opacity }}><motion.img style={reduced ? {} : { rotate }} src="/templates/coovia/coffee-cup.svg" alt=""/>{[30,24,18].map((size,i)=><span className={`cv-cup-bean cv-cup-bean-${i}`} key={i}><svg width={size} height={size*1.3} viewBox="0 0 40 52" aria-hidden="true"><ellipse cx="20" cy="26" rx="17" ry="23" fill="#3B2416"/><ellipse cx="15" cy="20" rx="6" ry="10" fill="#ffffff14"/><path d="M20 4C12 18 28 32 20 48" stroke="#1C120C" strokeWidth="3" fill="none" strokeLinecap="round"/></svg></span>)}</motion.div></div>
    {[0,1].map((index) => <motion.div key={index} className={`cv-floating cv-floating-${index}`} animate={reduced ? {} : { y: [0, index === 0 ? -9 : 10, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}><img src={photo(drinks[index].image)} alt=""/><div><strong>{drinks[index].name[locale]}</strong><small>{drinks[index].price}</small></div></motion.div>)}
    <motion.div className="cv-fresh" animate={reduced ? {} : { rotate: [-9, 3, -9] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}><em>{locale === 'zh' ? '每日' : 'Made'}</em><strong>{locale === 'zh' ? '新鲜' : 'FRESH'}</strong></motion.div>
  </div>
}
