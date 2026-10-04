/* =========================================
   EXPERIMENT 09
   FUNGAL MICROSCOPIC EXAMINATION
========================================= */


/* =========================================
   QUIZ QUESTIONS
========================================= */

const questions = [

    {
        question:
            "What is the main purpose of microscopic examination of fungi?",

        options: [
            "To observe fungal morphology and characteristics",
            "To measure blood pressure",
            "To determine human blood groups",
            "To identify viruses only"
        ],

        correct: 0,

        feedback:
            "Correct. Microscopic examination provides information about the morphology and characteristics of fungi."
    },


    {
        question:
            "Which two approaches are described for studying microbial cells microscopically?",

        options: [
            "Examination of living cells and study of stained cells",
            "Blood testing and urine testing",
            "Culture counting and antibiotic testing",
            "DNA sequencing and blood grouping"
        ],

        correct: 0,

        feedback:
            "Correct. The manual describes examination of living cells and study of stained cells."
    },


    {
        question:
            "What can examination of living cells help determine?",

        options: [
            "Natural size, shape and cellular arrangement",
            "Antibiotic dosage",
            "Blood pressure",
            "Body temperature"
        ],

        correct: 0,

        feedback:
            "Correct. Living cells can be examined to determine their natural size, shape and arrangement."
    },


    {
        question:
            "Why can observation of microorganisms in their natural or unstained state sometimes be difficult?",

        options: [
            "They are semitransparent",
            "They are always invisible",
            "They contain no cellular structures",
            "They are always larger than the microscope field"
        ],

        correct: 0,

        feedback:
            "Correct. The manual explains that microbial cells can be difficult to observe because they are semitransparent."
    },


    {
        question:
            "What is one objective of fungal microscopic examination?",

        options: [
            "To observe the general external and internal morphology of fungi",
            "To determine human blood pressure",
            "To measure water hardness",
            "To identify human tissues"
        ],

        correct: 0,

        feedback:
            "Correct. One objective is to observe the general external and internal morphology of fungi."
    },


    {
        question:
            "Which characteristics of fungi are important during microscopic observation?",

        options: [
            "Size, shape, spores and hyphae",
            "Blood pressure and pulse rate",
            "Body weight and height",
            "Blood group and haemoglobin"
        ],

        correct: 0,

        feedback:
            "Correct. The manual identifies size, shape and fungal characteristics such as spores and hyphae as important observations."
    },


    {
        question:
            "What is cotton blue in lactophenol commonly used for?",

        options: [
            "Making semi-permanent microscopic preparations of fungi",
            "Measuring bacterial antibiotic resistance",
            "Counting red blood cells",
            "Testing drinking-water hardness"
        ],

        correct: 0,

        feedback:
            "Correct. Cotton blue in lactophenol is commonly used for fungal microscopic preparations."
    },


    {
        question:
            "What does cotton blue in lactophenol help make visible against a light blue background?",

        options: [
            "The walls of fungal hyphae",
            "Human red blood cells",
            "Bacterial antibiotic discs",
            "Blood vessels"
        ],

        correct: 0,

        feedback:
            "Correct. The stain provides a light blue background against which fungal hyphal walls can be readily seen."
    },


    {
        question:
            "Which fungal structures are specifically mentioned as important observations during microscopic examination?",

        options: [
            "Spores and hyphae",
            "Red blood cells and platelets",
            "Neurons and muscle fibres",
            "Blood vessels and tissues"
        ],

        correct: 0,

        feedback:
            "Correct. Spores and hyphae are specifically identified as important fungal structures to observe."
    },


    {
        question:
            "Why is fungal morphology useful during microscopic examination?",

        options: [
            "It provides characteristics that help recognize and describe fungi",
            "It determines a person's blood group",
            "It measures the concentration of oxygen in blood",
            "It replaces all other laboratory observations"
        ],

        correct: 0,

        feedback:
            "Correct. Morphological characteristics provide useful information for recognizing and describing fungi."
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;


/* =========================================
   DOM ELEMENTS
========================================= */

const startButton = document.getElementById("startButton");

const quizSection = document.getElementById("quizSection");

const questionTitle = document.getElementById("questionTitle");

const scoreDisplay = document.getElementById("scoreDisplay");

const questionCounter = document.getElementById("questionCounter");

const progressPercentage =
    document.getElementById("progressPercentage");

const progressFill =
    document.getElementById("progressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const answerOptions =
    document.getElementById("answerOptions");

const feedback =
    document.getElementById("feedback");

const feedbackIcon =
    document.getElementById("feedbackIcon");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const nextButton =
    document.getElementById("nextButton");


/* =========================================
   RESULT ELEMENTS
========================================= */

const resultSection =
    document.getElementById("resultSection");

const finalScore =
    document.getElementById("finalScore");

const performanceLevel =
    document.getElementById("performanceLevel");

const resultMessage =
    document.getElementById("resultMessage");

const correctAnswers =
    document.getElementById("correctAnswers");

const totalQuestions =
    document.getElementById("totalQuestions");

const percentageResult =
    document.getElementById("percentageResult");

const retryButton =
    document.getElementById("retryButton");

const dashboardButton =
    document.getElementById("dashboardButton");


/* =========================================
   START ACTIVITY
========================================= */

startButton.addEventListener("click", function () {

    document.querySelector(".start-section").style.display = "none";

    quizSection.style.display = "block";

    currentQuestion = 0;
    score = 0;
    answered = false;

    showQuestion();

});


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question = questions[currentQuestion];

    answered = false;

    questionNumber.textContent =
        currentQuestion + 1;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent =
        question.question;

    questionTitle.textContent =
        "Fungal Microscopic Examination";

    scoreDisplay.textContent =
        score;


    /* -----------------------------------------
       PROGRESS
    ----------------------------------------- */

    const progress =
        Math.round(
            (currentQuestion / questions.length) * 100
        );

    progressPercentage.textContent =
        `${progress}%`;

    progressFill.style.width =
        `${progress}%`;


    /* -----------------------------------------
       CLEAR PREVIOUS OPTIONS
    ----------------------------------------- */

    answerOptions.innerHTML = "";

    feedback.style.display = "none";

    nextButton.style.display = "none";


    /* -----------------------------------------
       CREATE ANSWER OPTIONS
    ----------------------------------------- */

    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";

        button.textContent =
            option;

        button.type = "button";

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        answerOptions.appendChild(button);

    });

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const optionButtons =
        document.querySelectorAll(".answer-option");


    /* -----------------------------------------
       DISABLE ALL OPTIONS
    ----------------------------------------- */

    optionButtons.forEach(function (button) {
        button.disabled = true;
    });


    /* -----------------------------------------
       SHOW CORRECT ANSWER
    ----------------------------------------- */

    optionButtons[question.correct]
        .classList.add("correct");


    /* -----------------------------------------
       CHECK SELECTED ANSWER
    ----------------------------------------- */

    if (selectedIndex === question.correct) {

        score++;

        selectedButton.classList.add("correct");

        feedbackIcon.textContent = "✓";

        feedbackTitle.textContent =
            "Correct!";

        feedbackText.textContent =
            question.feedback;

    } else {

        selectedButton.classList.add("incorrect");

        feedbackIcon.textContent = "✗";

        feedbackTitle.textContent =
            "Incorrect";

        feedbackText.textContent =
            `The correct answer is: ${question.options[question.correct]}`;

    }


    /* -----------------------------------------
       UPDATE SCORE
    ----------------------------------------- */

    scoreDisplay.textContent =
        score;


    /* -----------------------------------------
       SHOW FEEDBACK
    ----------------------------------------- */

    feedback.style.display =
        "flex";


    /* -----------------------------------------
       NEXT BUTTON
    ----------------------------------------- */

    nextButton.style.display =
        "block";

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "View Final Result →";

    } else {

        nextButton.textContent =
            "Next Question →";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

nextButton.addEventListener("click", function () {

    if (!answered) {
        return;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResults();

    }

});


/* =========================================
   CALCULATE FINAL SCORE
========================================= */

function calculateScore() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    return Math.max(0, Math.min(100, percentage));

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {

    const percentage =
        calculateScore();


    quizSection.style.display =
        "none";

    resultSection.style.display =
        "block";


    finalScore.textContent =
        `${percentage}%`;

    correctAnswers.textContent =
        score;

    totalQuestions.textContent =
        questions.length;

    percentageResult.textContent =
        `${percentage}%`;


    setPerformance(percentage);

    saveResult(percentage);


    /* -----------------------------------------
       COMPLETE PROGRESS
    ----------------------------------------- */

    progressPercentage.textContent =
        "100%";

    progressFill.style.width =
        "100%";

}


/* =========================================
   PERFORMANCE LEVEL
========================================= */

function setPerformance(percentage) {

    if (percentage >= 80) {

        performanceLevel.textContent =
            "Excellent Performance";

        resultMessage.textContent =
            "Excellent! You have a strong understanding of fungal microscopic examination and morphology.";

    } else if (percentage >= 60) {

        performanceLevel.textContent =
            "Good Performance";

        resultMessage.textContent =
            "Good work! You understand many of the important concepts of fungal microscopic examination.";

    } else if (percentage >= 50) {

        performanceLevel.textContent =
            "Fair Performance";

        resultMessage.textContent =
            "You have a basic understanding. Review fungal morphology and microscopic observations to strengthen your knowledge.";

    } else {

        performanceLevel.textContent =
            "Needs Improvement";

        resultMessage.textContent =
            "Review the key concepts of fungal microscopic examination and try the activity again.";

    }

}


/* =========================================
   SAVE RESULT
========================================= */

function saveResult(percentage) {

    const studentName =
        localStorage.getItem("studentName") || "Student";


    const result = {

        studentName: studentName,

        experimentNumber: 9,

        experiment:
            "Microscopic Examination and General Morphology of Fungi",

        score: percentage,

        total: 100,

        correctAnswers: score,

        totalQuestions: questions.length,

        date: new Date().toLocaleString()

    };


    let results = [];


    try {

        results =
            JSON.parse(
                localStorage.getItem("simulationResults")
            ) || [];

    } catch (error) {

        results = [];

    }


    results.push(result);


    localStorage.setItem(
        "simulationResults",
        JSON.stringify(results)
    );

}


/* =========================================
   RETRY ACTIVITY
========================================= */

retryButton.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;

    answered = false;


    resultSection.style.display =
        "none";

    quizSection.style.display =
        "block";


    showQuestion();

});


/* =========================================
   RETURN TO DASHBOARD
========================================= */

dashboardButton.addEventListener("click", function () {

    window.location.href =
        "../../dashboard.html";

});