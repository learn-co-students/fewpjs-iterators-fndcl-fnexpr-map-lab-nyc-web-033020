const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// const titleCased = (tutorials) => {
//   return tutorials.map(title => {
//     let titleArray = title.split(' ')
//     let newArray = titleArray.map(word => {
//       word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     return newArray.join(' ')
//   })
// };

// const titleCased = (tutorials) => {
//   return tutorials.map(makeTutorialsTitleCase)
// };

// const makeTutorialsTitleCase = (title) => {
//   let titleArray = title.split(' ')
//   return titleArray.map(makeTitleTitleCased).join(' ')
// };

// const makeTitleTitleCased = (word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1)
// };

// console.log(titleCased(tutorials))

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}
