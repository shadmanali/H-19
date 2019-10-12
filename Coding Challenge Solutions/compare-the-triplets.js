function compareTriplets(a, b) {
  var pointsArr = []
  var alicePoints = 0;
  var bobPoints = 0
  for(var i = 0; i < a.length; i++){
    if(a[i] === b[i]) continue;
    else if(a[i] > b[i]) alicePoints++;
    else bobPoints++ 
  }
  pointsArr.push(alicePoints, bobPoints);
  return pointsArr;

}

compareTriplets([17,28,30], [99,16,8])