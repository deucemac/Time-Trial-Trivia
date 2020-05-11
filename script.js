async function searchTrivia(number) {
  let trivia = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${number}`)
  let data = trivia.data
  
  let correctAnswer = data.results[i].correct_answer
  let wrongAnswers = data.results[i].incorrect_answers
  let setOfOptions = wrongAnswers.push(correctAnswer)
  
  console.log(trivia.data.results)
}
searchTrivia(23)

// axios.get('https://opentdb.com/api.php?amount=10&category=23')
//   .then((res) => {
//   console.log(res)
//   })










