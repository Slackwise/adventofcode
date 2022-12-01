import readFileSync from 'fs';
import { basename as pathBasename } from 'path';
import { fileURLToPath } from 'url';
import * as R from 'ramda';

const basename = pathBasename(fileURLToPath(import.meta.url), '.js');
const lines = "";

try {
  lines = readFileSync(basename + '.txt', 'utf8');
} catch (ex) {
  console.log(`You forgot to get the input text file for "${basename}", dummy!`);
  process.exit(1);
}
