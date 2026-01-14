import { error } from 'node:console';
import * as fs from 'node:fs/promises';

fs.readFile('file.txt', { encoding: 'utf8' })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
backend / src / index.js;
