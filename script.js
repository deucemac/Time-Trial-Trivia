let data;
let name;
let userScore = 0
let index = 0




 function removeElements() {
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
  // console.log(trivia)
  data = trivia.data.results
  setTimeout(playGame, 2500)
}

// This is New-------------------------------------------------
async function getEasyData() {
  let easyTrivia = await axios.get(`https://opentdb.com/api.php?amount=7&difficulty=easy&type=multiple`)
  data = easyTrivia.data.results
  setTimeout(playGame, 2500)
}

function decideQuestion() {
  flyer.appendChild(movingEl) //this might be the best placement for this action
  console.log(movingEl)
  if (movingEl.target === true) {
    console.log(`easy question`)
    getEasyData()
  } else {
    console.log(`other question`)
    getData()
  }
}


//-------------------------------------------------------------

// let difficulty = ['hard', 'medium', 'easy'] // maybe take this out
let container = document.querySelector('.container') //perhaps make this global
let response = document.querySelector('.response')
let flyer = document.querySelector('.flying')

async function playGame() { //see how placing index as parameter changes things, consider retrying difficult as parameter too
  // difficulty = ['hard', 'medium', 'easy']  
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
    //playGame(data[index], difficulty[Math.floor(Math.random() * 3)]) //not sure if it should be data[index] or index
    decideQuestion()  //playGame() //this should be decideQuestions() instead of 
  })
  
})
index += 1

}
 

let restartButton = document.querySelector('.restart') 
restartButton.addEventListener('click', function () {
  window.location.reload()
})


const input = document.getElementById('fname')  //game starts here
const button = document.querySelector('.submit')
button.addEventListener('click', function (e) {
  name = input.value
  document.querySelector('.name').remove()
  // flyer.appendChild(movingEl)
  decideQuestion()
  //getData() //consider removing this temporarily
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


// From this point on, we will attempt post mvp code------------------------------------

let movingEl = document.querySelector('.movingEl')
  movingEl.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__bounceOutRight', 'animate__slower', 'animate__repeat-1')
movingEl.innerHTML = "EASY"

movingEl.addEventListener('click', removeAnimation)

function removeAnimation() {
  let removal = document.querySelector('.movingEl')
  removal.remove()
}
//----------------------------------------------------------------------------------------------------

    
