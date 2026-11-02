'use client'
import type { TemplateLocale } from '../../../types'
import { useCooviaBrand } from '../host'
export function BrandText({text,locale}:{text:string;locale:TemplateLocale}){const name=useCooviaBrand()[locale];return <>{text.replaceAll('COOVIA',name)}</>}
export function Wordmark({locale}:{locale:TemplateLocale}){const name=useCooviaBrand()[locale];return <div className="cv-watermark" aria-hidden="true">{name} COFFEE</div>}
