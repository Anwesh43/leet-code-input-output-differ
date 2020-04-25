const {getArrayFromFile} = require('./utils')

async function  getDifference(expected, actual) {
    const array1 = await getArrayFromFile(expected)
    const array2 = await getArrayFromFile(actual)
    if (array1.length != array2.length) {
      return -1
    }
    const n = array1.length
    const diff = []
    for (let i = 0; i < n; i++) {
        const expectedValue = array1[i]
        const actualValue = array2[i]
        if (array1[i] != array2[i]) {
          diff.push({i, expectedValue, actualValue})
        }
    }
    return diff
}


async function execute() {
  const diff = await getDifference('./expected', './actual')
  console.log("difference array", diff)
}

execute()
