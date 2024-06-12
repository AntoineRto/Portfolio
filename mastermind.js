let secretCode = generateSecretCode();

    function generateSecretCode() {
        let code = [];
        for (let i = 0; i < 4; i++) {
            code.push(Math.floor(Math.random() * 4) + 1);
        }
        return code;
    }

    function checkGuess() {
        let guessInput = document.getElementById("guess");
        let guess = guessInput.value.trim().split("").map(Number);

        if (guess.length !== 4 || guess.some(isNaN) || guess.some(num => num < 1 || num > 4)) {
            alert("Veuillez entrer une proposition valide (4 chiffres entre 1 et 4).");
            guessInput.value = "";
            return;
        }

        let bienPlaces = 0;
        let malPlaces = 0;

        for (let i = 0; i < 4; i++) {
            if (guess[i] === secretCode[i]) {
                bienPlaces++;
            } else if (secretCode.includes(guess[i])) {
                malPlaces++;
            }
        }

        if (bienPlaces === 4) {
            document.getElementById("result").innerHTML = "Félicitations ! Vous avez deviné la combinaison secrète.";
        } else {
            document.getElementById("result").innerHTML = bienPlaces + " pions bien placés, " + malPlaces + " pions de la bonne couleur mais mal placés.";
        }

        guessInput.value = "";
    }