import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { Intro, CTA } from '../components/Common'
import { JournalGrid } from '../components/JournalGrid'
import { copy } from '../config'
export default function Journal({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Intro locale={locale} eyebrow={copy('咖啡日志','The COOVIA journal')} title={copy('关于咖啡 匠心与慢时光的笔记','Notes on Coffee, Craft, and Slowing Down.')} script={copy('一杯一故事','stories by the cup')} text={copy('咖啡故事、冲煮技巧、风味发现与日常小仪式，让每一次咖啡时光更有滋味。','Stories, brewing tips, flavour discoveries, and little rituals for making more of your coffee moments.')}/><section className="cv-wrap"><JournalGrid locale={locale} basePath={basePath}/></section><CTA locale={locale} basePath={basePath} title={copy('保持好奇 继续冲煮','Stay Curious. Keep Brewing.')} text={copy('欢迎常来，发现咖啡吧台边的新故事与实用小技巧。','Come back for fresh stories, practical coffee tips, and more from the COOVIA counter.')}/></Shell>}
