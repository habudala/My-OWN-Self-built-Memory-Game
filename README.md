### My Own Memorygame Built Entirely by Myself (Not Copied in Class)
### DISCLAIMER: I AM ONLY USING JAVASCRIPT TO BUILD THIS GAME. I AM WELL AWARE THAT THERE ARE OTHER TOOLS OUT THERE THAT WOULD MAKE IT EASIER, AND FASTER, HOWEVER IT IS MY CHOICE TO USE NOTHING BUT JS. THIS IS A PRACTICE EXERCISE, AND NOT PRODUCTION QUALITY CODE. I MAY REDO IT IN JQUERY LATER IN THE FUTURE.

#### I have updated my previous memory game, and built upon the existing logic, however, I've decided to showcase this one separately, because while building this one, I had to change a lot of elements, and utilize completely different approach. This version relies heavily upon DOM traversal tools, including properties such as firstElementChild, lastElementChild, parentNode, etc. Since I had to change some major components to have it work with the images, I decided to put this one in a separete file, just as a comparison to the last (original) version. This version, however, features elements such as CSS3 flipping effects (which was a goal of mine to add to the original). 

#### In this version I fulfilled a few additional goals I set out to improve on my last version of the game:

##### - Separation of concerns: I separated the html, css, and JS files, as it was getting too robust to work with. (I was going to do it with the previous version as well, but it was simpler to work within one file as i was just beginning). It's generally good practice to separate the three...Duh!

##### - Also, I added the CSS3 flipping effect as I promised to myself. I felt like since I was using images (of animals) instead of letters, it was time to up the game, and add some fancy flipping to the party.

##### - I am adding a "reset board" button, so that the player can restart the game over at any point. The reset button also deletes the number of moves of any previous game.

##### - I am adding the option to select the difficulty of the game. Depending on the difficulty, the number of tiles will readjust. (a shoutout to Robert Bunch and a personal reminder: if you are creating multiple similar variables (and you use letters to name them), make damn sure that you don't use the same letters as your iteration variables. It makes your life miserable, and debugging your code a f***ing pain in the a**!!!)

##### - I am also adding custom messages based on difficulty, and the number of moves it took the user to win the game.

##### - Next step... Make your game responsive, so it works with all screen sizes.

