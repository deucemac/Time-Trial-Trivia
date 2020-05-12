let data;
let name;
let userScore = 0
let index = 0

// async function triviaQuestions() {
//   let trivia = await axios.get(`https://opentdb.com/api.php?amount=1&type=multiple`)
//   let data = trivia.data.results

//   // for (let i = 0; i < data.length; i++) {}


//   console.log(data)
//   let correctAnswer = data[0].correct_answer
//   console.log(correctAnswer)

//   let wrongAnswer1 = data[0].incorrect_answers[0]
//   let wrongAnswer2 = data[0].incorrect_answers[1]
//   let wrongAnswer3 = data[0].incorrect_answers[2]   

//   let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
//   setOfOptions = shuffle(setOfOptions)
//   console.log(setOfOptions)

//   let divContainer = document.createElement('div')
//   divContainer.className = "questions"
//   // body.appendChild('.questions')
//   console.log(divContainer.innerHTML = `<h1>${data[0].question}<p>${setOfOptions[0]}</p><p>${setOfOptions[1]}</p><p>${setOfOptions[2]}</p><p>${setOfOptions[3]}</p></h1>`)

// }
//  triviaQuestions()

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



function removeElements() {
  let allElements = document.querySelector('.view-page')
  allElements.remove()
  document.body.style.backgroundSize = 'cover';
}

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

async function getData() {
  let trivia = await axios.get(`https://opentdb.com/api.php?amount=7&type=multiple`)
  data = trivia.data.results
  playGame()
}




async function playGame() {

  let correctAnswer = data[index].correct_answer
  let wrongAnswer1 = data[index].incorrect_answers[0]
  let wrongAnswer2 = data[index].incorrect_answers[1]
  let wrongAnswer3 = data[index].incorrect_answers[2]
  let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
  setOfOptions = shuffle(setOfOptions)
  let container = document.querySelector('.container')
  let divContainer = document.createElement('div')
  divContainer.className = "questions"
  container.appendChild(divContainer)
  divContainer.innerHTML = `<h1>${data[index].question}<p>${setOfOptions[0]}</p><p>${setOfOptions[1]}</p><p>${setOfOptions[2]}</p><p>${setOfOptions[3]}</p></h1>`
  //might have to label class with your <p>'s

  let selectOptions = document.querySelectorAll('p')
  selectOptions.forEach(option => {
    option.addEventListener('click', (e) => {
    playGame()
      // selectedChoice(correctAnswer, e.target.innerText)
    })

  })
index += 1

}

const input = document.getElementById('fname')
const button = document.querySelector('.submit')
button.addEventListener('click', function (e) {
  name = input.value
  getData()
})

// function selectedChoice(correctAnswer, usersChoice) {
//   if (choice.target === correctAnswer) {
//     userScore += 1
//     removeElements() // may need something in parenthesis
//     let rightChoice = document.createElement('div').className = "rightAns"
//     rightChoice.innerHTML = 'Right Answer'
//     document.body.appendChild(rightChoice) //or .querySelector('body') 
//   } else {
//     removeElements()
//     let wrongChoice = document.createElement('div').className = "wrongAns"
//     wrongChoice.innerHTML = 'Wrong Answer'
//     document.body.appendChild(wrongChoice)
//   }
// }


  //still need score tracker and way to decide winner















