# 修改指南

1. 品牌与联系方式：src/features/site-templates/catalog/coovia/config.ts；同步必要市场元数据。
2. 文案、价格与文章：src/features/site-templates/catalog/coovia/content；同时维护 zh/en，不在组件重复硬编码可编辑内容。
3. 主题：src/features/site-templates/catalog/coovia/theme.css；调整 --tpl- 令牌，颜色与字体保持作用域隔离。中文 MiSans 使用真实 400/700，英文 Poppins 使用 400/600/700。
4. 动效：src/features/site-templates/catalog/coovia/components；保留触发条件、减弱动态分支与键盘能力。
5. 页面与语言：src/features/site-templates/catalog/coovia/pages、meta.ts；增加页面时同时更新站内导航和 .tpl/template.json。
6. 素材：public/templates/coovia；新增素材时补充 ASSETS.json 与权利记录。

文案与样式修改验证受影响页面；路由或交互修改执行 typecheck、lint、build、test。完整交付按 VERIFICATION.md 更新报告与截图。
