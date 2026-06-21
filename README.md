# DIGICAM 2003 — Y2K デジカメ変換機

2000年代のデジタルカメラ風に写真を変換するブラウザ完結型の Lo-Fi Image Converter です。

## 公開ページ  

[https://t1048.github.io/Retoro_Cam](https://t1048.github.io/Retoro_Cam)

## 機能

- **レトロエフェクト**: ピクセル化、ノイズ（ISO）、フラッシュ、ビネット、色収差
- **追加エフェクト**: JPEG ブロックノイズ、色数制限（256色以下）
- **日付スタンプ**: 位置（右下/左下）、フォント、秒表示のカスタマイズ
- **4:3 強制クロップ**: 当時のデジカメ比率に合わせた切り抜き
- **Before/After 比較**: スライダーで原画と加工後を比較
- **プリセット**: 組み込み（Casio QV-3000、Sony Cybershot 2003）+ カスタム保存
- **入力方法**: ファイル選択、ドラッグ＆ドロップ、モバイルカメラ撮影
- **出力**: ダウンロード、クリップボードコピー、Web Share API（対応端末）
- **PWA**: ホーム画面への追加、オフライン対応（初回読み込み後）

## 使い方

1. [index.html](./index.html) をブラウザで開く、または GitHub Pages 等でホスト
2. 写真を選択、ドラッグ＆ドロップ、またはカメラで撮影
3. スライダーでエフェクトを調整
4. 「保存」「コピー」「共有」で出力

## 対応ブラウザ

- Chrome / Edge / Firefox / Safari（最新版推奨）
- クリップボードコピー: HTTPS または localhost が必要
- Web Share API: モバイル Chrome / Safari 等

## ローカル開発

静的ファイルのみ。任意の HTTP サーバーで配信してください。

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

`http://localhost:8080` でアクセス。

## ファイル構成

```
Retoro_Cam/
├── index.html      # アプリ本体
├── manifest.json   # PWA マニフェスト
├── sw.js           # Service Worker
├── icon-192.png    # PWA アイコン
├── icon-512.png    # PWA アイコン
└── README.md
```

## ライセンス

MIT License — 詳細は [LICENSE](./LICENSE) を参照。
