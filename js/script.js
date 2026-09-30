function startSimulation() {

    document
        .getElementById("experiments")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function viewExperiments() {

    document
        .getElementById("experiments")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function openExperiment(experiment) {

    if (experiment === "microscope") {

        alert(
            "Experiment 1: Microscope Simulation\n\n" +
            "The microscope simulation will be available here."
        );

    } else {

        alert(
            "This experiment will be developed in the next stages."
        );
    }
}