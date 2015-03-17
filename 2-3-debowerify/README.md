debowerifyを使ってbowerでインストールしたモジュールを使う。

### 実行方法

```
$ npm install
$ ./node_modules/.bin/bower install jquery
$ ./node_modules/.bin/browserify -t debowerify src/main.js -o bundle.js
```
