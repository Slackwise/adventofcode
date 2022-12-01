import { readFileSync } from 'fs';
import { basename as pathBasename } from 'path';
import { fileURLToPath } from 'url';
import * as ramda from 'ramda';

export { ramda };

export function getInput(fileURL) {
  const basename = pathBasename(fileURLToPath(fileURL), '.js');
  try {
  const input = readFileSync(`input/${basename}.txt`, {encoding: 'utf8'});
    const lines = input.split('\n');
    return { input, lines };
  } catch (ex) {
    console.log(`You forgot to get the input text file for "${basename}", dummy!`);
    process.exit(1);
  }
}
