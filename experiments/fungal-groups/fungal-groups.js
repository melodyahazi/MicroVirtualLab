/* =========================================
   MICROVIRTUALLAB
   EXPERIMENT 10
   Characteristics of Different Groups of Fungi
========================================= */


/* =========================================
   QUIZ QUESTIONS
========================================= */

const questions = [

    {
        question:
            "What is the main purpose of comparing different groups of fungi in this experiment?",

        options: [
            "To compare their morphological characteristics",
            "To measure the temperature of fungi",
            "To determine the colour of laboratory equipment",
            "To calculate the volume of culture media"
        ],

        correctAnswer: 0,

        explanation:
            "The experiment focuses on learning and describing morphological differences among different groups of fungi."
    },


    {
        question:
            "Which fungal groups are included in the comparison in Experiment 10?",

        options: [
            "Oomycetes, Zygomycetes, Ascomycetes, Basidiomycetes and Mitosporic fungi",
            "Bacteria, viruses, algae, protozoa and parasites",
            "Yeasts, bacteria, viruses, algae and protozoa",
            "Only Oomycetes and Zygomycetes"
        ],

        correctAnswer: 0,

        explanation:
            "The practical compares Oomycetes, Zygomycetes, Ascomycetes, Basidiomycetes and Mitosporic fungi."
    },


    {
        question:
            "Which structure is an important feature when comparing fungal morphology?",

        options: [
            "Mycelia",
            "Red blood cells",
            "Bacterial capsules only",
            "Plant roots only"
        ],

        correctAnswer: 0,

        explanation:
            "Mycelia are one of the key features listed for comparison among the fungal groups."
    },


    {
        question:
            "Which feature is specifically included in the comparison table for the fungal groups?",

        options: [
            "Type of spores",
            "Blood pressure",
            "Heart rate",
            "Cellular respiration rate"
        ],

        correctAnswer: 0,

        explanation:
            "The manual asks students to compare the type of spores observed in each fungal group."
    },


    {
        question:
            "What other feature is used to compare the fungal groups?",

        options: [
            "Spore-bearing structures",
            "Body temperature",
            "Blood cells",
            "Leaf colour only"
        ],

        correctAnswer: 0,

        explanation:
            "Spore-bearing structures are another important morphological feature used in the comparison."
    },


    {
        question:
            "Which group is represented by bread mould in the practical?",

        options: [
            "Zygomycetes",
            "Basidiomycetes",
            "Oomycetes",
            "Mitosporic fungi"
        ],

        correctAnswer: 0,

        explanation:
            "The manual lists bread mould and Rhizopus cultures under Zygomycetes."
    },


    {
        question:
            "Which structures are highlighted when examining Oomycetes in the practical?",

        options: [
            "Hyphae, sporangia and sporangiospores",
            "Red blood cells and platelets",
            "Flagella and cilia only",
            "Roots and leaves"
        ],

        correctAnswer: 0,

        explanation:
            "The practical identifies hyphae, sporangia and sporangiospores as structures to look for when examining Oomycetes."
    },


    {
        question:
            "Which structures are listed for observation when studying Ascomycetes?",

        options: [
            "Hyphae, conidiophores and conidia",
            "Red blood cells and platelets",
            "Cilia and flagella",
            "Roots and vascular tissue"
        ],

        correctAnswer: 0,

        explanation:
            "The manual lists hyphae, conidiophores and conidia among the structures used when examining Ascomycetes."
    },


    {
        question:
            "What is the main learning activity after observing the different fungal groups?",

        options: [
            "Compare their key morphological features",
            "Ignore the observed structures",
            "Measure human body temperature",
            "Identify blood groups"
        ],

        correctAnswer: 0,

        explanation:
            "The practical asks students to list the key features observed in each fungal group and compare them."
    }

];


/* =========================================
   QUIZ VARIABLES
========================================= */

let currentQuestion = 0;
let correctAnswers = 0;
let quizStarted = false;
let questionAnswered = false;


/* =========================================
   DOM ELEMENTS
========================================= */

const startButton =
    document.getElementById("startButton");

const quizSection =
    document.getElementById("quizSection");

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

startButton.addEventListener("click", function () {

    quizStarted = true;

    currentQuestion = 0;
    correctAnswers = 0;
    questionAnswered = false;

    startButton.parentElement.style.display = "none";

    quizSection.style.display = "block";

    resultSection.style.display = "none";

    loadQuestion();

    window.scrollTo({
        top: quizSection.offsetTop - 20,
        behavior: "smooth"
    });

});


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    questionAnswered = false;

    const question =
        questions[currentQuestion];

    questionNumber.textContent =
        currentQuestion + 1;

    questionText.textContent =
        question.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreDisplay.textContent =
        correctAnswers;

    const progress =
        Math.round(
            ((currentQuestion) / questions.length) * 100
        );

    progressPercentage.textContent =
        `${progress}%`;

    progressFill.style.width =
        `${progress}%`;

    answerOptions.innerHTML = "";

    feedback.style.display = "none";

    nextButton.style.display = "none";


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";

        button.textContent =
            option;

        button.addEventListener(
            "click",
            function () {

                selectAnswer(
                    index,
                    button
                );

            }
        );

        answerOptions.appendChild(button);

    });

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(selectedIndex, selectedButton) {

    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const question =
        questions[currentQuestion];

    const optionButtons =
        document.querySelectorAll(".answer-option");


    /* Disable all options */

    optionButtons.forEach(function (button) {

        button.classList.add("disabled");

        button.disabled = true;

    });


    /* Check answer */

    if (selectedIndex === question.correctAnswer) {

        correctAnswers++;

        selectedButton.classList.add("correct");

        showFeedback(
            true,
            "Correct!",
            question.explanation
        );

    } else {

        selectedButton.classList.add("incorrect");

        optionButtons[
            question.correctAnswer
        ].classList.add("correct");

        showFeedback(
            false,
            "Incorrect",
            `The correct answer is: ${question.options[question.correctAnswer]}.`
        );

    }


    scoreDisplay.textContent =
        correctAnswers;


    /* Show next button */

    nextButton.style.display =
        "block";

}


/* =========================================
   FEEDBACK
========================================= */

function showFeedback(
    isCorrect,
    title,
    message
) {

    feedback.style.display =
        "flex";

    feedbackTitle.textContent =
        title;

    feedbackText.textContent =
        message;


    if (isCorrect) {

        feedbackIcon.textContent =
            "✓";

        feedbackIcon.style.background =
            "#22c55e";

    } else {

        feedbackIcon.textContent =
            "✕";

        feedbackIcon.style.background =
            "#ef4444";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

nextButton.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

        window.scrollTo({
            top: quizSection.offsetTop - 20,
            behavior: "smooth"
        });

    } else {

        finishQuiz();

    }

});


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    quizSection.style.display =
        "none";

    resultSection.style.display =
        "block";


    const total =
        questions.length;


    /* Calculate percentage */

    const percentage =
        Math.round(
            (correctAnswers / total) * 100
        );


    /* Display results */

    finalScore.textContent =
        `${percentage}%`;

    percentageResult.textContent =
        `${percentage}%`;

    correctAnswersDisplay.textContent =
        correctAnswers;

    totalQuestionsDisplay.textContent =
        total;


    /* Performance */

    const performance =
        calculatePerformance(percentage);


    performanceLevel.textContent =
        performance.level;

    resultMessage.textContent =
        performance.message;


    /* Save result */

    saveResult(percentage);


    /* Update progress */

    progressPercentage.textContent =
        "100%";

    progressFill.style.width =
        "100%";


    window.scrollTo({
        top: resultSection.offsetTop - 20,
        behavior: "smooth"
    });

}


/* =========================================
   PERFORMANCE CALCULATION
========================================= */

function calculatePerformance(score) {

    if (score >= 80) {

        return {
            level: "Excellent Performance",
            message:
                "Excellent work! You demonstrated a strong understanding of the characteristics used to compare fungal groups."
        };

    }

    if (score >= 60) {

        return {
            level: "Good Performance",
            message:
                "Good work! You have a good understanding of the major morphological features of fungal groups."
        };

    }

    if (score >= 50) {

        return {
            level: "Fair Performance",
            message:
                "You have a basic understanding of the topic. Review the fungal groups and their key morphological features."
        };

    }

    return {
        level: "Needs Improvement",
        message:
            "Review the characteristics of the fungal groups, especially mycelia, spores and spore-bearing structures."
    };

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

        experiment:
            "Characteristics of Different Groups of Fungi",

        score: score,

        total: 100,

        correctAnswers:
            correctAnswers,

        totalQuestions:
            questions.length,

        date:
            new Date().toLocaleString()

    };


    let results =
        JSON.parse(
            localStorage.getItem("simulationResults")
        ) || [];


    results.push(result);


    localStorage.setItem(
        "simulationResults",
        JSON.stringify(results)
    );

}


/* =========================================
   RETRY QUIZ
========================================= */

retryButton.addEventListener("click", function () {

    currentQuestion = 0;

    correctAnswers = 0;

    questionAnswered = false;

    quizStarted = true;


    resultSection.style.display =
        "none";

    quizSection.style.display =
        "block";


    loadQuestion();


    window.scrollTo({
        top: quizSection.offsetTop - 20,
        behavior: "smooth"
    });

});


/* =========================================
   RETURN TO DASHBOARD
========================================= */

dashboardButton.addEventListener("click", function () {

    window.location.href =
        "../../dashboard.html";

});


/* =========================================
   INITIAL STATE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        quizSection.style.display =
            "none";

        resultSection.style.display =
            "none";

    }
);