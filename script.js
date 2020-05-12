async function searchTrivia() {
  let trivia = await axios.get(`https://opentdb.com/api.php?amount=1&type=multiple`)
  let data = trivia.data.results
  console.log(data)
  let correctAnswer = data[0].correct_answer
  console.log(correctAnswer)
  
  let wrongAnswer1 = data[0].incorrect_answers[0]
  let wrongAnswer2 = data[0].incorrect_answers[1]
  let wrongAnswer3 = data[0].incorrect_answers[2]   
  // console.log('3rd wrong answer ' + wrongAnswer3)
  let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
  setOfOptions = shuffle(setOfOptions)
  console.log(setOfOptions)
  
  let divContainer = document.createElement('div')
  divContainer.className = "questions"
  console.log(divContainer.innerHTML = `<h1>${data[0].question}<p>${setOfOptions[0]}</p><p>${setOfOptions[1]}</p><p>${setOfOptions[2]}</p><p>${setOfOptions[3]}</p></h1>`)

}
 searchTrivia()

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

// const input = document.getElementById('fname')
// const button = document.querySelector('.submit')
// button.addEventListener('click', function(e) {
//   e.preventDefault()
//   let inputValue = input.value
//   console.log(inputValue)
//   removeElements()
//   return inputValue
// })

// function removeElements() {
//   let allElements = document.querySelector('.view-page')
//   allElements.remove()
//   document.body.style.backgroundSize = 'cover';
// }

function shuffle(arr) {
  let shuffleStart = arr.length
  let tempVal, index
  
  while (shuffleStart > 0) {
    index = Math.floor(Math.random() * 4)
    
    shuffleStart--
  
    tempVal = arr[shuffleStart]
    arr[shuffleStart] = arr[index]
    arr[index] = tempVal
  }
  return arr
}











