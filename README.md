# nextjs-ssg-hp-sample
Next.jsでSSGによる会社HPを作るためのサンプル

## Install

```shell
$ npm install -g pnpm@latest-10
```

## Version

```shell
$ pnpm -v
10.15.1
$ node -v                      
v23.5.0
$ npm -v
11.0.0
```

## プロジェクト操作

### プロジェクト作成

```shell
$ pnpm create next-app@latest my-site
.../1990a2b156c-4b8e                     |   +1 +
.../1990a2b156c-4b8e                     | Progress: resolved 1, reused 0, downloaded 1, added 1, done
✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack? (recommended) … No / Yes
```

### 実行

```shell
$ cd my-site

# 1) 依存解決
$ pnpm install

# 2) 開発（ホットリロード）
$ pnpm dev

# 3) 本番ビルド（静的出力）
$ pnpm build           # out/ に生成
$ pnpm dlx serve out   # ローカル静的サーバで確認
```

http://localhost:3000/ にアクセス

## 参考

- https://pnpm.io/ja/installation
