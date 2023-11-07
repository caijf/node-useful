import path from 'path';

export function getRelativePath(to: string, from = __dirname) {
  return path.join(from, to);
}
