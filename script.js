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
                document.getElementById(guess[i]).classList.add("correct");
            } else if (word.includes(guess[i])) {
                tile.classList.add("present");
                document.getElementById(guess[i]).classList.add("present");
            } else {
                tile.classList.add("absent");
                document.getElementById(guess[i]).classList.add("absent");
            }
        }
        attempts += 1;
    }
    if (guess === word) {
        //alert("You Win!")
    }
}

// runs on startup
document.addEventListener("DOMContentLoaded", function () {
    fetch("sorted_words.txt")
        .then(response => response.text())
        .then(text => {
            text.split(/\r?\n/).forEach(word => wordList.add(word.trim()));
            console.log(wordList);
            word = [...wordList][Math.floor(Math.random() * wordList.size)];
            console.log(word);
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("guess");

    document.querySelectorAll(".keyboard").forEach(key => {
        key.addEventListener("click", () => {
            const keyPressed = key.id;

            if (keyPressed === "enter") {
                submit();
            } else if (keyPressed === "del") {
                inputField.value = inputField.value.slice(0, -1);
            } else {
                if (inputField.value.length < 5) {
                    inputField.value += keyPressed.toUpperCase();
                }
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        const keyPressed = event.key.toLowerCase();
    
        if (keyPressed === "enter") {
            submit();
        } else if (keyPressed === "backspace") {
            inputField.value = inputField.value.slice(0, -1);
        } else if (/^[a-z]$/.test(keyPressed)) { 
            if (inputField.value.length < 5) {
                inputField.value += keyPressed.toUpperCase();
            }
        }
    });
});