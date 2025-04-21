import { getHumanChoice, getCompChoice } from "./choices.js";

const capitalise = (str = "") => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

let gameActive = false; // Flag to track if the game is active

const playRound = async (scores = {}) => {
    const humanChoice = await getHumanChoice(); // Get human choice
    const compChoice = getCompChoice(); // Get computer choice
    let result = "";

    if (humanChoice === compChoice) {
        result = `<br>[Draw] - You both chose ${capitalise(humanChoice)}<br>`;
        scores.human += 1; // Increase human score for draw
        scores.computer += 1; // Increase computer score for draw
    } else if (
        (humanChoice === "rock" && compChoice === "paper") ||
        (humanChoice === "scissors" && compChoice === "rock") ||
        (humanChoice === "paper" && compChoice === "scissors")
    ) {
        result = `<br>[You Lose] - You chose ${humanChoice}<br>${capitalise(compChoice)} beats ${capitalise(humanChoice)}<br>`;
        scores.computer += 1; // Increase computer score
    } else {
        result = `<br>[You Win] - You chose ${humanChoice}<br>${capitalise(humanChoice)} beats ${capitalise(compChoice)}<br>`;
        scores.human += 1; // Increase human score
    }

    return result;
};

const playGame = async () => {
    const scores = {
        human: 0,
        computer: 0,
    };

    const playLogFeedback = document.querySelector(".playlog");
    const scoresFeedback = document.querySelector(".scores");

    gameActive = true; // Set the game as active

    while (gameActive && scores.human < 5 && scores.computer < 5) {
        let playLog = await playRound(scores); // Await the result of playRound
        playLogFeedback.innerHTML += playLog; // Use innerHTML to interpret HTML tags
        console.log(playLog);
    }

    // Display final scores
    scoresFeedback.innerHTML = `Your Score: ${scores.human}<br>Comp Score: ${scores.computer}<br>${scores.human > scores.computer ? "You win!" : scores.human === scores.computer ? "It's a tie!" : "You lose!"}`;

    // Show the play again button
    const playAgainBtn = document.querySelector(".playagain");
};

const resetGame = () => {
    const playLogFeedback = document.querySelector(".playlog");
    const scoresFeedback = document.querySelector(".scores");

    // Reset scores and clear logs
    playLogFeedback.innerHTML = ""; // Clear previous logs
    scoresFeedback.innerHTML = ""; // Clear previous scores

    // Reset game state
    gameActive = false; // Set the game as inactive
    playGame(); // Restart the game
};

// Set up the play again button
const playAgainBtn = document.querySelector(".playagain");
playAgainBtn.addEventListener("click", resetGame);

// Start the game
playGame();
