// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 1; i <= musicians.length; i++){
    array.push(musicians[i] + " plays "+ instruments[i]);
  }
  return array;
}

function johnLennonFacts(factArray) {
  var num = factArray.length - 1;
  while (num > 0) {
     factArray[i] = factArray + "!!!";
     num--;
  }
}