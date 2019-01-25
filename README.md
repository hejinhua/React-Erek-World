## 前言

```base
记录一下，刚从vue入坑react半年，重构之前做的小demo，大佬们请移步 ～

采用的是 React.js + Material UI + Express + Mock 做的一个社区性项目，很多页面都是仿的，大自然的搬运工，界面的copy者 ~
```

## 技术栈

<ul>
    <li>react.js</li>
    <li>react-redux</li>  
    <li>react-router-dom</li>
    <li>redux-soga</li>
    <li>prop-types</li>
    <li>material-ui</li>
    <li>express</li>
    <li>mock</li>
    <li>...</li>
</ul>

> 其实，很多都是看文档直接用的，并不熟练，慢慢来吧，总得成长～

## 项目文件夹

```
React-Erek-World
│
├─src
│   ├─assets                    静态资源文件
│   │    ├─css
│   │    ├─img
│   │    └─ ...
│   │
│   ├─basicComponent            基础组件
│   │
│   ├─components                主组件
│   │
│   ├─data                      一些写死的数据
│   │
│   ├─router                    路由配置目录
│   │  ├─index.js
│   │
│   ├─mediaComponent            Music页组件
│   │
│   ├─sentenceComponent         Sentence页组件
│   │
│   ├─index.js                  入口文件
│   │
```

## express 文件夹

## 使用

```base
 1 ：git clone

 2 : cd React-Erek-World (进入到该项目)

 2 ：npm install （默认安装了node）

 3 ：npm start 💗

 （端口是3000， 修改端口请到node_modules/react-script/script.js中更改）

```

---

### 啰嗦一下

这里为什么用 Express + Mock 呢？本地开发的时候，其实还是直接就使用 js-model 数据模型，或者直接 mock 数据的，但是想了想，还是为了后面用 Node + Express + Mysql 去写后端代码，所以暂时就先用 Express + Mock 开发了 ～ 不要吐槽 🙏

```base
    Article 页面 -> 参考 “ 简书 ”
    Music 页面 -> 参考 “ QQ音乐 ” 和 “ 网易云音乐 ”
    Sentence 页面 -> 参考 “ 掘金 ”
```

## 吐槽一会

我也不知道我为什么会从 vue 转 react，但是终究还是要学的，react 一开始很懵逼，后面看了点基础的小视频，然后又看了 React.js 小书（下边有链接），从零接触 react 到现在做了一个纯静态的小 demo，足足花了我一个星期！！！我累了

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/g2.gif)

---

React.js 小书地址 ： https://github.com/huzidaha/react-naive-book

免费开源使用。

版权所有 Copyright © 2018 by PDK

All rights reserved。
