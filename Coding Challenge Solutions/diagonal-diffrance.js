function diagonalDifference(arr) {
  var increment = 0, puppy = [];
for(var i = 0; i < arr.length; i+=1){
  for(var j = 0; j < arr[i].length; j+=2){
      puppy.push(arr[i][j])
      increment++;
    }
  }

  console.log(puppy)
}

diagonalDifference([[1,2,3],[4,5,6],[7,8,9]])