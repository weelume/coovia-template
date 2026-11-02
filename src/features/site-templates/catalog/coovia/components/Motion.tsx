'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export function Reveal({ children, className = '', delay = 0, direction = 'up' }: { children: ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right' | 'scale' }) {
  const reduced = useReducedMotion()
  const initial = direction === 'scale' ? { opacity: .001, scale: .93 } : { opacity: .001, x: direction === 'left' ? -35 : direction === 'right' ? 35 : 0, y: direction === 'up' ? 24 : 0 }
  return <motion.div className={className} initial={reduced ? false : initial} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .9, delay: .1 + delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}
export function Words({ text }: { text: string }) {
  const reduced = useReducedMotion()
  return <h1 aria-label={text}>{text.split(' ').map((word, i) => <motion.span aria-hidden="true" key={`${i}-${word}`} initial={reduced ? false : { opacity: .001, y: 60, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ type: 'spring', visualDuration: 1.1, bounce: .1, delay: .15 + .05 * i }}>{word}{' '}</motion.span>)}</h1>
}
