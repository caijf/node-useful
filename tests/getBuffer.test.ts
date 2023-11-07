import { getBuffer } from '../src';
import { getRelativePath } from './utils';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';

describe('getBuffer', () => {
  it('local text file', async () => {
    const buf = await getBuffer(getRelativePath('./fixtures/text.txt'));
    expect(Buffer.isBuffer(buf)).toBe(true);
    expect(buf.length).toBe(11);
    expect(buf.toString()).toBe('hello world');
  });

  it('local image file', async () => {
    const buf = await getBuffer(getRelativePath('./fixtures/120x120.png'));
    expect(Buffer.isBuffer(buf)).toBe(true);
    expect(buf.length).toBe(285);
  });

  it('local html file', async () => {
    const buf = await getBuffer(getRelativePath('./fixtures/test.html'));
    expect(Buffer.isBuffer(buf)).toBe(true);
    expect(buf.length).toBe(231);

    const str = iconv.decode(buf, 'utf8');
    const $ = cheerio.load(str);
    expect($('#app').text()).toBe('hello world');
  });

  // it('remote html', async () => {
  //   const url = 'https://www.mca.gov.cn/mzsj/xzqh/2022/202201xzqh.html';
  //   const buf = await getBuffer(url);
  //   expect(Buffer.isBuffer(buf)).toBe(true);

  //   const str = iconv.decode(buf, 'utf8');
  //   const $ = cheerio.load(str);
  //   expect($('table')).toBeDefined();
  // })

  // it('remote image', async () => {
  //   const url = 'https://fastly.picsum.photos/id/27/360/160.jpg?hmac=5J_4prvaOqKjKy14iOjHoTNQKVVWCL45jOFBrZhmmaE';
  //   const buf = await getBuffer(url);
  //   expect(Buffer.isBuffer(buf)).toBe(true);
  //   expect(buf.length).toBe(10337);
  // })

  it('buffer', async () => {
    const buf1 = Buffer.from('hello world');
    const buf2 = await getBuffer(buf1);
    expect(Buffer.isBuffer(buf2)).toBe(true);
    expect(buf2.length).toBe(11);
    expect(buf2.toString()).toBe('hello world');
    expect(buf1).toBe(buf2);
  });

  it('error', async () => {
    // try {
    //   await getBuffer('a');
    // } catch (err: any) {
    //   expect(err.message).toBe("ENOENT: no such file or directory, open 'a'");
    // }

    try {
      await getBuffer({} as any);
    } catch (err: any) {
      expect(err.message).toBe('参数错误');
    }
  });
});
