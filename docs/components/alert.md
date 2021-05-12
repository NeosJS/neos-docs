---
pageClass: components
---

# Alert 警告提示

为用户操作提供上下文反馈消息，并提供少量可用且灵活的警报消息。

## 基础用法
:::demo 基本使用方法，有五种样式可以选择 `primary`、`success`、`warning`、`danger`、`dark`、`light`
```html
<template>
  <ne-alert title="一般提示的文案" theme="primary" border></ne-alert>
  <ne-alert title="成功提示的文案" theme="success" border></ne-alert>
  <ne-alert title="警告提示的文案" theme="warning" border></ne-alert>
  <ne-alert title="错误提示的文案" theme="danger" border></ne-alert>
  <ne-alert title="错误提示的文案" theme="dark" border></ne-alert>
  <ne-alert title="消息提示的文案" theme="light" border></ne-alert>
</template>
```
:::

## 样式

:::demo 通过设置 `light` 属性来改变主题。
```html
<template>
  <ne-alert title="一般提示的文案" theme="primary" light></ne-alert>
  <ne-alert title="成功提示的文案" theme="success" light></ne-alert>
  <ne-alert title="消息提示的文案" theme="light" light></ne-alert>
  <ne-alert title="错误提示的文案" theme="dark" light></ne-alert>
  <ne-alert title="警告提示的文案" theme="warning" light></ne-alert>
  <ne-alert title="错误提示的文案" theme="danger" light></ne-alert>
</template>
```
:::


## 参数
| 参数      | 说明     | 类型  | 可选值  | 默认值  |
|--------- |-------- |------- |------ |------ |
| theme | 警告提示样式 | String  | primary、success、warning、danger、dark、light | light |
| light | 是否轻样式 | Boolean | — | false |
