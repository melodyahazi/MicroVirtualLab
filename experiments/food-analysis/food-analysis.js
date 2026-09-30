/* =========================================================
   MICROVIRTUALLAB
   EXPERIMENT 05
   MICROBIAL ANALYSIS OF FOOD SAMPLES
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       QUIZ DATA
    ===================================================== */

    const questions = [

        {
            question:
                "What is the main purpose of microbial analysis of food samples?",

            options: [
                "To determine the colour of the food",
                "To estimate and assess microorganisms associated with the food sample",
                "To measure the weight of the food package",
                "To determine the temperature of the laboratory"
            ],

            correct: 1,

            explanation:
                "Microbial analysis can be used to estimate microorganisms associated with food samples and assess their microbial quality."
        },


        {
            question:
                "What does CFU stand for in microbial analysis?",

            options: [
                "Cell Formation Unit",
                "Colony-Free Unit",
                "Colony-Forming Unit",
                "Culture Formation Utility"
            ],

            correct: 2,

            explanation:
                "CFU stands for Colony-Forming Unit. It represents an estimated viable microbial unit capable of contributing to a visible colony."
        },


        {
            question:
                "Why are dilution concepts important in microbial enumeration?",

            options: [
                "They make microorganisms change colour",
                "They help obtain a sample concentration that can be meaningfully counted",
                "They increase the size of microorganisms",
                "They eliminate the need for observation"
            ],

            correct: 1,

            explanation:
                "The manual explains that dilution helps make microbial populations suitable for counting on a plate."
        },


        {
            question:
                "According to the manual, which colony-count range is used for selecting a suitable plate in Experiment 05?",

            options: [
                "1–10 colonies",
                "10–20 colonies",
                "30–300 colonies",
                "500–1000 colonies"
            ],

            correct: 2,

            explanation:
                "Experiment 05 instructs learners to choose a plate that appears to have between 30 and 300 colonies."
        },


        {
            question:
                "What does a visible colony represent in the context of CFU counting?",

            options: [
                "A measurement of food temperature",
                "A colony-forming unit or microbial growth represented by a colony",
                "A chemical indicator only",
                "A measurement of agar thickness"
            ],

            correct: 1,

            explanation:
                "The manual explains that colonies are used as a measure of colony-forming units (CFUs)."
        },


        {
            question:
                "Why is a plate with too many colonies unsuitable for an accurate count?",

            options: [
                "The colonies may become poorly isolated and grow together",
                "The food sample disappears",
                "The plate becomes automatically sterile",
                "The microorganisms become invisible"
            ],

            correct: 0,

            explanation:
                "The manual explains that very high colony numbers can result in poor isolation and colonies growing together."
        },


        {
            question:
                "Why can a plate with very few colonies be less reliable for enumeration?",

            options: [
                "Small counting or dilution errors can have a larger effect on the final estimate",
                "The plate always contains fungi",
                "The agar changes into liquid",
                "The sample automatically becomes concentrated"
            ],

            correct: 0,

            explanation:
                "The manual notes that when colony numbers are very low, small errors can have a greater effect on the final count."
        },


        {
            question:
                "What is the relationship between colony number and the estimated microbial population?",

            options: [
                "Colony number can be used as a basis for estimating CFUs in the original sample",
                "Colony number has no relationship to microbial population",
                "Colony number measures only food weight",
                "Colony number measures laboratory humidity"
            ],

            correct: 0,

            explanation:
                "The manual describes using colony counts from an appropriate dilution as a basis for estimating CFUs in the original sample."
        },


        {
            question:
                "Why can duplicate or triplicate counts improve the reliability of an estimate?",

            options: [
                "They allow an average count to be obtained",
                "They make every colony disappear",
                "They eliminate all microorganisms",
                "They change bacteria into fungi"
            ],

            correct: 0,

            explanation:
                "The manual states that duplicate or triplicate counts can be used to obtain an average count for greater accuracy."
        },


        {
            question:
                "Which result is commonly used to report microbial enumeration?",

            options: [
                "CFU per gram or CFU per millilitre",
                "Centimetres per gram",
                "Degrees per millilitre",
                "Litres per colony"
            ],

            correct: 0,

            explanation:
                "Microbial enumeration results can be expressed as colony-forming units per gram or per millilitre, depending on the sample."
        }

    ];


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentQuestion = 0;

    let correctAnswers = 0;

    let answered = false;


    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const startActivityButton =
        document.getElementById("startActivityButton");

    const quizSection =
        document.getElementById("quizSection");

    const resultSection =
        document.getElementById("resultSection");

    const startSection =
        document.querySelector(".start-section");

    const questionTitle =
        document.getElementById("questionTitle");

    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("questionText");

    const answerOptions =
        document.getElementById("answerOptions");

    const questionCounter =
        document.getElementById("questionCounter");

    const progressPercentage =
        document.getElementById("progressPercentage");

    const progressFill =
        document.getElementById("progressFill");

    const scoreDisplay =
        document.getElementById("scoreDisplay");

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


    /* =====================================================
       START ACTIVITY
    ===================================================== */

    startActivityButton.addEventListener("click", function () {

        startSection.style.display = "none";

        resultSection.style.display = "none";

        quizSection.style.display = "block";

        currentQuestion = 0;

        correctAnswers = 0;

        answered = false;

        scoreDisplay.textContent = "0";

        loadQuestion();

        window.scrollTo({
            top: quizSection.offsetTop - 20,
            behavior: "smooth"
        });

    });


    /* =====================================================
       LOAD QUESTION
    ===================================================== */

    function loadQuestion() {

        answered = false;

        const question = questions[currentQuestion];

        questionTitle.textContent =
            `Question ${currentQuestion + 1}`;

        questionNumber.textContent =
            String(currentQuestion + 1).padStart(2, "0");

        questionText.textContent =
            question.question;

        questionCounter.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

        updateProgress();

        answerOptions.innerHTML = "";

        feedback.style.display = "none";

        feedback.classList.remove(
            "correct-feedback",
            "incorrect-feedback"
        );

        nextButton.style.display = "none";

        question.options.forEach(function (option, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "answer-option";

            button.dataset.index = index;

            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                <span class="option-text">
                    ${option}
                </span>
            `;

            button.addEventListener(
                "click",
                function () {
                    checkAnswer(index, button);
                }
            );

            answerOptions.appendChild(button);

        });

    }


    /* =====================================================
       CHECK ANSWER
    ===================================================== */

    /* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const allButtons =
        answerOptions.querySelectorAll(".answer-option");

    if (selectedIndex === question.correct) {

        // Correct answer
        correctAnswers++;

        selectedButton.classList.add("correct");

        feedback.classList.add("correct-feedback");

        feedbackIcon.textContent = "✓";

        feedbackTitle.textContent = "Correct!";

        feedbackText.textContent =
            question.explanation;

    } else {

        // Wrong answer
        selectedButton.classList.add("incorrect");

        // Highlight the correct answer
        allButtons[question.correct].classList.add("correct");

        feedback.classList.add("incorrect-feedback");

        feedbackIcon.textContent = "✕";

        feedbackTitle.textContent = "Incorrect";

        feedbackText.textContent =
            `That answer is not correct. The correct answer is: ${question.options[question.correct]}.`;
    }

    // Show feedback
    feedback.style.display = "flex";

    // Update score
    scoreDisplay.textContent =
        calculateScore();

    // Disable all answer buttons
    allButtons.forEach(function (button) {

        button.classList.add("disabled");

        button.disabled = true;

    });

    // Show next button for BOTH correct and incorrect answers
    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "View Final Result";

    } else {

        nextButton.textContent =
            "Next Question";

    }

    nextButton.style.display = "inline-block";
}


    /* =====================================================
       NEXT QUESTION / FINAL RESULT
    ===================================================== */
    

    nextButton.addEventListener("click", function () {

        if (!answered) {
            return;
        }

        if (currentQuestion === questions.length - 1) {

            showFinalResult();

            return;
        }

        currentQuestion++;

        loadQuestion();

        window.scrollTo({
            top: quizSection.offsetTop - 20,
            behavior: "smooth"
        });

    });


    /* =====================================================
       CALCULATE SCORE
    ===================================================== */

    function calculateScore() {

        return Math.round(
            (correctAnswers / questions.length) * 100
        );

    }


    /* =====================================================
       UPDATE PROGRESS
    ===================================================== */

    function updateProgress() {

        const progress =
            Math.round(
                ((currentQuestion + 1) / questions.length) * 100
            );

        progressPercentage.textContent =
            `${progress}%`;

        progressFill.style.width =
            `${progress}%`;

    }


    /* =====================================================
       FINAL RESULT
    ===================================================== */

    function showFinalResult() {

        const percentage =
            calculateScore();

        quizSection.style.display = "none";

        resultSection.style.display = "block";

        finalScore.textContent =
            `${percentage}%`;

        correctAnswersDisplay.textContent =
            correctAnswers;

        totalQuestionsDisplay.textContent =
            questions.length;

        percentageResult.textContent =
            `${percentage}%`;

        setPerformanceMessage(percentage);

        saveSimulationResult(percentage);

        window.scrollTo({
            top: resultSection.offsetTop - 20,
            behavior: "smooth"
        });

    }


    /* =====================================================
       PERFORMANCE MESSAGE
    ===================================================== */

    function setPerformanceMessage(score) {

        if (score >= 80) {

            performanceLevel.textContent =
                "Excellent Performance";

            resultMessage.textContent =
                "Excellent understanding of the key concepts of microbial analysis of food samples.";

        } else if (score >= 60) {

            performanceLevel.textContent =
                "Good Performance";

            resultMessage.textContent =
                "Good work. Review the concepts you missed to strengthen your understanding.";

        } else if (score >= 50) {

            performanceLevel.textContent =
                "Satisfactory Performance";

            resultMessage.textContent =
                "You have demonstrated some understanding. Reviewing the learning concepts will help improve your result.";

        } else {

            performanceLevel.textContent =
                "Needs Improvement";

            resultMessage.textContent =
                "Review the key concepts and try the activity again.";

        }

    }


    /* =====================================================
       SAVE RESULT
    ===================================================== */

    function saveSimulationResult(score) {

        const studentName =
            localStorage.getItem("studentName") ||
            "Student";

        const result = {

            studentName: studentName,

            experiment:
                "Microbial Analysis of Food Samples",

            experimentNumber: 5,

            score: score,

            total: 100,

            correctAnswers: correctAnswers,

            totalQuestions: questions.length,

            date: new Date().toLocaleString()

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

        } catch (error) {

            console.error(
                "Could not read previous results:",
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


    /* =====================================================
       RETRY
    ===================================================== */

    retryButton.addEventListener("click", function () {

        currentQuestion = 0;

        correctAnswers = 0;

        answered = false;

        scoreDisplay.textContent = "0";

        resultSection.style.display = "none";

        quizSection.style.display = "block";

        loadQuestion();

        window.scrollTo({
            top: quizSection.offsetTop - 20,
            behavior: "smooth"
        });

    });


    /* =====================================================
       RETURN TO DASHBOARD
    ===================================================== */

    dashboardButton.addEventListener("click", function () {

        window.location.href =
            "../../dashboard.html";

    });

});