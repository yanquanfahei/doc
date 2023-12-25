
# 安装使用

目前尚未开发编辑器SDK，如果你需要将编辑器集成到你的现有项目中，可以通过ifrmae的形式引入。

需要安装Node.js v16及以上版本。


### 安装与运行

* 获取项目代码

```
git clone https://github.com/nihaojob/vue-fabric-editor.git
```

* 安装依赖

```
cd vue-fabric-editor
npm install
```

* 运行

```
npm run dev
```

* 打包

```
npm run build
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
