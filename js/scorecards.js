// main scorecard class
function scorecards() {}

scorecards.prototype = {};

scorecards.prototype.generate = function(boards) {
  
  // generate a new board for each one passed in
  for (var b in boards) {

    this.createBoard(b, boards[b]);

  }

  return;

}

// mark off the number on the ticket
scorecards.prototype.markOff = function(ball) {

  var boxes = document.getElementsByName(ball);

  for (var b in boxes) {

    boxes[b].classList += ' checked';

  }

  document.getElementById('drawList').innerText += ' ' + ball;
  
  return;

}

// update the count box
scorecards.prototype.updateCount = function(params) {

  // update with the new value
  document.getElementById('counter_' + params.ticket_number).innerText = params.count;

  return;

}

scorecards.prototype.showWinner = function(params) {
  
  document.getElementById('board_' + params.ticket_number).classList += ' winner';

  var winner = document.createElement('div');
  winner.innerHTML = '<h1>We have a winner!!!</h1>';

  document.getElementById('drawList').append(winner);

  return;

}

scorecards.prototype.createTicketBoxes = function() {

  var boxes_container = document.createElement('div');
  boxes_container.classList = "number_column";

  // create the boxes
  var index   = 0,
      columns = [];

  for (var i = 1; i <= 27; i++) {

    // which column are we processing?
    var col = (i - 1) % 9,
        box = document.createElement('div');

    // create a column if one doesn't exist
    (typeof columns[col] === "undefined"?columns[col] = document.createElement('div'):'');

    // add some styling
    box.classList ='number';

    // work out the maximum and minimum numbers allowed in this column
    var min = col * 10,
        max = min + 9;

    // stick in a fix for 90
    if (max === 89) {

      max = 90;

    }

    // make sure the number we have for this ticket will fit in this column
    if (parseInt(this.board_numbers[index]) >= min && parseInt(this.board_numbers[index]) <= max) {

      box.innerHTML = this.board_numbers[index];
      box.setAttribute('name', this.board_numbers[index]);
      index++;

    }

    // didn't manage to fill it with a number so lets add an empty class
    else {

      box.classList += ' empty';

    }

    columns[col].append(box);

  }

  // add in the columns to the overall numbers container
  for (var c in columns) {

    columns[c].classList = 'column';
    boxes_container.append(columns[c]);

  }

  return boxes_container;

}

scorecards.prototype.createCounter = function(board_id) {

  var counter_container = document.createElement('div');
  counter_container.classList = "counter_column";

  var counter = document.createElement('div');
  counter.id = 'counter_' + board_id;
  counter.classList = 'counter';
  counter.innerText = 15;

  counter_container.append(counter);

  return counter_container;

}

scorecards.prototype.createBoard = function() {

  // parse the board number
  var ticket_number = parseInt(arguments[0]);

  var board_html = document.createElement('div');
  board_html.id = "board_" + ticket_number;
  board_html.classList = 'board';

  // create two columns for the numbers and the counter
  var number_column = this.createTicketBoxes.bind({ticket_number: ticket_number, board_numbers: arguments[1]})();
  var counter_column = this.createCounter(ticket_number);

  // add them to the board
  board_html.append(number_column);
  board_html.append(counter_column);
  
  // add the board to the page
  document.getElementById("scorecards").append(board_html);

  return;

}