# 架构

Next.js App Router + React + TypeScript strict + 现有 framer-motion。路由层按元数据选择服务端页面壳；页面组合区块；客户端组件集中处理菜单、语言、筛选、FAQ、表单和动效。

src/features/site-templates/catalog/coovia/config.ts 管理品牌与公共导航；content 管理可编辑双语业务内容；theme.css 管理作用域主题、字体、滚动条与断点；components 负责公共交互；pages 负责页面组合。host.tsx 是消费方身份注入边界。

站内使用 Next Link。每个页面在 / 与 /en 有对应路径；切换语言保留查询与锚点。运行素材来自 public/templates/coovia，只读取本地文件。普通长页保留一个文档滚动区域，菜单打开时锁定背景。

无数据库、持久化、外部 API 或后端服务，表单不会向第三方发送。
