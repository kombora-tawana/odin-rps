document.addEventListener("DOMContentLoaded", updateInfoBox);
let instructionsBox = document.querySelector(".instructions");

const instructions = [
    "Welcome to Rock Paper Scissors!",
    "The computer will make its move independently.",
    "You make your move by clicking on the corresponding button.",
    "The winner is determined by the classic rules of Rock Paper Scissors.",
    "",
    'Click "Play Again" to start a new game.',
];

function updateInfoBox() {
    const intervalId = setInterval(() => {
        if (instructions.length > 0) {
            // Check if there are instructions left
            instructionsBox.innerHTML += `${instructions.shift()} <br>`; // Append the instruction with a line break
        }
    }, 90);
}
