# 快速上手

H5 涂鸦。  
支持：画笔大小设置、橡皮擦大小设置、画笔颜色设置、撤销操作、打LOGO水印、生成图片 等功能。

## 安装
![npm (scoped)](https://img.shields.io/npm/v/@neosjs/h5-graffiti)
#### NPM
```sh
npm i @neosjs/h5-graffiti -S
```
#### YARN
```sh
yarn add @neosjs/h5-graffiti
```

## API 接口列表

- `graffiti.init(object: <Object>)` 
- `graffiti.lineColor(color: <String>)`
- `graffiti.lineSize(size: <Number>)`
- `graffiti.eraserSize(size: <Number>)`
- `graffiti.eraser()`
- `graffiti.prev()`
- `graffiti.next()`
- `graffiti.clear()`
- `graffiti.destroy()`
- `graffiti.createImage()`
- ~~`graffiti.saveImage(fileName: <String>)`~~
