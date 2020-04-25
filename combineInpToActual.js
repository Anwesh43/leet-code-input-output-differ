const {getArrayFromFile} = require('./utils')

async function combineInpToActual() {
  const inpArray = await getArrayFromFile('./maininp')
  const actual = await getArrayFromFile('./actual')
  if (inpArray.length != actual.length) {
    console.log("didn't match")
  }

  for (let i = 0; i < inpArray.length; i++) {
      console.log(inpArray[i], "->", actual[i])
  }
}
combineInpToActual()
