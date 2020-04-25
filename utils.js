const {readFile, writeFile} = require('fs')
const {promisify} = require('util')

const readFilePromise = promisify(readFile)

async function getArrayFromFile(fileName) {
  const data = await readFilePromise(fileName)
  const dataStr = data.toString()
  return JSON.parse(dataStr)
}
module.exports = {getArrayFromFile}
