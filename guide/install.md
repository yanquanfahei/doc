
# 安装使用

目前尚未开发编辑器SDK，如果你需要将编辑器集成到你的现有项目中，可以通过ifrmae的形式引入。

<iframe src="//player.bilibili.com/player.html?aid=1952122460&bvid=BV1bC41187bW&cid=1479494075&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" width="100%" height="400" allowfullscreen="true"> </iframe>

将来编辑器集成到自己项目中的三种方式：

1. 单独部署，通过iframe嵌入到页面中，使用postMessage通讯，缺点：数据交互比较麻烦，编辑器功能不好复用、迁移。优点：可快速集成到现有项目中。

2. 单独部署，使用iframe嵌入到页面中，在iframe的页面地址上携带token参数，编辑器内所有接口均携带token验签名，缺点：需要均需携带token，需适配token过期问题，优点：可快速集成，复用简单，功能与其他模块解耦，推荐🥰。

3. 将来核心功能文件抽出，迁移到现有项目中，仅限vue3项目，需单独引入UI框架、国际化插件等，样式可能有冲突，较为繁琐，不推荐🙈。





### 安装与运行

需要安装Node.js v16及以上版本和pnpm。

* 获取项目代码

```
git clone https://github.com/nihaojob/vue-fabric-editor.git
```

* 安装依赖

```
cd vue-fabric-editor
pnpm install
```

* 运行

```
pnpm dev
```

* 打包

```
pnpm build
```

### 项目目录
核心文件在core目录中，core实现了编辑器的核心功能，包括编辑器的生命周期、插件化机制，功能组件在components中，主要为调用core目录中的API方法。

```
├── src
│   ├── App.tsx
│   ├── App.vue
│   ├── assets
│   │   ├── editor
│   │   ├── filters
│   │   └── fonts
│   ├── components // 功能组件
│   │   ├── align.vue
│   │   ├── attribute.vue
│   │   ├── bgBar.vue
│   │   ├── centerAlign.vue
│   │   ├── clone.vue
│   │   ├── colorSelector.vue
│   │   ├── del.vue
│   │   ├── dragMode.vue
│   │   ├── filters.vue
│   │   ├── flip.vue
│   │   ├── fontTmpl.vue
│   │   ├── group.vue
│   │   ├── history.vue
│   │   ├── importFile.vue
│   │   ├── importJSON.vue
│   │   ├── importSvgEl.vue
│   │   ├── importTmpl.vue
│   │   ├── inputNumber
│   │   ├── lang.vue
│   │   ├── layer.vue
│   │   ├── lock.vue
│   │   ├── previewCurrent.vue
│   │   ├── replaceImg.vue
│   │   ├── save.vue
│   │   ├── setSize.vue
│   │   ├── svgIcon
│   │   ├── tools.vue
│   │   ├── waterMark.vue
│   │   └── zoom.vue
│   ├── config
│   │   └── constants
│   ├── core  // 编辑器核心
│   │   ├── ContextMenu.js  // 右键菜单
│   │   ├── ServersPlugin.ts
│   │   ├── core.ts
│   │   ├── index.ts // core入口
│   │   ├── objects // 自定义元素
│   │   ├── plugin // 插件目录
│   │   ├── plugin.ts
│   │   └── ruler
│   ├── env.d.ts
│   ├── language // 国际化
│   │   ├── en.json
│   │   ├── index.ts
│   │   ├── pt.json
│   │   └── zh.json
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── routes.ts
│   ├── styles
│   │   ├── contextMenu.css
│   │   ├── index.less
│   │   ├── resetViewUi.less
│   │   └── variable.less
│   ├── utils
│   │   ├── event
│   │   ├── local.ts
│   │   ├── math.ts
│   │   └── utils.ts
│   └── views
│       └── home
```

### 架构说明

通过组件 src/views/home.vue 作为入口文件，初始化Core功能代码的实例，并将实例通过 _Provide_/inject的方式注入到各个业务组件中，组件调用Core实例提供的API方法来实现业务功能。

<figure><img src="/public/Vue-Fabric-Editor.png" alt=""><figcaption></figcaption></figure>
