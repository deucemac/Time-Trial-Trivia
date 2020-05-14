let data;
let name;
let userScore = 0
let index = 0
let easy = false
let easyData 



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
  // setTimeout(playGame, 2500)
console.log(data)
}

// This is New-------------------------------------------------
async function getEasyData() {
  let easyTrivia = await axios.get(`https://opentdb.com/api.php?amount=7&difficulty=easy&type=multiple`)
  easyData = easyTrivia.data.results
  // setTimeout(playGame, 2500)
console.log(easyData)
}




//-------------------------------------------------------------

// let difficulty = ['hard', 'medium', 'easy'] // maybe take this out
let container = document.querySelector('.container') //perhaps make this global
let response = document.querySelector('.response')
let flyer = document.querySelector('.flying')

async function playGame() { //see how placing index as parameter changes things, consider retrying difficult as parameter too
  // difficulty = ['hard', 'medium', 'easy']  
  if (easy === true) {

  
    let correctAnswer = easyData[index].correct_answer
    let wrongAnswer1 = easyData[index].incorrect_answers[0]
    let wrongAnswer2 = easyData[index].incorrect_answers[1]
    let wrongAnswer3 = easyData[index].incorrect_answers[2]
    let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
    setOfOptions = shuffle(setOfOptions)
  
    let divContainer = document.createElement('div')
    divContainer.className = "questions"
    container.appendChild(divContainer)
    divContainer.innerHTML = `<h1 class="trivia-question">${easyData[index].question}</h1><p class="results">${setOfOptions[0]}</p><p class="results">${setOfOptions[1]}</p><p class="results">${setOfOptions[2]}</p><p class="results">${setOfOptions[3]}</p>`
    //might have to label class with your <p>'s
    let selectOptions = document.querySelectorAll('p')
    selectOptions.forEach(option => {
      option.addEventListener('click', (e) => {
      removeElements()
      console.log(correctAnswer)
      selectedChoice(correctAnswer, e.target.innerText) 
      easyButton()
    })
  })
  
  } else {
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
  
    let selectOptions = document.querySelectorAll('p')
  selectOptions.forEach(option => {
    option.addEventListener('click', (e) => {
    removeElements()
    console.log(correctAnswer)
    selectedChoice(correctAnswer, e.target.innerText) 
    easyButton()
  })
})
}
  
  
index += 1
easy = false
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
  getData()
  getEasyData()
  easyButton()
  //decideQuestion()
  //getData() //consider removing this temporarily
})

function easyButton() {
  let flyZone = document.createElement('div')
flyZone.classList.add('flying')
// console.log(flyZone)
let pTag = document.createElement('p')
// pTag.className = 'movingEl'
flyZone.classList.add('movingEl','animate__animated', 'animate__bounceInLeft', 'animate__bounceOutRight', 'animate__slower', 'animate__repeat-1')
// console.log(pTag)
pTag.innerHTML = "EASY"
  flyZone.appendChild(pTag)
 document.querySelector('.view-page').append(flyZone) 
  flyZone.addEventListener('click', () => {
  easy = true
})
  setTimeout(() => {
    playGame()
  flyZone.remove()
  }, 2000)
}


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






//   movingEl.classList.add('animate__animated', 'animate__bounceInLeft', 'animate__bounceOutRight', 'animate__slower', 'animate__repeat-1')
// movingEl.innerHTML = "EASY"

// movingEl.addEventListener('click', removeAnimation)

// function removeAnimation() {
//   let removal = document.querySelector('.movingEl')
//   removal.remove()
// }
//----------------------------------------------------------------------------------------------------

    
