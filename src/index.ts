import { readFileSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

const targetPath = process.cwd()
const __dirname = resolve()
const fileContent = readFileSync(join(__dirname, './template/.editorconfig'))
try {
  writeFileSync(join(targetPath, './.editorconfig'), fileContent)
  // eslint-disable-next-line no-console
  console.info('.editorconfig generated successfully 🎉')
}
catch (error) {
  console.warn('looks like something wrong', error)
}
