import { readFileSync } from 'fs';
import { basename } from 'path';
import { fileURLToPath } from 'url';
import * as ramda from 'ramda';

export { ramda };

export function getInput(fileURL) {
  const inputName = basename(fileURLToPath(fileURL), '.js').replace(/\-part\d/, '');
  try {
  const input = readFileSync(`input/${inputName}.txt`, {encoding: 'utf8'});
    const lines = input.split('\n');
    return { input, lines };
  } catch (ex) {
    console.log(`You forgot to get the input text file for "${inputName}", dummy!`);
    process.exit(1);
  }
}
