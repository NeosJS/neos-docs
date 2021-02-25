---
layout: ChangeLog
title: 123123123
---

# Changelog
### [3.0.1](https://github.com/NeosJS/electron-ipc/compare/v3.0.0...v3.0.1) (2021-02-19)


### Bug Fixes

* 修改检查资源的时候误删除文件 ([635abe8](https://github.com/NeosJS/electron-ipc/commit/635abe84a521d214ed1bb914ff29a5fd1c1f04d3))

## [3.0.0](https://github.com/NeosJS/electron-ipc/compare/v2.5.3...v3.0.0) (2021-02-19)


### Features

* 下载接口新增断点续传、暂停下载、恢复下载，优化获取目录地址 ([a667bcf](https://github.com/NeosJS/electron-ipc/commit/a667bcfc17b1f2c19ba8e93e44a1a2ff83577564))
* 新增通用函数接口 ([91281df](https://github.com/NeosJS/electron-ipc/commit/91281df4ef05b458b9b01da426d5d4598837c2e3))


### Bug Fixes

* 优化下载器、增加参数错误提示 ([ae38314](https://github.com/NeosJS/electron-ipc/commit/ae383144b4539b91d5b1038160a417cf523a4552))
* 优化下载接口 ([52fca05](https://github.com/NeosJS/electron-ipc/commit/52fca059f7e8c59467642bab88184af99e8035ad))

### [2.5.3](https://github.com/NeosJS/electron-ipc/compare/v2.5.2...v2.5.3) (2021-02-06)


### Bug Fixes

* 修复重复监听事件的问题 ([add4dc9](https://github.com/NeosJS/electron-ipc/commit/add4dc917efbc0f97f4982848a83aab1cccb93f6))

### [2.5.2](https://github.com/NeosJS/electron-ipc/compare/v2.5.1...v2.5.2) (2021-02-05)


### Features

* 测试接口，新增延迟时间 ([d8dc669](https://github.com/NeosJS/electron-ipc/commit/d8dc6697baeb52e2c374b7183d3ff377558b91a0))


### Bug Fixes

* 测速接口修改发送时长参数名 ([27e3c7f](https://github.com/NeosJS/electron-ipc/commit/27e3c7f86d0648494521a8d7a5391cb4e3ff344b))

### [2.5.1](https://github.com/NeosJS/electron-ipc/compare/v2.5.0...v2.5.1) (2021-02-03)


### Bug Fixes

* 修复下载接口，重复下载的问题 ([bc2d839](https://github.com/NeosJS/electron-ipc/commit/bc2d839445e9e274b159dcbdd2f614d74dfa0f02))
* 百分百四舍五入 ([4670252](https://github.com/NeosJS/electron-ipc/commit/467025211988c3e05d8296e9f572427f89495dd5))
* 移除无效的依赖 ([2f495ba](https://github.com/NeosJS/electron-ipc/commit/2f495ba79d718ba3af800d91f0610e7884aeb7be))

## [2.5.0](https://github.com/NeosJS/electron-ipc/compare/v2.4.1...v2.5.0) (2021-02-02)


### Features

* 设备信息接口新增：当前应用使用cpu、内存等情况 ([3b48db1](https://github.com/NeosJS/electron-ipc/commit/3b48db17f6a1aad9277e025acfd941bc2dd3ad30))

### [2.4.1](https://github.com/NeosJS/electron-ipc/compare/v2.4.0...v2.4.1) (2021-02-01)


### Features

* 新增获取客户端信息 ([e199663](https://github.com/NeosJS/electron-ipc/commit/e1996635f91c4020ca86977169a9c5e7afc45f64))

## [2.4.0](https://github.com/NeosJS/electron-ipc/compare/v2.3.36...v2.4.0) (2021-02-01)


### Features

* 下载接口新增是否需要进入队列下载 ([69923ac](https://github.com/NeosJS/electron-ipc/commit/69923ac6b9a1599f97df849378e8c06668aacb05))
* 新增获取设备信息 ([e3bde9d](https://github.com/NeosJS/electron-ipc/commit/e3bde9df83b636f8ec397c654082f6d06d917f71))

### [2.3.36](https://github.com/NeosJS/electron-ipc/compare/v2.3.35...v2.3.36) (2021-02-01)


### Features

* 下载接口添加移除事件监听 ([488fb68](https://github.com/NeosJS/electron-ipc/commit/488fb68249c6c6cb2126a794eb1101cad1c67b04))
* 新增移除事件，更新文档 ([427a51f](https://github.com/NeosJS/electron-ipc/commit/427a51f05cb6f3c43e40c1c810a5b5b52930cdd4))


### Bug Fixes

* 修改移除事件的方法名 ([14fcb5b](https://github.com/NeosJS/electron-ipc/commit/14fcb5bf9b1d8728c6975cf8cd768789a88dfdce))
* 课件检查移到主进程 ([113aadf](https://github.com/NeosJS/electron-ipc/commit/113aadf0fd6c7f1558590b14fa9f92432e1c64b3))

### [2.3.35](https://github.com/NeosJS/electron-ipc/compare/v2.3.34...v2.3.35) (2021-01-29)


### Bug Fixes

* 升级接口下载完成后返回完整的文件地址 ([5e6c335](https://github.com/NeosJS/electron-ipc/commit/5e6c335878bf2cbbe8d45f3a6c8827fd5164caf5))

### [2.3.34](https://github.com/NeosJS/electron-ipc/compare/v2.3.33...v2.3.34) (2021-01-29)


### Bug Fixes

* 修复升级的bug ([5c06875](https://github.com/NeosJS/electron-ipc/commit/5c068751f45657bd7719cc1e23dfd32416a8c39b))
* 修改bug ([5927583](https://github.com/NeosJS/electron-ipc/commit/59275833587ca97e95b8db22607831644453bd17))

### [2.3.33](https://github.com/NeosJS/electron-ipc/compare/v2.3.32...v2.3.33) (2021-01-28)


### Features

* 下载接口新增返回文件名 ([83d0481](https://github.com/NeosJS/electron-ipc/commit/83d04815b58727d7babbf2500da7b39164d47ed6))

### [2.3.32](https://github.com/NeosJS/electron-ipc/compare/v2.3.31...v2.3.32) (2021-01-27)


### Bug Fixes

* 优化网速测试 ([96a5dda](https://github.com/NeosJS/electron-ipc/commit/96a5dda462bff2fdcf02d7263aee60a53a131a43))

### [2.3.31](https://github.com/NeosJS/electron-ipc/compare/v2.3.30...v2.3.31) (2021-01-27)


### Features

* 网速上报接口新增请求成功率 ([2b36611](https://github.com/NeosJS/electron-ipc/commit/2b366118eeb43a4cba9f82097afb57fa140307eb))

### [2.3.30](https://github.com/NeosJS/electron-ipc/compare/v2.3.29...v2.3.30) (2021-01-26)


### Features

* 修复重复下载相同的文件 ([cec28e5](https://github.com/NeosJS/electron-ipc/commit/cec28e57cc40b04cf96b1bfda6ed478ceecad700))


### Bug Fixes

* 兼容旧版的升级接口 ([a88cb22](https://github.com/NeosJS/electron-ipc/commit/a88cb22ad20e5119aea3409d478eac9edca3a59a))

### [2.3.29](https://github.com/NeosJS/electron-ipc/compare/v2.3.28...v2.3.29) (2021-01-25)


### Features

* 接口增加事件抛出 ([81f14a9](https://github.com/NeosJS/electron-ipc/commit/81f14a9d035fad4faf8e7200a8d59a81b54bf7b1))
* 新增下载速度 ([deaf4a6](https://github.com/NeosJS/electron-ipc/commit/deaf4a60b867c0a20bc096a1b7a6a698eebcdc7e))
* 新增测速上报API ([1ad2083](https://github.com/NeosJS/electron-ipc/commit/1ad208306477098019ad4997a2140546cd19a750))
* 新增测速接口 ([c5e854e](https://github.com/NeosJS/electron-ipc/commit/c5e854efd7b64f1a5a8d9be8274d0e5a43c26853))
* 计算网速平均耗时 ([c0a6f3a](https://github.com/NeosJS/electron-ipc/commit/c0a6f3afd2176f87097eb82648bad1156b0e495f))


### Bug Fixes

* 优化下载接口 ([7f013be](https://github.com/NeosJS/electron-ipc/commit/7f013be53d6d3d2b91953cd2389f04833c9e805c))
* 优化下载速度的单位 ([b389e70](https://github.com/NeosJS/electron-ipc/commit/b389e70454ef2ad499ec949145a12f54e786ab35))
* 优化网速上报、优化测速 ([032f333](https://github.com/NeosJS/electron-ipc/commit/032f333a4dd716f12fbc0a955263adbca5c417da))

### [2.3.28](https://github.com/NeosJS/electron-ipc/compare/v2.3.27...v2.3.28) (2021-01-21)


### Features

* 通用下载接口可自定义保存目录、文件名 ([edec25f](https://github.com/NeosJS/electron-ipc/commit/edec25f23480aad37537da10406c120b3ef418c5))

### [2.3.27](https://github.com/NeosJS/electron-ipc/compare/v2.3.26...v2.3.27) (2021-01-20)


### Bug Fixes

* 修复二次下载的bug ([18cd09c](https://github.com/NeosJS/electron-ipc/commit/18cd09cd5cd887cb320ba2c77daf476b0bef4457))

### [2.3.26](https://github.com/NeosJS/electron-ipc/compare/v2.3.25...v2.3.26) (2021-01-20)


### Bug Fixes

* 修复本地服务启动失败的问题 ([fd4944d](https://github.com/NeosJS/electron-ipc/commit/fd4944d8b52c642fe6fd2cb622de2ab4e7e239f8))

### [2.3.25](https://github.com/NeosJS/electron-ipc/compare/v2.3.24...v2.3.25) (2021-01-20)


### Features

* 增加下载接口、优化mac升级接口 ([da56529](https://github.com/NeosJS/electron-ipc/commit/da565299dfc5ae857c0c819262d91f2b13f605a1))

### [2.3.24](https://github.com/NeosJS/electron-ipc/compare/v2.3.23...v2.3.24) (2021-01-18)


### Bug Fixes

* 修复重复下载的问题 ([9b72576](https://github.com/NeosJS/electron-ipc/commit/9b725763848d192a6afba508baa768330755aa35))

### [2.3.23](https://github.com/NeosJS/electron-ipc/compare/v2.3.22...v2.3.23) (2021-01-18)


### Features

* 新增下载普通文件 ([ef10c3f](https://github.com/NeosJS/electron-ipc/commit/ef10c3fb97887d80873030fa7f2d481ea82403c2))

### [2.3.22](https://github.com/NeosJS/electron-ipc/compare/v2.3.21...v2.3.22) (2021-01-12)


### Features

* 新增剪贴板功能 ([42ba6ee](https://github.com/NeosJS/electron-ipc/commit/42ba6ee004c9b83c3248b71a2da99e50122f1133))

### [2.3.21](https://github.com/NeosJS/electron-ipc/compare/v2.3.20...v2.3.21) (2021-01-12)

### [2.3.20](https://github.com/NeosJS/electron-ipc/compare/v2.3.19...v2.3.20) (2020-12-01)


### Bug Fixes

* 修复获取权限的bug ([8a8bac0](https://github.com/NeosJS/electron-ipc/commit/8a8bac0ac984e3ea0549252584fff02e592f7aec))

### [2.3.19](https://github.com/NeosJS/electron-ipc/compare/v2.3.18...v2.3.19) (2020-12-01)


### Features

* 获取媒体权限 ([830070a](https://github.com/NeosJS/electron-ipc/commit/830070ab00ae5cbe8b1935d634d2ff2eb905f899))
* 返回媒体权限类型 ([d980988](https://github.com/NeosJS/electron-ipc/commit/d98098829d2a8c2510fd411f6ddd44d73e49ddb0))

### [2.3.18](https://github.com/NeosJS/electron-ipc/compare/v2.3.17...v2.3.18) (2020-11-26)


### Features

* 屏幕快照新增生成缩略图 ([0c3fa4f](https://github.com/NeosJS/electron-ipc/commit/0c3fa4f1eeb7735da7f4cb9ec18445f705cb4c80))

### [2.3.17](https://github.com/NeosJS/electron-ipc/compare/v2.3.16...v2.3.17) (2020-11-19)

### [2.3.16](https://github.com/NeosJS/electron-ipc/compare/v2.3.15...v2.3.16) (2020-11-19)


### Bug Fixes

* 调整下载模块 ([1a322f5](https://github.com/NeosJS/electron-ipc/commit/1a322f5ace0af4ca31f074997752580ee22a3bfd))

### [2.3.15](https://github.com/NeosJS/electron-ipc/compare/v2.3.14...v2.3.15) (2020-11-17)

### [2.3.14](https://github.com/NeosJS/electron-ipc/compare/v2.3.13...v2.3.14) (2020-11-17)


### Features

* 新增测试接口 ([69f1b87](https://github.com/NeosJS/electron-ipc/commit/69f1b87ff2083ab965dd37232d9b6cf51e1cfc7e))

### [2.3.13](https://github.com/NeosJS/electron-ipc/compare/v2.3.12...v2.3.13) (2020-11-16)


### Bug Fixes

* 优化下载接口 ([4c2670d](https://github.com/NeosJS/electron-ipc/commit/4c2670d83450a1c0cbe3cd9e26273470e5fa69ea))

### [2.3.12](https://github.com/NeosJS/electron-ipc/compare/v2.3.11...v2.3.12) (2020-11-16)


### Features

* 新增获取媒体资源权限接口 ([e4210c4](https://github.com/NeosJS/electron-ipc/commit/e4210c4dd44f100d76f30af38fdc6f63071d00c5))

### [2.3.11](https://github.com/NeosJS/electron-ipc/compare/v2.3.10...v2.3.11) (2020-11-10)


### Bug Fixes

* 修改下载模块文件判断逻辑 ([cf8bfa9](https://github.com/NeosJS/electron-ipc/commit/cf8bfa9b655e617b2474758354a485c6afc89cdb))

### [2.3.10](https://github.com/NeosJS/electron-ipc/compare/v2.3.9...v2.3.10) (2020-11-08)


### Bug Fixes

* 修改下载接口判断md5值错误的问题 ([26be222](https://github.com/NeosJS/electron-ipc/commit/26be2229d21593597cc3e5c81c6e332ac1e22b5e))

### [2.3.9](https://github.com/NeosJS/electron-ipc/compare/v2.3.8...v2.3.9) (2020-11-08)


### Bug Fixes

* 优化下载模块 ([84b1a83](https://github.com/NeosJS/electron-ipc/commit/84b1a8311c41b8507cac5578ec9c1d055b474e6d))

### [2.3.8](https://github.com/NeosJS/electron-ipc/compare/v2.3.7...v2.3.8) (2020-11-07)


### Features

* 新增文件下载功能、修复升级程序的bug ([3ef4acd](https://github.com/NeosJS/electron-ipc/commit/3ef4acd30b0f225986c9cb0bf9b09e2a6538bb22))
* 新增文件下载接口 ([ad71261](https://github.com/NeosJS/electron-ipc/commit/ad71261ab7b297d340b08d31988c14cae6cf0db4))

### [2.3.7](https://github.com/NeosJS/electron-ipc/compare/v2.3.6...v2.3.7) (2020-10-29)


### Bug Fixes

* 修复检测更新错误返回的数据 ([13227bd](https://github.com/NeosJS/electron-ipc/commit/13227bdd183e665a51b387803c3a13d9c252c4da))

### [2.3.6](https://github.com/NeosJS/electron-ipc/compare/v2.3.5...v2.3.6) (2020-10-26)


### Features

* 检查更新接口新增：更新日志、是否强制升级 ([121522b](https://github.com/NeosJS/electron-ipc/commit/121522b8f0ce91758789320536c58c92468cb561))

### [2.3.5](https://github.com/NeosJS/electron-ipc/compare/v2.3.4...v2.3.5) (2020-10-26)

### [2.3.4](https://github.com/NeosJS/electron-ipc/compare/v2.3.3...v2.3.4) (2020-10-25)


### Features

* 抽离公共函数，添加注释 ([003634b](https://github.com/NeosJS/electron-ipc/commit/003634bd40bec5af9b415b73ecfc4c966745f59b))

### [2.3.3](https://github.com/NeosJS/electron-ipc/compare/v2.3.2...v2.3.3) (2020-10-25)


### Features

* 新增app更新接口 ([5f51f0b](https://github.com/NeosJS/electron-ipc/commit/5f51f0b959deb6a9aa863c435d4da1ae643d5140))


### Bug Fixes

* 修改bug ([6d67673](https://github.com/NeosJS/electron-ipc/commit/6d67673b4890122317a2b12f1fa1b4f62b5afc47))
* 修改清除缓存的接口 ([deb0dc4](https://github.com/NeosJS/electron-ipc/commit/deb0dc4959a282cc2e2ef7bd320fef2df804f935))
* 调整API目录 ([ae3e261](https://github.com/NeosJS/electron-ipc/commit/ae3e26165c0728808a9f27ee9eef69cfef0803d0))

### [2.3.2](https://github.com/NeosJS/electron-ipc/compare/v2.3.1...v2.3.2) (2020-10-19)


### Bug Fixes

* 修复生产环境下创建数据库文件夹错误 ([ce8a390](https://github.com/NeosJS/electron-ipc/commit/ce8a390dee3def7fdc3e02debdd80d11ab1bc9bb))

### [2.3.1](https://github.com/NeosJS/electron-ipc/compare/v2.3.0...v2.3.1) (2020-10-18)


### Features

* 新增注册快捷键功能 ([bd04cff](https://github.com/NeosJS/electron-ipc/commit/bd04cffec4b5de2e04518a9ba23685585d5d0805))
* 获取类接口增加回调事件，调整`invoke`为`once` ([850b82c](https://github.com/NeosJS/electron-ipc/commit/850b82c0bf10b65a812bc9cec6071aa7790b3acf))
* 调整主进程监听文件结构 ([1e15947](https://github.com/NeosJS/electron-ipc/commit/1e15947f579ab16db17c0b0e44f6515ef5da9c7b))


### Bug Fixes

* 调整快捷键功能参数配置 ([e97ac78](https://github.com/NeosJS/electron-ipc/commit/e97ac78e54e6adc2be89fdf5d734cb415b551cab))

## [2.3.0](https://github.com/NeosJS/electron-ipc/compare/v2.2.0...v2.3.0) (2020-10-17)


### Features

* 优化api加载机制，调整api结构，新增打开目录、文件接口 ([787d585](https://github.com/NeosJS/electron-ipc/commit/787d58546893cd3139d0d9c36ec8e16f6111a357))

## [2.2.0](https://github.com/NeosJS/electron-ipc/compare/v2.1.3...v2.2.0) (2020-10-16)


### Features

* 新增获取窗口状态接口 ([735cd72](https://github.com/NeosJS/electron-ipc/commit/735cd72155d507a0adeaeb8e5c1a36435508a871))


### Bug Fixes

* 修复一个小bug ([9c044a8](https://github.com/NeosJS/electron-ipc/commit/9c044a8d92b0dd592412e69d4e09c7c0ff40c87e))

### [2.1.3](https://github.com/NeosJS/electron-ipc/compare/v2.1.2...v2.1.3) (2020-10-16)


### Features

* 增加获取客户端信息 ([f6a6394](https://github.com/NeosJS/electron-ipc/commit/f6a6394974bd643ee0f20f6aad75bb68479a1cf5))

### [2.1.2](https://github.com/NeosJS/electron-ipc/compare/v2.1.1...v2.1.2) (2020-10-16)


### Features

* 新增设置窗口最大、最下接口 ([31f9cdb](https://github.com/NeosJS/electron-ipc/commit/31f9cdbcc02b9277febff779d41be869ae52ede2))

### [2.1.1](https://github.com/NeosJS/electron-ipc/compare/v2.1.0...v2.1.1) (2020-10-16)


### Bug Fixes

* 修复依赖文件 ([5e8b273](https://github.com/NeosJS/electron-ipc/commit/5e8b27335565585ade4b048b4f662ed9fe4cc556))

## [2.1.0](https://github.com/NeosJS/electron-ipc/compare/v2.0.3...v2.1.0) (2020-10-16)


### Features

* 新增数据库加密 ([e364bfc](https://github.com/NeosJS/electron-ipc/commit/e364bfc01a0ee9e0451ad0a661c374d8caecd909))

### [2.0.3](https://github.com/NeosJS/electron-ipc/compare/v2.0.2...v2.0.3) (2020-10-16)


### Bug Fixes

* 合并find接口和findBy接口 ([7c1f990](https://github.com/NeosJS/electron-ipc/commit/7c1f9901a58fd5308e1beac4992608bb7b31fc6e))

### [2.0.2](https://github.com/NeosJS/electron-ipc/compare/v2.0.1...v2.0.2) (2020-10-15)


### Features

* 快照接口新增截取类型 ([556834c](https://github.com/NeosJS/electron-ipc/commit/556834c9c588362b17a39915f0f64c99e24d2e30))


### Bug Fixes

* 修改截屏接口名称 ([134e6c5](https://github.com/NeosJS/electron-ipc/commit/134e6c579a2520dfa65ad1dfc26a06ed0c5fdb8e))

### [2.0.1](https://github.com/NeosJS/electron-ipc/compare/v2.0.0...v2.0.1) (2020-10-15)


### Features

* 完善本地数据库功能 ([3b321dd](https://github.com/NeosJS/electron-ipc/commit/3b321dde5370f788a7ca01c68d5e483659f7c511))
* 新增截屏接口 ([71c9bfb](https://github.com/NeosJS/electron-ipc/commit/71c9bfbb35fa346086877490756175e9191e016c))

## [2.0.0](https://github.com/NeosJS/electron-ipc/compare/v1.3.2...v2.0.0) (2020-10-14)


### Features

* 新增 数据库API ([ff541a4](https://github.com/NeosJS/electron-ipc/commit/ff541a439aa1a19a9eb4dbccd4ffbe3af19c908f))

### [1.3.2](https://github.com/NeosJS/electron-ipc/compare/v1.3.1...v1.3.2) (2020-10-14)


### Features

* 合并api模块，更改编译器 ([4cc0a73](https://github.com/NeosJS/electron-ipc/commit/4cc0a736ee10c1e62e5c1fcc16bb3429cf74c8e6))

### [1.3.1](https://github.com/NeosJS/electron-ipc/compare/v1.3.0...v1.3.1) (2020-10-13)


### Features

* 新增清除本地缓存、本地数据的接口 ([7bb2108](https://github.com/NeosJS/electron-ipc/commit/7bb2108a1b04f53a73a34aa478cc2d4d01511da7))

## [1.3.0](https://github.com/NeosJS/electron-ipc/compare/v1.2.3...v1.3.0) (2020-10-13)


### Features

* 新增打开文件、打开目录的接口 ([4e945a4](https://github.com/NeosJS/electron-ipc/commit/4e945a413bb72ea96643356c766641871daf7f46))
* 新增接口 ([e38b3cd](https://github.com/NeosJS/electron-ipc/commit/e38b3cd124058b5b4465e800d5b5c0e164f8d9bf))


### Bug Fixes

* 将打开文件和打开文件夹的接口合并成过一个 ([bd805ab](https://github.com/NeosJS/electron-ipc/commit/bd805ab8e86fe1cc4cb6660906ce5518b454c2ef))

### [1.2.3](https://github.com/NeosJS/electron-ipc/compare/v1.2.2...v1.2.3) (2020-09-28)


### Bug Fixes

* 取消设置窗口大小时的动效 ([25a16cd](https://github.com/NeosJS/electron-ipc/commit/25a16cd695e740eec2a6ff6b45371fbdfc8d321f))

### [1.2.2](https://github.com/NeosJS/electron-ipc/compare/v1.2.1...v1.2.2) (2020-09-21)


### Bug Fixes

* 修复最大化窗口无效的bug ([d433b98](https://github.com/NeosJS/electron-ipc/commit/d433b9830c1e616b634850983f81f3467b5b3806))

### [1.2.1](https://github.com/NeosJS/electron-ipc/compare/v1.2.0...v1.2.1) (2020-09-21)


### Bug Fixes

* set 方法调整为 answerCall ([3076a2d](https://github.com/NeosJS/electron-ipc/commit/3076a2d70d75884400fae249cdc126280b57c907))

## [1.2.0](https://github.com/NeosJS/electron-ipc/compare/v1.1.3...v1.2.0) (2020-09-21)


### Features

* 优化各进程的消息监听、调整ipcCode ([2ce264a](https://github.com/NeosJS/electron-ipc/commit/2ce264a3154f6610dfa46720832bfd147628f3ae))

### [1.1.3](https://github.com/NeosJS/electron-ipc/compare/v1.1.2...v1.1.3) (2020-09-19)


### Features

* 新增nativeApi、调整接口导出方式 ([4601c13](https://github.com/NeosJS/electron-ipc/commit/4601c130872409cb1c5573dce360b5eac45a06ca))

### [1.1.2](https://github.com/NeosJS/electron-ipc/compare/v1.1.1...v1.1.2) (2020-09-16)


### Bug Fixes

* 修复渲染进程无法通信的bug ([73f7008](https://github.com/NeosJS/electron-ipc/commit/73f70080836d161dc0759cae659715bdeeada90d))

### [1.1.1](https://github.com/NeosJS/electron-ipc/compare/v1.1.0...v1.1.1) (2020-09-16)


### Bug Fixes

* 增加开发依赖(electron) ([45f4ae9](https://github.com/NeosJS/electron-ipc/commit/45f4ae9f4226b1c5c1aa661132b4356d07514310))

## [1.1.0](https://github.com/NeosJS/electron-ipc/compare/v1.0.1...v1.1.0) (2020-09-16)


### Bug Fixes

* 修改模块导出的名称 ([8f71dcc](https://github.com/NeosJS/electron-ipc/commit/8f71dcc8fe090b3e7307b485a7cb16e808e0626f))

### [1.0.1](https://github.com/NeosJS/electron-ipc/compare/v1.0.0...v1.0.1) (2020-09-16)


### Features

* 调整编译、修改导出结构 ([98da5cc](https://github.com/NeosJS/electron-ipc/commit/98da5ccb61222ae43f54a0b1e64d29061aedc735))

## 1.0.0 (2020-09-15)

### Features

- init ([8801e4d](https://github.com/NeosJS/electron-ipc/commit/8801e4d383baf817ae7c070960e2892041c168b3))

### Bug Fixes

- 修复入口文件 ([a915ce6](https://github.com/NeosJS/electron-ipc/commit/a915ce6fab9d4ad3e16bfb83c48080d6154611a8))
