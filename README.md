
<!-- Create function to generate ramdom number, and assign each crystal a value -->
1. The player will be shown a random number at the start of the game.

    1.1 The random number shown at the start of the game should be between 19 - 120.
    1.2 Each crystal should have a random hidden value between 1 - 12.


<!-- generate score when player click on crystals-->
2. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

    2.1 Your game will hide this amount until the player clicks a crystal.
    2.2 When they do click one, update the player's score counter.


<!-- calculate player's score, determine if player score is "=", ">" than the given number-->
3. The player wins if their total score matches the random number from the beginning of the game.
    increment win count by 1
4. The player loses if their score goes above the random number.
        increment lose count by 1
5. The game restarts whenever the player wins or loses.

    5.1 When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.




6. The app should show the number of games the player wins and loses.
