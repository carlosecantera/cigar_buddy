function howmanycigars(){
    let howmanycigarsYesOrNo = prompt('Do you know how many cigars I smoked today?');


    while (howmanycigarsYesOrNo.toLowerCase() == 'yes'){
        let correctAnswer = 2;
        let userGuess = prompt('Please enter a number 1-10');
        let numberOfGuesses = 2;

        for(let i = 0; i < numberOfGuesses; i++) {
            let guessLeft = numberOfGuesses - i;
            if(userGuess < correctAnswer){
                userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-10')
            } else if (userGuess > correctAnswer) {
                userGuess = prompt(guessLeft + ' Guesses left. To High! Please enter a number 1-10');
            }
            if (userGuess == correctAnswer){
                alert('You got it!');
                break;
            }
        }
        guessingGameYesOrNo = prompt('Do you know how many cigars I smoked today?');
    }
}





// https://www.kindpng.com/picc/m/7-77518_cartoon-cigar-png-illustration-transparent-png.png