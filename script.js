async function searchTrivia(number) {
  let trivia = await axios.get(`https://opentdb.com/api.php?amount=4&type=multiple&category=${number}`)
  let data = trivia.data
  
  let correctAnswer = data.results[4].correct_answer
  console.log(correctAnswer)
  
  let wrongAnswer1 = data.results[4].incorrect_answers[0]
  let wrongAnswer2 = data.results[4].incorrect_answers[1]
  let wrongAnswer3 = data.results[4].incorrect_answers[2]   
  // console.log('3rd wrong answer ' + wrongAnswer3)
  let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
  console.log(setOfOptions)

}
// searchTrivia(23)

// axios.get('https://opentdb.com/api.php?amount=10&category=23')
//   .then((res) => {
//   console.log(res)
//   })

// function grabName(name) {
//   name.preventDefault()
//   const input = document.getElementById('fname')
//   const value = input.value
//   console.log(value)
//   return value
// }
// const button = document.querySelector('.submit')

const input = document.getElementById('fname')
const button = document.querySelector('.submit')
button.addEventListener('click', function(e) {
  e.preventDefault()
  let inputValue = input.value
  console.log(inputValue)
  removeElements()
  return inputValue
})

function removeElements() {
  let allElements = document.querySelector('.view-page')
  allElements.remove()
  document.body.style.backgroundSize = 'cover';
}

function presentQuestions() {
 
}








