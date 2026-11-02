import { copy, photo } from '../config'
export const drinks = [
  { name: copy('丝绒冷萃', 'Velvet Cold Brew'), category: copy('冷萃咖啡', 'Cold Brew'), price: '$6.50', image: 'NcEpom1Xx4FAIMe07UUIbxe7E', description: copy('缓慢浸泡，柔和巧克力香与清爽尾韵。', 'Slow-steeped coffee, mellow chocolate notes, and a clean, refreshing finish.') },
  { name: copy('焦糖云朵拿铁', 'Caramel Cloud Latte'), category: copy('招牌拿铁', 'Signature Latte'), price: '$6.75', image: 'FRhN1ys8X4iaSrlFw0ZToZzPiEM', description: copy('浓缩与丝滑牛奶相遇，缀以轻柔焦糖。', 'Espresso and silky milk finished with a delicate ribbon of caramel.') },
  { name: copy('香草燕麦拿铁', 'Vanilla Oat Latte'), category: copy('拿铁', 'Latte'), price: '$5.75', image: 'RPWGYhPADd5wPU3MbTkhesMMPA', description: copy('顺滑浓缩搭配燕麦奶与天然香草风味。', 'A smooth espresso blend softened with oat milk and natural vanilla notes.') },
  { name: copy('可可摩卡', 'Cocoa Mocha'), category: copy('巧克力', 'Chocolate'), price: '$6.25', image: 'BofAqetDf2EbYNejwAtflEGYI', description: copy('醇厚浓缩、深邃可可与温热牛奶的经典组合。', 'Rich espresso meets deep cocoa and steamed milk for a comforting classic.') },
  { name: copy('榛果冰咖啡', 'Hazelnut Iced Coffee'), category: copy('冰咖啡', 'Iced Coffee'), price: '$6.50', image: 'cH0kRBwjS1LgojiGgL0jtIj1k', description: copy('冰爽咖啡带着烘烤榛果的香甜与奶油般口感。', 'Chilled coffee with toasted hazelnut sweetness and a creamy finish.') },
  { name: copy('招牌咖啡冰沙', 'COOVIA Frappe'), category: copy('冰沙', 'Frappe'), price: '$7.00', image: 'VPerNVVrXOKPUs2nzoZVpymcK0', description: copy('细腻冰霜口感，为日常增添一点小放纵。', 'A blended coffee treat with a frosty texture and a little indulgence.') },
]
export const menuGroups = [
  { id: 'espresso', title: copy('浓缩与经典', 'Espresso & Classics'), image: photo('ewq5R802Hg4PV0t9IAPYt7Nkic'), items: [
    [copy('意式浓缩', 'Espresso'), '$3.00', copy('短小、醇厚，充满个性。', 'Short, rich, and full of character.')],
    [copy('美式咖啡', 'Americano'), '$3.75', copy('浓缩加热水，干净而悠长。', 'Espresso lengthened with hot water for a clean finish.')],
    [copy('馥芮白', 'Flat White'), '$4.75', copy('双份浓缩与绵密微奶泡。', 'A double espresso balanced with silky microfoam.')],
    [copy('经典卡布奇诺', 'Classic Cappuccino'), '$4.50', copy('浓缩、热牛奶与轻盈泡沫的和谐。', 'Espresso, steamed milk, and airy foam in harmony.')],
  ] },
  { id: 'iced', title: copy('冰咖啡', 'Iced Coffee'), image: photo('cH0kRBwjS1LgojiGgL0jtIj1k'), items: [
    [drinks[0].name, '$6.50', drinks[0].description], [copy('冰焦糖拿铁', 'Iced Caramel Latte'), '$6.75', copy('冰爽浓缩、牛奶与焦糖尾韵。', 'Chilled espresso, milk, and a caramel finish.')], [drinks[2].name, '$5.75', drinks[2].description], [drinks[4].name, '$6.50', drinks[4].description],
  ] },
  { id: 'signature', title: copy('招牌特调', 'Signature Drinks'), image: photo('4bIQTs1eFBo82A8J5ZF3VYxnv8'), items: [
    [drinks[1].name, '$6.75', drinks[1].description], [drinks[3].name, '$6.25', drinks[3].description], [copy('蜂蜜肉桂拿铁', 'Honey Cinnamon Latte'), '$6.00', copy('温暖肉桂与轻柔甜意。', 'A gentle sweetness with warming cinnamon.')], [copy('店选招牌咖啡', 'COOVIA Signature'), '$7.00', copy('平衡而顺滑的店选风味。', 'Our house-inspired coffee creation, balanced and smooth.')],
  ] },
  { id: 'blended', title: copy('冰沙时光', 'Blended Favourites'), image: photo('VPerNVVrXOKPUs2nzoZVpymcK0'), items: [
    [drinks[5].name, '$7.00', drinks[5].description], [copy('摩卡冰沙', 'Mocha Frappe'), '$7.25', copy('咖啡与巧克力打出细腻冰沙。', 'Coffee and chocolate blended until smooth.')], [copy('香草奶油冰饮', 'Vanilla Cream Blend'), '$6.75', copy('奶油般顺滑的香草冰饮。', 'A creamy vanilla-forward chilled drink.')],
  ] },
  { id: 'tea', title: copy('茶与更多', 'Tea & More'), image: photo('GaFyCbvwwQlsg7HD9W9n5pDtM'), items: [
    [copy('英式早餐茶', 'English Breakfast Tea'), '$3.50', copy('熟悉而饱满的红茶香。', 'A familiar, full-bodied black tea.')], [copy('冰桃乌龙', 'Iced Peach Tea'), '$4.75', copy('清爽冰茶与柔和桃香。', 'A refreshing iced tea with peach notes.')], [copy('抹茶拿铁', 'Matcha Latte'), '$5.75', copy('抹茶搭配你喜欢的牛奶。', 'Earthy matcha softened with your choice of milk.')], [copy('热巧克力', 'Hot Chocolate'), '$4.50', copy('温热牛奶中的醇厚可可。', 'Comforting cocoa with steamed milk.')],
  ] },
  { id: 'pastries', title: copy('烘焙与轻食', 'Pastries & Light Bites'), image: photo('7dYMfdq4tMG0VCxzEG0uCRXSLuI'), items: [
    [copy('黄油可颂', 'Butter Croissant'), '$3.75', copy('金黄酥脆，层层黄油香。', 'Flaky layers with a golden, buttery finish.')], [copy('巧克力可颂', 'Chocolate Croissant'), '$4.25', copy('经典酥皮包裹巧克力内馅。', 'A classic pastry with a chocolate centre.')], [copy('香蕉面包', 'Banana Bread'), '$3.50', copy('给咖啡时光的一片柔软。', 'A soft slice for your coffee break.')], [copy('季节烘焙', 'Seasonal Bake'), '$4.00', copy('随季节更换的甜蜜心意。', 'A rotating treat selected for the season.')],
  ] },
] as const
