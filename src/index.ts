import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const targetPath = process.cwd()
const __dirname = fileURLToPath(import.meta.url)
const fileContent = readFileSync(resolve(__dirname, '../../template/.editorconfig'))
try {
  writeFileSync(resolve(targetPath, './.editorconfig'), fileContent)
  // eslint-disable-next-line no-console
  console.info('.editorconfig generated successfully 🎉')
}
catch (error) {
  console.warn('looks like something wrong', error)
}
