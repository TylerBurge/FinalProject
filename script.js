const word = "brave"
let attempts = 1;

function submit() {
    let guess = document.getElementById("guess").value.toLowerCase();
    document.getElementById("guess").value = "";
    if (!isValidGuess(guess)) {
        alert("Invalid Guess");
    } else {
        for (let i = 0; i < 5; i++) {
            const tile = document.getElementById("tile"+attempts+"-"+i);
            tile.innerHTML = guess[i].toUpperCase();
            if (guess[i] === word[i]) {
                tile.classList.add("correct");
            } else if (word.includes(guess[i])) {
                tile.classList.add("present");
            } else {
                tile.classList.add("absent");
            }
        }
        attempts += 1;
    }
    if (guess === word) {
        alert("You Win!")
    }
}

function isValidGuess(guess) {
    return /^[A-Za-z]{5}$/.test(guess);
}