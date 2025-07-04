<p align="center"><img src="https://i.loli.net/2020/01/27/bOvLlYmT7dQFRjr.png"
        width="64px" /></p>

<h2 align="center">nwr</h2>

<p align="center">
    <b>一个拥有高可扩展性的时间管理计算机软件</b> | <a href="https://getwnr.com/">中文网站</a>
</p>

<p align="center">
    下载地址 <i>(Win/Mac/Linux)</i>: <a href="https://github.com/RoderickQiu/nwr/releases">GitHub Release</a> | <a
        href="https://www.softpedia.com/get/Desktop-Enhancements/Clocks-Time-Management/nwr.shtml">Softpedia
        (Windows)</a> | <a href="https://pan.baidu.com/s/1PDpnEkf-zKQKQIhUTO0ubQ">百度网盘</a>（swh3） | <a href="https://scris.lanzoui.com/b01n0tb4j">蓝奏云高速下载</a>
</p>

<p align="center">
    <a href="https://github.com/RoderickQiu/nwr/blob/master/README.md">English README</a> | <a href="https://github.com/RoderickQiu/nwr/blob/master/README.zh-CN.md">简体中文简介</a> | <a href="https://github.com/RoderickQiu/nwr/blob/master/README.zh-TW.md">正體中文簡介</a> | <a href="https://github.com/RoderickQiu/nwr/blob/master/DEVELOPMENT_GUIDE.md">开发导引文档</a> | <a href="mailto:scrisqiu@hotmail.com">联系我</a>
</p>

---

## 贡献

非常感谢你的贡献。

- 如果你想报告一些期望的特性或漏洞，请随时 [提交 Issue](https://github.com/RoderickQiu/nwr/issues/new) 。

- 如果你做了些不错的改进，那么请 [提交 Pull Request](https://github.com/RoderickQiu/nwr/pulls) 。

- 如果你想为 nwr
  添加一种语言的支持， [请先阅读这份指南](https://github.com/RoderickQiu/nwr/blob/master/locales/README.md) 。

## 如何构建

```shell
yarn # 安装依赖

yarn start # 运行程序

yarn dir # 仅仅打包基础可执行文件

yarn nsis # Windows平台NSIS安装包打包

yarn 7zip # Windows平台7z便携版打包

yarn mac # macOS版本打包

yarn linux # Linux版本打包

yarn appimage # linux AppImage打包
```

更多有关 nwr 的技术细节和开发建议，请查看 *
*[DEVELOPMENT_GUIDE](https://github.com/RoderickQiu/nwr/blob/master/DEVELOPMENT_GUIDE.md)** 。

## 版权和鸣谢

版权所有 (c) 2019-2025 **[Roderick Qiu](https://r-q.name)** 和其他贡献者。保留所有权利。

使用 **[MPL 2.0 许可证](https://github.com/RoderickQiu/nwr/blob/master/LICENSE)** 进行许可。

### 使用的软件包

#### 主程序

完整的许可证文本参见 [这个文件](https://github.com/RoderickQiu/nwr/blob/master/NOTICE.md) ，同时也包含在每一份 nwr 的副本中。

- node-shi，[**我自己的项目**](https://www.npmjs.com/package/node-shi) 使用 MIT 许可证。
- cmd-or-ctrl，[**另一个我自己的项目**](https://www.npmjs.com/package/cmd-or-ctrl) 使用 MIT 许可证。
- node-auto-launch，Teamwork，MIT 许可证。
- compare-version，kevva，MIT 许可证。
- electron-store，sindresorhus，MIT 许可证。
- i18n-node，mashpie，MIT 许可证。
- crypto-js，brix，MIT 许可证。
- copy-to-clipboard，sudodoki，MIT 许可证。
- request，request，Apache-2.0 许可证。
- winreg，fresc81，BSD 2-Clause 许可证。
- **electron，electron，MIT 许可证**。
- electron-builder，electron-userland，MIT 许可证。
- jquery，jquery，MIT 许可证。
- bootstrap，twbs，MIT 许可证。
- iconfont，ALIMAMA MUX，许可证参见 [此网站](https://www.iconfont.cn/) 。
- node-md5，pvorb，BSD-3-Clause 许可证。
- dotenv，motdotla，BSD-2-Clause 许可证。
- electron-debug，sindresorhus，MIT 许可证。
- node-fetch，node-fetch，MIT 许可证。
- node-notifier，mikaelbr，MIT 许可证。
- popper.js，popperjs，MIT 许可证。
- schart.js，lin-xin，MIT 许可证。
- cross-env，kentcdodds，MIT 许可证。

### 开发环境

- **node，nodejs，**[**许可证**](https://github.com/nodejs/node/blob/master/LICENSE) 。
- NSIS，Nullsoft，zlib/libpng 许可证。
- WebStorm，JetBrains，[许可证](https://www.jetbrains.com/legal/#licensing) 。
