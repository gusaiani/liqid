[![Build Status](https://travis-ci.org/gusaiani/liqid.svg?branch=master)](https://travis-ci.org/gusaiani/liqid)

# Liqid Next.js Questionnaire

This is a questionnaire prototype built with React and Next.js for Liqid.de

## Install

`yarn install`

## Run

`yarn start`

Now you're ready to go to `http://localhost:3000` in your browser.

## About the specs and their implementation

### Each page includes...

###### one question

✔, see `/pages/index.js` as the entry point

###### one of the following input types to answer the question

  * Text input field
    * ✔, see `/components/shared/Form/TextInput`

  * Dropdown (several options, one selectable)
    * ✔, see `/components/shared/Form/SelectInput`

  * Radio buttons (multiple inputs, one selectable)
    * ✔, see `/components/shared/Form/RadioInput`

###### One back button to go to the previous page of the journey (if not on first page)
  * ✔

###### One next button to go to the next page of the journey (if not on summary / last page)
  * ✔

###### The button should be disabled if no input is given yet for the current page
  * ✔

###### The last page shows a summary of all questions with answers (no wireframe included, just make something up)
  * ✔, see `http://localhost:3000/results`, code in `pages/results.js`

###### The survey can be browsed using the native browser back / next button
  * ✔, see `http://localhost:3000/results`, code in `pages/results.js`

###### **BONUS**: A progress indicator bar
  * ✔

###### **BONUS**: When closing the browser window and reopening it, the progress with its data is restored
  * ✔, using `localStorage`

### Implementation & hints

###### Use data structures to create a dynamic user journey and make it easy to add / remove / edit pages via code
  * ✔, see `/utils/questions.js`, the first export is an array of objects for the questions.

###### Write plain, modern JavaScript (ES6 / ES7) or TypeScript
  * You are allowed to use libraries and frameworks to build web apps like React.js, Angular.js, Vue.js or Ember.js and libraries for state management.
    * ✔, here you'll see React and Next.js, see `/packages.json`
    * I chose not to use a library for state management since this is a relatively simple state-handling case

  * Do not use libraries explicitly built for the various features of the survey. (progress bar, form elements, etc.)
    * ✔, all right, didn't use any

###### Structure CSS( SCSS, LESS, STYLUS...) with an eye on scalability & maintainability
  * ✔, I actually used `styled components`, which is built for s11y & m15y as it encapsulates styles per component, thus saving the frontend team from dealing with side-effects in CSS.

###### Think about UX & a11ys

###### Please create a repository and deliver your code on Github
  * ✔, https://github.com/gusaiani/liqid

###### (**BONUS** if you make just regular commits as in your usual work flow instead of just pushing everything when you are finished)
  * ✔, https://github.com/gusaiani/liqid/commits/master

###### **have fun!**
  * ✔, fun has been had!

### Evaluation Criteria

Our goal is to find answers to the following questions and to get a sense for how you write code and solve problems.

  * **UX / UI:** Does the survey adapt well to different devices (mobile / desktop) in terms of user experience and design.
  * **Code Quality:** Is the code clean, consistent, well-structured and easy to understand? Do you demonstrate a good understanding of ES6 & semantic HTML?
  * **Performance:** Is the app running smoothly? How does it work with a slow internet connection? Does the UI render quickly? Are the choice of libraries etc. appropriate for the given task?
  * **BONUS**: Are code quality tools in place? Did you write tests?
    * So far we have eslint, prettier, and one test set up with jest.
