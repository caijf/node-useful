import https from 'https';
import http from 'http';
import fs from 'fs';
import streamToBuffer from './streamToBuffer';

/**
 * 获取本地或远程文件 buffer 。
 *
 * @since 0.0.1
 * @param input 本地或远程文件地址。远程地址仅支持 `http` 或 `https` 协议。
 * @returns buffer 对象
 * @example
 *
 * const buf1 = await getBuffer('./text.txt');
 * const buf2 = await getBuffer('some url or image');
 *
 */
function getBuffer(input: string | Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    if (typeof input !== 'string') {
      if (Buffer.isBuffer(input)) {
        resolve(input);
      } else {
        reject(new TypeError('参数错误'));
      }
      return;
    }

    // http 或 https 图片地址
    const client =
      input.indexOf('https') === 0 ? https : input.indexOf('http') === 0 ? http : undefined;
    if (client) {
      client.get(input, (res) => {
        const chunks: any[] = [];
        res.on('error', reject);
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          resolve(Buffer.concat(chunks));
        });
      });
    } else {
      // 本地路径
      const stream = fs.createReadStream(input);
      streamToBuffer(stream).then(resolve).catch(reject);
    }
  });
}

export default getBuffer;
