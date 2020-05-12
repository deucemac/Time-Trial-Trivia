async function searchTrivia(number) {
  let trivia = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${number}`)
  let data = trivia.data
  
  let correctAnswer = data.results[4].correct_answer
  console.log(correctAnswer)
  
  let wrongAnswer1 = data.results[4].incorrect_answers[0]
  let wrongAnswer2 = data.results[4].incorrect_answers[1]
  let wrongAnswer3 = data.results[4].incorrect_answers[2]   
  // console.log('3rd wrong answer ' + wrongAnswer3)
  let setOfOptions = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3]
  console.log(setOfOptions)
  // console.log(setOfOptions)
  // let setOfOptions = wrongAnswers.push(correctAnswer)
  // console.log(setOfOptions)
}
searchTrivia(23)

// axios.get('https://opentdb.com/api.php?amount=10&category=23')
//   .then((res) => {
//   console.log(res)
//   })










