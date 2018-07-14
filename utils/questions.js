export const questions = [
  {
    query: 'name',
    label: 'What is your name?',
    type: 'text',
    placeholder: 'Name'
  },

  {
    query: 'age',
    label: 'How old are you?',
    type: 'select',
    placeholder: 'Age',
    options: [
      {
        label: 'Twelve',
        value: '12'
      },
      {
        label: 'Eighteen',
        value: '18'
      },
      {
        label: 'Twenty-Eight',
        value: '28'
      },
    ],
  },

  {
    query: 'salary',
    label: 'What is your current salary?',
    type: 'radio',
    placeholder: 'Current Salary',
    options: [
      {
        label: 'Twelve',
        value: '12'
      },
      {
        label: 'Eighteen',
        value: '18'
      },
      {
        label: 'Twenty-Eight',
        value: '28'
      },
    ],
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

export const firstQuestionKey = questions[0].query
export const lastQuestionKey = questions[questions.length - 1].query

export const nextQuestionKey = function(currentPosition) {
  const nextQuestion = questions[currentPosition + 1]
  const nextKey = nextQuestion ? nextQuestion.query : undefined
  return nextKey
}

export const prevQuestionKey = function(currentPosition) {
  const prevKey = questions[currentPosition - 1].query
  return prevKey
}
