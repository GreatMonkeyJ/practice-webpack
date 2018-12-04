# PRACTICE-WEBPACK

### Installation and Config
0. npm -v , node -v
    - Document : [npm install](https://docs.npmjs.com/cli/install), [version range](https://docs.npmjs.com/misc/semver)
1. npm init [-y]
2. npm list --global --depth=0 [Check global installed package]
3. npm i [--global / --save-dev ...] webpack webpack-cli
    - Install the sepcific version => npm view webpack versions [--json]
4. touch webpack.config.js
    - Document : [Webpack config](https://webpack.js.org/guides/installation/), [Node Path](http://nodejs.sideeffect.kr/docs/v0.10.0/api/path.html)
---

### Webpack loaders & plugins
0. npm i -D html-webpack-plugin
    - Document : [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
1. npm i -D style-loader css-loader less-loader less
    - Document : [Loaders](https://webpack.js.org/loaders/), [Migrating Versions](https://webpack.js.org/guides/migrating/)
2. npm i -D extract-text-webpack-plugin
    - Document : [extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)
---

### Webpack Dev Server
0. npm i -D webpack-dev-server
    - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

---

### Webpack HotModuleReplacement & Production vs development environment
0. npm i -D cross-env
    - "scripts": { "prod": "npm run clean && cross-env NODE_ENV=production webpack -p" }
    - Document : [cross-env](https://www.npmjs.com/package/cross-env) *Windows에서 NODE_ENV 설정이 적용되지 않아 cross-env 추가 설치 필요
1. npm i -D rimraf
    - "scripts": { "clean": "rimraf ./dist/*" }
    - Document : [RimRaf](https://www.npmjs.com/package/rimraf)

---

### Webpack file-loader & image-webpack-loader
0. npm i -D file-loader
    - Document : [file-loader](https://www.npmjs.com/package/file-loader)
1. npm i -D image-webpack-loader
    - Document : [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)

---

### React & Babel
0. npm i -D react react-dom
    - Document : [React - Installation](https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react)
1. npm i -D babel-loader babel-core babel-preset-react babel-preset-env
    - Document : [Babel - Installation](https://babeljs.io/docs/setup/#installation)
    - touch .babelrc
    - { "presets": ["react", "env"] }

---

### Webpack url-loader, bootstrap & jQuery
0. npm i -D url-loader bootstrap jquery
    - Document : [url-loader](https://webpack.js.org/loaders/url-loader/#src/components/Sidebar/Sidebar.jsx)
    - Document : [bootstrap](http://getbootstrap.com/docs/4.1/getting-started/webpack/) *Importing Compiled CSS
    - Document : [bootstrap-KR](http://bootstrapk.com/getting-started/)  *KR
    - Document : [bootstrap-loader](https://github.com/shakacode/bootstrap-loader)
    - Document : [jQuery](https://webpack.js.org/plugins/provide-plugin/#usage-jquery)
