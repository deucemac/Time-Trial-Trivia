async function searchTrivia(number) {
  let trivia = await axios.get(`https://opentdb.com/api.php?amount=10&category=${number}`)

  console.log(trivia)
}
searchTrivia(23)

// axios.get('https://opentdb.com/api.php?amount=10&category=23')
//   .then((res) => {
//   console.log(res)
//   })










