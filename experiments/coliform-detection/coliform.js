/* =========================================
   EXPERIMENT 06
   DETECTION OF COLIFORMS AND
   INDICATOR ORGANISMS
========================================= */


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;
let correctAnswers = 0;
let selectedAnswer = false;


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question:
            "What is the main purpose of detecting indicator microorganisms in water?",
        
        options: [
            "To provide information about water quality and possible pollution",
            "To change the colour of the water",
            "To measure the temperature of water",
            "To identify the physical size of a water container"
        ],

        correct: 0,

        feedback:
            "Correct. The manual explains that examination of water provides information about its quality and pollution status."
    },


    {
        question:
            "What does MPN stand for?",

        options: [
            "Microbial Population Number",
            "Most Probable Number",
            "Maximum Population Number",
            "Microorganism Processing Number"
        ],

        correct: 1,

        feedback:
            "Correct. MPN stands for Most Probable Number."
    },


    {
        question:
            "What is the main purpose of the MPN technique according to the manual?",

        options: [
            "To estimate microbial population size",
            "To identify the colour of microorganisms",
            "To measure the size of laboratory equipment",
            "To determine the weight of a water sample"
        ],

        correct: 0,

        feedback:
            "Correct. The manual describes MPN as a technique for estimating microbial population sizes."
    },


    {
        question:
            "Which group is identified in the manual as a major group of faecal pollution indicators?",

        options: [
            "Coliform group",
            "Algae group",
            "Protozoa group",
            "Mushroom group"
        ],

        correct: 0,

        feedback:
            "Correct. The manual identifies the coliform group as one of the three major groups of faecal pollution indicators."
    },


    {
        question:
            "Which organism is given in the manual as a representative of the coliform group?",

        options: [
            "Streptococcus faecalis",
            "Clostridium perfringens",
            "Escherichia coli",
            "Saccharomyces cerevisiae"
        ],

        correct: 2,

        feedback:
            "Correct. Escherichia coli is given as the representative organism for the coliform group."
    },


    {
        question:
            "Which three techniques does the manual identify for bacteriological examination of water?",

        options: [
            "Gram staining, microscopy and biochemical testing",
            "Total count, membrane filtration and multiple-tube method",
            "PCR, sequencing and electrophoresis",
            "Microscopy, fermentation and staining"
        ],

        correct: 1,

        feedback:
            "Correct. The manual identifies total count, membrane filtration, and multiple-tube methods."
    },


    {
        question:
            "What is another name for the multiple-tube method?",

        options: [
            "Gram method",
            "Most Probable Number method",
            "Microscope method",
            "Staining method"
        ],

        correct: 1,

        feedback:
            "Correct. The manual states that the multiple-tube method is also known as the Most Probable Number method."
    },


    {
        question:
            "What does the total count method provide according to the manual?",

        options: [
            "The total number of microorganisms represented in a water sample",
            "The colour of the water sample",
            "The source of laboratory equipment",
            "The physical size of bacteria"
        ],

        correct: 0,

        feedback:
            "Correct. The manual describes total count, also called colony count or standard plate count, as giving the total number of microorganisms in a water sample."
    },


    {
        question:
            "Which of the following organisms is listed among the organisms of interest in bacteriological examination of water?",

        options: [
            "Indicator organisms",
            "Plant roots",
            "Insects",
            "Pollen grains"
        ],

        correct: 0,

        feedback:
            "Correct. The manual lists indicator organisms, coliforms, faecal coliforms, and faecal streptococci as organisms of interest."
    },


    {
        question:
            "Why is MPN useful when exact cell numbers are difficult to determine?",

        options: [
            "Because it estimates microbial population size using qualitative attributes and statistical interpretation",
            "Because it eliminates the need to examine samples",
            "Because it measures only the colour of microorganisms",
            "Because it directly counts every individual cell"
        ],

        correct: 0,

        feedback:
            "Correct. The manual explains that MPN estimates population size using qualitative attributes rather than a direct quantitative assessment of individual cells."
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const startActivityButton =
    document.getElementById("startActivityButton");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");

const questionTitle =
    document.getElementById("questionTitle");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const questionCounter =
    document.getElementById("questionCounter");

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

if (startActivityButton) {

    startActivityButton.addEventListener(
        "click",
        startActivity
    );

}


function startActivity() {

    currentQuestion = 0;

    correctAnswers = 0;

    selectedAnswer = false;


    document.querySelector(".start-section").style.display =
        "none";


    quizSection.style.display =
        "block";


    resultSection.style.display =
        "none";


    loadQuestion();

}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    selectedAnswer = false;


    const current = questions[currentQuestion];

    const totalQuestions = questions.length;


    /* QUESTION TITLE */

    questionTitle.textContent =
        `Question ${currentQuestion + 1}`;


    /* SCORE */

    scoreDisplay.textContent =
        calculateScore();


    /* QUESTION COUNTER */

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${totalQuestions}`;


    /* PROGRESS */

    const progress =
        Math.round(
            ((currentQuestion + 1) / totalQuestions) * 100
        );


    progressPercentage.textContent =
        `${progress}%`;


    progressFill.style.width =
        `${progress}%`;


    /* QUESTION NUMBER */

    questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");


    /* QUESTION */

    questionText.textContent =
        current.question;


    /* CLEAR OLD OPTIONS */

    answerOptions.innerHTML = "";


    /* HIDE FEEDBACK */

    feedback.style.display =
        "none";


    /* HIDE NEXT BUTTON */

    nextButton.style.display =
        "none";


    /* CREATE ANSWERS */

    current.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "answer-option";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () => selectAnswer(index, button)
            );


            answerOptions.appendChild(button);

        }
    );

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(index, selectedButton) {

    if (selectedAnswer) {
        return;
    }


    selectedAnswer = true;


    const current =
        questions[currentQuestion];


    const allOptions =
        document.querySelectorAll(".answer-option");


    /* DISABLE ALL OPTIONS */

    allOptions.forEach(
        button => {
            button.disabled = true;
        }
    );


    /* CHECK ANSWER */

    if (index === current.correct) {

        correctAnswers++;


        selectedButton.classList.add("correct");


        feedbackIcon.textContent =
            "✓";


        feedbackTitle.textContent =
            "Correct!";


        feedbackText.textContent =
            current.feedback;


        feedback.style.background =
            "#f0fdf4";


        feedback.style.borderColor =
            "#86efac";


    } else {

        selectedButton.classList.add("incorrect");


        allOptions[current.correct]
            .classList.add("correct");


        feedbackIcon.textContent =
            "✗";


        feedbackTitle.textContent =
            "Incorrect";


        feedbackText.textContent =
            `The correct answer is: ${current.options[current.correct]}. ${current.feedback}`;


        feedback.style.background =
            "#fef2f2";


        feedback.style.borderColor =
            "#fecaca";

    }


    /* UPDATE SCORE */

    scoreDisplay.textContent =
        calculateScore();


    /* SHOW FEEDBACK */

    feedback.style.display =
        "flex";


    /* CHANGE NEXT BUTTON */

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "View Final Result";

    } else {

        nextButton.textContent =
            "Next Question";

    }


    nextButton.style.display =
        "inline-block";

}


/* =========================================
   NEXT QUESTION
========================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        goToNextQuestion
    );

}


function goToNextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        showResult();

    }

}


/* =========================================
   CALCULATE SCORE
========================================= */

function calculateScore() {

    if (questions.length === 0) {
        return 0;
    }


    const percentage =
        Math.round(
            (correctAnswers / questions.length) * 100
        );


    /* NEVER ALLOW SCORE ABOVE 100 */

    return Math.min(
        100,
        Math.max(0, percentage)
    );

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    const finalPercentage =
        calculateScore();


    quizSection.style.display =
        "none";


    resultSection.style.display =
        "block";


    /* FINAL SCORE */

    finalScore.textContent =
        `${finalPercentage}%`;


    percentageResult.textContent =
        `${finalPercentage}%`;


    /* CORRECT ANSWERS */

    correctAnswersDisplay.textContent =
        correctAnswers;


    /* TOTAL QUESTIONS */

    totalQuestionsDisplay.textContent =
        questions.length;


    /* PERFORMANCE */

    let level =
        "";

    let message =
        "";


    if (finalPercentage >= 80) {

        level =
            "Excellent Performance";


        message =
            "Excellent work. You have demonstrated a strong understanding of the concepts covered in Experiment 06.";

    }

    else if (finalPercentage >= 60) {

        level =
            "Good Performance";


        message =
            "Good work. You understand many of the important concepts. Review the areas you missed to strengthen your understanding.";

    }

    else if (finalPercentage >= 50) {

        level =
            "Fair Performance";


        message =
            "You have demonstrated some understanding of the topic. Reviewing the key concepts and questions again will help strengthen your knowledge.";

    }

    else {

        level =
            "Needs Improvement";


        message =
            "Review the key concepts of coliforms, indicator organisms, water examination methods, and MPN before trying the activity again.";

    }


    performanceLevel.textContent =
        level;


    resultMessage.textContent =
        message;


    /* SAVE RESULT */

    saveResult(finalPercentage);

}


/* =========================================
   SAVE RESULT
========================================= */

function saveResult(score) {

    const result = {

        studentName:
            localStorage.getItem("studentName") ||
            "Student",

        experiment:
            "Detection of Coliforms and Indicator Organisms",

        score:
            score,

        total:
            100,

        correctAnswers:
            correctAnswers,

        totalQuestions:
            questions.length,

        date:
            new Date().toLocaleString()

    };


    let results = [];


    try {

        const savedResults =
            localStorage.getItem("simulationResults");


        if (savedResults) {

            results =
                JSON.parse(savedResults);

        }


        if (!Array.isArray(results)) {

            results = [];

        }

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

if (retryButton) {

    retryButton.addEventListener(
        "click",
        () => {

            currentQuestion = 0;

            correctAnswers = 0;

            selectedAnswer = false;


            resultSection.style.display =
                "none";


            quizSection.style.display =
                "block";


            loadQuestion();

        }
    );

}


/* =========================================
   RETURN TO DASHBOARD
========================================= */

if (dashboardButton) {

    dashboardButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "../../dashboard.html";

        }
    );

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