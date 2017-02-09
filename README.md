# Bingo!

A simple vanilla JavaScript bingo game.

This is my interpretation of the challenge set. As you will notice I have not used any third party libraries and all of the following is my own code. 

The game can be viewed at the [here](http://interbred-monkey.github.io/bingo)

The code is broke down into the following areas:

#### JavaScript
There are three JavaScript files included in this project and they are all included in the js folder.

* draw.js - This is where we do all the processing of the numbers as well as drawing a random number for the draw.
* scorecards.js - Responsible for the rendering of the tickets and everything to do with the display
* utils.js - Here is where I have put common functionality and I have defined the shuffle function as an array prototype

#### CSS
There is only one stylesheet aand it can be found in the css folder. I am not a designer so please be aware the game is not that pretty.

* main.css

#### HTML
This is a very lean file and only contains the minimum to render the game.

* index.html

## How it works
The game will run as soon as the page is loaded and will draw a ball every 500ms, the game will end when a winner is found and will highlight the winning ticket. I have also generated a list of drawn tiicket numbers.

### Disclaimer
I have wrote this game in vanilla JavaScript and I have chosen not to use ES6 JavaScript. The reasoning behind this is that I have very little commercial experience with the new formats and I felt more comfortable using the older style. 

Please also be aware I have tried to mix up my programming style to showcase my knowledge of the language. I would not usually mix up the use of bind, arguments and passing through variables to functions when programming.

Thank you very much for considering my application, I have had fun with the test.