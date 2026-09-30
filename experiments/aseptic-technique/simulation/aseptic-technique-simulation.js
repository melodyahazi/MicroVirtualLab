/* =========================================================
   MICROVIRTUALLAB
   EXPERIMENT 02
   ASEPTIC TECHNIQUES
   VIRTUAL PRACTICAL SIMULATION
========================================================= */


/* =========================================================
   SIMULATION VARIABLES
========================================================= */

let currentStep = 0;
let score = 0;
let selectedAction = null;
let actionCompleted = false;

const totalSteps = 8;


/* =========================================================
   VIRTUAL PRACTICAL STEPS
========================================================= */

const steps = [

    {
        title: "Prepare the Virtual Work Area",

        description:
            "Begin by organizing the virtual work area. Select the equipment needed for the simulated practical.",

        options: [
            { id: "balance", name: "⚖️ Weighing Balance" },
            { id: "flask", name: "🧪 Erlenmeyer Flask" },
            { id: "labelItem", name: "🏷️ Label" }
        ],

        correct: "balance",

        feedback:
            "Correct. The weighing balance is one of the required materials in the virtual workspace.",

        actionText:
            "The virtual weighing balance has been positioned in the work area."
    },


    {
        title: "Select the Virtual Culture Media Container",

        description:
            "Identify the virtual container representing the culture media used in the simulated activity.",

        options: [
            { id: "mediaContainer", name: "🧫 Culture Media" },
            { id: "petriDish", name: "🧫 Petri Dish" },
            { id: "burner", name: "🔥 Bunsen Burner" }
        ],

        correct: "mediaContainer",

        feedback:
            "Correct. The virtual culture-media container has been selected.",

        actionText:
            "The virtual culture-media container has been moved into the preparation area."
    },


    {
        title: "Select the Virtual Flask",

        description:
            "Identify the appropriate virtual vessel represented in the workspace.",

        options: [
            { id: "flask", name: "🧪 Erlenmeyer Flask" },
            { id: "autoclave", name: "♨️ Autoclave" },
            { id: "labelItem", name: "🏷️ Label" }
        ],

        correct: "flask",

        feedback:
            "Correct. The Erlenmeyer flask is the appropriate virtual vessel.",

        actionText:
            "The virtual flask has been positioned in the work area."
    },


    {
        title: "Select the Simulated Processing Equipment",

        description:
            "Choose the virtual equipment representing the controlled processing stage of the simulation.",

        options: [
            { id: "autoclave", name: "♨️ Autoclave" },
            { id: "petriDish", name: "🧫 Petri Dish" },
            { id: "balance", name: "⚖️ Weighing Balance" }
        ],

        correct: "autoclave",

        feedback:
            "Correct. The virtual autoclave represents the simulated processing stage.",

        actionText:
            "The virtual processing equipment has been moved into the work area."
    },


    {
        title: "Prepare the Virtual Containers",

        description:
            "Select the virtual container that represents the preparation stage of the practical.",

        options: [
            { id: "petriDish", name: "🧫 Petri Dish" },
            { id: "burner", name: "🔥 Bunsen Burner" },
            { id: "balance", name: "⚖️ Weighing Balance" }
        ],

        correct: "petriDish",

        feedback:
            "Correct. The virtual Petri dish represents the container used in this simulation.",

        actionText:
            "The virtual Petri dish has been moved into the work area."
    },


    {
        title: "Apply the Virtual Aseptic Handling Concept",

        description:
            "Choose the virtual equipment that represents the controlled handling stage in this simulation.",

        options: [
            { id: "burner", name: "🔥 Bunsen Burner" },
            { id: "labelItem", name: "🏷️ Label" },
            { id: "balance", name: "⚖️ Weighing Balance" }
        ],

        correct: "burner",

        feedback:
            "Correct. The virtual burner represents the controlled aseptic-handling concept in this simulation.",

        actionText:
            "The virtual handling equipment has been positioned in the workspace."
    },


    {
        title: "Label the Virtual Sample",

        description:
            "Select the virtual label to identify the simulated sample correctly.",

        options: [
            { id: "labelItem", name: "🏷️ Sample Label" },
            { id: "flask", name: "🧪 Erlenmeyer Flask" },
            { id: "mediaContainer", name: "🧫 Culture Media" }
        ],

        correct: "labelItem",

        feedback:
            "Correct. The virtual sample label has been selected.",

        actionText:
            "The virtual sample label has been positioned with the simulated sample."
    },


    {
        title: "Complete the Virtual Practical",

        description:
            "Review the virtual workspace and select the equipment representing the completed simulated practical.",

        options: [
            { id: "autoclave", name: "♨️ Processed Media" },
            { id: "labelItem", name: "🏷️ Sample Label" },
            { id: "flask", name: "🧪 Prepared Flask" }
        ],

        correct: "autoclave",

        feedback:
            "Excellent. You have completed the virtual aseptic-technique workflow.",

        actionText:
            "The virtual practical workflow is now complete."
    }

];


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeSimulation();

});


/* =========================================================
   INITIALIZE
========================================================= */

function initializeSimulation() {

    const dashboardButton =
        document.getElementById("dashboardButton");

    if (dashboardButton) {

        dashboardButton.addEventListener(
            "click",
            returnToDashboard
        );

    }

    loadStep();

}


/* =========================================================
   LOAD STEP
========================================================= */

function loadStep() {

    const step = steps[currentStep];

    selectedAction = null;
    actionCompleted = false;


    /* STEP COUNTER */

    document.getElementById("stepNumber").textContent =
        `Step ${currentStep + 1} of ${totalSteps}`;


    /* PROGRESS */

    const percentage =
        Math.round(
            ((currentStep + 1) / totalSteps) * 100
        );

    document.getElementById("progressPercent").textContent =
        `${percentage}%`;

    document.getElementById("progressFill").style.width =
        `${percentage}%`;


    /* TITLE */

    document.getElementById("stepTitle").textContent =
        step.title;


    /* DESCRIPTION */

    document.getElementById("stepDescription").textContent =
        step.description;


    /* RESET FEEDBACK */

    resetFeedback();


    /* RESET EQUIPMENT */

    resetEquipment();


    /* CREATE OPTIONS */

    createActionOptions(step);


    /* ACTION BUTTON */

    const actionButton =
        document.getElementById("actionButton");

    actionButton.disabled = false;

    actionButton.textContent =
        "Perform Action →";

    actionButton.onclick =
        performAction;


    /* STATUS */

    updateLabStatus(
        "Select the appropriate virtual item to continue."
    );

}


/* =========================================================
   RESET EQUIPMENT
========================================================= */

function resetEquipment() {

    const equipment =
        document.querySelectorAll(".equipment");

    equipment.forEach(function (item) {

        item.classList.remove(
            "selected",
            "move-to-workspace",
            "correct"
        );

    });

}


/* =========================================================
   CREATE OPTIONS
========================================================= */

function createActionOptions(step) {

    const actionArea =
        document.getElementById("actionArea");

    actionArea.innerHTML = "";


    const heading =
        document.createElement("div");

    heading.className =
        "action-heading";

    heading.textContent =
        "Select the appropriate virtual item:";

    actionArea.appendChild(heading);


    const optionsWrapper =
        document.createElement("div");

    optionsWrapper.className =
        "action-options";


    step.options.forEach(function (option) {

        const button =
            document.createElement("button");

        button.type =
            "button";

        button.className =
            "action-option";

        button.textContent =
            option.name;


        button.addEventListener(
            "click",
            function () {

                selectAction(
                    option.id,
                    button
                );

            }
        );


        optionsWrapper.appendChild(button);

    });


    actionArea.appendChild(
        optionsWrapper
    );

}


/* =========================================================
   SELECT ACTION
========================================================= */

function selectAction(id, button) {

    if (actionCompleted) {
        return;
    }


    selectedAction = id;


    /* Remove previous selection */

    document.querySelectorAll(
        ".action-option"
    ).forEach(function (item) {

        item.classList.remove(
            "selected"
        );

    });


    /* Select current option */

    button.classList.add(
        "selected"
    );


    /* Move selected equipment */

    highlightEquipment(id);


    updateLabStatus(
        "Virtual item selected. Click Perform Action →."
    );

}


/* =========================================================
   HIGHLIGHT + MOVE EQUIPMENT
========================================================= */

function highlightEquipment(id) {

    const equipment =
        document.querySelectorAll(
            ".equipment"
        );


    equipment.forEach(function (item) {

        item.classList.remove(
            "selected",
            "move-to-workspace",
            "correct"
        );

    });


    const selectedEquipment =
        document.getElementById(id);


    if (!selectedEquipment) {
        return;
    }


    selectedEquipment.classList.add(
        "selected"
    );


    /*
       Small delay makes the movement visible
       after the selection highlight appears.
    */

    setTimeout(function () {

        selectedEquipment.classList.add(
            "move-to-workspace"
        );

    }, 80);

}


/* =========================================================
   PERFORM ACTION
========================================================= */

function performAction() {

    if (selectedAction === null) {

        showFeedback(
            "warning",
            "Action Required",
            "Please select a virtual item first."
        );

        return;
    }


    if (actionCompleted) {
        return;
    }


    const step =
        steps[currentStep];


    const actionButton =
        document.getElementById(
            "actionButton"
        );


    /* =====================================================
       CORRECT
    ===================================================== */

    if (selectedAction === step.correct) {

        score++;

        actionCompleted = true;


        showFeedback(
            "correct",
            "Correct",
            step.feedback
        );


        updateLabStatus(
            step.actionText
        );


        /* Highlight correct equipment */

        const correctEquipment =
            document.getElementById(
                step.correct
            );


        if (correctEquipment) {

            correctEquipment.classList.add(
                "correct"
            );

        }


        /* Disable options */

        disableOptions();


        /* NEXT STEP */

        if (currentStep < totalSteps - 1) {

            actionButton.textContent =
                "Next Step →";

            actionButton.onclick =
                nextStep;

        }

        /* FINAL RESULT */

        else {

            actionButton.textContent =
                "View Final Result →";

            actionButton.onclick =
                showResult;

        }


        return;
    }


    /* =====================================================
       INCORRECT
    ===================================================== */

    showFeedback(
        "incorrect",
        "Not Quite",
        "That is not the expected virtual item for this step. Please review the instruction and try again."
    );


    updateLabStatus(
        "Incorrect selection. Choose another virtual item and try again."
    );


    /* IMPORTANT:
       Do NOT complete the step.
       Do NOT disable the options.
       Do NOT move to the next step.
    */

    actionCompleted = false;


    actionButton.textContent =
        "Perform Action →";

    actionButton.onclick =
        performAction;

}


/* =========================================================
   DISABLE OPTIONS
========================================================= */

function disableOptions() {

    document.querySelectorAll(
        ".action-option"
    ).forEach(function (button) {

        button.disabled = true;

    });

}


/* =========================================================
   NEXT STEP
========================================================= */

function nextStep() {

    if (!actionCompleted) {
        return;
    }


    if (
        currentStep >=
        totalSteps - 1
    ) {

        return;

    }


    currentStep++;

    loadStep();

}


/* =========================================================
   FEEDBACK
========================================================= */

function showFeedback(
    type,
    title,
    message
) {

    const feedback =
        document.getElementById(
            "feedback"
        );

    const feedbackIcon =
        document.getElementById(
            "feedbackIcon"
        );

    const feedbackTitle =
        document.getElementById(
            "feedbackTitle"
        );

    const feedbackText =
        document.getElementById(
            "feedbackText"
        );


    feedback.classList.remove(
        "hidden"
    );


    feedback.classList.remove(
        "correct",
        "incorrect",
        "warning"
    );


    feedback.classList.add(
        type
    );


    if (type === "correct") {

        feedbackIcon.textContent =
            "✓";

    }

    else if (type === "incorrect") {

        feedbackIcon.textContent =
            "✗";

    }

    else {

        feedbackIcon.textContent =
            "⚠";

    }


    feedbackTitle.textContent =
        title;

    feedbackText.textContent =
        message;

}


/* =========================================================
   RESET FEEDBACK
========================================================= */

function resetFeedback() {

    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.classList.add(
        "hidden"
    );


    feedback.classList.remove(
        "correct",
        "incorrect",
        "warning"
    );


    document.getElementById(
        "feedbackIcon"
    ).textContent = "✓";


    document.getElementById(
        "feedbackTitle"
    ).textContent = "Correct";


    document.getElementById(
        "feedbackText"
    ).textContent =
        "Good virtual laboratory practice.";

}


/* =========================================================
   LAB STATUS
========================================================= */

function updateLabStatus(message) {

    const status =
        document.getElementById(
            "labStatus"
        );


    if (!status) {
        return;
    }


    const paragraph =
        status.querySelector("p");


    if (paragraph) {

        paragraph.textContent =
            message;

    }

}


/* =========================================================
   SHOW RESULT
========================================================= */

function showResult() {

    if (!actionCompleted) {
        return;
    }


    const percentage =
        Math.round(
            (score / totalSteps) * 100
        );


    /* COMPLETED STEPS */

    document.getElementById(
        "completedSteps"
    ).textContent =
        `${totalSteps} / ${totalSteps}`;


    /* PERFORMANCE */

    let performance;


    if (percentage >= 80) {

        performance =
            "Excellent";

    }

    else if (percentage >= 60) {

        performance =
            "Good";

    }

    else if (percentage >= 50) {

        performance =
            "Fair";

    }

    else {

        performance =
            "Needs Improvement";

    }


    document.getElementById(
        "finalPerformance"
    ).textContent =
        performance;


    /* OBSERVATION */

    document.getElementById(
        "observationText"
    ).textContent =
        "The virtual aseptic-technique workflow has been completed. The simulation demonstrates organized materials, controlled virtual handling, simulated processing and correct labeling.";


    /* SAVE RESULT */

    saveResult(
        percentage,
        performance
    );


    /* HIDE WORKSPACE */

    const workspace =
        document.querySelector(
            ".workspace"
        );


    if (workspace) {

        workspace.style.display =
            "none";

    }


    /* SHOW RESULT */

    const resultSection =
        document.getElementById(
            "resultSection"
        );


    resultSection.classList.remove(
        "hidden"
    );


    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   SAVE RESULT
========================================================= */

function saveResult(
    percentage,
    performance
) {

    const studentName =
        localStorage.getItem(
            "studentName"
        ) || "Student";


    const result = {

        studentName:
            studentName,

        experiment:
            "Aseptic Techniques",

        score:
            percentage,

        total:
            100,

        correctAnswers:
            score,

        totalSteps:
            totalSteps,

        performance:
            performance,

        date:
            new Date().toLocaleString()

    };


    let results;


    try {

        results =
            JSON.parse(
                localStorage.getItem(
                    "simulationResults"
                )
            ) || [];

    }

    catch (error) {

        results = [];

    }


    results.push(result);


    localStorage.setItem(
        "simulationResults",
        JSON.stringify(results)
    );

}


/* =========================================================
   RETURN TO DASHBOARD
========================================================= */

function returnToDashboard() {

    window.location.href =
        "../../../dashboard.html";

}


/* =========================================================
   BACK / EXIT EXPERIMENT
========================================================= */

function goBack() {

    window.location.href =
        "../aseptic-technique.html";

}