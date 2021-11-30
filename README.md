# wepy-cli-extend
wepy-cli 2 插件，解决部分官方不解决的bug或小程序新特性

# 安装
```
npm i wepy-cli-extend --save-dev
```

# 配置

在项目根目录`wepy.config.js`文件添加如下
```
const cliExt = require('wepy-cli-extend');

module.exports = {
  plugins: [
    cliExt()
  ]
}
```

## 支持的功能如下
### 1.支持useExtendedLib导入weui
使用方式,如`index.wpy`文件的 config节点配置如下
```xml
<config>
{
    navigationBarTitleText: 'WePY 2.0 Feature Demo',
    usingComponents: {
        "mp-icon": "raw:weui-miniprogram/icon/icon",
        "mp-cells": "raw:weui-miniprogram/cells/cells",
        "mp-cell": "raw:weui-miniprogram/cell/cell",
        "mp-slideview": "raw:weui-miniprogram/slideview/slideview",
        "mp-dialog": "raw:weui-miniprogram/dialog/dialog",
        "mp-msg": "raw:weui-miniprogram/msg/msg"
    }
}
</config>
```
编译后的结果为 `index.json` 文件内容如下
```
{
    "navigationBarTitleText": "WePY 2.0 Feature Demo",
    "component": true,
    "usingComponents": {
        "mp-icon": "weui-miniprogram/icon/icon",
        "mp-cells": "weui-miniprogram/cells/cells",
        "mp-cell": "weui-miniprogram/cell/cell",
        "mp-slideview": "weui-miniprogram/slideview/slideview",
        "mp-dialog": "weui-miniprogram/dialog/dialog",
        "mp-msg": "weui-miniprogram/msg/msg"
    }
}
```
