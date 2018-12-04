# PRACTICE-WEBPACK

### Installation and Config
0. npm -v , node -v
    - document : [npm install](https://docs.npmjs.com/cli/install), [version range](https://docs.npmjs.com/misc/semver)
1. npm init [-y]
2. npm list --global --depth=0 [Check global installed package]
3. npm i [--global / --save-dev ...] webpack webpack-cli
    - Install the sepcific version => npm view webpack versions [--json]
4. touch webpack.config.js
    - document : [Webpack config](https://webpack.js.org/guides/installation/), [Node Path](http://nodejs.sideeffect.kr/docs/v0.10.0/api/path.html)
---

### Webpack loaders & plugins
0. npm i -D html-webpack-plugin
    - document : [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
1. npm i -D style-loader css-loader less-loader less
    - document : [Loaders](https://webpack.js.org/loaders/), [Migrating Versions](https://webpack.js.org/guides/migrating/)
2. npm i -D extract-text-webpack-plugin
    - document : [extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)
---

### Webpack Dev Server
0. npm i -D webpack-dev-server
    - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

---

### HotModuleReplacement & RimRaf
0. npm i -D rimraf
    - "scripts": { "clean": "rimraf ./dist/*" } [RimRaf](https://www.npmjs.com/package/rimraf)
1. npm i -D cross-env
    - "scripts": { "prod": "npm run clean && cross-env NODE_ENV=production webpack -p" } [cross-env](https://www.npmjs.com/package/cross-env)
    - Windows에서 NODE_ENV 설정이 적용되지 않아 cross-env 추가 설치 필요
