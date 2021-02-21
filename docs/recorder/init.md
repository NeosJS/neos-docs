# 初始化录音机

## API
### `recorder.init(options: <Object>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.init({
  type:'wav', // 音频类型
  sampleRate: 16000, // 码率
  bitRate: 16, // 采用数位
  effective: 3, // 有效分贝值 0 -- 100
  autoOpen: true, // 初始化完成后，是否自动打开录音机
  waveConfig: [{
    type: 'histogram', // 波形类型
    lineRound: true, 
    lineCount: 4,
    lineRatio: 0.5,
    minHeight: 0,
    position: 0,
    strokeColor: '#7ac70c'
  }],
  success: res => { // 成功回调
    console.log(res)
  },
  fail: err => { // 失败回调
    console.log(err)
  }
})
```

####  事件监听
```js
recorder.on('init', (res) => {
  console.log('初始化完成')
})
```

::: warning
  指定多个波形图配置，可在一个音频输入下，显示多个波形。
:::

## 参数

| <div style="width:280px">参数</div>                        | 说明                       | 类型   | 可选值          | 默认值       |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |
| options = {}                | 初始化录音机参数           | object | —               | —            |
| options['bitRate']          | 采样数位                   | number | 8, 16           | 16           |
| options['sampleRate']       | 采样率                     | number | —               | 16000        |
| options['type']             | 音频类型                   | string | wav        | wav          |
| options['autoOpen']             | 初始化完成后，是否自动打开录音机                   | boolean | —        | true          |
| options['effective']             | 有效分贝值。取值：0 --- 100                   | number | —        | 0          |
| options['success']             | 初始化成功后的回调    | function | —        | —          |
| options['fail']             | 初始化失败后的回调    | function | —        | —          |
| options['waveConfig']         | 波形图配置 | array | —               | —            |
| options['waveConfig']['type'] | 波形图类型                 | string | histogram、wave | histogram         |
| options['waveConfig']['elem']  | 波形容器id选择器        | string | —               | waveContent |
|  | <div style="color:#dc0000">**以下配置仅在波形类型 为 `histogram` 时有效**</div> |  |  |  |
| options['waveConfig']['lineRound']  | 直方图柱子数量        | boolean | —               | false |
| options['waveConfig']['mirror']  | 是否启用镜像，如果启用，视图宽度会分成左右两块，右边这块进行绘制，左边这块进行镜像（以中间这根柱子的中心进行镜像）        | boolean | —               | false |
| options['waveConfig']['stripe']  | 是否启用柱子顶上的峰值小横条，position不是-1时应当关闭，否则会很丑。`lineRound 为 false 时有效`       | boolean | —               | false |
| options['waveConfig']['stripeHeight']  | 峰值小横条基础高度。`lineRound 为 false 时有效`       | number | —               | 3 |
| options['waveConfig']['stripeMargin']  | 峰值小横条和柱子保持的基础距离。`lineRound 为 false 时有效`       | number | —               | 6 |
| options['waveConfig']['lineCount']  | 柱子线条宽度占比，为所有柱子占用整个视图宽度的比例，剩下的空白区域均匀插入柱子中间；默认值也基本相当于一根柱子占0.6，一根空白占0.4；设为1不留空白，当视图不足容下所有柱子时也不留空白        | number | —               | 5 |
| options['waveConfig']['lineRatio']  | 柱子间空白固定基础宽度，柱子宽度自适应，当不为0时lineRatio无效，当视图不足容下所有柱子时将不会留空白，允许为负数，让柱子发生重叠        | string | —               | 0.6 |
| options['waveConfig']['minHeight']  | 柱子保留基础高度，position不为±1时应该保留点高度        | number | —               | 1 |
| options['waveConfig']['position']  | 绘制位置，取值-1到1，-1为最底下，0为中间，1为最顶上，小数为百分比 | number | —               | -1 |
| options['waveConfig']['linearColor']  | 柱子颜色配置：[位置，css颜色，...] 位置: 取值0.0-1.0之间        | array | —               | [0, 'rgba(0,187,17,1)', 0.5, 'rgba(255,215,0,1)', 1, 'rgba(255,102,0,1)'] |
| options['waveConfig']['fillColor']  | 柱子填充颜色。`lineRound 为 true 时有效`        | string | —               | rgba(255,255,255,1) |
|  |   <div style="color:#dc0000">**以下配置仅在波形类型 为 `wave` 时有效**</div>  | |  |  |
| options['waveConfig']['lineWidth'] | 线条基础粗细                 | number | — | 2         |
| options['waveConfig']['linearColor1'] | 线条渐变色1，从左到右                | array | — | [0, 'rgba(150,96,238,1)', 0.2, 'rgba(170,79,249,1)', 1, 'rgba(53,199,253,1)']         |
| options['waveConfig']['linearColor2'] | 线条渐变色2，从左到右              | array | — | [0, 'rgba(209,130,255,0.6)', 1, 'rgba(53,199,255,0.6)']         |
| options['waveConfig']['linearColorBg'] | 背景渐变色，从上到下              | array | — | [0, 'rgba(255,255,255,0.2)', 1, 'rgba(54,197,252,0.2)']         |

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| init | 初始化完成后抛出 | 初始化失败返回 `false`, 成功返回 默认输入设备ID |
