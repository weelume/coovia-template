import { BrandText } from '../components/BrandText'
import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { stories, categories } from '../content/journal'
import { copy, photo } from '../config'
import { Shell } from '../components/Shell'
import { Intro, CTA, Heading } from '../components/Common'
import { StoryCard } from '../components/JournalGrid'
import { Share } from '../components/Share'
import { Reveal } from '../components/Motion'
function Story({index,locale='zh',basePath}:SiteTemplatePageProps&{index:number}){const story=stories[index];return <Shell locale={locale} basePath={basePath}><div className="cv-wrap cv-back"><Link href={`${basePath}/journal`}>{locale==='zh'?'全部咖啡日志':'All Journal Stories'}</Link></div><Intro locale={locale} eyebrow={categories[story.category]} title={story.title} text={story.description}/><div className="cv-article-meta cv-wrap"><span>{locale==='zh'?'咖啡日志编辑部':<BrandText locale={locale} text={'By COOVIA Journal'}/>}</span><span>{story.minutes}{locale==='zh'?' 分钟阅读':' min read'}</span><time dateTime={story.date}>{story.date.slice(0,7)}</time></div><Reveal className="cv-article-photo cv-wrap" direction="scale"><img src={photo(story.image)} alt={story.title[locale]}/></Reveal><article className="cv-article"><p>{story.intro[locale]}</p>{story.sections.map(([title,text])=><section key={title.en}><h2><BrandText text={title[locale]} locale={locale}/></h2><p>{text[locale]}</p></section>)}<Share locale={locale}/></article><section className="cv-wrap cv-section"><Heading locale={locale} eyebrow={copy('吧台边的笔记','Notes from the counter')} title={copy('更多咖啡日志','More from the Journal')}/><div className="cv-two-grid">{stories.map((s,i)=>({s,i})).filter(({i})=>i!==index).slice(0,2).map(({i})=><StoryCard key={i} index={i} locale={locale} basePath={basePath}/>)}</div></section><CTA locale={locale} basePath={basePath} title={copy('准备好 来一杯了吗','Ready for a Cup?')}/></Shell>}
export const ColdBrew=(p:SiteTemplatePageProps)=><Story {...p} index={0}/>
export const Flavour=(p:SiteTemplatePageProps)=><Story {...p} index={1}/>
export const Ritual=(p:SiteTemplatePageProps)=><Story {...p} index={2}/>
export const Classics=(p:SiteTemplatePageProps)=><Story {...p} index={3}/>
export const Details=(p:SiteTemplatePageProps)=><Story {...p} index={4}/>
export const Pairing=(p:SiteTemplatePageProps)=><Story {...p} index={5}/>
