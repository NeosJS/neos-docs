const getSidebar = require('./getSideBar')

module.exports = {
  "/ipc/": getSidebar.getIpcSiderBar("IpcMessage"),
  "/native/": getSidebar.getNativeSiderBar("NativeApi"),
  "/updater/": getSidebar.getUpdaterSiderBar("UpdaterApi"),
  "/logger/": getSidebar.getLoggerSiderBar("LoggerApi"),
  "/db/": getSidebar.getDBSiderBar("DataBaseApi"),
  "/recorder/": getSidebar.getRecorderSiderBar("RecorderApi"),
  "/graffiti/": getSidebar.getGraffitiSiderBar("Graffiti"),
  "/camera/": getSidebar.getCameraSiderBar("Camera"),
  // "/downloader/": getDownloaderSiderBar2("DownloaderApi"),
  "/downloader/": getSidebar.getDownloaderSiderBar("DownloaderApi 3.0"),
  "/net/": getSidebar.getNetSiderBar("NetApi"),
  "/like/": getSidebar.getLikeSiderBar("LikeApi"),
  "/components/": getSidebar.getComponentsSiderBar("Components")
  // "/utils/": getUtilsSiderBar("UtilsApi")
}
