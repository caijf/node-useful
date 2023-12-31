import { Readable } from 'stream';

/**
 * stream 转 buffer
 *
 * @since 0.0.1
 * @param stream stream 对象
 * @returns buffer 对象
 * @example
 *
 * const stream = fs.createReadStream('./text.txt');
 * const buf = await streamToBuffer(stream);
 */
function streamToBuffer(stream: Readable) {
  return new Promise<Buffer>((resolve, reject) => {
    const buffers: any[] = [];
    stream.on('error', reject);
    stream.on('data', (data) => buffers.push(data));
    stream.on('end', () => resolve(Buffer.concat(buffers)));
  });
}

export default streamToBuffer;
