<!--
 * @Author: 秦少卫
 * @Date: 2024-07-06 17:48:39
 * @LastEditors: 秦少卫
 * @LastEditTime: 2024-07-06 18:04:56
 * @Description: file content
-->

# LockPlugin
将元素锁定/解锁方法封装。

[代码位置](https://github.com/nihaojob/vue-fabric-editor/blob/main/packages/core/plugin/LockPlugin.ts)

### lock
将画布中当前选中的元素锁定，让该元素不可选中、修改。

```js
canvasEditor.lock()
```

### position
将画布中当前选中的元素解锁，让该元素可选中、修改。

```js
canvasEditor.unLock()
```





