
# AddBaseTypePlugin
将元素添加到画布中的方法封装，所有将元素添加到画布中的全部功能封装在该插件中。

[代码位置](https://github.com/nihaojob/vue-fabric-editor/blob/main/packages/core/plugin/AddBaseTypePlugin.ts)

### addBaseType
将fabricjs的元素添加到画布中，默认选中并对元素位置进行设置。

```js
addBaseType(item: fabric.Object,
    options?: {
      center: boolean; // 画布居中
      scale: boolean; // 按画布宽度50%缩放
      event: DragEvent; // 按鼠标拖拽事件坐标添加
    })
```
#### options参数说明：

| 名称       | 类型    | 默认值   | 说明                     | 必传    |
|  ----  | ----  |  ----  |  ----  |  ----  |
|  center   | boolean | true    | 画布居中                 | 否     |
|  scale    | boolean | false   |  按画布宽度50%缩放         | 否     |
|  event    | DragEvent | -     |  按鼠标拖拽事件坐标添加%    | 否     |





