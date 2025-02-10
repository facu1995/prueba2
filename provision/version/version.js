import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

function incrementVersion(version, type) {
  let [major, minor, patch] = version.split('.').map(num => parseInt(num, 10));

  switch (type) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
    case 'test':
      let versionTestIteration = version.split('T')[1] || 0
      const testVersion = [major, minor, patch].join('.')+'-T'+(parseInt(versionTestIteration)+1)
      return testVersion;
    default:
      throw new Error('Unknown version type');
  }

  return [major, minor, patch].join('.');
}

function updateVersion(type) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const versionFilePath = path.join(dir, '../../package.json');
  const data = JSON.parse(readFileSync(versionFilePath, 'utf8'));
  data.version = incrementVersion(data.version, type);
  writeFileSync(versionFilePath, JSON.stringify(data, null, 2));
  console.log(`Version updated to: ${data.version}`);
}
const type = process.argv[2];
updateVersion(type);
