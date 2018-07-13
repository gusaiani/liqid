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

  const questionPosition = labels.indexOf(query)
  const question = (questionPosition == -1) ? questions[0] : questions[questionPosition]

  return {question, questionPosition, questionsLength: questions.length}
}
