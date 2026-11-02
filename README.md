# COOVIA · 咖啡品牌

参考 https://coovia.framer.website/ 的双语响应式整站模板。全部业务页面见 .tpl/template.json，默认中文，英文 /en。表单仅本地演示，不发送、不存储业务数据。

先阅读 .tpl/README.md、.tpl/template.json、.tpl/project.json。

需要 Node 24.16.0、pnpm 9.15.4、Git。安装 pnpm install --frozen-lockfile；启动 pnpm dev，默认端口见 .tpl/project.json；停止用 Ctrl+C。生产预览先 pnpm build，再 pnpm start。PORT 可改变端口。

检查：pnpm typecheck、pnpm lint、pnpm build、pnpm test。测试启动随机空闲端口并在结束后停止自身进程，不操作其他服务。构建、依赖安装和打包仅在本地 Linux 文件系统进行。

修改入口：品牌 src/features/site-templates/catalog/coovia/config.ts，内容 src/features/site-templates/catalog/coovia/content，主题 src/features/site-templates/catalog/coovia/theme.css，交互 src/features/site-templates/catalog/coovia/components，页面 src/features/site-templates/catalog/coovia/pages，路由 src/app/[[...slug]]/page.tsx。详细规则见 .tpl/docs/CUSTOMIZATION.md。

共享包只导出 template 与 host，消费方可在 Provider 中注入身份。独立模板不依赖任何消费方绝对路径。

本地验证通过并提交源码后执行 pnpm bundle。不要提交 node_modules、构建目录、日志和真实环境文件。验收边界见 .tpl/docs/VERIFICATION.md，许可与素材来源见 .tpl/docs/LICENSE.md 和 ASSETS.json。
