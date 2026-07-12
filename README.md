# flying 主题

`flying` 是一个面向 Halo 的中文博客主题，视觉参考 Aspect：左侧固定侧边栏、中间内容流、圆角图片卡片、分类筛选、作者区、通讯订阅表单、暗色模式和 Swup 页面切换。

## 目录结构

```text
src/
  components/
    ThemeSwitcher.vue
  pages/
    index.astro
    post.astro
    page.astro
    archives.astro
    categories.astro
    category.astro
    tags.astro
    tag.astro
    fragments/
public/
  assets/
    css/
    js/
    images/
    vendor/
unocss/
  preflights/
  shortcuts/
scripts/
  build-theme.mjs
  validate-theme.mjs
templates/                 # Astro 构建产物，不直接编辑
theme.yaml
settings.yaml
```

源码和 Halo 产物之间是单向关系：

```text
src/pages/**/*.astro + src/components/**/*.vue + public/**
                         ↓ pnpm build
                 templates/**/*.html + templates/assets/**
```

Halo 的 `th:*`、Finder API 和主题配置表达式直接写在 Astro 页面中，Astro 在构建时原样保留。Vue 只用于需要浏览器状态的交互 Island，目前暗色模式切换器使用 Vue 实现。

## 开发

```bash
source ~/.nvm/nvm.sh
nvm use 22
pnpm install
pnpm dev
```

`pnpm dev` 会监听 `src/`、`public/`、`unocss/`、构建脚本和主题配置。每次变更都会重新生成 UnoCSS，并由 Astro 重建 `templates/`；构建产物目录已从监听范围排除，避免循环构建。

## 构建

```bash
source ~/.nvm/nvm.sh
nvm use 22
pnpm build
```

构建顺序如下：

1. 生成本地 Iconify SVG 到 `public/assets/icons/iconify/`。
2. 生成 UnoCSS 到 `public/assets/css/uno.css`。
3. 执行 `astro build`，覆盖生成 `templates/`。
4. 校验 Astro 源文件、Halo 模板和必需静态资源。

提交前运行：

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 说明

- 主题 UI 类名和 JS 钩子使用 `fly-` / `data-fly-*` 命名空间，减少与插件或正文内容冲突。
- `public/assets/css/uno.css` 和整个 `templates/` 都是生成内容；手写样式入口是 `public/assets/css/style.css` 与 `unocss/` 下的模块。
- 不要直接修改 `templates/`，否则下一次 `pnpm build` 会覆盖改动。
- 当前主题资源标识仍是 `theme-flying`，需要和当前主题目录名保持一致。

### 作者联系信息

主题通过 `AnnotationSetting` 为 Halo 用户扩展了“QQ”“微信”“联系邮箱”和“个人网站”四个可选字段。更新或重新安装主题后，在 Halo 后台编辑用户并填写这些字段；轮播首页的作者头像在悬浮或键盘聚焦时会显示资料卡，未填写的联系方式不会渲染。QQ 和微信支持点击复制。

每个用户还可以上传“作者展示背景图”，用于首页“我们的作者”卡片。未上传时自动回退到该用户头像。
