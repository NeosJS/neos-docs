---
pageClass: components
---

# Color 色彩

避免视觉传达差异，使用一套特定的调色板来规定颜色，为产品提供一致的外观视觉感受!

## 主色

<ne-container>
  <ne-row>
  <ne-col :cols="24" :md="8">
  <div class="demo-color-box" :style="{ background: primary } ">Brand Color
  <div class="value">{{primary}}</div>
  <div class="bg-color-sub" :style="{ background: tintColor(primary, 0.9) }">
  <div class="bg-sub-item" v-for="(item, key) in Array(9)" :key="key" :style="{ background: tintColor(primary, (key+1) / 10) }"></div>
  </div>
  </div>
  </div>
  </ne-col>
  </ne-row>
</ne-container>

## 辅助色
辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。

<ne-container>
  <ne-row>
  <ne-col :cols="24" :md="6">
  <div class="demo-color-box" :style="{ background: success } ">Success Color
  <div class="value">{{success}}</div>
  <div class="bg-color-sub" :style="{ background: tintColor(success, 0.9) }">
  <div class="bg-sub-item" v-for="(item, key) in Array(9)" :key="key" :style="{ background: tintColor(success, (key+1 ) / 10) }"></div>
  </div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="5">
  <div class="demo-color-box" :style="{ background: blue } ">Blue Color
  <div class="value">{{blue}}</div>
  <div class="bg-color-sub" :style="{ background: tintColor(blue, 0.9) }">
  <div class="bg-sub-item" v-for="(item, key) in Array(9)" :key="key" :style="{ background: tintColor(blue, (key+1) / 10) }"></div>
  </div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="5">
  <div class="demo-color-box" :style="{ background: danger } ">Danger Color
  <div class="value">{{danger}}</div>
  <div class="bg-color-sub" :style="{ background: tintColor(danger, 0.9) }">
  <div class="bg-sub-item" v-for="(item, key) in Array(9)" :key="key" :style="{ background: tintColor(danger, (key+1) / 10) }"></div>
  </div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="5">
  <div class="demo-color-box" :style="{ background: dark } ">Dark Color
  <div class="value">{{dark}}</div>
  <div class="bg-color-sub" :style="{ background: tintColor(dark, 0.9) }">
  <div class="bg-sub-item" v-for="(item, key) in Array(9)" :key="key" :style="{ background: tintColor(dark, (key+1) / 10) }"></div>
  </div>
  </div>
  </div>
  </ne-col>
  </ne-row>
</ne-container>

## 中性色
中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。

<ne-container>
  <ne-row>
  <ne-col :cols="24" :md="4">
  <div class="demo-color-box" :style="{ background: textRegular } ">主要文本颜色
  <div class="value">{{textRegular}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="4">
  <div class="demo-color-box" :style="{ background: textSecondary } ">次要文本颜色
  <div class="value">{{textSecondary}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="4">
  <div class="demo-color-box" :style="{ background: textTertiary,color:textRegular } ">辅助文本颜色
  <div class="value">{{textTertiary}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="4">
  <div class="demo-color-box" :style="{ background: borderColor,color:textRegular } ">边框颜色
  <div class="value">{{borderColor}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="4">
  <div class="demo-color-box" :style="{ background: markBg,color:textRegular } ">遮罩颜色
  <div class="value">{{markBg}}</div>
  </div>
  </div>
  </ne-col>
  </ne-row>
</ne-container>

## 渐变色
渐变色通常用于多彩按钮背景。

<ne-container>
  <ne-row>
  <ne-col :cols="24" :md="7">
  <div class="demo-color-box" :style="{ background: gradientPrimary } ">品牌渐变
  <div class="value">{{gradientPrimary}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="7">
  <div class="demo-color-box" :style="{ background: gradientOrange } ">橙色渐变
  <div class="value">{{gradientOrange}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="7">
  <div class="demo-color-box" :style="{ background: gradientSuccess } ">绿色渐变
  <div class="value">{{gradientSuccess}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="7">
  <div class="demo-color-box" :style="{ background: gradientDanger } ">红色渐变
  <div class="value">{{gradientDanger}}</div>
  </div>
  </div>
  </ne-col>
  <ne-col :cols="24" :md="7">
  <div class="demo-color-box" :style="{ background: gradientBlue } ">蓝色渐变
  <div class="value">{{gradientBlue}}</div>
  </div>
  </div>
  </ne-col>
  </ne-row>
</ne-container>

<script>
  const tintColor = (c, tint)=>{
    const color = c.replace('#', '');
    let red = parseInt(color.slice(0, 2), 16);
    let green = parseInt(color.slice(2, 4), 16);
    let blue = parseInt(color.slice(4, 6), 16);

    if (tint === 0) { // when primary color is in its rgb space
      return [red, green, blue].join(',');
    } else {
      red += Math.round(tint * (255 - red));
      green += Math.round(tint * (255 - green));
      blue += Math.round(tint * (255 - blue));
      red = red.toString(16);
      green = green.toString(16);
      blue = blue.toString(16);
      return `#${ red }${ green }${ blue }`;
    }
  }
  export default {
    methods: {
      tintColor(color, tint) {
        return tintColor(color, tint);
      }
    },
    data() {
      return {
        primary: '#FFAA0A',
        success: '#02CA8A',
        warning: '#FFCF1B',
        danger: '#FF503F',
        blue: '#3370FF',
        dark: '#1a1a1a',
        textRegular: '#172B4D',
        textSecondary: '#A2AAB8',
        textTertiary: '#DEE2E7',
        borderColor: '#dee2e6',
        markBg: '#f8f9fa',
        gradientPrimary: 'linear-gradient(45deg, #FFD518 0%, #FFAA0A 100%)',
        gradientSuccess: 'linear-gradient(225deg, #02CA8A 0%, #1EFC92 100%)',
        gradientDanger: 'linear-gradient(240deg, #FF2F2F 0%, #FF4EBF 100%)',
        gradientBlue: 'linear-gradient(45deg, #62CDFF 0%, #3370FF 100%)',
        gradientOrange: 'linear-gradient(45deg, #FFAA0A 0%, #FF850A 100%)'
      }
    },
  }
</script>

<style lang="scss">
.ne-container{
  padding-left:0;
  padding-top:1rem;
  padding-bottom:1rem
}
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 114px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;

  & .value {
    font-size: 12px;
    opacity: 0.69;
    line-height: 24px;
  }
}
.demo-color-box-other {
  height: 74px;
  margin: 10px 0 !important;
  border-radius: 4px 4px 4px 4px !important;
  padding: 15px 20px;
}
.demo-color-box-group {
  .demo-color-box {
    border-radius: 0;
    margin: 0;
  }
  .demo-color-box:first-child {
    border-radius: 4px 4px 0 0;
  }
  .demo-color-box:last-child {
    border-radius: 0 0 4px 4px;
  }
}
.bg-color-sub {
  width: 100%;
  height: 40px;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 0 0 4px 4px;
}
.bg-sub-item {
  width: calc(100% / 9);
  height: 100%;
  display: inline-block;
  color:#172B4D;
  text-align:center;
  line-height:40px
}
.bg-sub-item:first-child {
  border-radius: 0 0 0 4px;
}
.bg-success-sub-item {
  width: 50%;
  height: 100%;
  display: inline-block;
}
.bg-success-sub-item:first-child {
  border-radius: 0 0 0 4px;
}
.bg-success-sub-item:last-child {
  border-radius: 0 0 4px 0;
}
.bg-transparent {
  border: 1px solid #fcc3c3;
  color: #303133;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 98 L100 0 L100 1 L1 98' fill='%23FCC3C3' /></svg>");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%, auto;
}
.demo-color-box-lite {
  color: #303133;
}

</style>
