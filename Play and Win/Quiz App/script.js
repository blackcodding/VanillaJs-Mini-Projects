const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question:'What is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '6', correct: false},
            {text: '8', correct: false}
        ]
    },
    {
        question:'Which is not useing in Web Development',
        answers: [
            {text: 'Javascript', correct: false},
            {text: 'Kotlin', correct: true},
            {text: 'Nodejs', correct: false},
            {text: 'Mongodb', correct: false}
        ]
    },
    {
        question:'HTML is what type of language',
        answers: [
            {text: 'Scripting Language', correct: false},
            {text: 'Programming Lanuage', correct: false},
            {text: 'Markup Language', correct: true},
            {text: 'Network Protocol', correct: false}
        ]
    },
    {
        question:'Inside which HTML element do we put the Javascript',
        answers: [
            {text: '<style>', correct: false},
            {text: '<script>', correct: true},
            {text: '<meta>', correct: false},
            {text: '<article>', correct: false}
        ]
    },
    {
        question:'In css what h1 can be called as',
        answers: [
            {text: 'Selector', correct: true},
            {text: 'Attribute', correct: false},
            {text: 'Vlaue', correct: false},
            {text: 'Tag', correct: false}
        ]
    }
]