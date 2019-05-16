// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var numOfMusicians = musicians.length + 1;

  for (var i = 1; i <= numOfMusicians; i++){
    array.push(musicians[i] + " plays "+ instruments[i]);
  }
  return array;
}

function johnLennonFacts(factArray) {
  var num = factArray.length - 1;
  while (num > 0) {
     factArray[num] = factArray + "!!!";
     num--;
  }
}
