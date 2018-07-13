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

  const queryPosition = labels.indexOf(query)
  return (queryPosition == -1) ? questions[0] : questions[queryPosition]
}
