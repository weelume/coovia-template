export type Copy = { zh: string; en: string }
export const copy = (zh: string, en: string): Copy => ({ zh, en })
export const brand = { name: copy('COOVIA', 'COOVIA'), year: '2026', email: 'hello@coovia.example', phone: '+1 (555) 014-2086', address: copy('洛杉矶 Melrose Avenue 1258 号', '1258 Melrose Avenue, Los Angeles, CA 90046') }
export const navigation = [
  { slug: 'about', label: copy('品牌故事', 'About') }, { slug: 'menu', label: copy('咖啡菜单', 'Menu') },
  { slug: 'journal', label: copy('咖啡日志', 'Journal') }, { slug: 'locations', label: copy('寻找门店', 'Locations') },
  { slug: 'reservation', label: copy('预约座位', 'Reservation') }, { slug: 'privacy-policy', label: copy('隐私政策', 'Privacy Policy') },
]
export const photo = (name: string) => `/templates/coovia/photos/${name}.jpg`
