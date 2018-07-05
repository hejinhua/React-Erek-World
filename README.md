## 前言
```base
    记录一下，这是刚学react的小白入坑小demo，纯静态，完善中... 每日打卡+1 ，大佬们请移步 ～
```
## 技术栈
<ul>
    <li>eeact.js</li>
    <li>react-redux</li>  
    <li>react-router-dom</li>
    <li>redux-thunk</li>
    <li>prop-types</li>
    <li>...</li>
</ul>
<p>redux在此项目中暂时还未用到，暂时用data中的假数据替代，所以数据写死，也懒得自己去mock以及掉ONE 和 网易云等API，总之这个项目，就只是楼主入门react做的小demo而已，项目架构可能有点糟糕，望大佬们能指点一番 ～</p>

## 整个项目架构
~~~
ONE WORD
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
~~~
## 页面展示
![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/J_1.png)

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/J_2.png)

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/J_3.png)

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/J_4.png)

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/J_5.png)

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/J_6.png)

## 使用
```base
 1 ：git clone 

 2 : cd ONE_WORD (进入到该项目)

 2 ：npm install （默认安装了node）

 3 ：npm start

 （端口是3000， 修改端口请到node_modules/react-script/script.js中更改）

 【 注 意 】 ： 请访问 localhost:3000/home
 
 ```

### 后面将会写成博客markdown的形式记录入坑react之路的
------

### 啰嗦一下
```base
    从7.2号创建仓库到今天7.5号，每天都保持着打卡，终于在每天七八个小时的写代码下，把这个小demo的纯静态全做完了，是不是觉得有点熟悉
    Article 页面 -> 参考 “ 简书 ”
    Music 页面 -> 参考 “ QQ音乐 ” 和 “ 网易云音乐 ”
    Sentence 页面 -> 参考 “ 掘金 ”
```

## 吐槽一会
我也不知道我为什么会从vue转react，但是终究还是要学的，react一开始很懵逼，后面看了点基础的小视频，然后又看了 React.js 小书（下边有链接），从零接触react到现在做了一个纯静态的小demo，足足花了我一个星期！！！我累了

![image](https://github.com/PDKSophia/ONE_WORD/raw/master/images/g2.gif)


------

React.js 小书地址 ： https://github.com/huzidaha/react-naive-book

免费开源使用。

版权所有Copyright © 2018 by PDK 

All rights reserved。