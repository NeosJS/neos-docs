exports.getIpcSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "listener", "send", "call"]
    }
  ];
}
exports.getNativeSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: true,
      sidebarDepth: 0,
      children: [""]
    },
    {
      title: "系统能力",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "get/getAppVersion",
        "get/getAppPath",
        "get/getPathByName",
        "get/getClientInfo",
        "get/getMediaAccessStatus",
        "get/getMediaAccess",
        "get/getDeviceInfo",
        "jumpPage",
        "relaunchApp",
        "exitApp",
        "snapShot",
        "set/setAlwaysOnTop",
        "addElementDrag",
        "removeElementDrag",
        "registerShortcut",
        "open/openFileDialog",
        "open/openDirDialog",
        "open/openSaveDialog",
        "open/openDirBySystem",
        "open/openFile",
        "open/openFileBySystem",
        "open/openFileOrDirBySystem",
        "cleanCache",
        "cleanStorage",
        "cleanFiles",
        "clipboard"
        // {
        //   title: "通用",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "get/getAppVersion",
        //     "get/getAppPath",
        //     "get/getClientInfo",
        //     "jumpPage",
        //     "relaunchApp",
        //     "exitApp",
        //     "snapShot",
        //     "set/setAlwaysOnTop",
        //     "addElementDrag",
        //     "removeElementDrag",
        //     "registerShortcut"
        //   ]
        // },
        // {
        //   title: "目录、文件",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "open/openFileDialog",
        //     "open/openDirDialog",
        //     "open/openSaveDialog",
        //     "open/openDirBySystem",
        //     "open/openFileBySystem",
        //     "open/openFileOrDirBySystem"
        //   ]
        // },
        // {
        //   title: "缓存",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: ["cleanCache", "cleanStorage"]
        // }
      ]
    },
    {
      title: "窗口能力",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "elementDrag",
        "loadUrl",
        "loadFile",
        "set/setWindowState",
        "changeWindowState",
        "maximize",
        "minimize",
        "normal",
        "closeWindow",
        "reload",
        "open/openWindow",
        "get/getWindowState",
        "get/getWindowBounds",
        "get/getWindowSize",
        "get/getWindowPosition",
        "set/setSize",
        "set/setWindowMinSize",
        "set/setWindowMaxSize",
        "set/setWindowLimitSize",
        "set/setWindowCenter",
        "set/setFullscreen",
        "fullScreen",
        "set/setWindowAble",
        "set/setWindowPosition",
        "set/setWindowBounds"
        // {
        //   title: "通用",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "loadUrl",
        //     "loadFile",
        //     "set/setWindowState",
        //     "changeWindowState",
        //     "maximize",
        //     "minimize",
        //     "normal",
        //     "closeWindow",
        //     "reload",
        //     "open/openWindow",
        //     "get/getWindowState",
        //     "get/getWindowBounds",
        //     "get/getWindowSize",
        //     "get/getWindowPosition",
        //     "set/setSize",
        //     "set/setWindowMinSize",
        //     "set/setWindowMaxSize",
        //     "set/setWindowLimitSize",
        //     "set/setWindowCenter",
        //     "set/setFullscreen",
        //     "fullScreen",
        //     "set/setWindowAble",
        //     "set/setWindowPosition",
        //     "set/setWindowBounds"
        //   ]
        // },
        // {
        //   title: "获取",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "get/getWindowState",
        //     "get/getWindowBounds",
        //     "get/getWindowSize",
        //     "get/getWindowPosition"
        //   ]
        // },
        // {
        //   title: "设置",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "set/setSize",
        //     "set/setWindowMinSize",
        //     "set/setWindowMaxSize",
        //     "set/setWindowLimitSize",
        //     "set/setWindowCenter",
        //     "set/setFullscreen",
        //     "fullScreen",
        //     "set/setWindowAble",
        //     "set/setWindowPosition",
        //     "set/setWindowBounds"
        //   ]
        // }
      ]
    }
  ];
}
exports.getLoggerSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "start", "info", "error", "log", "readLog", "removeLog", "query"]
    }
  ];
}
exports.getDBSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "createCol", "insert", "find", "update", "remove", "getState", "drop"]
    }
  ];
}

exports.getUpdaterSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "autoCheckUpdates",
        "checkUpdates",
        "downloadUpdates",
        "checkUpdatesMain",
        "download",
        "installUpdates"
      ]
    }
  ];
}
exports.getRecorderSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "isSupport",
        "init",
        "getDeviceLists",
        "open",
        "start",
        "stop",
        "close",
        "pause",
        "resume",
        "getBlob",
        "play",
        "destroy"
      ]
    }
  ];
}

exports.getDownloaderSiderBar2 = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "extractZip",
        "checkCourseware",
        "downloadCourseware",
        "downloadFiles",
        "download",
        "downloadUpdates"
      ]
    }
  ];
}

exports.getDownloaderSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "checkCourseware", "downloadCourseware", "downloadUpdates", "downloadFile", "extractZip"]
    }
  ];
}

exports.getNetSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "checkNetSpeed", "reportNetSpeed", "getFastDomain"]
    }
  ];
}

exports.getUtilsSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["is", "get"]
    }
  ];
}

exports.getGraffitiSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "init",
        "lineColor",
        "lineSize",
        "eraserSize",
        "eraser",
        "prev",
        "next",
        "clear",
        "destroy",
        "createImage",
        "saveImage"
      ]
    }
  ];
}

exports.getCameraSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "init", "getDeviceLists", "startCapture", "stopCapture", "changeDeviceId", "photoShot", "destroy"]
    }
  ];
}

exports.getLikeSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "init", "destroy"]
    }
  ];
}

exports.getComponentsSiderBar = (groupTitle)=>{
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "icon","loader", "clockCountdown", "pieCountdown"]
    }
  ];
}
exports.getTestSiderBar = (title)=>{
  return [
    {
      title,
      collapsable: false,
      sidebarDepth: 0,
      children: [""]
    }
  ];
}
