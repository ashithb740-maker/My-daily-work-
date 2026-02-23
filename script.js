const allQuestions = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: 2
    },
    {
        question: "Which is used for styling web pages?",
        options: ["CSS", "Java", "Python", "SQL"],
        correct: 0
    },
    {
        question: "Which language is used for backend development?",
        options: ["HTML", "CSS", "Node.js", "Photoshop"],
        correct: 2
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tool Modern Language", "Hyperlinks Text Mark", "None"],
        correct: 0
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
        correct: 1
    },
    {
        question: "Which tag is used for images in HTML?",
        options: ["<img>", "<image>", "<src>", "<pic>"],
        correct: 0
    }
];
let questions=[];
let currentQuestion = 0;
let score = 0;
let answered = false;
function startQuiz() {
    currentQuestion = 0;
    score = 0;

    // Shuffle full question bank
    shuffleArray(allQuestions);

    // Pick first 3 random questions
    questions = allQuestions.slice(0, 3);

    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    document.getElementById("question-number").innerText = "Question " + (currentQuestion + 1) + " of " + questions.length;
    answered = false;
    document.getElementById("next-btn").disabled = true;

    const questionData = questions[currentQuestion];
    document.getElementById("question").innerText = questionData.question;

    const buttons = document.getElementsByClassName("option-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = questionData.options[i];
        buttons[i].classList.remove("correct", "wrong");
        buttons[i].disabled = false;
    }
}

function checkAnswer(selected) {
    if (answered) return;

    answered = true;
    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.getElementsByClassName("option-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;

        if (i === correctIndex) {
            buttons[i].classList.add("correct");
        }
        if (i === selected && i !== correctIndex) {
            buttons[i].classList.add("wrong");
        }
    }

    if (selected === correctIndex) {
        score++;
    }

    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("final-score").innerText =
        "Your Final Score: " + score + " / " + questions.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}