
// class to draw the numbers for the bingo
function draw() {
  
  // includes
  var _scorecards = new scorecards();

  // class vars
  var _numbers        = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985",
      _boards         = [],
      _draw_numbers   = [];

  // function to draw a ball
  function drawBall() {

    var ball = _draw_numbers.splice(0, 1)[0];

    _scorecards.markOff(ball);

    // loop the boards and remove the numbers
    for (var b in _boards) {

      var board_index = _boards[b].indexOf(ball);
      (board_index !== -1?_boards[b].splice(board_index, 1):"");

      // update the remaning count
      _scorecards.updateCount({ticket_number: b, count: _boards[b].length});

      // do we have a winner?
      if (_boards[b].length === 0) {

        // mark off the winner and stop the timed loop
        _scorecards.showWinner({ticket_number: b});
        return;

      }

    }

    setTimeout(drawBall, 500);

  }

  // get the list of numbers to be drawn
  _draw_numbers = _numbers.match(/[0-9]{2}/g)
                          .map(function(n) { return n })
                          .shuffle();

  // create the board numbers
  _boards = _numbers.match(/[0-9]{30}/g)
                    .map(function(b) { return b.match(/[0-9]{2}/g)
                                               .map(function(bn) { return bn; }) 
                    });

  // generate the display
  _scorecards.generate(_boards);

  // start drawing the balls
  drawBall();

}

// kick this thing off
new draw();