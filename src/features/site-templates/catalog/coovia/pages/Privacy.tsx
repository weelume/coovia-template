import type { SiteTemplatePageProps } from '../../../types'
import { copy, brand } from '../config'
import { Shell } from '../components/Shell'
import { Intro } from '../components/Common'
const sections=[
  [copy('我们收集的信息','Information We Collect'),copy('此演示站不收集或存储预约表单内容。输入仅在当前浏览器页面中用于原生必填与格式校验，离开页面即不再保留。','This demo does not collect or store reservation form contents. Input remains in the current browser page for required-field and format validation only.')],
  [copy('信息如何使用','How We Use Information'),copy('表单信息不会发往服务器、邮件服务或第三方预约系统，也不会创建真实预约。正式接入服务时，应重新披露实际用途。','Form details are not sent to a server, email service, or booking provider, and no real booking is created. A live service must disclose its actual uses.')],
  [copy('信息共享','Sharing of Information'),copy('本演示不出售或共享表单个人信息。外部社交链接在新标签页打开，访问后适用该平台自身的政策。','This demo does not sell or share personal form data. External social links open in a new tab and are subject to the destination platform’s policies.')],
  [copy('Cookie 与分析','Cookies and Analytics'),copy('独立模板未接入分析、追踪或广告服务。部署到其他网站后，应由部署方披露其实际使用的工具与同意机制。','The standalone template includes no analytics, tracking, or advertising service. A deploying website must disclose any additional tools and consent requirements.')],
  [copy('保存与安全','Data Retention and Security'),copy('不持久化业务数据，不在日志输出姓名、邮箱、电话或备注。控制台仅记录本地校验结果。','No business data is persisted. Logs do not include names, email addresses, telephone numbers, or notes; the console records only the local validation outcome.')],
  [copy('你的选择','Your Choices'),copy('可以随时清空输入或离开页面。文章分享仅在点击时复制当前文章地址，不上传联系人或其他个人信息。','Clear the fields or leave the page at any time. Story sharing copies only the current URL when clicked; it does not upload contacts or other personal information.')],
  [copy('联系我们','Contact'),copy(`隐私问题可联系 privacy@coovia.example。${brand.address.zh}。地址与联系方式为演示占位。`,`For privacy questions: privacy@coovia.example. ${brand.address.en}. Address and contact details are demonstration placeholders.`)],
]
export default function Privacy({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Intro locale={locale} eyebrow={copy('法律信息','Legal')} title={copy('隐私政策','Privacy Policy')} text={copy('更新于 2026 年 11 月 3 日 · 演示说明','Updated November 3, 2026 · Demo policy')}/><article className="cv-article"><p className="cv-glass cv-menu-note">{locale==='zh'?'本政策用于说明演示的实际行为，不构成法律建议。真实上线前，请由专业人士根据预约、邮件、分析及支付服务重新审核。':'This policy describes the actual demo behavior and is not legal advice. Obtain a professional review before connecting live booking, email, analytics, or payment services.'}</p>{sections.map(([title,text],i)=><section key={title.en}><h2>{i+1}. {title[locale]}</h2><p>{text[locale]}</p></section>)}</article></Shell>}
