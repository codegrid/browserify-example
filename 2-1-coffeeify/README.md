coffeeifyでCoffeeScriptの変換後にBrowserifyの処理を適用する。

### 実行方法

```
$ npm install
$ ./node_modules/.bin/browserify -t coffeeify --extension=".coffee" src/main.coffee -o bundle.js
```
