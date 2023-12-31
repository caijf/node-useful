import { Duplex } from 'stream';

/**
 * buffer 转 stream
 *
 * @since 0.0.1
 * @param buffer buffer 对象
 * @returns stream 对象
 * @example
 *
 * const buf = Buffer.from('hello world');
 * const stream = bufferToStream(buf); // stream instanceof Stream
 */
function bufferToStream(buffer: Buffer) {
  const stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

export default bufferToStream;
