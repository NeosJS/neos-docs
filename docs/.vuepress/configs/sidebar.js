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
  "/downloader/": getSidebar.getDownloaderSiderBar("DownloaderApi"),
  "/net/": getSidebar.getNetSiderBar("NetApi"),
  "/like/": getSidebar.getLikeSiderBar("LikeApi"),
 // "/components/": getSidebar.getComponentsSiderBar("Components"),
  "/utils/": getSidebar.getUtilsSiderBar("UtilsApi")
}
