/* eslint-env jest */
import {findQuestion} from 'utils/questions'

describe('utils/questions', () => {
  it('should findQuestion with valid query', () => {
    const query = 'salary'
    const {question} = findQuestion(query)
    expect(question.label).toBe("What is your current salary?")
  })
})
