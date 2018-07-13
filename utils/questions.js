const questions = [
  {
    query: 'name',
    label: 'What is your name?',
    type: 'text',
    placeholder: 'Name'
  },

  {
    query: 'age',
    label: 'How old are you?',
    type: 'text',
    placeholder: 'Age'
  },
]

export const findQuestion = function(query) {
  const labels = questions.map(item => {
    return item.query
  })

  const position = labels.indexOf(query)
  const questionPosition = (position == -1) ? 0 : position
  const question = questions[questionPosition]

  return {question, questionPosition, questionsLength: questions.length}
}

export const nextQuestionKey = function(currentPosition) {
  const nextKey = questions[currentPosition + 1].query
  return nextKey
}

export const prevQuestionKey = function(currentPosition) {
  const prevKey = questions[currentPosition - 1].query
  return prevKey
}
