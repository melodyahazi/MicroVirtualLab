/* =========================================
   EXPERIMENT 08
   SENSITIVITY TESTING
   KIRBY BAUER DISC DIFFUSION
========================================= */


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question:
            "What is the main purpose of sensitivity testing?",

        options: [
            "To determine whether an antimicrobial can affect a microorganism",
            "To identify the shape of a microscope",
            "To measure the size of a fungal colony",
            "To prepare culture media"
        ],

        correct: 0,

        explanation:
            "Sensitivity or susceptibility testing examines whether an antimicrobial agent can affect the growth of a microorganism."
    },


    {
        question:
            "Which method is specifically associated with Kirby Bauer sensitivity testing?",

        options: [
            "Tube dilution",
            "Disc diffusion",
            "Gram staining",
            "Catalase testing"
        ],

        correct: 1,

        explanation:
            "The practical manual identifies the Kirby Bauer method with agar/disc diffusion sensitivity testing."
    },


    {
        question:
            "What happens to the antimicrobial agent in disc diffusion testing?",

        options: [
            "It disappears immediately",
            "It changes into a bacterial cell",
            "It diffuses from the disc through the agar",
            "It becomes a fungal spore"
        ],

        correct: 2,

        explanation:
            "In disc diffusion, the antimicrobial agent diffuses from the disc or strip through the agar."
    },


    {
        question:
            "What does a clear zone around an antimicrobial disc indicate?",

        options: [
            "Microbial growth has increased",
            "The organism shows susceptibility",
            "The disc contains no antimicrobial agent",
            "The microorganism has become a fungus"
        ],

        correct: 1,

        explanation:
            "The manual states that inhibition of growth seen as a clear zone around the disc indicates susceptibility."
    },


    {
        question:
            "What is another method mentioned in the manual for determining sensitivity?",

        options: [
            "Tube dilution",
            "Microscope focusing",
            "Gram staining",
            "Spore staining"
        ],

        correct: 0,

        explanation:
            "The manual identifies agar/disc diffusion and tube dilution as methods for determining sensitivity."
    },


    {
        question:
            "What is examined when reading a disc diffusion result?",

        options: [
            "The diameter of the inhibition zone",
            "The colour of the microscope",
            "The shape of the test tube",
            "The size of the laboratory bench"
        ],

        correct: 0,

        explanation:
            "The aim of Experiment 08 includes reading inhibition-zone diameters and interpreting the results."
    },


    {
        question:
            "What does inhibition of microbial growth mean in disc diffusion testing?",

        options: [
            "The antimicrobial has no effect",
            "Growth has been prevented in the affected area",
            "The organism has changed into a virus",
            "The agar has disappeared"
        ],

        correct: 1,

        explanation:
            "Inhibition means that microbial growth is prevented in the area affected by the antimicrobial agent."
    },


    {
        question:
            "Which guidelines does the manual mention for interpreting disc diffusion results?",

        options: [
            "CLSI guidelines",
            "HTML guidelines",
            "CSS guidelines",
            "Database guidelines"
        ],

        correct: 0,

        explanation:
            "The manual states that disc diffusion results should be interpreted according to CLSI guidelines."
    },


    {
        question:
            "Which term describes testing whether an antimicrobial can affect a microorganism?",

        options: [
            "Sensitivity or susceptibility",
            "Staining",
            "Enumeration",
            "Microscopy"
        ],

        correct: 0,

        explanation:
            "The manual uses susceptibility/sensitivity to describe testing the effect of an antimicrobial on microorganisms."
    },


    {
        question:
            "Which statement correctly describes the relationship between a disc and a clear zone?",

        options: [
            "The clear zone represents inhibition of growth around the disc",
            "The clear zone represents increased microbial growth",
            "The clear zone represents fungal spores",
            "The clear zone represents the disc itself"
        ],

        correct: 0,

        explanation:
            "A clear zone around the disc represents inhibition of growth and indicates susceptibility."
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

    document.querySelector(".start-section").style.display =
        "none";

    quizSection.style.display =
        "block";

    resultSection.style.display =
        "none";

    currentQuestion = 0;
    score = 0;
    answered = false;

    showQuestion();

    quizSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    answered = false;

    const question =
        questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1}`;

    questionText.textContent =
        question.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const progress =
        Math.round(
            (currentQuestion / questions.length) * 100
        );

    progressPercentage.textContent =
        `${progress}%`;

    progressFill.style.width =
        `${progress}%`;

    scoreDisplay.textContent =
        `${calculateScore()}%`;

    answerOptions.innerHTML = "";

    feedback.style.display =
        "none";

    feedback.className =
        "feedback";

    nextButton.style.display =
        "none";


    question.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );

            answerOptions.appendChild(button);

        }
    );

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const optionButtons =
        document.querySelectorAll(
            ".answer-option"
        );


    optionButtons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    if (
        selectedIndex ===
        question.correct
    ) {

        score++;

        selectedButton.classList.add(
            "correct"
        );

        showFeedback(
            true,
            "Correct!",
            question.explanation
        );

    } else {

        selectedButton.classList.add(
            "incorrect"
        );

        optionButtons[
            question.correct
        ].classList.add(
            "correct"
        );

        showFeedback(
            false,
            "Not Quite",
            `The correct answer is: ${question.options[question.correct]}. ${question.explanation}`
        );

    }


    scoreDisplay.textContent =
        `${calculateScore()}%`;

    nextButton.style.display =
        "block";

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "View Final Result →";

    } else {

        nextButton.textContent =
            "Next Question →";

    }

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

        feedback.className =
            "feedback correct";

        feedbackIcon.textContent =
            "✓";

    } else {

        feedback.className =
            "feedback incorrect";

        feedbackIcon.textContent =
            "✕";

    }

}


/* =========================================
   NEXT QUESTION
========================================= */

nextButton.addEventListener(
    "click",
    function () {

        if (
            currentQuestion ===
            questions.length - 1
        ) {

            showResults();

        } else {

            currentQuestion++;

            showQuestion();

            document.querySelector(
                ".question-card"
            ).scrollIntoView({
                behavior: "smooth"
            });

        }

    }
);


/* =========================================
   CALCULATE SCORE
========================================= */

function calculateScore() {

    return Math.round(
        (score / questions.length) * 100
    );

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


    setPerformance(
        percentage
    );


    saveResult(
        percentage
    );


    resultSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   PERFORMANCE
========================================= */

function setPerformance(
    percentage
) {

    if (percentage >= 80) {

        performanceLevel.textContent =
            "Excellent Performance";

        resultMessage.textContent =
            "Excellent! You have demonstrated a strong understanding of sensitivity testing and the Kirby Bauer disc diffusion method.";

    } else if (percentage >= 60) {

        performanceLevel.textContent =
            "Good Performance";

        resultMessage.textContent =
            "Good work! You understand the main concepts of sensitivity testing. Review the questions you missed to strengthen your knowledge.";

    } else if (percentage >= 50) {

        performanceLevel.textContent =
            "Fair Performance";

        resultMessage.textContent =
            "You have understood some important concepts. Review the learning material and try the activity again.";

    } else {

        performanceLevel.textContent =
            "Needs Improvement";

        resultMessage.textContent =
            "Review the key concepts of sensitivity testing and try the activity again.";

    }

}


/* =========================================
   SAVE RESULT
========================================= */

function saveResult(
    percentage
) {

    const studentName =
        localStorage.getItem(
            "studentName"
        ) || "Student";


    const result = {

        studentName:
            studentName,

        experiment:
            "Sensitivity Testing (Kirby Bauer Disc Diffusion)",

        score:
            percentage,

        total:
            100,

        correctAnswers:
            score,

        totalQuestions:
            questions.length,

        date:
            new Date().toLocaleString()

    };


    let results =
        JSON.parse(
            localStorage.getItem(
                "simulationResults"
            )
        ) || [];


    results.push(result);


    localStorage.setItem(
        "simulationResults",
        JSON.stringify(results)
    );

}


/* =========================================
   RETRY
========================================= */

retryButton.addEventListener(
    "click",
    function () {

        currentQuestion = 0;
        score = 0;
        answered = false;

        resultSection.style.display =
            "none";

        quizSection.style.display =
            "block";

        showQuestion();

        quizSection.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   RETURN TO DASHBOARD
========================================= */

dashboardButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "../../dashboard.html";

    }
);