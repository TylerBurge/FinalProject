var word = "brave";
var wordList = new Set();
let attempts = 1;

function submit() {
    let guess = document.getElementById("guess").value.toLowerCase();
    document.getElementById("guess").value = "";
    if (!wordList.has(guess)) {
        alert("Invalid Guess");
    } else {
        for (let i = 0; i < 5; i++) {
            const tile = document.getElementById("tile" + attempts + "-" + i);
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
        //alert("You Win!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("sorted_words.txt")
        .then(response => response.text())
        .then(text => {
            text.split(/\r?\n/).forEach(word => wordList.add(word.trim()));
            //console.log(wordList);
            word = [...wordList][Math.floor(Math.random() * wordList.size)];
            console.log(word);
        });
});