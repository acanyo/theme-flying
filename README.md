# flying 主题

`flying` 是一个面向 Halo 的中文博客主题，视觉参考 Aspect：左侧固定侧边栏、中间内容流、圆角图片卡片、分类筛选、作者区、通讯订阅表单、暗色模式和 Swup 页面切换。

## 目录结构

```text
templates/
  index.html
  post.html
  page.html
  archives.html
  categories.html
  category.html
  tags.html
  tag.html
  fragments/
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
theme.yaml
settings.yaml
```

## 开发

```bash
pnpm install
pnpm dev
```

`pnpm dev` 会监听模板、脚本、主题配置和 `unocss/` 源文件变更，并重新生成 `templates/assets/css/uno.css`。

## 构建

```bash
pnpm build
```

构建会先生成 UnoCSS 样式，再校验 Halo 主题结构。生成样式采用临时文件替换，避免开发时读到半截 CSS。

## 说明

- 主题 UI 类名和 JS 钩子使用 `fly-` / `data-fly-*` 命名空间，减少与插件或正文内容冲突。
- `templates/assets/css/uno.css` 是 UnoCSS 生成样式，`templates/assets/css/style.css` 只保留字体等手写入口，两者都由模板带版本号直接引用。
- 当前主题资源标识仍是 `theme-flying`，需要和当前主题目录名保持一致。
