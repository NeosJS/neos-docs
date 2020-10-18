# 设置快捷键

快捷键可以包含多个功能键和一个键码的字符串，由符号+结合，用来定义应用中的键盘快捷键

## API
### `nativeApi.registerShortcut(shortcut: <String>, options: <Object>, callback: <Function>)`
### 

:::info
在 `Linux` 和 `Windows` 上, `Command` 键没有任何效果, 所以使用 `CommandOrControl` 表示 `macOS` 是 `Command` ，在 `Linux` 和 `Windows` 上是`Control`。

使用 `Alt` 按键替代 `Option` 按键。 使用 `Alt` 键代替 `Option`. `Option` 键只在 `macOS` 系统上存在, 而 `Alt` 键在任何系统上都有效.

`Super` 键是指 `Windows` 和 `Linux` 系统上的 `Windows` 键，但在 `macOS` 里为 `Cmd` 键.
:::

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.registerShortcut(
  'CommandOrControl+Y',
  {
    type: 'window',
    event: 'fullscreen'
  }
)
// 快捷键注册成功返回true, 注册失败返回false
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| shortcut | 快捷键 | String | —      | —      |
| options| 注册的快捷键配置 | Object| —      | —      |
| options['type']| 快捷键操作的类型。目前只支持 `window` | String| —      | —      |
| options['event']| 按下快捷键执行的事件 | String| visible、fullscreen、maximize      | —      |


### 键盘对照表
| 参数 | 缩写  |
| ---- | ------ |
| Command | Cmd     |
| Control | Ctrl     |
| CommandOrControl | CmdOrCtrl     |
| Alt | —     |
| Option | —     |
| Shift | —     |
| Super | —     |
| Escape | Esc |
| Space |—     |
