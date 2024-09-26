---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue Fabric Editor"
  text: "快速构建图形编辑器"
  tagline: 一款基于Fabric + Vue3的开源Web图片编辑器
  actions:
    - theme: brand
      text: Get Started
      link: /guide/index
    - theme: alt
      text: View on GitHub
      link: https://github.com/nihaojob/vue-fabric-editor
  image:
    src: https://github-production-user-asset-6210df.s3.amazonaws.com/13534626/371040223-ad94ca59-b7db-45ab-8426-c0c24c1e353f.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240926T075752Z&X-Amz-Expires=300&X-Amz-Signature=0b2dd311285b83d882834e4f760a2977b1da067cfb4b79bea64a6348bff61785&X-Amz-SignedHeaders=host
    alt: 开源图片编辑器

features:
  - icon: ⚙️
    title: 插件化架构
    details: 可自定义素材、右键菜单、快捷键等功能，易扩展。
  - icon: 🌂
    title: 简洁易用
    details: 以轻量、简洁为主的图形编辑器，而非大而全的在线PS类的重行设计工具。
  - icon: 🛍️
    title: 功能齐全
    details: 自定义模板、渐变、自定义字体等功能，满足轻量图片编辑场景。
  # - icon: 🚀
  #   title: Ship Fast Sites
  #   details: Fast initial load with static HTML, fast post-load navigation with client-side routing.
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.icon{
  font-size: 30px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>