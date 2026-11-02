import type { SiteTemplate } from '../../types'
export const cooviaTemplate: SiteTemplate = {
  id:'coovia',gitUrl:'https://github.com/weelume/coovia-template',name:'COOVIA · 咖啡品牌',localizedNames:{en:'COOVIA · Coffee house'},sceneId:'corporate-site',listed:false,
  tags:['咖啡馆','暖棕奶油','咖啡装置','双语','PC / iPad / H5'],summary:'咖啡品牌整站，包含品牌故事、六类菜单、六篇咖啡日志、门店、预约演示与隐私政策。',accentColor:'#c78c4e',
  cover:'/templates/coovia/screenshots/desktop-home.webp',screenshots:[{"src":"/templates/coovia/screenshots/desktop-home.webp","alt":"coovia desktop home","device":"desktop","width":1430,"height":993},{"src":"/templates/coovia/screenshots/desktop-journal.webp","alt":"coovia desktop journal","device":"desktop","width":1430,"height":993},{"src":"/templates/coovia/screenshots/desktop-menu.webp","alt":"coovia desktop menu","device":"desktop","width":1430,"height":993},{"src":"/templates/coovia/screenshots/desktop-reservation.webp","alt":"coovia desktop reservation","device":"desktop","width":1430,"height":993},{"src":"/templates/coovia/screenshots/tablet-home.webp","alt":"coovia tablet home","device":"tablet","width":824,"height":1166},{"src":"/templates/coovia/screenshots/tablet-journal.webp","alt":"coovia tablet journal","device":"tablet","width":824,"height":1166},{"src":"/templates/coovia/screenshots/tablet-menu.webp","alt":"coovia tablet menu","device":"tablet","width":824,"height":1166},{"src":"/templates/coovia/screenshots/tablet-reservation.webp","alt":"coovia tablet reservation","device":"tablet","width":824,"height":1166},{"src":"/templates/coovia/screenshots/mobile-home.webp","alt":"coovia mobile home","device":"mobile","width":380,"height":822},{"src":"/templates/coovia/screenshots/mobile-journal.webp","alt":"coovia mobile journal","device":"mobile","width":380,"height":822},{"src":"/templates/coovia/screenshots/mobile-menu.webp","alt":"coovia mobile menu","device":"mobile","width":380,"height":822},{"src":"/templates/coovia/screenshots/mobile-reservation.webp","alt":"coovia mobile reservation","device":"mobile","width":380,"height":822}],
  surfaces:[{id:'site',name:'官网',platform:'pc',locales:['zh','en'],pages:[
    {slug:'',title:'首页',localizedTitles:{en:'Home'},load:()=>import('./pages/Home')},
    {slug:'about',title:'品牌故事',localizedTitles:{en:'About'},load:()=>import('./pages/About')},
    {slug:'menu',title:'咖啡菜单',localizedTitles:{en:'Menu'},load:()=>import('./pages/Menu')},
    {slug:'journal',title:'咖啡日志',localizedTitles:{en:'Journal'},load:()=>import('./pages/Journal')},
    {slug:'journal/beginners-guide-to-cold-brew',title:'冷萃入门',localizedTitles:{en:'Cold brew guide'},load:()=>import('./pages/Story').then(m=>({default:m.ColdBrew}))},
    {slug:'journal/find-your-coffee-flavour-profile',title:'咖啡风味',localizedTitles:{en:'Flavour profile'},load:()=>import('./pages/Story').then(m=>({default:m.Flavour}))},
    {slug:'journal/the-little-ritual-of-a-great-coffee-break',title:'咖啡仪式',localizedTitles:{en:'Coffee rituals'},load:()=>import('./pages/Story').then(m=>({default:m.Ritual}))},
    {slug:'journal/espresso-latte-flat-white-difference',title:'经典咖啡',localizedTitles:{en:'Coffee classics'},load:()=>import('./pages/Story').then(m=>({default:m.Classics}))},
    {slug:'journal/behind-the-cup-details-that-matter',title:'杯中细节',localizedTitles:{en:'Behind the cup'},load:()=>import('./pages/Story').then(m=>({default:m.Details}))},
    {slug:'journal/pairing-coffee-with-your-favourite-bake',title:'咖啡与烘焙',localizedTitles:{en:'Coffee pairings'},load:()=>import('./pages/Story').then(m=>({default:m.Pairing}))},
    {slug:'locations',title:'寻找门店',localizedTitles:{en:'Locations'},load:()=>import('./pages/Locations')},
    {slug:'reservation',title:'预约座位',localizedTitles:{en:'Reservation'},load:()=>import('./pages/Reservation')},
    {slug:'privacy-policy',title:'隐私政策',localizedTitles:{en:'Privacy policy'},load:()=>import('./pages/Privacy')},
  ]}],
}
