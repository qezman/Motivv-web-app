export const truncate = (word) => {
    if (word !== undefined) {
      let newWord = word.slice(0, 230)
      return newWord + "....."
    }
    return
  }


export const truncateFileName = (word) => {
  if (word !== undefined) {
    const indexOfDot = word.indexOf('.')
  const fileType = word.slice(indexOfDot)
  let slicedWord = word.slice(0, 10)
    return slicedWord + fileType
  }

}

export const truncateFileNameBgScreen = (word) => {
  if (word !== undefined) {
    const indexOfDot = word.indexOf('.')
  const fileType = word.slice(indexOfDot)
  let slicedWord = word.slice(0, 20)
    return slicedWord + fileType
  }

}