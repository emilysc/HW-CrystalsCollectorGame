
function game() {

    // 1. The player will be shown a random number at the start of the game. 

    //1.1 The random number shown at the start of the game should be between 19 - 120.
    function randomNumberBetween19and120() {
        return  Math.floor(Math.random() * (120 - 19)) + 19; 
    }   
    
    //1.2 Each crystal should have a random hidden value between 1 - 12.
    function randomNumberBetween1and12() {
        return  Math.floor(Math.random() * (12 - 1)) + 1; 
    }   

    var targetScore = randomNumberBetween19and120();

    var crystalValues = [randomNumberBetween1and12() , 
        randomNumberBetween1and12(), 
        randomNumberBetween1and12(),
        randomNumberBetween1and12()
    ];

    var winCount = 0;
    var loseCount = 0;
    var yourScore = 0;
    $('.numberBox').text(targetScore);
    $('.win').text(winCount);
    $('.lose').text(loseCount);
    $('.scoreBox').text(yourScore);

    function crystalClicked(crystalValue) {
        // 2.2 When they do click one, update the player's score counter.
        yourScore += crystalValue;
        
        // The player wins if their total score matches the random number from the beginning of the game.
        if (yourScore === targetScore ) {
            // increment win count by 1
            winCount += 1;
            $('.message').text('You win!');
        }
        //4. The player loses if their score goes above the random number.
        else if (yourScore > targetScore) {
            // increment lose count by 1
            loseCount += 1;
            $('.message').text('You lose!');
        }

        if ( yourScore >= targetScore) {
            // 5. The game restarts whenever the player wins or loses.
            targetScore = randomNumberBetween19and120 ();
            crystalValues = [randomNumberBetween1and12() , 
                randomNumberBetween1and12(), 
                randomNumberBetween1and12(),
                randomNumberBetween1and12()
            ];
            yourScore = 0;
        }
        /* 5.1 When the game begins again, the player should see a new random number. 
        Also, all the crystals will have four new hidden values. 
        Of course, the user's score (and score counter) will reset to zero.
        */
       $('.numberBox').text(targetScore);
       $('.win').text(winCount);
       $('.lose').text(loseCount);
       $('.scoreBox').text(yourScore);
    }
    /* 2. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.*/
    $('#image1').click(function() {
        crystalClicked(crystalValues[0]);
    });
    $('#image2').click(function() {
        crystalClicked(crystalValues[1]);
    });
    $('#image3').click(function() {
        crystalClicked(crystalValues[2]);
    });
    $('#image4').click(function() {
        crystalClicked(crystalValues[3]);
    });
// 6. The app should show the number of games the player wins and loses.
}
game();