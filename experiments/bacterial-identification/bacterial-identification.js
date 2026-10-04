/* =========================================
   EXPERIMENT 07
   BACTERIAL IDENTIFICATION
   THROUGH BIOCHEMICAL REACTIONS
========================================= */


/* =========================================
   QUIZ QUESTIONS
========================================= */

const questions = [

    {
        question:
            "What is the main purpose of biochemical tests in bacterial identification?",

        options: [
            "To determine the colour of the laboratory equipment",
            "To distinguish bacteria using their biochemical and enzymatic characteristics",
            "To measure the size of the laboratory container",
            "To determine the age of the laboratory"
        ],

        correctAnswer: 1,

        explanation:
            "Biochemical tests help distinguish bacterial groups by examining differences in metabolism and enzymatic activities."
    },


    {
        question:
            "Bacterial physiology can differ from one species to another mainly because of differences in:",

        options: [
            "Metabolic activities and enzyme production",
            "Laboratory room size",
            "Colour of the microscope",
            "Shape of the petri dish"
        ],

        correctAnswer: 0,

        explanation:
            "The manual explains that bacterial species can differ in carbohydrate, protein and fat metabolism, enzyme production, and utilization of particular compounds."
    },


    {
        question:
            "What role do enzymes play in biochemical identification?",

        options: [
            "They identify the laboratory equipment",
            "They mediate biochemical reactions that can provide identification characteristics",
            "They prevent all bacterial growth",
            "They determine the colour of the microscope"
        ],

        correctAnswer: 1,

        explanation:
            "The manual explains that enzymes produced by bacteria participate in biochemical reactions and their activities can help identify bacterial species."
    },


    {
        question:
            "Which of the following is listed in the manual as a basic biochemical test?",

        options: [
            "Catalase test",
            "Microscope cleaning test",
            "Glass thickness test",
            "Water colour test"
        ],

        correctAnswer: 0,

        explanation:
            "Catalase is one of the basic biochemical tests listed in Experiment 07."
    },


    {
        question:
            "Which group of tests is mentioned in the manual for identifying Gram-negative bacteria?",

        options: [
            "Indole, Oxidase, Citrate and Urease",
            "Microscope, balance and autoclave",
            "Staining, weighing and filtration",
            "Temperature, pressure and volume"
        ],

        correctAnswer: 0,

        explanation:
            "The manual states that Gram-negative bacteria require a set of biochemical tests, including Indole, Oxidase, Citrate and Urease."
    },


    {
        question:
            "According to the manual, identification of Gram-positive cocci can include which tests?",

        options: [
            "Catalase and Coagulase",
            "Citrate and Indole only",
            "TSI and SIM only",
            "MPN and CFU"
        ],

        correctAnswer: 0,

        explanation:
            "The manual states that identification of Gram-positive cocci such as Staphylococcus and Streptococci includes catalase and coagulase testing."
    },


    {
        question:
            "In the virtual interpretation of a catalase test, bubble formation represents:",

        options: [
            "A catalase-positive result",
            "A catalase-negative result",
            "An indole-positive result",
            "A citrate-negative result"
        ],

        correctAnswer: 0,

        explanation:
            "The manual identifies bubble formation or effervescence as a positive catalase reaction."
    },


    {
        question:
            "Which organism is given in the manual as an example of a catalase-positive bacterium?",

        options: [
            "Staphylococcus aureus",
            "Streptococcus pyogenes",
            "None of the listed organisms",
            "Only fungal organisms"
        ],

        correctAnswer: 0,

        explanation:
            "The manual gives Staphylococcus aureus as an example of a catalase-positive organism."
    },


    {
        question:
            "Why can several biochemical tests be used together when identifying a bacterial isolate?",

        options: [
            "Because a combination of reaction characteristics can help distinguish bacterial groups",
            "Because every bacterial species always gives exactly the same reaction",
            "Because biochemical tests are unrelated to bacterial physiology",
            "Because only the colour of the equipment matters"
        ],

        correctAnswer: 0,

        explanation:
            "Identification can use a pattern of biochemical characteristics rather than relying on only one characteristic."
    },


    {
        question:
            "According to the manual, what should guide the selection of biochemical tests for an unknown bacterial isolate?",

        options: [
            "The Gram-staining result and the bacterial group being considered",
            "The colour of the laboratory walls",
            "The student's preferred answer",
            "The size of the computer screen"
        ],

        correctAnswer: 0,

        explanation:
            "The manual notes that bacterial identification begins with Gram staining, which helps guide the biochemical tests considered."
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;
let correctAnswers = 0;
let quizStarted = false;
let answerSelected = false;


/* =========================================
   START ACTIVITY
========================================= */

function startActivity() {

    quizStarted = true;
    currentQuestion = 0;
    correctAnswers = 0;
    answerSelected = false;

    const activitySection =
        document.querySelector(".activity-section");

    const quizSection =
        document.getElementById("quizSection");

    if (activitySection) {
        activitySection.style.display = "none";
    }

    if (quizSection) {
        quizSection.style.display = "block";
    }

    showQuestion();
}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    answerSelected = false;

    const question = questions[currentQuestion];

    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("questionText");

    const questionCounter =
        document.getElementById("questionCounter");

    const answerOptions =
        document.getElementById("answerOptions");

    const feedback =
        document.getElementById("feedback");

    const nextButton =
        document.getElementById("nextButton");

    const progressPercentage =
        document.getElementById("progressPercentage");

    const progressFill =
        document.getElementById("progressFill");

    const scoreDisplay =
        document.getElementById("scoreDisplay");


    /* -----------------------------------------
       QUESTION INFORMATION
    ----------------------------------------- */

    questionNumber.textContent =
        currentQuestion + 1;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent =
        question.question;


    /* -----------------------------------------
       SCORE
    ----------------------------------------- */

    scoreDisplay.textContent =
        correctAnswers;


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

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";

        button.textContent =
            option;

        button.type =
            "button";

        button.addEventListener(
            "click",
            () => selectAnswer(index)
        );

        answerOptions.appendChild(button);

    });

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(selectedIndex) {

    if (answerSelected) {
        return;
    }

    const question =
        questions[currentQuestion];

    const options =
        document.querySelectorAll(".answer-option");

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

    const scoreDisplay =
        document.getElementById("scoreDisplay");


    answerSelected = true;


    /* -----------------------------------------
       CHECK ANSWER
    ----------------------------------------- */

    if (selectedIndex === question.correctAnswer) {

        correctAnswers++;

        options[selectedIndex]
            .classList.add("correct");

        feedbackIcon.textContent = "✓";

        feedbackTitle.textContent =
            "Correct!";

        feedbackTitle.style.color =
            "#047857";

        feedbackText.textContent =
            question.explanation;

        feedback.style.background =
            "#ecfdf5";

        feedback.style.border =
            "1px solid #a7f3d0";

    } else {

        options[selectedIndex]
            .classList.add("incorrect");

        options[question.correctAnswer]
            .classList.add("correct");

        feedbackIcon.textContent = "✕";

        feedbackTitle.textContent =
            "Incorrect";

        feedbackTitle.style.color =
            "#b91c1c";

        feedbackText.textContent =
            `The correct answer is: ${
                question.options[question.correctAnswer]
            }. ${question.explanation}`;

        feedback.style.background =
            "#fef2f2";

        feedback.style.border =
            "1px solid #fecaca";

    }


    /* -----------------------------------------
       DISABLE OPTIONS
    ----------------------------------------- */

    options.forEach(option => {

        option.disabled = true;

        option.style.cursor =
            "default";

    });


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

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "View Final Result";

    } else {

        nextButton.textContent =
            "Next Question";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (!answerSelected) {
        return;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResults();

    } else {

        showQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   CALCULATE SCORE
========================================= */

function calculateScore() {

    const score =
        Math.round(
            (correctAnswers / questions.length) * 100
        );

    return Math.max(
        0,
        Math.min(100, score)
    );

}


/* =========================================
   PERFORMANCE LEVEL
========================================= */

function getPerformanceLevel(score) {

    if (score >= 80) {

        return {
            level: "Excellent Performance",
            message:
                "Excellent! You have demonstrated a strong understanding of biochemical identification concepts."
        };

    }

    if (score >= 60) {

        return {
            level: "Good Performance",
            message:
                "Good work! You understand most of the important concepts, but there is still room for improvement."
        };

    }

    if (score >= 40) {

        return {
            level: "Fair Performance",
            message:
                "Fair attempt. Review the biochemical identification concepts and try the activity again."
        };

    }

    return {
        level: "Needs Improvement",
        message:
            "Review the Experiment 07 concepts and try the activity again to improve your understanding."
    };

}


/* =========================================
   SHOW RESULTS
========================================= */

function showResults() {

    const quizSection =
        document.getElementById("quizSection");

    const resultSection =
        document.getElementById("resultSection");

    const finalScore =
        document.getElementById("finalScore");

    const performanceLevel =
        document.getElementById("performanceLevel");

    const resultMessage =
        document.getElementById("resultMessage");

    const correctAnswersElement =
        document.getElementById("correctAnswers");

    const totalQuestionsElement =
        document.getElementById("totalQuestions");

    const percentageResult =
        document.getElementById("percentageResult");

    const progressPercentage =
        document.getElementById("progressPercentage");

    const progressFill =
        document.getElementById("progressFill");


    const score =
        calculateScore();

    const performance =
        getPerformanceLevel(score);


    /* -----------------------------------------
       HIDE QUIZ
    ----------------------------------------- */

    quizSection.style.display =
        "none";


    /* -----------------------------------------
       SHOW RESULT
    ----------------------------------------- */

    resultSection.style.display =
        "block";


    /* -----------------------------------------
       RESULT INFORMATION
    ----------------------------------------- */

    finalScore.textContent =
        `${score}/100`;

    performanceLevel.textContent =
        performance.level;

    resultMessage.textContent =
        performance.message;

    correctAnswersElement.textContent =
        correctAnswers;

    totalQuestionsElement.textContent =
        questions.length;

    percentageResult.textContent =
        `${score}%`;


    /* -----------------------------------------
       FINAL PROGRESS
    ----------------------------------------- */

    progressPercentage.textContent =
        "100%";

    progressFill.style.width =
        "100%";


    /* -----------------------------------------
       SAVE RESULT
    ----------------------------------------- */

    saveResult(score);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SAVE RESULT
========================================= */

function saveResult(score) {

    const studentName =
        localStorage.getItem("studentName") ||
        "Student";


    const result = {

        studentName: studentName,

        experimntNumber: 7,

        experiment:
            "Identification of Bacterial Species Through Biochemical Reactions",

        score: score,

        total: 100,

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
            localStorage.getItem(
                "simulationResults"
            );

        if (savedResults) {

            results =
                JSON.parse(savedResults);

        }

        if (!Array.isArray(results)) {
            results = [];
        }

    } catch (error) {

        console.error(
            "Error reading saved results:",
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
   RETRY QUIZ
========================================= */

function retryQuiz() {

    currentQuestion = 0;

    correctAnswers = 0;

    answerSelected = false;

    const resultSection =
        document.getElementById("resultSection");

    const quizSection =
        document.getElementById("quizSection");


    resultSection.style.display =
        "none";

    quizSection.style.display =
        "block";


    showQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   RETURN TO DASHBOARD
========================================= */

function returnToDashboard() {

    window.location.href =
        "../../dashboard.html";

}


/* =========================================
   PAGE INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const quizSection =
            document.getElementById("quizSection");

        const resultSection =
            document.getElementById("resultSection");


        if (quizSection) {

            quizSection.style.display =
                "none";

        }

        if (resultSection) {

            resultSection.style.display =
                "none";

        }

    }
);