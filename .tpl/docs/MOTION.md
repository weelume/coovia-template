# 原站动效与复刻清单

参考站：https://coovia.framer.website/ 。2026-11-03 使用内置浏览器检查首页、品牌故事、菜单、日志分类与预约表单；读取公开页面与组件参数核对节奏。未用统一淡入替代独立交互。

| 区域 | 触发与原站参数 | 实现入口 |
| --- | --- | --- |
| 首页/内页标题 | 按词入场，y=60、blur=10、opacity=.001，初始延迟 .15s、逐词 .05s，弹簧视觉时长 1.1s、bounce=.1 | components/Motion.tsx Words |
| 常规区块 | 进入视口后 y=24→0、opacity=.001→1，.9s、延迟 .1s，缓动 [.22,1,.36,1]；卡片按行错峰 | components/Motion.tsx Reveal |
| 首页滚动杯 | 原始 SVG；前 .8 屏 smoothstep 停靠，PC .4、平板 .432、手机 .42；右边距按原站规则；停靠高度 .6 屏；sway=26、y 摆幅 12；每像素旋转 .22° | components/CoffeeStage.tsx |
| 杯子弹簧 | 位移/缩放/透明度 stiffness=60、damping=18、mass=.9；旋转 stiffness=40、damping=16、mass=1；页尾前 1.15 屏至 .4 屏渐隐 | components/CoffeeStage.tsx |
| 首屏小卡/新鲜徽章 | 小卡 5/6 秒上下浮动，徽章 8 秒轻微转动；手机隐藏第二张小卡 | components/CoffeeStage.tsx |
| 产品/日志/团队图片 | 悬浮位移、图片缩放、边框反馈；触屏不依赖 hover 提供功能 | Sections.tsx、JournalGrid.tsx、theme.css |
| 标语横向循环 | 两组连续内容，35 秒线性循环，悬浮暂停，离开恢复；不产生页面横向滚动 | pages/Home.tsx、theme.css |
| 日志分类 | 分类按钮过滤实际内容，退出/进入及布局重排，.35s；全部文章可恢复 | components/JournalGrid.tsx |
| FAQ | 按钮展开高度/透明度、加号旋转 45°，.3s；再次点击或点其他项收起 | components/Common.tsx |
| 手机菜单 | 下拉 .3s、菜单项 .05s 错峰；背景锁定、焦点循环、Escape 恢复 | components/Shell.tsx |
| 导航/语言/页面 | Next 客户端导航，页面 .3s 透明度过渡；语言保留页面、查询与锚点 | components/Shell.tsx |
| 表单/分享 | 原生必填和格式校验、本地结果反馈；复制失败显式提示，均不发送业务信息 | ReservationForm.tsx、Share.tsx |

三端均使用同一响应式站点。系统减少动态效果时停用杯子轨迹、循环和位移，保留菜单、分类、FAQ 与表单功能。装饰层单独裁剪，普通内容与文档滚动不裁剪、不劫持。

## 验收边界

实际结果见 BROWSER.json。首屏杯子 SVG 和滚动轨迹参数来自参考站公开组件；响应式布局、中文字号、品牌注入、玻璃卡片和去除装饰箭头按需求规范调整。

手写风格副标题按规范使用本地字体而非原站额外字体；部分悬浮幅度、循环速度和交互时长为重实现值，尚未完成原站三端全部时刻的逐帧量化比较。系统减少动态效果分支未实机切换验证。未出现视频/拖拽内容，不虚构这些效果。
