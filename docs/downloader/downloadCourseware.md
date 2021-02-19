# 下载课件 <BadgeTip text="异步" type="green"></BadgeTip>

下载课件资源文件。

在下载之前，会自动检查文件是否存在、md5值是否一样。如果文件存且md5值一样，则放弃下载，否则开启后台下载功能。  
如果文件正在下载，也将放弃重复的下载项。


## API
### `downloaderApi.downloadCourseware(options: <Object>)`
### 


:::danger
`fileMD5` 必传。用来校验课件是否正确。  

为了统一课件文件的管理，该接口不提供`savePath`和`saveName`参数。   

**具体用法，参见：[文件下载](/downloader/downloadFile.html)**
:::
