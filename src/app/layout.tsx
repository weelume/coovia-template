import type { Metadata } from 'next'
import './globals.css'
export const metadata:Metadata={title:'COOVIA Coffee',description:'Good coffee for the moments that make a day.'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
