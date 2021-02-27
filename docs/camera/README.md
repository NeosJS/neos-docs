# 快速上手

提供摄像头拍照，视频采集等功能。


## 安装

![npm (scoped)](https://img.shields.io/npm/v/@neosjs/h5-camera)

#### NPM

```sh
npm i @neosjs/h5-camera -S
```

#### YARN

```sh
yarn add @neosjs/h5-camera
```

## API 接口列表

- `camera.init(options: <Object>)` 
- `camera.startCapture(deviceId: <String>)`
- `camera.stopCapture()`
- `camera.changeDeviceId(deviceId: <String>)`
- `camera.getDeviceLists()`
- `camera.photoShot()`
- `camera.destroy()`
