# wepy-cli-extend
wepy-cli 2 插件，解决部分官方不解决的bug或小程序新特性

### 支持useExtendedLib导入weui
 使用方式
```
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
```
编译后的结果为
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
