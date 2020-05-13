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
//   let allElements = document.querySelector('.view-page')
//   allElements.remove()
//   document.body.style.backgroundSize = 'cover';
     let elementsToEmpty = document.querySelector('.questions')
   elementsToEmpty.remove()
   document.querySelector('h1').remove()
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
  // playGame()
  setTimeout(playGame, 1000)
}



let container = document.querySelector('.container') //perhaps make this global
let response = document.querySelector('.response')
async function playGame() {
 
  let correctAnswer = data[index].correct_answer
  let wrongAnswer1 = data[index].incorrect_answers[0]
  let wrongAnswer2 = data[index].incorrect_answers[1]
  let wrongAnswer3 = data[index].incorrect_answers[2]
  let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
  setOfOptions = shuffle(setOfOptions)
  let divContainer = document.createElement('div')
  divContainer.className = "questions"
  container.appendChild(divContainer)
  divContainer.innerHTML = `<h1 class="trivia-question">${data[index].question}</h1><p class="results">${setOfOptions[0]}</p><p class="results">${setOfOptions[1]}</p><p class="results">${setOfOptions[2]}</p><p class="results">${setOfOptions[3]}</p>`
  //might have to label class with your <p>'s

  let selectOptions = document.querySelectorAll('p')
  selectOptions.forEach(option => {
    option.addEventListener('click', (e) => {
    removeElements()
    console.log(correctAnswer)
    selectedChoice(correctAnswer, e.target.innerText)
    
    playGame()
  })
  
})
index += 1

}

let restartButton = document.querySelector('.restart') //This is a major hiccup
restartButton.addEventListener('click', function (e) {
  getData()
})


const input = document.getElementById('fname')
const button = document.querySelector('.submit')
button.addEventListener('click', function (e) {
  name = input.value
  getData()
  document.querySelector('.name').remove()
})


function selectedChoice(correctAnswer, usersChoice) {
  if (usersChoice === correctAnswer) {
    userScore += 1
    let choice = document.createElement('h1')
    choice.classList.add('remove')
    choice.innerHTML = 'Right Answer'
    response.appendChild(choice)
  } else {
    let wrongChoice = document.createElement('h1')
    wrongChoice.innerHTML = `Wrong Answer, correct answer was ${correctAnswer}`
    wrongChoice.classList.add('remove')
    response.appendChild(wrongChoice)
  }

  if (index > 6) {
    if (userScore >= 4) {
      let youWin = document.createElement('h1')
      youWin.innerHTML = 'Congrats You Win'
      response.appendChild(youWin)
    } else {
      let youWin = document.createElement('h1')
      youWin.innerHTML = 'Not enough to Win, under 50%'
      response.appendChild(youWin)
    }

  }
}



  















