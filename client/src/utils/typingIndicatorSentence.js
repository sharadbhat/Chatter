const arrayToSentence = (arr) => {
  // Snippet taken from https://github.com/shinnn/array-to-sentence
  
  if (arr.length === 0) {
    return ''
  }

  if (arr.length === 1) {
		return arr[0];
  }

  return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1]
}

const genSentence = (usersTypingSet) => {
  let sentence = ''
  let tempSet = new Set(usersTypingSet)
  if (tempSet.size < 3) {
    sentence = arrayToSentence([...tempSet])
    if (tempSet.size > 1) {
      sentence += ' are typing...'
    } else {
      sentence += ' is typing...'
    }
  } else {
    sentence = 'Multiple users are typing...'
  }

  return sentence
}

export default genSentence