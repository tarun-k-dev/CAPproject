const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is HTML?',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hyper Tool Make Language',
        choice3: 'Progamming Language',
        choice4: 'Fetch API',
        answer: 1,
    },
    {
        question:
            "Who is known as the Father of AI?",
        choice1: "Fisher Ada",
        choice2: "Alan Turing",
        choice3: "John McCarthy",
        choice4: "Allen Newell",
        answer: 3,
    },
    {
        question: "Which rule is applied for the Simple reflex agent?",
        choice1: "Simple-action rule",
        choice2: "Simple & Condition-action rule",
        choice3: "Reflex Rule",
        choice4: "Condition-action rule",
        answer: 4,
    },
    {
        question: "Which of the following is an adaptive sorting algorithm?",
        choice1: "Recursive Insertion sort",
        choice2: "Merge Sort",
        choice3: "Heap Sort",
        choice4: "Selection Sort",
        answer: 1,
    },
    {
        question: 'Which of the following property changes the width of right border?',
        choice1: ':border-right-width',
        choice2: ':border-bottom-width',
        choice3: ':border-right-bottom-width',
        choice4: ':border-right-right-width',
        answer: 1,
    },
    {
        question: 'Functional Dependencies are the types of constraints that are based on______',
        choice1: 'Super Set Key',
        choice2: 'Key Revisit',
        choice3: 'None of these',
        choice4: 'Key',
        answer: 4,
    },
    {
        question:
            "Which one of the following is not the application of the stack data structure.?",
        choice1: "Asynchronous data transfer",
        choice2: "String Reversal",
        choice3: "Backtracking",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        choice1: "scroll",
        choice2: "div",
        choice3: "marquee",
        choice4: "seffect",
        answer: 3,
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        choice1: "Switch Statement",
        choice2: "Alternative to if else",
        choice3: "If then else statement",
        choice4: "immediate if",
        answer: 4,
    },
    {
        question: 'Which of the following transmission directions listed is not a legitimate channel?',
        choice1: 'Double Duplex',
        choice2: 'Simplex',
        choice3: 'Half Duplex',
        choice4: 'Full Duplex',
        answer: 1,
    },
    {
        question: 'What is the main challenge/s of NLP?',
        choice1: 'Handling Ambiguity of Sentences',
        choice2: 'Handling Tokenization',
        choice3: 'Handling POS-Tagging',
        choice4: 'None of these',
        answer: 1,
    },
    {
        question:
            "Which one of the following is a visual ( mathematical ) way to determine the deadlock occurrence?",
        choice1: "starvation graph",
        choice2: "inversion graph",
        choice3: "Shanghi graph",
        choice4: "resource allocation graph",
        answer: 4,
    },
    {
        question: "What do we use to define a block of code in Python language?",
        choice1: "Key",
        choice2: "Brackets",
        choice3: "Indentation",
        choice4: "Semi-colon",
        answer: 3,
    },
    {
        question: "Which of the following terms IS NOT one of the five basic parts of a robot?",
        choice1: "peripheral tools",
        choice2: "end effectors",
        choice3: "controllers",
        choice4: "driver",
        answer: 1,
    },
    {
        question: 'What is the name for information sent from robot sensors to robot controllers?',
        choice1: 'feedback',
        choice2: 'temperature',
        choice3: 'signal',
        choice4: 'API',
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 15

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()