# 验收标准与边界

必须通过 pnpm typecheck、pnpm lint、pnpm build、pnpm test。test 对全部双语页面、未知页面 404、运行图片与字体执行真实 HTTP 调用，并在结束后停止自身测试服务。

内置浏览器检查 PC 1440×1000、iPad 834×1180、H5 390×844 与 320px 窄屏。每端保存首页、功能/菜单、日志或业务内容、联系/预约四张真实截图；尺寸以解码结果为准。

检查导航、语言保留页面/参数/锚点、移动菜单背景锁定与 Escape、FAQ、筛选和本地表单反馈。实际滚动检查深浅区块、动效、横向溢出与滚动条。

执行结果见 reports/verification.json 和 docs/BROWSER.json。动效参数、原站清单与差异见 MOTION.md。未执行项须明确记录；不把构建通过当作逐帧一致。
