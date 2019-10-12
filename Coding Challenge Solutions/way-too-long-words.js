function wayToLong(str) {
  str.toLowerCase();
  var arr = [], count = 0, first = str[0];
  var last = str[str.length - 1];
  for (var i = 1; i < str.length - 1; i++) {
    count++;
  }
  if (str.length > 10){
     console.log(first + count + last)
     return first + count + last
  }else{
    return str;
  }
   
}

wayToLong("internationalization")
