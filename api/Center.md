
# CenterAlignPlugin
将单选/多选的元素进行水平/垂直/水平垂直居中。

[代码位置](https://github.com/nihaojob/vue-fabric-editor/blob/main/packages/core/plugin/CenterAlignPlugin.ts)


### center
将画布中当前选中的元素进行水平垂直居中操作。

```js
canvasEditor.center()
```


### centerH
将画布中当前选中的元素进行水平居中操作。

```js
canvasEditor.centerH()
```

### centerV
将画布中当前选中的元素进行垂直居中操作。

```js
canvasEditor.centerV()
```

### position
将画布中当前选中的元素按居中方式进行操作。

```js
canvasEditor.position(name: 'centerH' | 'center' | 'centerV')
```

#### name参数说明：

| 名称       | 类型    | 默认值   | 说明                     | 必传    |
|  ----  | ----  |  ----  |  ----  |  ----  |
|  center   | -  | -     | 水平垂直居中                 | 是     |
|  centerH   | -  | -     | 水平居中                 | 是     |
|  centerV   | -  | -     | 垂直居中                 | 是     |









