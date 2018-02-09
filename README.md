# Learning

基于 Scratch 2.0 的网页项目。

## 创建项目

```shell
$ mkdir learning && cd learning
$ npm init
$ npm install react react-dom --save
$ npm install webpack --save-dev
$ git init
$ echo "# Learning" >> README.md    # 其他说明文档
$ echo ".DS_Store" >> .gitignore    # 其他需要忽略的文件目录
$ git add .
$ git commit -m "Init project"
$ git remote add origin git@github.com:beitaz/blocks.git
$ git push -u origin master
$ mkdir src && touch src/index.js && touch webpack.config.js
$ npm install rimraf html-webpack-plugin --save-dev
$ npm install babel-loader babel-core babel-preset-env babel-preset-react --save-dev
$ npm install copy-webpack-plugin --save-dev
$ npm install eslint eslint-loader eslint-plugin-react --save-dev
$ npm install babel-eslint --save-dev  # 解决 [error] Parsing error: Unexpected token = 问题
$ npm install css-loader style-loader sass-loader node-sass --save-dev
$ npm install postcss-loader autoprefixer --save-dev
$ npm install webpack-dev-server --save-dev
$ npm install url-loader file-loader --save-dev
```

*提示：* 使用 `npm prune` 删除不需要的依赖包。

**注意:** React 中输出 HTML 文本或者组件数据中含有字符串时，需要处理 `单引号(')` 和 `双引号(")` 

```shell
Unexpected character '@' (11:0)
You may need an appropriate loader to handle this file type.
```
此错误要添加 `url-loader` 和 `file-loader`,同时也要注意是否排除了 `exclude: /node_moduels/` 文件夹。

| 符号 | 转义符号
|:---:|:---------------------------------:|
|  >  | `&gt;`                            |
|  "  | `&quot;` 或 `&ldquo;` 或 `&rdquo;` |
|  '  | `&apos;` 或 `&lsquo;` 或 `&rsquo;` |
|  }  | `&#125;`                          |

## 设置布局

```shell
$ npm install semantic-ui-react semantic-ui-css --save
```