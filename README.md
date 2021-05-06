# 技育Camp ハッカソンvol3 team1
不明な点があれば松本まで

## 環境構築
GitCloneしてプロジェクトディレクトリ(todo_slack)に移動  
docker-compose up して下記の通り接続できるか確認  

localhost:3000 Node.js ("Welcome to Express" と表示される)
localhost:8080 phpmyadmin (DBコンテナの起動が遅いと接続失敗することあり。その場合少し待って再接続)

## 各ディレクトリの説明
/app: アプリケーション本体  
/db/init: データベースの初期データ投入用SQL

### 以下/app内の説明
/api: SlackAPI関連のコード
/routes: Webアプリのサーバーサイド
/views: Webアプリのクライアントサイド
/public/stylesheets: スタイルシート

## ブランチ運用ルール
webアプリ開発チームは"dev_web", SlackAPI開発チームは"dev_api"からそれぞれ  
dev_web-作業名  
dev_api-作業名  
でブランチを切って作業する。  
作業後はそのままリモートにプッシュ。（ローカルでマージしない）  
切り離した元のブランチにPullRequestを出す。  
各チーム内でコードレビューしてマージ。  

## データベース
db/init/api-init.sql に初期データ投入用SQL
各テーブルの定義は[データベース定義書](https://docs.google.com/spreadsheets/d/1yEc-2q_Qkn_qyD72VNzlY2g4Kw5G5azJIhhklzH8U5w/edit?usp=sharing) を参照

## 自動ビルド自動デプロイ
dev_api にマージされると即時slackでテストできるよう、自動でサーバーにデプロイされる(予定)
