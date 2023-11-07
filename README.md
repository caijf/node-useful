# node-useful

Node.js 工具方法。[点击查看在线文档]。

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/caijf/node-useful.svg)

## 安装

```shell
npm install node-useful
```

```shell
yarn add node-useful
```

```shell
pnpm add node-useful
```

## 使用

```typescript
import { getBuffer } from 'node-useful';

async function something() {
  const buf = await getBuffer('xxx');
  // next ...
}
```

## API

- bufferToStream - buffer 转 stream
- streamToBuffer - stream 转 buffer
- getBuffer - 获取本地或远程文件 buffer

[npm]: https://img.shields.io/npm/v/node-useful.svg
[npm-url]: https://npmjs.com/package/node-useful
[点击查看在线文档]: https://caijf.github.io/node-useful/index.html
