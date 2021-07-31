# 環境構築方法

---

1. コンテナ作成と起動
2. コンテナ内環境構築
3. Prettier/Eslint による自動フォーマット有効化

---

## 1. コンテナ作成と起動

### Tree 構造 (環境構築前の app 配下は空にしておく必要がある)

```
.
├── front
│   ├── app
│   │   ├── public
│   │   │   ├── favicon.ico
│   │   │   └── index.html
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   │   └── App.test.tsx
│   │   │   ├── components
│   │   │   │   ├── atoms
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── molecules
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── organisms
│   │   │   │   │   └── .gitkeep
│   │   │   │   ├── pages
│   │   │   │   │   └── Page404.tsx
│   │   │   │   ├── router
│   │   │   │   │   └── .gitkeep
│   │   │   │   └── templates
│   │   │   │       └── .gitkeep
│   │   │   ├── images
│   │   │   │   ├── Aisin_logo.svg
│   │   │   │   └── Default_logo.svg
│   │   │   ├── logs
│   │   │   │   ├── CreateDevEnv.md
│   │   │   │   └── README.md
│   │   │   ├── styles
│   │   │   │   ├── App.css
│   │   │   │   └── index.css
│   │   │   ├── App.tsx
│   │   │   ├── index.tsx
│   │   │   └── react-app-env.d.ts
│   │   ├── .eslintignore
│   │   ├── .eslintrc.json
│   │   ├── .gitignore
│   │   ├── .prettierrc
│   │   ├── README.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── tsconfig.eslint.json
│   │   ├── tsconfig.json
│   │   └── yarn.lock
│   ├── .dockerignore
│   └── Dockerfile
├── .env
├── .gitignore
└── docker-compose.yml
```

### Dockerfile (環境構築完了後はコメント外す)

```
FROM node:14.15.4-slim
ENV CI true
# COPY ./app/package.json /home/app/package.json
WORKDIR /home/app
RUN npm install
```

### docker-compose.yml

```
version: '3.3'
services:
  front:
    image: ${PROJ_NAME}:latest
    container_name: ${PROJ_NAME}
    build:
      context: ./front
      dockerfile: Dockerfile
    volumes:
      - ./front/app:/home/app
      - front-volume:/home/app/node_modules
    ports:
      - ${DEV_PORT}:3000
      - ${PROD_PORT}:5000
    tty: true
volumes:
  front-volume:
    name: ${PROJ_NAME}-volume
    driver: local
```

### .env(自由に変更)

```
PROJ_NAME=basement_tsx
DEV_PORT=3000
PROD_PORT=5000
```

## 2. コンテナ内環境構築

### コンテナ内に入る (起動は docker-compose up -d)

```
docker-compose exec front bash
```

### React TypeScript プロジェクトの作成

> /home/ で下記コマンドを実施

```
npx create-react-app app --templete typescript
```

### 不要なファイルを削除　(1. の Tree 構造になるように修正)

- src/ public/ 内の不要ファイルを削除
- App.test.tsx を下記のように編集（コピペ）

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeTruthy();
});
```

### 追加パッケージ

```
npm i -D eslint eslint-config-airbnb-typescript \
prettier eslint-config-prettier @types/react @types/react-router-dom
```

```
npm i axios react-router-dom serve
```

### eslint 初期化

```
npx eslint --init
```

- How would you like to use ESLint?

> To check syntax, find problems, and enforce code style

- What type of modules does your project use?

> JavaScript modules (import/export)

- Which framework does your project use?

> React

- Does your project use TypeScript?

> Yes

- Where does your code run?

> Browser

- How would you like to define a style for your project?

> Use a popular style guide

- Which style guide do you want to follow?

> Airbnb: https://github.com/airbnb/javascript

- What format do you want your config file to be in?

> JSON

- Would you like to install them now with npm?

> Yes

- tsconfig.json の内容（確認用）

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### tsconfig.eslint.json の作成

```
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]
}
```

### eslintrc.json の編集

- "extends"を以下のように編集

```
"extends": ["airbnb-typescript", "prettier"],
```

- "parserOptions"を以下のように編集

```
"parserOptions": {
    "project": "./tsconfig.eslint.json",
    "ecmaFeatures": {
      "jsx": true
    },
```

### eslintignore の作成

```
node_modules
build
coverage
```

### package.json の編集

- "scripts"に以下を追加

```
"lint": "npx eslint src/**/*.ts{,x}",
"lint:fix": "npx eslint src/**/*.ts{,x} --fix"
```

### .prettierrc の作成

```
{
  "jsxSingleQuote": true,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

## 3. Prettier/Eslint による自動フォーマット有効化

### 拡張機能で Prettier/Eslint をインストールする

### 動作確認

- src/index.tsx を開いて保存したときにセミコロンが無くなれば OK

```
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```