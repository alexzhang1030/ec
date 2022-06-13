import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const __dirname = resolve()

const fileContent = readFileSync(resolve(__dirname, '../template/.editorconfig'))

try {
  writeFileSync(resolve(__dirname, './.editorconfig'), fileContent)
  // eslint-disable-next-line no-console
  console.info('.editorconfig generated successfully 🎉')
}
catch (error) {
  console.warn('looks like something wrong', error)
}
