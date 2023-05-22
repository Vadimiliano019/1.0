function guessNumberGame() {
    var attempts = 0;
    var randomNumber = Math.floor(Math.random() * 101); 

    while (true) {
        var userGuess = prompt("Спробуйте вгадати число від 0 до 100:");

        if (userGuess === null) {

            break;
        }

        var guess = parseInt(userGuess);
        attempts++;

        if (isNaN(guess)) {
            alert("Будь ласка, введіть числове значення.");
            continue;
        }

        if (guess < 0 || guess > 100) {
            alert("Введіть число від 0 до 100.");
            continue;
        }

        if (guess === randomNumber) {
            var message = "За " + attempts + " спроб" + " ви вгадали число " + randomNumber + ".";
            alert(message);
            console.log(getCurrentDateTime() + " " + message);
            break;
        } else {
            var message = getGuessMessage(guess, randomNumber);
            alert(message);
            console.log(getCurrentDateTime() + " Спроба " + attempts + ": число " + guess + " – " + message);
        }
    }

    var playAgain = confirm("Бажаєте зіграти ще раз?");
    if (playAgain) {
        guessNumberGame();
    }
}

function getGuessMessage(guess, randomNumber) {
    var difference = Math.abs(guess - randomNumber);

    if (difference === 0) {
        return "Ви вгадали число!";
    } else if (difference <= 5) {
        return "Дуже гаряче!";
    } else if (difference <= 10) {
        return "Гаряче!";
    } else if (difference <= 20) {
        return "Тепло.";
    } else {
        return "Холодно.";
    }
}

function getCurrentDateTime() {
    var now = new Date();

    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var formattedDate = addLeadingZero(day) + "." + addLeadingZero(month) + "." + year;
    var formattedTime = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);

    return formattedDate + " " + formattedTime;
}

function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
}


guessNumberGame();
