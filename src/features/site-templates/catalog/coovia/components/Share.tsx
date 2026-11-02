'use client'
import { useState } from 'react'
import type { TemplateLocale } from '../../../types'
export function Share({locale}:{locale:TemplateLocale}){const[status,setStatus]=useState('');return <div><button className="cv-button cv-button-ghost" onClick={async()=>{try{await navigator.clipboard.writeText(window.location.href);setStatus(locale==='zh'?'文章链接已复制':'Story link copied')}catch(error){console.error('[coovia:share] clipboard failed',error);setStatus(locale==='zh'?'复制失败，请从地址栏复制链接':'Copy failed. Please copy the URL from the address bar.')}}}>{locale==='zh'?'分享文章':'Share'}</button><p role="status">{status}</p></div>}
