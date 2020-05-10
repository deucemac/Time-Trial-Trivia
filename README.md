# Trivia-Levels

- **App Title**: Time Trial Trivia
- **App Description**: Time Trial Trivia is an interactive trivia game that forces the user to answer questions of various difficult levels within urgent time constraints.  The user must first test their reflexes to click on moving target objects labeled with the difficulty level of the question. The first target/question labeled "EASY" will flash across the screen quickly, being that it is the most desired question for the user/player to answer.  If the user cannot catch and click the object within the short and immediate time frame presented, the user perform the same task for a target/question labeled "MEDIUM" within a short given time frame.  If the user fails to click the moving label twice in a row, they are presented with the most difficult question.  The user does not have control over which category they can choose.  The questions within the difficulty category are extremely difficult so the user will beforehand be granted the option for a true/false question if and only if they can once again click a moving object labeled "TRUE OR FALSE".  The difficult questions must be answered within 12 seconds(giving the user time to speed-Google if necessary). Full rounds consist of 7 question.  If the user does not have score over 50%, they lose.     
- **API**: The Open Trivia Database API parses out the data similar to the how the app functions.  Open Trivia provides various categories and difficult levels, as well as true/false/multiple choice questions to switch things up for the user.   
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

- **Wireframes**:  The proposed layout and design of your app. Create mockups for multiple views, including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations.
- **MVP**: A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.
- **Post-MVP**: A list of additional/advanced features you would like to include in your app after you have met MVP.
- **Goals**: What you plan to accomplish for each day of the project week.
- **Priority Matrix**: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority.
- **Timeframes**: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.





