---
pageClass: components
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

:::demo 使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：方向-对齐位置；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html
<div class="box">
  <div class="top">
    <ne-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <ne-button>上左</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <ne-button>上边</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <ne-button>上右</ne-button>
    </ne-tooltip>
  </div>
  <div class="left">
    <ne-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
      <ne-button>左上</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
      <ne-button>左边</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
      <ne-button>左下</ne-button>
    </ne-tooltip>
  </div>

  <div class="right">
    <ne-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <ne-button>右上</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <ne-button>右边</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <ne-button>右下</ne-button>
    </ne-tooltip>
  </div>
  <div class="bottom">
    <ne-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <ne-button>下左</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <ne-button>下边</ne-button>
    </ne-tooltip>
    <ne-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
      <ne-button>下右</ne-button>
    </ne-tooltip>
  </div>
</div>
```

:::

## 主题

Tooltip 组件提供了两个不同的主题：`dark`和`light`。

:::demo 通过设置`theme`属性来改变主题，默认为`dark`。

```html
<ne-tooltip content="Top center" placement="top">
  <ne-button>Dark</ne-button>
</ne-tooltip>
<ne-tooltip content="Bottom center" placement="bottom" theme="light">
  <ne-button>Light</ne-button>
</ne-tooltip>
```

:::

## 更多 Content

展示多行文本或者是设置文本内容的格式

:::demo 用具名 slot 分发`content`，替代`tooltip`中的`content`属性。

```html
<ne-tooltip placement="top">
  <div slot="content">多行信息<br />第二行信息</div>
  <ne-button>Top center</ne-button>
</ne-tooltip>
```
:::

## 参数

| 参数            | 说明                                                                                             | 类型    | 可选值                                                                                                    | 默认值                                                |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| theme          | 默认提供的主题                                                                                   | String  | dark、light                                                                                                | dark                                                  |
| content         | 显示的内容，也可以通过 `slot#content` 传入 DOM                                                   | String  | —                                                                                                         | —                                                     |
| placement       | Tooltip 的出现位置                                                                               | String  | top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end | bottom                                                |
| value、 v-model | 状态是否可见                                                                                     | Boolean | —                                                                                                         | false                                                 |
| disabled        | Tooltip 是否可用                                                                                 | Boolean | —                                                                                                         | false                                                 |
| offset          | 出现位置的偏移量                                                                                 | Number  | —                                                                                                         | 0                                                     |
| transition      | 定义渐变动画                                                                                     | String  | —                                                                                                         | ne-fade-in-linear                                   |
| visible-arrow   | 是否显示 Tooltip 箭头 | Boolean | —                                                                                                         | true                                                  |
| popper-options  | [popper.js](https://popper.js.org/documentation.html) 的参数                                     | Object  | 参考 [popper.js](https://popper.js.org/documentation.html) 文档                                           | { boundariesElement: 'body', gpuAcceleration: false } |
| delay      | 延迟出现，单位毫秒                                                                               | Number  | —                                                                                                         | 0                                                     |
| manual          | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效                            | Boolean | —                                                                                                         | false                                                 |
| popper-class    | 为 Tooltip 的 popper 添加类名                                                                    | String  | —                                                                                                         | —                                                     |
| enterable       | 鼠标是否可进入到 tooltip 中                                                                      | Boolean | —                                                                                                         | true                                                  |
| hide-after      | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏                                        | number  | —                                                                                                         | 0                                                     |


<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>
<style lang="scss">
  .demo-tooltip {
    .ne-tooltip + .ne-tooltip {
      margin-left: 15px;
    }
    .box {
      width: 400px;
      margin:0 auto;
      .top {
        text-align: center;
      }

      .left {
        float: left;
        width: 100px;
      }

      .right {
        float: right;
        width: 100px;
        text-align:right;
      }

      .bottom {
        clear: both;
        text-align: center;
      }

      .item {
        margin: 4px;
      }

      .left .ne-tooltip__popper,
      .right .ne-tooltip__popper {
        padding: 8px 10px;
      }
      .ne-tooltip {
        margin-left: 0;
      }
    }
  }
</style>
