import readFileSync from 'fs';
import { basename as pathBasename } from 'path';
import { fileURLToPath } from 'url';
import * as ramda from 'ramda';

const basename = pathBasename(fileURLToPath(import.meta.url), '.js');

export { ramda };

export function getInput(fileURL) {
  try {
    const input = readFileSync(basename + '.txt', 'utf8');
    const lines = input.split('\n');
    return { input, lines };
  } catch (ex) {
    console.log(`You forgot to get the input text file for "${basename}", dummy!`);
    process.exit(1);
  }
}
