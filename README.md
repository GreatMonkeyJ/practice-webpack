# PRACTICE-WEBPACK

## Installation and Config
0. npm -v , node -v
    - document : [npm install](https://docs.npmjs.com/cli/install), [version range](https://docs.npmjs.com/misc/semver)
1. npm init [-y]
2. npm list --global --depth=0 [Check global installed package]
3. npm i [--global / --save-dev ...] webpack webpack-cli
    - Install the sepcific version => npm view webpack versions [--json]
4. touch webpack.config.js
    - document : [Webpack config](https://webpack.js.org/guides/installation/), [Node Path](http://nodejs.sideeffect.kr/docs/v0.10.0/api/path.html)
---

## Webpack loaders - plugins
0. npm i -D html-webpack-plugin
    - document : [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
1. npm i -D style-loader css-loader less-loader less
    - document : [Loaders](https://webpack.js.org/loaders/), [Migrating Versions](https://webpack.js.org/guides/migrating/)
2. npm i -D extract-text-webpack-plugin
    - document : [extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)
---
