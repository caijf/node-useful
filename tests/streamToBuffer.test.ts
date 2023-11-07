import fs from 'fs';
import { streamToBuffer } from '../src';
import { getRelativePath } from './utils';

describe('streamToBuffer', () => {
  it('basic', async () => {
    const stream = fs.createReadStream(getRelativePath('./fixtures/text.txt'));
    const buf = await streamToBuffer(stream);
    expect(Buffer.isBuffer(buf)).toBe(true);
    expect(buf.length).toBe(11);
    expect(buf.toString()).toBe('hello world');
  });
});
