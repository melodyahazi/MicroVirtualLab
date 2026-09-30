/* =========================================================
   MICROVIRTUALLAB - DASHBOARD JAVASCRIPT
   ========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const TOTAL_EXPERIMENTS = 11;


/* =========================================================
   EXPERIMENT NAVIGATION PATHS
========================================================= */

const EXPERIMENT_PATHS = {

    1: "experiments/microscope/microscope.html",

    2: "experiments/aseptic-technique/aseptic-technique.html",

    3: "experiments/cultivation/cultivation.html",

    4: "experiments/bacteria-staining/bacteria-staining.html",

    5: "experiments/food-analysis/food-analysis.html",

    6: "experiments/coliform-detection/coliform.html",

    7: "experiments/bacterial-identification/bacterial-identification.html",

    8: "experiments/sensitivity-testing/sensitivity-testing.html",

    9: "experiments/fungal-microscopic-examination/fungal-microscopic-examination.html",

    10: "experiments/fungal-groups/fungal-groups.html",

    11: "experiments/fungal-enumeration/fungal-enumeration.html"

};


/* =========================================================
   GENERIC EXPERIMENT NAVIGATION
========================================================= */

function startExperiment(experimentNumber) {

    const path = EXPERIMENT_PATHS[experimentNumber];

    if (path) {

        window.location.href = path;

    } else {

        console.error(
            "Experiment path not found:",
            experimentNumber
        );

        alert(
            "This experiment is not available yet."
        );
    }
}


/* =========================================================
   DASHBOARD INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadStudentName();

        loadStatistics();

        loadRecentResults();

        loadProgress();

    }
);


/* =========================================================
   GET SAVED SIMULATION RESULTS
========================================================= */

function getSimulationResults() {

    try {

        const savedResults =
            localStorage.getItem("simulationResults");


        if (!savedResults) {

            return [];

        }


        const results =
            JSON.parse(savedResults);


        return Array.isArray(results)
            ? results
            : [];

    }

    catch (error) {

        console.error(
            "Unable to read simulation results:",
            error
        );

        return [];

    }

}


/* =========================================================
   LOAD STUDENT NAME
========================================================= */

function loadStudentName() {

    const studentName =
        localStorage.getItem("studentName")
        || "Student";


    const nameElement =
        document.getElementById("studentName");


    const welcomeElement =
        document.getElementById("welcomeStudentName");


    const avatarElement =
        document.getElementById("studentAvatar");


    const profileNameElement =
        document.getElementById("profileStudentName");


    const profileAvatarElement =
        document.getElementById("profileAvatarLarge");


    /* -----------------------------------------------------
       Navigation name
    ----------------------------------------------------- */

    if (nameElement) {

        nameElement.textContent =
            studentName;

    }


    /* -----------------------------------------------------
       Welcome name
    ----------------------------------------------------- */

    if (welcomeElement) {

        welcomeElement.textContent =
            studentName;

    }


    /* -----------------------------------------------------
       Navigation avatar
    ----------------------------------------------------- */

    if (avatarElement) {

        avatarElement.textContent =
            studentName
                .charAt(0)
                .toUpperCase();

    }


    /* -----------------------------------------------------
       Profile name
    ----------------------------------------------------- */

    if (profileNameElement) {

        profileNameElement.textContent =
            studentName;

    }


    /* -----------------------------------------------------
       Large profile avatar
    ----------------------------------------------------- */

    if (profileAvatarElement) {

        profileAvatarElement.textContent =
            studentName
                .charAt(0)
                .toUpperCase();

    }

}


/* =========================================================
   GET UNIQUE COMPLETED EXPERIMENTS
========================================================= */

/* =========================================================
   GET UNIQUE COMPLETED EXPERIMENTS
========================================================= */

function getCompletedExperiments(results) {

    const completedExperiments = new Set();

    results.forEach(function (result) {

        if (!result) {
            return;
        }

        /* -------------------------------------------------
           METHOD 1:
           Use experimentNumber when it exists
        ------------------------------------------------- */

        if (
            result.experimentNumber &&
            Number(result.experimentNumber) >= 1 &&
            Number(result.experimentNumber) <= TOTAL_EXPERIMENTS
        ) {
            completedExperiments.add(
                Number(result.experimentNumber)
            );

            return;
        }


        /* -------------------------------------------------
           METHOD 2:
           Detect experiment from experiment name
        ------------------------------------------------- */

        const experimentName =
            String(result.experiment || "")
                .toLowerCase()
                .trim();


        /* Experiment 01 */
        if (
            experimentName.includes("microscope")
        ) {

            completedExperiments.add(1);

        }


        /* Experiment 02 */
        else if (
            experimentName.includes("aseptic")
        ) {

            completedExperiments.add(2);

        }


        /* Experiment 03 */
        else if (
            experimentName.includes("cultivation") ||
            experimentName.includes("culture")
        ) {

            completedExperiments.add(3);

        }


        /* Experiment 04 */
        else if (
            experimentName.includes("staining") ||
            experimentName.includes("stain")
        ) {

            completedExperiments.add(4);

        }


        /* Experiment 05 */
        else if (
            experimentName.includes("food analysis") ||
            experimentName.includes("food sample") ||
            experimentName.includes("food")
        ) {

            completedExperiments.add(5);

        }


        /* Experiment 06 */
        else if (
            experimentName.includes("coliform") ||
            experimentName.includes("indicator organism") ||
            experimentName.includes("indicator organisms")
        ) {

            completedExperiments.add(6);

        }


        /* Experiment 07 */
        else if (
            experimentName.includes("bacterial identification") ||
            experimentName.includes("bacteria identification")
        ) {

            completedExperiments.add(7);

        }


        /* Experiment 08 */
        else if (
            experimentName.includes("sensitivity") ||
            experimentName.includes("antimicrobial") ||
            experimentName.includes("kirby")
        ) {

            completedExperiments.add(8);

        }


        /* Experiment 09 */
        else if (
            (
                experimentName.includes("fungal") ||
                experimentName.includes("fungus")
            ) &&
            (
                experimentName.includes("microscopic") ||
                experimentName.includes("microscopy") ||
                experimentName.includes("morphology")
            )
        ) {

            completedExperiments.add(9);

        }


        /* Experiment 10 */
        else if (
            (
                experimentName.includes("fungal") &&
                experimentName.includes("group")
            ) ||
            experimentName.includes("different groups of fungi") ||
            experimentName.includes("characteristics of different groups")
        ) {

            completedExperiments.add(10);

        }


        /* Experiment 11 */
        else if (
            experimentName.includes("fungal enumeration") ||
            experimentName.includes("enumeration of fungi") ||
            (
                experimentName.includes("enumeration") &&
                (
                    experimentName.includes("fungi") ||
                    experimentName.includes("fungus")
                )
            )
        ) {

            completedExperiments.add(11);

        }

    });


    return completedExperiments;
}
/* =========================================================
   LOAD DASHBOARD STATISTICS
========================================================= */

function loadStatistics() {

    const results =
        getSimulationResults();


    /* -----------------------------------------------------
       Count unique completed experiments
    ----------------------------------------------------- */

    const completedExperiments =
        getCompletedExperiments(results);


    const completedCount =
        completedExperiments.size;


    /* -----------------------------------------------------
       Get valid scores
    ----------------------------------------------------- */

    const validScores =
        results
            .map(
                function (result) {

                    return Number(
                        result.score
                    );

                }
            )
            .filter(
                function (score) {

                    return (
                        Number.isFinite(score) &&
                        score >= 0 &&
                        score <= 100
                    );

                }
            );


    let averageScore = 0;

    let bestScore = 0;


    /* -----------------------------------------------------
       Calculate average and best score
    ----------------------------------------------------- */

    if (validScores.length > 0) {

        const totalScore =
            validScores.reduce(
                function (
                    total,
                    score
                ) {

                    return total + score;

                },
                0
            );


        averageScore =
            Math.round(
                totalScore /
                validScores.length
            );


        bestScore =
            Math.max(
                ...validScores
            );

    }


    /* -----------------------------------------------------
       Dashboard elements
    ----------------------------------------------------- */

    const completedElement =
        document.getElementById(
            "completedCount"
        );


    const averageElement =
        document.getElementById(
            "averageScore"
        );


    const bestElement =
        document.getElementById(
            "bestScore"
        );


    /* -----------------------------------------------------
       Completed
    ----------------------------------------------------- */

    if (completedElement) {

        completedElement.textContent =
            completedCount;

    }


    /* -----------------------------------------------------
       Average Score
    ----------------------------------------------------- */

    if (averageElement) {

        averageElement.textContent =
            validScores.length > 0
                ? `${averageScore}%`
                : "--";

    }


    /* -----------------------------------------------------
       Best Score
    ----------------------------------------------------- */

    if (bestElement) {

        bestElement.textContent =
            validScores.length > 0
                ? `${bestScore}%`
                : "--";

    }

}


/* =========================================================
   EXPERIMENT 01
========================================================= */

function startMicroscope() {

    startExperiment(1);

}


/* =========================================================
   EXPERIMENT 02
========================================================= */

function startAseptic() {
    startExperiment(2);
}

function startAsepticTechnique() {
    startExperiment(2);
}

/* =========================================================
   EXPERIMENT 03
========================================================= */

function startCultivation() {

    startExperiment(3);

}


/* =========================================================
   EXPERIMENT 04
========================================================= */

function startExperiment04() {

    startExperiment(4);

}


/* Alternative name */

function startBacteriaStaining() {

    startExperiment(4);

}


/* =========================================================
   EXPERIMENT 05
========================================================= */

function startFoodAnalysis() {

    startExperiment(5);

}


function startExperiment05() {

    startExperiment(5);

}


/* =========================================================
   EXPERIMENT 06
========================================================= */

function startColiform() {

    startExperiment(6);

}


function startExperiment06() {

    startExperiment(6);

}


/* =========================================================
   EXPERIMENT 07
========================================================= */

function startBacterialIdentification() {

    startExperiment(7);

}


function startExperiment07() {

    startExperiment(7);

}


function openExperiment07() {

    startExperiment(7);

}


/* =========================================================
   EXPERIMENT 08
========================================================= */

function startSensitivityTesting() {

    startExperiment(8);

}


function startExperiment08() {

    startExperiment(8);

}


/* =========================================================
   EXPERIMENT 09
========================================================= */

function startFungalMicroscopy() {

    startExperiment(9);

}


function startExperiment09() {

    startExperiment(9);

}


/* =========================================================
   EXPERIMENT 10
========================================================= */

function startFungalGroups() {

    startExperiment(10);

}


function startExperiment10() {

    startExperiment(10);

}


/* =========================================================
   EXPERIMENT 11
========================================================= */

function startEnumeration() {

    startExperiment(11);

}


function startFungalEnumeration() {

    startExperiment(11);

}


function startExperiment11() {

    startExperiment(11);

}


/* =========================================================
   OPEN EXPERIMENT
========================================================= */

function openExperiment(
    experimentNumber
) {

    startExperiment(
        experimentNumber
    );

}


/* =========================================================
   COMING SOON
========================================================= */

function comingSoon() {

    alert(
        "This practical simulation is currently under development."
    );

}


/* =========================================================
   SHOW ALL EXPERIMENTS
========================================================= */

function showAllExperiments() {

    const experiments =
        document.getElementById(
            "experiments"
        );


    if (experiments) {

        experiments.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =========================================================
   LOAD RECENT RESULTS
========================================================= */

function loadRecentResults() {

    const results =
        getSimulationResults();


    const container =
        document.getElementById(
            "resultsContainer"
        );


    const emptyMessage =
        document.getElementById(
            "emptyResults"
        );


    if (!container) {

        return;

    }


    /* -----------------------------------------------------
       Remove old result cards
    ----------------------------------------------------- */

    const oldCards =
        container.querySelectorAll(
            ".result-card"
        );


    oldCards.forEach(
        function (card) {

            card.remove();

        }
    );


    /* -----------------------------------------------------
       No results
    ----------------------------------------------------- */

    if (results.length === 0) {

        if (emptyMessage) {

            emptyMessage.style.display =
                "block";

        }

        return;

    }


    /* -----------------------------------------------------
       Hide empty message
    ----------------------------------------------------- */

    if (emptyMessage) {

        emptyMessage.style.display =
            "none";

    }


    /* -----------------------------------------------------
       Newest results first
    ----------------------------------------------------- */

    const recentResults =
        [...results].reverse();


    /* -----------------------------------------------------
       Create result cards
    ----------------------------------------------------- */

    recentResults.forEach(
        function (result) {

            let score =
                Number(
                    result.score
                );


            if (!Number.isFinite(score)) {

                score = 0;

            }


            score =
                Math.max(
                    0,
                    Math.min(
                        100,
                        score
                    )
                );


            const performance =
                getPerformanceLevel(
                    score
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "result-card";


            const experiment =
                result.experiment ||
                "Practical Simulation";


            const student =
                result.studentName ||
                "Student";


            const date =
                result.date ||
                "Date not available";


            card.innerHTML = `

                <div class="result-icon">
                    🔬
                </div>

                <div class="result-main">

                    <h3>
                        ${escapeHTML(
                            experiment
                        )}
                    </h3>

                    <p>
                        Student:
                        ${escapeHTML(
                            student
                        )}
                    </p>

                    <span class="result-date">
                        ${escapeHTML(
                            date
                        )}
                    </span>

                </div>

                <div class="result-score">

                    <strong>
                        ${score}/100
                    </strong>

                    <span>
                        ${performance}
                    </span>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   PERFORMANCE LEVEL
========================================================= */

function getPerformanceLevel(
    score
) {

    if (score >= 90) {

        return "Excellent";

    }


    if (score >= 75) {

        return "Good";

    }


    if (score >= 50) {

        return "Satisfactory";

    }


    return "Needs Improvement";

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   LOAD OVERALL PROGRESS
========================================================= */

function loadProgress() {

    const results =
        getSimulationResults();


    /* -----------------------------------------------------
       Get unique completed experiments
    ----------------------------------------------------- */

    const completedExperiments =
        getCompletedExperiments(
            results
        );


    const completedCount =
        completedExperiments.size;


    /* -----------------------------------------------------
       Calculate progress percentage
    ----------------------------------------------------- */

    let percentage = 0;


    if (TOTAL_EXPERIMENTS > 0) {

        percentage =
            Math.round(
                (
                    completedCount /
                    TOTAL_EXPERIMENTS
                ) * 100
            );

    }


    /* -----------------------------------------------------
       Keep percentage between 0 and 100
    ----------------------------------------------------- */

    percentage =
        Math.max(
            0,
            Math.min(
                100,
                percentage
            )
        );


    /* -----------------------------------------------------
       Dashboard elements
    ----------------------------------------------------- */

    const progressPercent =
        document.getElementById(
            "progressPercent"
        );


    const progressTitle =
        document.getElementById(
            "progressTitle"
        );


    const progressDescription =
        document.getElementById(
            "progressDescription"
        );


    const progressValue =
        document.getElementById(
            "progressValue"
        );


    /* -----------------------------------------------------
       Update percentage
    ----------------------------------------------------- */

    if (progressPercent) {

        progressPercent.textContent =
            `${percentage}%`;

    }


    /* -----------------------------------------------------
       Update progress bar
    ----------------------------------------------------- */

    if (progressValue) {

        progressValue.style.width =
            `${percentage}%`;

    }


    /* -----------------------------------------------------
       Update title
    ----------------------------------------------------- */

    if (progressTitle) {

        if (completedCount === 0) {

            progressTitle.textContent =
                "Start your first practical";

        }

        else if (
            completedCount <
            TOTAL_EXPERIMENTS
        ) {

            progressTitle.textContent =
                `${completedCount} of ${TOTAL_EXPERIMENTS} experiments completed`;

        }

        else {

            progressTitle.textContent =
                "All experiments completed!";

        }

    }


    /* -----------------------------------------------------
       Update description
    ----------------------------------------------------- */

    if (progressDescription) {

        if (completedCount === 0) {

            progressDescription.textContent =
                "Complete your first simulation to begin tracking your progress.";

        }

        else if (
            completedCount <
            TOTAL_EXPERIMENTS
        ) {

            const remaining =
                TOTAL_EXPERIMENTS -
                completedCount;


            progressDescription.textContent =
                `Keep practicing! ${remaining} experiment${remaining === 1 ? "" : "s"} remaining.`;

        }

        else {

            progressDescription.textContent =
                "Excellent! You have completed all available practical experiments.";

        }

    }

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (confirmLogout) {

        window.location.href =
            "index.html";

    }

}