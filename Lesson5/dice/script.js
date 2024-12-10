// Array of animal images
const animalImages = [
    './img/horse.jpg',
    './img/sheap.jpg',
    './img/camel.jpg',
    './img/goat.jpg'
];

// Variable to track whose turn it is (0 for Player 1, 1 for Player 2)
let currentPlayer = 0;

// Variables to track the number of horses rolled for each player
let playerHorses = [0, 0];

// Get references to the dice images and player horse images
const diceImages = document.getElementsByClassName('dice')[0].getElementsByTagName('img');
const player1Horse = document.getElementsByClassName('player-1')[0].getElementsByTagName('img')[0];
const player2Horse = document.getElementsByClassName('player-2')[0].getElementsByTagName('img')[0];

// Function to change images randomly
function changeImages() {
    let horseCount = 0; // Count how many horses were rolled

    for (let i = 0; i < diceImages.length; i++) {
        const randomIndex = Math.floor(Math.random() * animalImages.length); // Get a random index
        diceImages[i].src = animalImages[randomIndex]; // Change the image source

        // Check if the image is a horse
        if (diceImages[i].src.includes('horse.jpg')) {
            horseCount++; // Increment horse count
        }
    }

    // Move horses based on the number of horses rolled
    if (horseCount > 0) {
        moveHorse(horseCount);
    }

    // Update the player's horse count
    playerHorses[currentPlayer] += horseCount;

    // Check if the game is over
    if (playerHorses[currentPlayer] >= 8) {
        alert(`Player ${currentPlayer + 1} wins!`);
        // Display winning message
        resetGame(); // Reset the game
    } else {
        // Switch to the next player
        currentPlayer = (currentPlayer + 1) % 2; // Toggle between 0 and 1
    }
}

// Function to move the horse
function moveHorse(horseCount) {
    const playerHorse = currentPlayer === 0 ? player1Horse : player2Horse; // Select the current player's horse

    // Move the horse 120px to the right for each horse rolled
    const currentLeft = parseInt(playerHorse.style.left) || 0;
    playerHorse.style.left = `${currentLeft + (horseCount * 150)}px`; // Move right by 120px for each horse
}

// Function to reset the game
function resetGame() {
    // Reset horse counts
    playerHorses = [0, 0];
    currentPlayer = 0;

    // Reset horse positions
    player1Horse.style.left = '0px'; // Reset Player 1 horse position
    player2Horse.style.left = '0px'; // Reset Player 2 horse position
}

// Add event listener to the button
const rollButton = document.getElementsByClassName('btn')[0].getElementsByTagName('button')[0];
rollButton.addEventListener('click', changeImages); // Trigger the changeImages function on button click