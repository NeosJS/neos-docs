# 下载升级包 <BadgeTip text="异步" type="green"></BadgeTip>

此接口适用于 **后台接口** 控制升级能力。


## API
### `downloaderApi.downloadUpdates(options: <Object>)`
### 

:::danger
- 下载完成后，会自动解压zip包，为后续升级做准备。
- 文件下载完成后，具体使用方法请参阅 [下载升级包 升级方案](/updater/download.html)
- 返回的 `filePath` 为升级文件的在本机保存的路径。 [ **Windows系统** ]。  
完整的文件地址，接口自动返回，业务层无需拼接。(filePath = `/xxxxxx/xxxxxxx/xxxxxx/xxxxxxx.exe`)  

当更新文件下载完成后，下载器会返回计算出来的 `MD5` 值。业务层可根据该 `MD5` 来判断文件是否准确。

该接口不接受 `fileMD5`、`savePath`、`saveName`、`extract`参数。

**具体用法，参见：[文件下载](/downloader2/downloadFile.html)**
:::


