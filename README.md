# Snag That Question

- **App Title**: Snag That Question
- **App Description**: Time Trial Trivia is an interactive trivia game that forces the user to answer questions of various difficult levels.  The user must test their reflexes to click on the moving target object labeled with the difficulty level of the question. The first target/question labeled "EASY" will flash across the screen quickly, being that it is the most desired question for the user/player to answer.  If the user cannot catch and click the object within the short and immediate time frame presented, the user is presented with a medium or hard question.  The user does not have control over which category they can choose. Full rounds consist of 7 question.  If the user does not have a score over 50%, they lose.     
- **API**: The Open Trivia Database API parses out the data similar to the how the app functions.  Open Trivia provides various categories and difficult levels, as well as true/false/multiple choice questions. 
- **API Snippet**: 
```JSON
{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who had a 1976 hit with the song &#039;You Make Me Feel Like Dancing&#039;?",
            "correct_answer": "Leo Sayer",
            "incorrect_answers": [
                "Elton John",
                "Billy Joel",
                "Andy Gibb"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Pink Floyd made this song for their previous lead singer Syd Barrett.",
            "correct_answer": "Shine On You Crazy Diamond",
            "incorrect_answers": [
                "Wish You Were Here",
                "Have A Cigar",
                "Welcome to the Machine"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these is NOT a name of an album released by American rapper Pitbull?",
            "correct_answer": "Welcome to Miami",
            "incorrect_answers": [
                "Dale",
                "Global Warming",
                "Armando"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following bands is Tom DeLonge not a part of?",
            "correct_answer": "+44",
            "incorrect_answers": [
                "Box Car Racer",
                "Blink-182",
                "Angels &amp; Airwaves"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these bands was a featuring artist in Compton rapper Kendrick Lamar&#039;s 2017 album, &quot;DAMN.&quot;?",
            "correct_answer": "U2",
            "incorrect_answers": [
                "Radiohead",
                "Coldplay",
                "Bon Jovi"
            ]
        }
    ]
}
```

## **Wireframes**:  

https://wireframe.cc/pro/pp/183e11765341790

https://wireframe.cc/pro/pp/28492de3d341796

https://wireframe.cc/pro/pp/241e1bf1c341918

https://wireframe.cc/pro/pp/c0c8def99341931

- **MVP**: A list of features for the Minimum Viable Product.
1. Changing Browser prompts(different pages that switch out and present new information as the user/player selects different options)
2. animated and moving game prompts that test the users reflexes
3. wide range of trivia categories presented along with both true/false questions and multiple choice.  
4. A set of Data that provides the questions/answers
5. Feature that keep track of score and store the results.
6. An end of the game prompt that tells the user if they have won.
- **Post-MVP**: A list of additional/advanced features to include in the app after MVP.
1. Multiplayer option to allow two or more players to compete
2. Timer/Count-down clock for each question
3. Provide ability for the user to choose category.
4. Add additional trivia API that provides more questions and categories.
- **Goals**: What you plan to accomplish for each day of the project week.

|  Day | Deliverable | Status |
|---|---| ---|
|May 8| Project Prompt | Incomplete
|May 9-10| Wireframes / Priority Matrix / Timeframes | 
|May 11| Essential design layout of the HTML and CSS(buttons, backgrounds) | 
|May 12| DOM Manipulation & adding elements through JS | 
|May 13| adding the score response and restart prompt | 
|May 14| complete all necessary items for MVP | 
|May 15| Present the project | 
## Priority Matrix
https://wireframe.cc/pro/pp/170d93ded341939


## **Timeframes**:

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Page Layout | H | 2hrs| 2hrs | 2.5hrs |
| Working with API | H | 4hrs| 6hrs | 6hrs |
| JavaScript | H | 12hrs| 16hrs | 16hrs |
| CSS | H | 6hrs| 8hrs | 9hrs |
| HTML | H | 2hrs| 2hrs | 2hrs |


## Code Snippet
```
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
 ```
## Change Log

The original plan to include a timer for each question was deferred.  Including the interactive animation and placing it in between each question took up more time than what was originally expected.  The "Select Category" option as a dropdown menu was also set aside to save time.   

