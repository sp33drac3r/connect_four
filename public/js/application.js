$(document).ready(function(){
  // build the board on document.ready
  // keep the updated hash of the board
  // run a bord check after every play
  //   board check wins the game, if needed

  board = []
  for(var i = 1; i <= 6; i++) {
    board.push([])
  }

  var alpha = {}
  alpha['A'] = 0
  alpha['B'] = 1
  alpha['C'] = 2
  alpha['D'] = 3
  alpha['E'] = 4
  alpha['F'] = 5
  alpha[0] = 'A'
  alpha[1] = 'B'
  alpha[2] = 'C'
  alpha[3] = 'D'
  alpha[4] = 'E'
  alpha[5] = 'F'

  var id_to_position = function(letter, number) {
    var position = [alpha[letter], number]
    return position
  };

  var position_to_id = function(x, y){
    var id = alpha[x] + y
    return id
  };

  var game_won = function(){

  }

  $(".0").click(function() {
  });

 $(".1").click(function() {
  });

 $(".2").click(function(){
 });

 $(".3").click(function(){
 });

 $(".4").click(function(){
 });

 $(".5").click(function(){
  });

 $(".6").click(function(){
  });
});
