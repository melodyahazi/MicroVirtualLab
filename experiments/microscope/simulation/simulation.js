/* =========================================
   MICROSCOPY SIMULATION STATE
========================================= */

let currentStep = 1;
let score = 0;

let slidePlaced = false;
let selectedObjective = 0;
let lightOn = false;

let coarseFocus = 0;
let fineFocus = 0;
let diaphragm = 0;


/* =========================================
   PRACTICAL STEPS
========================================= */

const steps = [

    {
        title: "Place the slide",

        text:
            "Place the prepared slide on the microscope stage.",

        button:
            "Place Slide →"
    },

    {
        title: "Switch on the light",

        text:
            "Switch on the microscope light source.",

        button:
            "Switch Light On →"
    },

    {
        title: "Select low-power objective",

        text:
            "Start observation using the low-power 4× objective.",

        button:
            "Select 4× Objective →"
    },

    {
        title: "Focus the specimen",

        text:
            "Use the coarse adjustment until the specimen comes into focus.",

        button:
            "Focus with Coarse →"
    },

    {
        title: "Sharpen the image",

        text:
            "Use the fine adjustment to sharpen the specimen.",

        button:
            "Sharpen with Fine →"
    },

    {
        title: "Adjust the diaphragm",

        text:
            "Adjust the diaphragm to obtain suitable brightness and clarity.",

        button:
            "Adjust Diaphragm →"
    }

];


/* =========================================
   INITIALIZE
========================================= */

updateInterface();
updateMicroscope();


/* =========================================
   UPDATE INTERFACE
========================================= */

function updateInterface() {

    const step = steps[currentStep - 1];

    document.getElementById("instructionTitle")
        .textContent = step.title;

    document.getElementById("instructionText")
        .textContent = step.text;

    document.getElementById("nextButton")
        .textContent = step.button;

    document.getElementById("stepCounter")
        .textContent =
        `Step ${currentStep} of ${steps.length}`;

    document.getElementById("progressValue")
        .style.width =
        `${(currentStep / steps.length) * 100}%`;

    document.getElementById("score")
        .textContent = score;
}


/* =========================================
   FEEDBACK
========================================= */

function showFeedback(message, type) {

    const feedback =
        document.getElementById("feedback");

    feedback.textContent = message;

    feedback.className =
        `feedback ${type}`;
}


/* =========================================
   NEXT STEP
========================================= */

function nextStep() {

    switch (currentStep) {

        case 1:

            placeSlide();

            break;


        case 2:

            if (!lightOn) {

                showFeedback(
                    "Turn on the microscope light first.",
                    "error"
                );

                return;
            }

            score += 10;

            currentStep++;

            showFeedback(
                "✓ Light is ready.",
                "success"
            );

            updateInterface();

            break;


        case 3:

            if (selectedObjective !== 4) {

                showFeedback(
                    "Select the low-power 4× objective first.",
                    "error"
                );

                return;
            }

            score += 20;

            currentStep++;

            showFeedback(
                "✓ Correct objective selected.",
                "success"
            );

            updateInterface();

            break;


        case 4:

            if (coarseFocus < 3) {

                showFeedback(
                    "Increase Coarse Focus until the image becomes visible.",
                    "error"
                );

                return;
            }

            score += 20;

            currentStep++;

            showFeedback(
                "✓ Specimen is now visible.",
                "success"
            );

            updateInterface();

            break;


        case 5:

            if (fineFocus < 2) {

                showFeedback(
                    "Increase Fine Focus to sharpen the image.",
                    "error"
                );

                return;
            }

            score += 20;

            currentStep++;

            showFeedback(
                "✓ Image successfully sharpened.",
                "success"
            );

            updateInterface();

            break;


        case 6:

            if (diaphragm < 2) {

                showFeedback(
                    "Increase the diaphragm setting to improve brightness.",
                    "error"
                );

                return;
            }

            score += 10;

            completeSimulation();

            break;
    }

    updateMicroscope();
}


/* =========================================
   PLACE SLIDE
========================================= */

function placeSlide() {

    slidePlaced = true;

    document
        .getElementById("slide")
        .classList.add("placed");

    document
        .getElementById("slideStatus")
        .textContent = "Placed";

    score += 10;

    currentStep++;

    showFeedback(
        "✓ Slide successfully placed.",
        "success"
    );

    updateInterface();

    updateMicroscope();
}


/* =========================================
   LIGHT
========================================= */

function turnOnLight() {

    lightOn = true;

    const button =
        document.getElementById("lightButton");

    button.textContent = "ON";

    button.classList.add("on");

    document
        .getElementById("lightStatus")
        .textContent = "ON";

    updateMicroscope();
}


function toggleLight() {

    lightOn = !lightOn;

    const button =
        document.getElementById("lightButton");

    if (lightOn) {

        button.textContent = "ON";

        button.classList.add("on");

        document
            .getElementById("lightStatus")
            .textContent = "ON";

    } else {

        button.textContent = "OFF";

        button.classList.remove("on");

        document
            .getElementById("lightStatus")
            .textContent = "OFF";
    }

    updateMicroscope();
}


/* =========================================
   OBJECTIVE
========================================= */

function selectObjective(value) {

    /*
       Prevent skipping the required sequence.
    */

    if (!slidePlaced) {

        showFeedback(
            "Place the slide before selecting an objective.",
            "error"
        );

        return;
    }


    if (!lightOn) {

        showFeedback(
            "Switch on the light before observing the specimen.",
            "error"
        );

        return;
    }


    selectedObjective = value;


    document
        .querySelectorAll(".objective")
        .forEach(button => {

            button.classList.remove("selected");

        });


    document
        .querySelectorAll(".objective")
        .forEach(button => {

            if (
                button.textContent.trim() ===
                `${value}×`
            ) {

                button.classList.add("selected");

            }

        });


    document
        .getElementById("currentObjective")
        .textContent = `${value}×`;

    document
        .getElementById("magnificationLabel")
        .textContent = `${value}×`;   

    updateMicroscope();


    /*
       Only 4× is correct during Step 3.
    */

    if (currentStep === 3) {

        if (value === 4) {

            showFeedback(
                "✓ Correct. Low-power objective selected.",
                "success"
            );

        } else {

            showFeedback(
                "⚠ Start with the low-power 4× objective.",
                "error"
            );
        }
    }
}


/* =========================================
   COARSE FOCUS
========================================= */

function changeCoarse(amount) {

    if (!slidePlaced) {

        showFeedback(
            "Place the slide first.",
            "error"
        );

        return;
    }


    coarseFocus += amount;


    if (coarseFocus < 0) {

        coarseFocus = 0;

    }


    if (coarseFocus > 5) {

        coarseFocus = 5;

    }


    document
        .getElementById("coarseValue")
        .textContent = coarseFocus;


    updateMicroscope();


    if (currentStep === 4 && coarseFocus >= 3) {

        document
            .getElementById("focusStatus")
            .textContent = "Focused";

    }
}


/* =========================================
   FINE FOCUS
========================================= */

function changeFine(amount) {

    if (!slidePlaced) {

        showFeedback(
            "Place the slide first.",
            "error"
        );

        return;
    }


    fineFocus += amount;


    if (fineFocus < 0) {

        fineFocus = 0;

    }


    if (fineFocus > 5) {

        fineFocus = 5;

    }


    document
        .getElementById("fineValue")
        .textContent = fineFocus;


    updateMicroscope();
}


/* =========================================
   DIAPHRAGM
========================================= */

function changeDiaphragm(amount) {

    diaphragm += amount;


    if (diaphragm < 0) {

        diaphragm = 0;

    }


    if (diaphragm > 5) {

        diaphragm = 5;

    }


    document
        .getElementById("diaphragmValue")
        .textContent = diaphragm;


    updateMicroscope();
}


/* =========================================
   VISUAL MICROSCOPE UPDATE
========================================= */

function updateMicroscope() {

    const specimen =
        document.getElementById("specimen");


    const slide =
        document.getElementById("slide");


    /*
       LIGHT EFFECT
    */

    if (lightOn) {

        slide.style.background =
            "rgba(255,255,255,0.95)";

    } else {

        slide.style.background =
            "rgba(255,255,255,0.35)";
    }


    /*
       MAGNIFICATION
    */

    let magnification = 1;


   if (selectedObjective === 4) {

    magnification = 1;

}

else if (selectedObjective === 10) {

    magnification = 1.8;

}

else if (selectedObjective === 40) {

    magnification = 3;

}


    /*
       FOCUS EFFECT
    */

    const focusLevel =
        coarseFocus + fineFocus;


   let blurAmount =
    8 - (focusLevel * 1.2);

if (blurAmount < 0) {

    blurAmount = 0;

}


    if (blurAmount < 0) {

        blurAmount = 0;

    }


    /*
       DIAPHRAGM / BRIGHTNESS
    */

    let brightness =
    0.5 + (diaphragm * 0.1);

if (brightness > 1) {

    brightness = 1;

}


    if (brightness > 1) {

        brightness = 1;

    }


    specimen.style.transform =
        `scale(${magnification})`;


    specimen.style.filter =
        `blur(${blurAmount}px) brightness(${brightness})`;


    /*
       SPECIMEN VISIBILITY
    */

    if (!lightOn) {

        specimen.style.opacity = "0.15";

    }

    else if (slidePlaced) {

        specimen.style.opacity = "1";

    }

}


/* =========================================
   COMPLETE SIMULATION
========================================= */

function completeSimulation() {

    // Make sure score does not exceed 100
    if (score > 100) {

        score = 100;

    }


    // Save the completed simulation
    saveSimulationResult();


    // Update score on simulation screen
    const scoreElement =
        document.getElementById("score");

    if (scoreElement) {

        scoreElement.textContent = score;

    }


    // Update final score
    const finalScoreElement =
        document.getElementById("finalScore");

    if (finalScoreElement) {

        finalScoreElement.textContent =
            `${score}/100`;

    }


    // Calculate performance
    const performance =
        calculatePerformance(score);


    // Display performance level
    const performanceElement =
        document.getElementById("performanceLevel");

    if (performanceElement) {

        performanceElement.textContent =
            performance.level;

    }


    // Display feedback
    const messageElement =
        document.getElementById("resultMessage");

    if (messageElement) {

        messageElement.textContent =
            performance.message;

    }


    // Show completion modal
    const completionModal =
        document.getElementById("completionModal");

    if (completionModal) {

        completionModal.classList.remove("hidden");

    }

}


/* =========================================
   SAVE SIMULATION RESULT
========================================= */

function saveSimulationResult() {

    const studentName =
        localStorage.getItem("studentName") || "Student";


    const result = {

        studentName: studentName,

        experiment:
            "Use and Handling of Microscope",

        score: Number(score),

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
function calculatePerformance(score) {

    if (score >= 90) {

        return {

            level: "Excellent",

            message:
                "Excellent work! You completed the microscope practical successfully."

        };

    }


    if (score >= 75) {

        return {

            level: "Good",

            message:
                "Good work! You successfully completed the microscope practical."

        };

    }


    if (score >= 50) {

        return {

            level: "Satisfactory",

            message:
                "You completed the practical, but further practice is recommended."

        };

    }


    return {

        level: "Needs Improvement",

        message:
            "The practical was completed. Review the microscope handling steps and try again."

    };

}function retrySimulation() {

    window.location.reload();

}


/* =========================================
   EXIT
========================================= */

function exitSimulation() {

    const confirmExit =
        confirm(
            "Are you sure you want to exit the simulation?"
        );


    if (confirmExit) {

        window.location.href =
            "../../../dashboard.html";
    }
}


/* =========================================
   DASHBOARD
========================================= */

function returnToDashboard() {

    window.location.href =
        "../../../dashboard.html";
}