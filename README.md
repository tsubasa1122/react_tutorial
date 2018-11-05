セットアップ
---
* react_tutorialのリポジトリをクローン  
```sh
$ git clone -b framework https://github.com/Progate/react_tutorial.git
```

* アプリケーションのセットアップ  
```sh
# Gemのインストール
$ bundle install
```

* js周りのセットアップ  
nodebrew,node,npmを下記サイト等を参考にインストール  
http://qiita.com/sinmetal/items/154e81823f386279b33c  
```sh
$ npm install
# jsのビルド

$ npm run watch
# jsの開発時に走らせておくと、自動でビルドが走る(エラー箇所等を教えてくれます)。
# 3877448 bytes written to public/assets/javascripts/boot.js (1.20 seconds)のような1行が出たら成功です。
```

###セットアップ完了
ここまで全て完了したら、Reactチュートリアルに移りましょう。  
チュートリアルはwikiにあります。
