# vue3-vite admin 系统

技术栈为 `Vue3` + `Vite` + `typescirpt` + `ant-design-vue` + `Pinia`, 顺滑的开发体验。

## 项目目录

```js
|———config                          // 配置文件目录
|
|———mock                            // mock目录
|———src                             //
    ├── api                         // 接口相关
    ├── assets                      // 公共的文件（如image、css、font等）
    ├── components                  // 项目组件
    ├── directives                  // 自定义 指令
    ├── enums                       // 自定义 常量（枚举写法）
    ├── hooks                       // 自定义 hooks
    ├── layout                      // 全局布局
    ├── router                      // 路由
    ├── store                       // 状态管理器
    ├── utils                       // 工具库
    ├── views                       // 页面模块目录
        ├── login                   // login页面模块
        ├── ...
    ├── App.vue                     // vue顶层文件
    ├── auto-imports.d.ts           // unplugin-auto-import 插件生成
    ├── components.d.d.ts           // unplugin-vue-components 插件生成
    ├── main.ts                     // 项目入口文件
    ├── shimes-vue.d.ts             // vite默认ts类型文件
    ├── types                       // 项目type类型定义文件夹
|———.npmrc                          // npm 配置
|———.package.json                   // package 包
|———shims.vue.d.ts                  // 配置 vue，
|———tsconfig.json                   // typescript 配置文件
|———jsconfig.node.json              // typescript node环境配置
|———vite.config.ts                  //  vite 配置
|———windi.config.ts                 //  windicss 配置

```

## 运行/打包

1. 克隆项目

   ```sh
   #github
   git@github.com:alexsz2012/vue3-vite.git
   #gitee
   git@gitee.com:alexandertao/vite-vue3-ts.git
   ```

2. 安装依赖

   ```sh
   #推荐使用pnpm
   pnpm install
   #没有安装pnpm 先安装
   npm install -g pnpm
   ```

3. 启动项目

   ```sh
   pnpm dev
   #访问路径 http://localhost:3010/
   ```

4. 生产打包

   ```sh
   #检查TS 类型然后构建
   pnpm build:check
   #直接打包
   pnpm build
   ```

## 效果图

![vue3-vite](https://cdn.jsdelivr.net/gh/alexsz2012/CDN@1.1/images/vue3-vite-admin-home.png)

## 欢迎 star
