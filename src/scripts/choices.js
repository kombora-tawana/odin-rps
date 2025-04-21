const choices = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
};

const getCompChoice = () => {
    const rand = Math.floor(Math.random() * 3); // Random number between 0 and 2
    switch (rand) {
        case 0:
            return choices.rock;
        case 1:
            return choices.paper;
        case 2:
            return choices.scissors;
    }
};

const getHumanChoice = () => {
    return new Promise((resolve) => {
        const controls = () => document.querySelectorAll(".ctrl");
        for (const ctrl of controls()) {
            ctrl.addEventListener("click", () => {
                const choice = ctrl.textContent.trim().toLowerCase();
                resolve(choice);
            });
        }
    });
};

console.log(`${getHumanChoice()} - ${getCompChoice()}`);
// Named exports
export { getHumanChoice, getCompChoice };
