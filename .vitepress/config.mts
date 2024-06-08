import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🚀 快图设计",
  description: "设计编辑器文档",
  base: '/editorDoc',
  head:[
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?000b1d0ecb9d8f1c003cff19cc2a44a2";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    // logo: { src: '/public/logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🔖 指南', link: '/guide/index' },
      { text: '💻 预览', link: 'https://nihaojob.github.io/vue-fabric-editor/#/' }
    ],

    sidebar: [
      {
        text: '🔖 指南',
        collapsed: false,
        items: [
          { text: '简介', link: '/guide/index' },
          { text: '功能介绍', link: '/guide/feature' },
          { text: '安装使用', link: '/guide/install' },
          { text: '项目起源', link: '/guide/origin' },
          // { text: '自定义字体', link: 'https://t.zsxq.com/15AVKSQgN' },
          // { text: '自定义模板', link: 'https://github.com/nihaojob/vue-fabric-editor-static/blob/main/template/index.json' },
          // { text: '自定义素材分类', link: 'https://github.com/nihaojob/vue-fabric-editor-static/blob/main/svg/type.json' },
          // { text: '部署到Nginx', link: 'https://articles.zsxq.com/id_cwrgkza32i0b.html' },
        ]
      },
      {
        text: '⚙️ 架构说明',
        collapsed: false,
        items: [
          { text: '插件化', link: '/guide/plugin' },
          // { text: '生命周期', link: '/guide/plugin' },
          // { text: '插件API', link: '/guide/plugin' },
          { text: '常见问题', link: '/guide/faq' },
          { text: '生态版本', link: '/guide/ecology' },
          // { text: '功能介绍', link: '/guide/feature' },
          // { text: '安装使用', link: '/guide/install' },
          // { text: '项目起源', link: '/guide/origin' },
          // { text: '常见问题', link: '/guide/faq' },
          // { text: '贡献指南', link: '/guide/community' },
        ]
      },
      {
        text: '🙌 贡献和社区',
        collapsed: false,
        items: [
          { text: '贡献指南', link: '/guide/community' },
          { text: 'PR教程', link: '/guide/pr' },
          { text: '开发教程', link: 'https://www.yuque.com/qinshaowei/fabric/qrdqudwo7sxadr4d?singleDoc#o8m1e' },
          { text: '关于作者', link: 'https://juejin.cn/user/3843548383549214/posts' },
        ]
      },
      {
        text: '📦 付费版',
        collapsed: false,
        items: [
          { text: '简介', link: '/pro/index' },
        ]
      },
      {
        text: '🎁 fabric.js教程资源',
        collapsed: false,
        items: [
          { text: '入门文章', link: '/learning/article' },
          { text: '在线示例', link: '/learning/demo' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/nihaojob/editorDoc/tree/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nihaojob/vue-fabric-editor' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
