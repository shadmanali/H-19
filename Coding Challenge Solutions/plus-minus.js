function plusMinus(arr) {
  var pos = 0,neg = 0, zero = 0, arrLength = arr.length;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0)pos++;
    else if(arr[i] < 0)neg++
    else zero++
  }
  console.log((pos / arrLength).toFixed(6));
  console.log((neg / arrLength).toFixed(6));
  console.log((zero / arrLength).toFixed(6))
  return;

}

plusMinus([-4,3,-9,0,4,1])