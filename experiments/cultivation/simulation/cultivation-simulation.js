/* =========================================
   EXPERIMENT 03
   CULTIVATION OF BACTERIA
   VIRTUAL PRACTICAL
========================================= */


/* =========================================
   VARIABLES
========================================= */

let currentStep = 0;

let score = 0;

let completedSteps = 0;


/* =========================================
   PROCEDURE STEPS
========================================= */

const steps = [

    {
        title: "Prepare the Work Area",

        description:
            "Before beginning the cultivation procedure, prepare an organized virtual laboratory work area.",

        actions: [
            {
                text: "Organize and prepare the work area",
                correct: true
            },
            {
                text: "Leave the work area disorganized",
                correct: false
            },
            {
                text: "Begin immediately without preparing the area",
                correct: false
            }
        ],

        success:
            "Correct. A properly organized work area supports safe and controlled laboratory work."
    },


    {
        title: "Select the Culture Plate",

        description:
            "Choose the appropriate culture plate that will be used for the bacterial cultivation procedure.",

        actions: [
            {
                text: "Select the sterile culture plate",
                correct: true
            },
            {
                text: "Select an unlabeled damaged plate",
                correct: false
            },
            {
                text: "Use any available container",
                correct: false
            }
        ],

        success:
            "Correct. The appropriate culture plate should be selected before inoculation."
    },


    {
        title: "Prepare the Inoculating Loop",

        description:
            "Prepare the inoculating loop before transferring the bacterial sample.",

        actions: [
            {
                text: "Prepare the inoculating loop appropriately",
                correct: true
            },
            {
                text: "Use the loop without preparation",
                correct: false
            },
            {
                text: "Place the loop on an unclean surface",
                correct: false
            }
        ],

        success:
            "Correct. The inoculating loop must be appropriately prepared before use."
    },


    {
        title: "Obtain the Bacterial Sample",

        description:
            "Select the bacterial sample that will be used for the simulated cultivation procedure.",

        actions: [
            {
                text: "Select the prepared bacterial sample",
                correct: true
            },
            {
                text: "Ignore the bacterial sample",
                correct: false
            },
            {
                text: "Use an unidentified sample",
                correct: false
            }
        ],

        success:
            "Correct. The prepared bacterial sample is selected for the cultivation procedure."
    },


    {
        title: "Inoculate the Culture Plate",

        description:
            "Transfer the bacterial sample to the culture plate using the appropriate simulated inoculation technique.",

        actions: [
            {
                text: "Transfer the sample to the culture plate",
                correct: true
            },
            {
                text: "Leave the culture plate unused",
                correct: false
            },
            {
                text: "Place the sample outside the culture plate",
                correct: false
            }
        ],

        success:
            "Correct. The bacterial sample has been transferred to the culture plate."
    },


    {
        title: "Close and Label the Plate",

        description:
            "After inoculation, close the culture plate and apply an appropriate label.",

        actions: [
            {
                text: "Close and label the culture plate",
                correct: true
            },
            {
                text: "Leave the plate open and unlabeled",
                correct: false
            },
            {
                text: "Remove the label from the plate",
                correct: false
            }
        ],

        success:
            "Correct. The culture plate is closed and appropriately labeled."
    },


    {
        title: "Incubate the Culture",

        description:
            "Place the inoculated culture plate in the virtual incubator under the simulated appropriate conditions.",

        actions: [
            {
                text: "Place the culture plate in the incubator",
                correct: true
            },
            {
                text: "Leave the culture plate on the bench",
                correct: false
            },
            {
                text: "Discard the culture plate",
                correct: false
            }
        ],

        success:
            "Correct. The inoculated culture has been placed in the virtual incubator."
    },


    {
        title: "Observe Bacterial Growth",

        description:
            "The simulated incubation is complete. Observe the culture plate for visible bacterial growth.",

        actions: [
            {
                text: "Observe and record the bacterial growth",
                correct: true
            },
            {
                text: "Ignore the culture plate",
                correct: false
            },
            {
                text: "Remove the culture without observation",
                correct: false
            }
        ],

        success:
            "Correct. Simulated bacterial colonies can now be observed on the culture plate."
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const stepNumber =
    document.getElementById("stepNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const stepTitle =
    document.getElementById("stepTitle");

const stepDescription =
    document.getElementById("stepDescription");

const actionArea =
    document.getElementById("actionArea");

const actionButton =
    document.getElementById("actionButton");

const feedback =
    document.getElementById("feedback");

const feedbackIcon =
    document.getElementById("feedbackIcon");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const labStatus =
    document.getElementById("labStatus");

const observationTitle =
    document.getElementById("observationTitle");

const observationDescription =
    document.getElementById("observationDescription");

const resultSection =
    document.getElementById("resultSection");

const completedStepsElement =
    document.getElementById("completedSteps");

const finalPerformance =
    document.getElementById("finalPerformance");

const dashboardButton =
    document.getElementById("dashboardButton");

const incubatorDisplay =
    document.getElementById("incubatorDisplay");

const burnerFlame =
    document.getElementById("burnerFlame");

const observationDish =
    document.querySelector(".observation-dish");


/* =========================================
   LAB EQUIPMENT
========================================= */

const workArea =
    document.getElementById("workArea");

const bacterialSample =
    document.getElementById("bacterialSample");

const inoculatingLoop =
    document.getElementById("inoculatingLoop");

const petriDish =
    document.getElementById("petriDish");

const burner =
    document.getElementById("burner");

const labelItem =
    document.getElementById("labelItem");

const incubator =
    document.getElementById("incubator");


/* =========================================
   INITIALIZE
========================================= */

function initializeSimulation() {

    currentStep = 0;

    score = 0;

    completedSteps = 0;

    resultSection.classList.add("hidden");

    observationDish.classList.remove(
        "growth-visible"
    );

    incubatorDisplay.textContent =
        "READY";

    showStep();

}


/* =========================================
   SHOW CURRENT STEP
========================================= */

function showStep() {

    const step =
        steps[currentStep];

    const totalSteps =
        steps.length;

    const percentage =
        Math.round(
            ((currentStep + 1) / totalSteps) * 100
        );

    stepNumber.textContent =
        `Step ${currentStep + 1} of ${totalSteps}`;

    progressPercent.textContent =
        `${percentage}%`;

    progressFill.style.width =
        `${percentage}%`;

    stepTitle.textContent =
        step.title;

    stepDescription.textContent =
        step.description;

    feedback.classList.add("hidden");

    actionButton.disabled = true;

    actionButton.textContent =
        "Select an Action";

    createActions(step);

    highlightEquipment();

}


/* =========================================
   CREATE ACTION BUTTONS
========================================= */

function createActions(step) {

    actionArea.innerHTML = "";

    step.actions.forEach(
        (action, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "action-choice";

            button.textContent =
                action.text;

            button.addEventListener(
                "click",
                () => selectAction(
                    action,
                    button
                )
            );

            actionArea.appendChild(button);

        }
    );

}


/* =========================================
   SELECT ACTION
========================================= */

function selectAction(action, selectedButton) {

    const buttons =
        document.querySelectorAll(
            ".action-choice"
        );

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    if (action.correct) {

        score++;

        completedSteps++;

        selectedButton.style.borderColor =
            "#16a34a";

        selectedButton.style.background =
            "#f0fdf4";

        showFeedback(
            true,
            "Correct!",
            actionSuccessMessage()
        );

        actionButton.disabled = false;

        actionButton.textContent =
            currentStep === steps.length - 1
                ? "Complete Experiment →"
                : "Continue →";

        updateLaboratory();

    } else {

        selectedButton.style.borderColor =
            "#dc2626";

        selectedButton.style.background =
            "#fef2f2";

        showFeedback(
            false,
            "Try Again",
            "That is not the best action for this step. Review the instruction and try the appropriate action."
        );

        setTimeout(
            () => {

                buttons.forEach(
                    button => {
                        button.disabled = false;
                    }
                );

                selectedButton.style.borderColor =
                    "";

                selectedButton.style.background =
                    "";

                feedback.classList.add(
                    "hidden"
                );

            },
            900
        );

    }

}


/* =========================================
   FEEDBACK
========================================= */

function showFeedback(
    correct,
    title,
    message
) {

    feedback.classList.remove(
        "hidden"
    );

    feedback.classList.toggle(
        "wrong",
        !correct
    );

    feedbackIcon.textContent =
        correct ? "✓" : "✕";

    feedbackTitle.textContent =
        title;

    feedbackText.textContent =
        message;

}


/* =========================================
   SUCCESS MESSAGE
========================================= */

function actionSuccessMessage() {

    return steps[currentStep].success;

}


/* =========================================
   UPDATE LABORATORY
========================================= */

function updateLaboratory() {

    removeActiveEquipment();


    switch (currentStep) {

        case 0:

            workArea.classList.add(
                "active"
            );

            labStatus.innerHTML =
                `<span class="status-icon">✓</span>
                 <p>Work area prepared successfully.</p>`;

            break;


        case 1:

            petriDish.classList.add(
                "active"
            );

            labStatus.innerHTML =
                `<span class="status-icon">🧫</span>
                 <p>Culture plate selected.</p>`;

            break;


        case 2:

            inoculatingLoop.classList.add(
                "active"
            );

            burnerFlame.style.opacity =
                "1";

            labStatus.innerHTML =
                `<span class="status-icon">🔥</span>
                 <p>Inoculating loop prepared.</p>`;

            break;


        case 3:

            bacterialSample.classList.add(
                "active"
            );

            labStatus.innerHTML =
                `<span class="status-icon">🦠</span>
                 <p>Bacterial sample selected.</p>`;

            break;


        case 4:

            petriDish.classList.add(
                "active"
            );

            labStatus.innerHTML =
                `<span class="status-icon">🧫</span>
                 <p>Bacterial sample transferred to the culture plate.</p>`;

            showPlateGrowthPreview();

            break;


        case 5:

            labelItem.classList.add(
                "active"
            );

            labStatus.innerHTML =
                `<span class="status-icon">🏷️</span>
                 <p>Culture plate closed and labeled.</p>`;

            break;


        case 6:

            incubator.classList.add(
                "active"
            );

            incubatorDisplay.textContent =
                "INCUBATING";

            labStatus.innerHTML =
                `<span class="status-icon">🌡️</span>
                 <p>Culture placed in the virtual incubator.</p>`;

            break;


        case 7:

            observationDish.classList.add(
                "growth-visible"
            );

            incubatorDisplay.textContent =
                "COMPLETE";

            labStatus.innerHTML =
                `<span class="status-icon">🔎</span>
                 <p>Simulated bacterial growth is ready for observation.</p>`;

            updateObservation();

            break;

    }

}


/* =========================================
   HIGHLIGHT EQUIPMENT
========================================= */

function highlightEquipment() {

    removeActiveEquipment();


    switch (currentStep) {

        case 0:
            workArea.classList.add(
                "active"
            );
            break;

        case 1:
            petriDish.classList.add(
                "active"
            );
            break;

        case 2:
            inoculatingLoop.classList.add(
                "active"
            );
            break;

        case 3:
            bacterialSample.classList.add(
                "active"
            );
            break;

        case 4:
            petriDish.classList.add(
                "active"
            );
            break;

        case 5:
            labelItem.classList.add(
                "active"
            );
            break;

        case 6:
            incubator.classList.add(
                "active"
            );
            break;

        case 7:
            petriDish.classList.add(
                "active"
            );
            break;

    }

}


/* =========================================
   REMOVE ACTIVE EQUIPMENT
========================================= */

function removeActiveEquipment() {

    document
        .querySelectorAll(".equipment")
        .forEach(
            item => {
                item.classList.remove(
                    "active"
                );
            }
        );

}


/* =========================================
   PLATE GROWTH PREVIEW
========================================= */

function showPlateGrowthPreview() {

    document
        .querySelectorAll(
            ".growth"
        )
        .forEach(
            colony => {

                colony.style.opacity =
                    "0.45";

            }
        );

}


/* =========================================
   OBSERVATION
========================================= */

function updateObservation() {

    observationTitle.textContent =
        "Bacterial colonies observed";

    observationDescription.textContent =
        "The simulated culture plate shows visible bacterial colonies following the cultivation and incubation stages. Record the observation as part of the virtual practical.";

}


/* =========================================
   NEXT STEP
========================================= */

actionButton.addEventListener(
    "click",
    () => {

        if (
            currentStep <
            steps.length - 1
        ) {

            currentStep++;

            showStep();

        } else {

            completeExperiment();

        }

    }
);



/* =========================================
   COMPLETE EXPERIMENT
========================================= */

function completeExperiment() {

    progressFill.style.width = "100%";

    progressPercent.textContent = "100%";

    stepNumber.textContent =
        `Step ${steps.length} of ${steps.length}`;

    completedStepsElement.textContent =
        `${completedSteps} / ${steps.length}`;


    /* Calculate percentage score */

    const percentage =
        Math.round((score / steps.length) * 100);


    /* Performance */

    let performance = "Needs Improvement";

    if (percentage >= 80) {

        performance = "Excellent";

    } else if (percentage >= 70) {

        performance = "Very Good";

    } else if (percentage >= 60) {

        performance = "Good";

    } else if (percentage >= 50) {

        performance = "Fair";

    }


    finalPerformance.textContent =
        performance;


    /* Final observation */

    observationDish.classList.add(
        "growth-visible"
    );

    observationTitle.textContent =
        "Final observation completed";

    observationDescription.textContent =
        "The virtual cultivation simulation has been completed successfully.";


    /* Show result */

    resultSection.classList.remove(
        "hidden"
    );


    resultSection.scrollIntoView({
        behavior: "smooth"
    });


    /* Save percentage score */

    saveSimulationResult(percentage);

}


/* =========================================
   SAVE RESULT
========================================= */

function saveSimulationResult(percentage) {

    const studentName =
        localStorage.getItem("studentName")
        || "Student";


    const result = {

        studentName: studentName,

        experiment:
            "Cultivation of Bacteria",

        experimentNumber: 3,

        /* IMPORTANT:
           Save percentage instead of raw
           number of correct answers.
        */

        score: percentage,

        total: 100,

        correctAnswers: score,

        totalSteps: steps.length,

        performance:
            finalPerformance.textContent,

        date:
            new Date().toLocaleDateString(),

        timestamp:
            new Date().toISOString()

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
   RETURN TO DASHBOARD
========================================= */

dashboardButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "../../../dashboard.html";

    }
);


/* =========================================
   START
========================================= */

initializeSimulation();