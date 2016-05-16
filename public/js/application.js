$(document).ready(function(){
  board = []
  for(var i = 1; i <= 7; i++) {
    board.push([])
  }

  var win_positions = {}

  var alpha  = {}
  alpha['A'] = 6
  alpha['B'] = 5
  alpha['C'] = 4
  alpha['D'] = 3
  alpha['E'] = 2
  alpha['F'] = 1
  alpha['G'] = 0
  alpha[6] = 'A'
  alpha[5] = 'B'
  alpha[4] = 'C'
  alpha[3] = 'D'
  alpha[2] = 'E'
  alpha[1] = 'F'
  alpha[0] = 'G'

  var id_to_position = function(letter, number) {
    var position = [alpha[letter], number]
    return position
  };

  var position_to_id = function(x, y) {
    return alpha[x] + y
  };

  var transpose = function(array) {
    return_array = array[0].map(function(col, i) {
      return array.map(function(row) {
        return row[i]
      })
    })
    return return_array
  }

  var deepCopy = function(array){
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
      newArray[i] = array[i].slice();
    }
    return newArray
  }

  var make_square = function(array) {
    var clone = deepCopy(array)
    var leng = 0
    for (var i = 0; i < clone.length; i++) {
      if ( clone[i].length > leng ) {
        leng = clone[i].length
      }
    }
    for (var j = 0; j < clone.length; j++) {
      for (var k = clone[j].length; k < leng; k++) {
        clone[j].push(undefined)
      }
    }
    return clone
  }

  var invert = function(array) {
    var copy = deepCopy(array)
    var return_array = []
    for (var i = 0; i < copy.length; i++){
      return_array.unshift(copy[i])
    }
    return return_array
  }

  var diagonals = function(array) {
    return_array = []
    for (var k = 0 ; k < array.length * 2; k++ ) {
      var sub_array = []
      for ( var j = 0; j <= k; j++ ) {
        var i = k - j;
        if ( i < array.length && j < array.length ) {
          sub_array.push(array[i][j]);
        }
      }
      return_array.push(sub_array)
    }
    return return_array
  }

  var game_won = function() {
    if ( row_check(board) ) {
      return true
    } else if ( row_check(transpose(make_square(board))) ) {
      return true
    } else if ( row_check(diagonals(make_square(board))) ){
      return true
    } else if ( row_check(diagonals(invert(make_square(board)))) ) {
      return true
    } else {
      return false
    }
  }

  var row_check = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      var row = matrix[i]
      var color = null
      var color_count = 0
      for (var j = 0; j < row.length; j++) {
        if (color == matrix[i][j] ) {
          if (matrix[i][j] == undefined ) {
          } else {
            color_count += 1
            color = matrix[i][j]
          }
        } else {
          color_count = 0
          color = matrix[i][j]
        }
        if (color_count >= 3) {
          return true
        }
      }
    }
    return false
  }

  var winner = function(color){
    if (game_won()) {
      alert(color + " has won the game!")
    }
  }

  var computer_moves = function() {
    var column = Math.floor(Math.random() * 7) + 0
    while (board[column].length > 5) {
      column = Math.floor(Math.random() * 7) + 0
    }
    update_position = drop("black", column)
    id = position_to_id(column, update_position)
    $("#" + id).css("background-color", "black")
  }

  var drop = function(color, column) {
    if (board[column].length <= 5) {
      var drop_position = 5 - board[column].length
      board[column].push(color)
      return drop_position
    }
  }

  $(".G").click(function() {
    var update_position = drop("red", 0)
    $("#G" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
  });

 $(".F").click(function() {
    var update_position = drop("red", 1)
    $("#F" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
  });

 $(".E").click(function() {
    var update_position = drop("red", 2)
    $("#E" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
 });

 $(".D").click(function() {
    var update_position = drop("red", 3)
    $("#D" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
 });

 $(".C").click(function() {
    var update_position = drop("red", 4)
    $("#C" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
 });

 $(".B").click(function() {
    var update_position = drop("red", 5)
    $("#B" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
  });

 $(".A").click(function() {
    var update_position = drop("red", 6)
    $("#A" + update_position).css("background-color", "red")
    if (winner("red")){
    } else {
      computer_moves()
      winner("black")
    }
  });

});
