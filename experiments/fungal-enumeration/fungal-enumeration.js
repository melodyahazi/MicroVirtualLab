/* =========================================
   EXPERIMENT 11
   ENUMERATION OF FUNGI
   YEASTS AND MOLDS
========================================= */


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;
let correctAnswers = 0;
let selectedAnswer = false;

const totalQuestions = 10;


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question:
            "What is the main purpose of fungal enumeration in food examination?",

        options: [
            "To determine or estimate the fungal presence in a food sample",
            "To change the color of food",
            "To increase the size of food particles",
            "To remove all microorganisms from food"
        ],

        correct: 0,

        explanation:
            "Fungal enumeration is concerned with determining or estimating the presence of fungi such as yeasts and molds in a food sample."
    },


    {
        question:
            "Which two major types of microscopic fungi are emphasized in Experiment 11?",

        options: [
            "Bacteria and viruses",
            "Yeasts and molds",
            "Algae and protozoa",
            "Bacteria and algae"
        ],

        correct: 1,

        explanation:
            "The experiment focuses on the enumeration of food-borne fungi, particularly yeasts and molds."
    },


    {
        question:
            "Why are yeasts and molds important in food examination?",

        options: [
            "They can contribute to food deterioration and decomposition",
            "They always improve food quality",
            "They prevent all food contamination",
            "They are only found in laboratory equipment"
        ],

        correct: 0,

        explanation:
            "The manual explains that both yeasts and molds can cause various degrees of deterioration and decomposition of foods."
    },


    {
        question:
            "What can sometimes happen when a food appears to be mold-free?",

        options: [
            "It can still contain fungal contamination",
            "It automatically contains no microorganisms",
            "It becomes sterile immediately",
            "It cannot be examined microbiologically"
        ],

        correct: 0,

        explanation:
            "The manual notes that a food can appear mold-free but may still be found contaminated after mycological examination."
    },


    {
        question:
            "Which two methods are mentioned in the manual for detecting fungi in foods?",

        options: [
            "Gram staining and catalase testing",
            "Dilution plating and direct plating",
            "Microscopy and vaccination",
            "Fermentation and filtration only"
        ],

        correct: 1,

        explanation:
            "The manual identifies dilution plating and direct plating as methods used to detect fungi in foods."
    },


    {
        question:
            "According to the manual, which method is more efficient for detecting individual mold species?",

        options: [
            "Direct plating",
            "Dilution plating",
            "Gram staining",
            "Biochemical testing"
        ],

        correct: 0,

        explanation:
            "The manual states that direct plating is more efficient than dilution plating for detecting individual mold species."
    },


    {
        question:
            "According to the manual, direct plating is less effective for detecting which organisms?",

        options: [
            "Molds",
            "Yeasts",
            "All fungi equally",
            "Bacteria only"
        ],

        correct: 1,

        explanation:
            "The manual specifically states that direct plating is less effective in detecting yeasts."
    },


    {
        question:
            "What can direct plating help determine regarding mold presence?",

        options: [
            "Whether the mold is associated with external contamination or internal invasion",
            "The color of the food package",
            "The nutritional value of the food",
            "The age of the laboratory equipment"
        ],

        correct: 0,

        explanation:
            "The manual explains that direct plating can be used to determine whether mold presence is due to external contamination or internal invasion."
    },


    {
        question:
            "What factors can affect the detectability of fungi in or on foods?",

        options: [
            "Food type, organisms involved, and degree of invasion",
            "Food color only",
            "Package size only",
            "The name of the laboratory"
        ],

        correct: 0,

        explanation:
            "The manual states that fungal detectability depends on the food type, organisms involved, and degree of invasion."
    },


    {
        question:
            "What is one important reason for examining yeasts and molds in foods?",

        options: [
            "They may contribute to food deterioration and some molds may produce mycotoxins",
            "They always make food safer",
            "They eliminate all other microorganisms",
            "They prevent food from changing"
        ],

        correct: 0,

        explanation:
            "The manual describes food deterioration associated with yeasts and molds and notes that some food-borne molds may produce toxic metabolites known as mycotoxins."
    }

];


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

const resultSection =
    document.getElementById("resultSection");

const finalScore =
    document.getElementById("finalScore");

const performanceLevel =
    document.getElementById("performanceLevel");

const resultMessage =
    document.getElementById("resultMessage");

const correctAnswersDisplay =
    document.getElementById("correctAnswers");

const totalQuestionsDisplay =
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

if (startButton) {

    startButton.addEventListener("click", function () {

        startButton.parentElement.style.display = "none";

        quizSection.style.display = "block";

        currentQuestion = 0;

        correctAnswers = 0;

        selectedAnswer = false;

        loadQuestion();

        quizSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    selectedAnswer = false;

    feedback.style.display = "none";

    nextButton.style.display = "none";

    const question = questions[currentQuestion];

    questionNumber.textContent =
        currentQuestion + 1;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${totalQuestions}`;

    questionText.textContent =
        question.question;

    scoreDisplay.textContent =
        correctAnswers;

    answerOptions.innerHTML = "";


    /* -----------------------------------------
       PROGRESS
    ----------------------------------------- */

    const progress =
        Math.round(
            ((currentQuestion + 1) / totalQuestions) * 100
        );

    progressPercentage.textContent =
        `${progress}%`;

    progressFill.style.width =
        `${progress}%`;


    /* -----------------------------------------
       ANSWER OPTIONS
    ----------------------------------------- */

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";

        button.textContent =
            option;

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

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;

    const question =
        questions[currentQuestion];

    const allOptions =
        document.querySelectorAll(".answer-option");


    /* -----------------------------------------
       DISABLE ALL OPTIONS
    ----------------------------------------- */

    allOptions.forEach(option => {

        option.disabled = true;

    });


    /* -----------------------------------------
       CORRECT ANSWER
    ----------------------------------------- */

    if (selectedIndex === question.correct) {

        correctAnswers++;

        selectedButton.classList.add("correct");

        feedbackIcon.textContent = "✓";

        feedbackTitle.textContent =
            "Correct!";

        feedbackText.textContent =
            question.explanation;

    }

    /* -----------------------------------------
       INCORRECT ANSWER
    ----------------------------------------- */

    else {

        selectedButton.classList.add("incorrect");

        allOptions[question.correct]
            .classList.add("correct");

        feedbackIcon.textContent = "✗";

        feedbackTitle.textContent =
            "Not Quite";

        feedbackText.textContent =
            `The correct answer is: ${question.options[question.correct]}. ${question.explanation}`;

    }


    /* -----------------------------------------
       UPDATE SCORE
    ----------------------------------------- */

    scoreDisplay.textContent =
        correctAnswers;


    /* -----------------------------------------
       SHOW FEEDBACK
    ----------------------------------------- */

    feedback.style.display =
        "flex";


    /* -----------------------------------------
       NEXT BUTTON
    ----------------------------------------- */

    nextButton.style.display =
        "inline-block";


    if (currentQuestion === totalQuestions - 1) {

        nextButton.textContent =
            "View Final Result →";

    }

    else {

        nextButton.textContent =
            "Next Question →";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

if (nextButton) {

    nextButton.addEventListener("click", function () {

        if (currentQuestion < totalQuestions - 1) {

            currentQuestion++;

            loadQuestion();

            quizSection.scrollIntoView({
                behavior: "smooth"
            });

        }

        else {

            showResults();

        }

    });

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {

    quizSection.style.display =
        "none";

    resultSection.style.display =
        "block";


    /* -----------------------------------------
       CALCULATE PERCENTAGE
    ----------------------------------------- */

    const percentage =
        Math.round(
            (correctAnswers / totalQuestions) * 100
        );


    /* -----------------------------------------
       UPDATE RESULT
    ----------------------------------------- */

    finalScore.textContent =
        `${percentage}%`;

    correctAnswersDisplay.textContent =
        correctAnswers;

    totalQuestionsDisplay.textContent =
        totalQuestions;

    percentageResult.textContent =
        `${percentage}%`;


    /* -----------------------------------------
       PERFORMANCE
    ----------------------------------------- */

    if (percentage >= 80) {

        performanceLevel.textContent =
            "Excellent Performance!";

        resultMessage.textContent =
            "Excellent! You have demonstrated a strong understanding of fungal enumeration, yeasts, molds and their detection in food examination.";

    }

    else if (percentage >= 60) {

        performanceLevel.textContent =
            "Good Performance!";

        resultMessage.textContent =
            "Good work! You understand many of the important concepts related to enumeration of fungi.";

    }

    else if (percentage >= 50) {

        performanceLevel.textContent =
            "Fair Performance";

        resultMessage.textContent =
            "You have a basic understanding of the topic. Review the key concepts and try the activity again.";

    }

    else {

        performanceLevel.textContent =
            "Needs Improvement";

        resultMessage.textContent =
            "Review the concepts of yeasts, molds, fungal detection and enumeration before trying the activity again.";

    }


    /* -----------------------------------------
       SAVE RESULT
    ----------------------------------------- */

    saveSimulationResult(percentage);


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   SAVE RESULT
========================================= */

function saveSimulationResult(percentage) {

    const studentName =
        localStorage.getItem("studentName") || "Student";


    const result = {

        studentName: studentName,

        experiment:
            "Enumeration of Fungi (Yeasts and Molds)",

        score: percentage,

        total: 100,

        correctAnswers:
            correctAnswers,

        totalQuestions:
            totalQuestions,

        date:
            new Date().toLocaleString()

    };


    let results = [];

    try {

        const storedResults =
            localStorage.getItem("simulationResults");

        if (storedResults) {

            results =
                JSON.parse(storedResults);

            if (!Array.isArray(results)) {

                results = [];

            }

        }

    }

    catch (error) {

        console.error(
            "Could not read saved simulation results:",
            error
        );

        results = [];

    }


    results.push(result);


    localStorage.setItem(
        "simulationResults",
        JSON.stringify(results)
    );

}


/* =========================================
   RETRY
========================================= */

if (retryButton) {

    retryButton.addEventListener("click", function () {

        currentQuestion = 0;

        correctAnswers = 0;

        selectedAnswer = false;


        resultSection.style.display =
            "none";

        quizSection.style.display =
            "block";


        loadQuestion();


        quizSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* =========================================
   RETURN TO DASHBOARD
========================================= */

if (dashboardButton) {

    dashboardButton.addEventListener("click", function () {

        window.location.href =
            "../../dashboard.html";

    });

}


/* =========================================
   INITIAL STATE
========================================= */

if (quizSection) {

    quizSection.style.display =
        "none";

}

if (resultSection) {

    resultSection.style.display =
        "none";

}