import { Stream } from 'stream';
import { bufferToStream, getBuffer } from '../src';
import { getRelativePath } from './utils';

describe('bufferToStream', () => {
  it('basic', async () => {
    const buf = await getBuffer(getRelativePath('./fixtures/text.txt'));
    const stream = bufferToStream(buf);
    expect(stream instanceof Stream).toBe(true);

    const buf2 = Buffer.from('hello world');
    const stream2 = bufferToStream(buf2);
    expect(stream2 instanceof Stream).toBe(true);
  });
});
