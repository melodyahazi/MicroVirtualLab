// =========================================
// EXPERIMENT 04 - BACTERIA STAINING
// VIRTUAL SIMULATION
// =========================================

const steps = [

    {
        title: "Prepare the Virtual Workspace",

        description:
            "Begin by organizing the virtual laboratory workspace before starting the staining activity.",

        actions: [
            "Organize the virtual workspace and review the materials",
            "Begin immediately without checking the workspace",
            "Remove all materials from the virtual workspace",
            "Skip the workspace preparation"
        ],

        correct: 0,

        feedback:
            "Correct. A well-organized workspace helps the virtual practical proceed safely and systematically."
    },

    {
        title: "Prepare the Virtual Slide",

        description:
            "The bacterial sample is represented on a virtual microscope slide. Select the appropriate next action.",

        actions: [
            "Place the virtual bacterial sample on the slide",
            "Discard the virtual slide",
            "Observe the slide without a sample",
            "Skip the slide preparation"
        ],

        correct: 0,

        feedback:
            "Correct. The virtual sample must be represented on the microscope slide before the staining sequence."
    },

    {
        title: "Select the Staining Reagent",

        description:
            "A staining reagent is required to demonstrate the staining concept. Select the appropriate action.",

        actions: [
            "Select the appropriate virtual staining reagent",
            "Remove the staining reagent",
            "Select an unrelated laboratory item",
            "Skip the staining stage"
        ],

        correct: 0,

        feedback:
            "Correct. The staining reagent provides contrast that makes the simulated bacterial cells easier to observe."
    },

    {
        title: "Apply the Virtual Stain",

        description:
            "The virtual staining stage is now ready. Choose the action that represents the correct conceptual step.",

        actions: [
            "Apply the virtual stain to the prepared sample",
            "Remove the sample from the slide",
            "Close the simulation immediately",
            "Observe the unstained sample only"
        ],

        correct: 0,

        feedback:
            "Correct. Applying the virtual stain demonstrates how staining increases contrast between bacterial cells and their surroundings."
    },

    {
        title: "Complete the Virtual Rinse Stage",

        description:
            "The simulated staining sequence includes a virtual rinse stage. Choose the appropriate action.",

        actions: [
            "Use the virtual rinse stage to complete the simulated sequence",
            "Add another unrelated reagent",
            "Remove the microscope slide",
            "Skip directly to the dashboard"
        ],

        correct: 0,

        feedback:
            "Correct. The virtual rinse stage completes this part of the simulated staining sequence."
    },

    {
        title: "Prepare for Microscopic Observation",

        description:
            "The stained virtual sample is ready for observation. Select the appropriate next step.",

        actions: [
            "Place the prepared virtual slide in the observation stage",
            "Discard the virtual sample",
            "Restart the staining activity",
            "Remove the microscope"
        ],

        correct: 0,

        feedback:
            "Correct. The prepared virtual slide is now ready for simulated microscopic observation."
    },

    {
        title: "Observe the Stained Sample",

        description:
            "Use the virtual microscope observation stage to examine the simulated stained bacterial sample.",

        actions: [
            "Observe the stained sample using the virtual microscope",
            "Close the microscope before observation",
            "Remove the stained sample",
            "Skip the observation"
        ],

        correct: 0,

        feedback:
            "Correct. Microscopic observation allows the stained bacterial cells to be examined."
    },

    {
        title: "Interpret the Virtual Result",

        description:
            "The final simulated observation shows increased contrast between the bacterial cells and their background.",

        actions: [
            "Interpret the visible bacterial cells based on the simulated staining result",
            "Ignore the observation",
            "Remove all virtual equipment",
            "Restart the experiment"
        ],

        correct: 0,

        feedback:
            "Correct. Staining increases contrast, making bacterial cells easier to distinguish during microscopic observation."
    }

];


// =========================================
// VARIABLES
// =========================================

let currentStep = 0;
let score = 0;
let completedSteps = 0;
let selectedAction = null;


// =========================================
// GET HTML ELEMENTS
// =========================================

const stepNumber = document.getElementById("stepNumber");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

const stepTitle = document.getElementById("stepTitle");
const stepDescription = document.getElementById("stepDescription");

const actionArea = document.getElementById("actionArea");
const actionButton = document.getElementById("actionButton");

const feedback = document.getElementById("feedback");
const feedbackIcon = document.getElementById("feedbackIcon");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const labStatus = document.getElementById("labStatus");

const bacterialSample = document.getElementById("bacterialSample");

const resultSection = document.getElementById("resultSection");
const completedStepsDisplay = document.getElementById("completedSteps");
const finalPerformance = document.getElementById("finalPerformance");

const dashboardButton = document.getElementById("dashboardButton");

const equipment = {
    workArea: document.getElementById("workArea"),
    slide: document.getElementById("slide"),
    stain: document.getElementById("stain"),
    wash: document.getElementById("wash"),
    microscope: document.getElementById("microscope")
};


// =========================================
// INITIALIZE SIMULATION
// =========================================

showStep();


// =========================================
// DISPLAY CURRENT STEP
// =========================================

function showStep() {

    const step = steps[currentStep];

    selectedAction = null;

    stepNumber.textContent =
        `Step ${currentStep + 1} of ${steps.length}`;

    const progress =
        Math.round((currentStep / steps.length) * 100);

    progressPercent.textContent = `${progress}%`;

    progressFill.style.width = `${progress}%`;

    stepTitle.textContent = step.title;

    stepDescription.textContent = step.description;

    actionButton.disabled = true;

    feedback.classList.add("hidden");

    actionArea.innerHTML = "";

    createActions(step.actions);

    updateLaboratory();

}


// =========================================
// CREATE ACTION BUTTONS
// =========================================

function createActions(actions) {

    actions.forEach((action, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "action-choice";

        button.textContent = action;

        button.addEventListener("click", function () {

            selectAction(index, button);

        });

        actionArea.appendChild(button);

    });

}


// =========================================
// SELECT ACTION
// =========================================

function selectAction(index, button) {

    selectedAction = index;

    const buttons =
        document.querySelectorAll(".action-choice");

    buttons.forEach(item => {

        item.classList.remove("selected");

    });

    button.classList.add("selected");

    checkAction(index);
}


// =========================================
// CHECK ANSWER
// =========================================

function checkAction(index) {

    const step = steps[currentStep];

    const buttons =
        document.querySelectorAll(".action-choice");

    if (index === step.correct) {

        buttons[index].classList.remove("selected");
        buttons[index].classList.add("correct");

        showFeedback(
            true,
            "Correct!",
            step.feedback
        );

        score++;
        completedSteps++;

        actionButton.disabled = false;

        updateLaboratoryAfterSuccess();

    } else {

        buttons[index].classList.remove("selected");
        buttons[index].classList.add("incorrect");

        showFeedback(
            false,
            "Try Again",
            "That is not the best choice for this stage. Review the description and select another action."
        );

        actionButton.disabled = true;
    }
}


// =========================================
// SHOW FEEDBACK
// =========================================

function showFeedback(isCorrect, title, text) {

    feedback.classList.remove("hidden");

    feedbackTitle.textContent = title;

    feedbackText.textContent = text;

    if (isCorrect) {

        feedback.classList.remove("error");

        feedbackIcon.textContent = "✓";

    } else {

        feedback.classList.add("error");

        feedbackIcon.textContent = "✕";
    }
}


// =========================================
// UPDATE LABORATORY
// =========================================

function updateLaboratory() {

    Object.values(equipment).forEach(item => {

        if (item) {

            item.classList.remove("active");

        }

    });

    const stepEquipment = [

        equipment.workArea,
        equipment.slide,
        equipment.stain,
        equipment.stain,
        equipment.wash,
        equipment.slide,
        equipment.microscope,
        equipment.microscope

    ];

    const activeEquipment =
        stepEquipment[currentStep];

    if (activeEquipment) {

        activeEquipment.classList.add("active");

    }

    labStatus.textContent =
        `Step ${currentStep + 1} ready`;
}


// =========================================
// UPDATE LAB AFTER SUCCESS
// =========================================

function updateLaboratoryAfterSuccess() {

    const stepEquipment = [

        equipment.workArea,
        equipment.slide,
        equipment.stain,
        equipment.stain,
        equipment.wash,
        equipment.slide,
        equipment.microscope,
        equipment.microscope

    ];

    const activeEquipment =
        stepEquipment[currentStep];

    if (activeEquipment) {

        activeEquipment.classList.remove("active");

        activeEquipment.classList.add("completed");

    }


    // Show stained appearance
    if (currentStep >= 3 && bacterialSample) {

        bacterialSample.classList.add("stained");

    }


    // Enhanced observation
    if (currentStep >= 6 && bacterialSample) {

        bacterialSample.classList.add("enhanced");

    }


    labStatus.textContent =
        "Step completed";
}


// =========================================
// CONTINUE BUTTON
// =========================================

actionButton.addEventListener("click", function () {

    if (selectedAction === null) {

        return;

    }

    if (currentStep < steps.length - 1) {

        currentStep++;

        showStep();

    } else {

        completeExperiment();

    }

});


// =========================================
// COMPLETE EXPERIMENT
// =========================================

function completeExperiment() {

    progressFill.style.width = "100%";

    progressPercent.textContent = "100%";

    stepNumber.textContent =
        `Step ${steps.length} of ${steps.length}`;

    actionArea.innerHTML = "";

    actionButton.style.display = "none";

    feedback.classList.add("hidden");

    resultSection.classList.remove("hidden");

    const performance =
        calculatePerformance();

    completedStepsDisplay.textContent =
        `${completedSteps} / ${steps.length}`;

    finalPerformance.textContent =
        performance;


    // Show final observation
    const observationSection =
        document.getElementById("observationSection");

    if (observationSection) {

        observationSection.classList.remove("hidden");

    }

    saveSimulationResult();

    resultSection.scrollIntoView({
        behavior: "smooth"
    });
}


// =========================================
// CALCULATE PERFORMANCE
// =========================================

function calculatePerformance() {

    const percentage =
        (score / steps.length) * 100;

    if (percentage === 100) {

        return "Excellent";

    } else if (percentage >= 70) {

        return "Very Good";

    } else {

        return "Good";
    }
}


// =========================================
// SAVE RESULT
// =========================================

/* =========================================
   SAVE RESULT
========================================= */

function saveSimulationResult() {

    const studentName =
        localStorage.getItem("studentName") || "Student";


    /* Convert correct answers to percentage */

    const percentage =
        Math.round((score / steps.length) * 100);


    const result = {

        studentName: studentName,

        experiment: "Bacteria Staining",

        /* Save percentage out of 100 */

        score: percentage,

        total: 100,

        /* Keep original score for reference */

        correctAnswers: score,

        totalSteps: steps.length,

        performance: calculatePerformance(),

        date: new Date().toLocaleString(),

        timestamp: new Date().toISOString()

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


// =========================================
// RETURN TO DASHBOARD
// =========================================

dashboardButton.addEventListener("click", function () {

    window.location.href = "../../../dashboard.html";

});