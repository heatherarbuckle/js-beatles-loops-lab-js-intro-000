// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ` plays ` + instruments[i]);
  }
  return array;
}

function johnLennonFacts(factArray) {
  var count = 0;
  var newSentence = [];
  while (count < factArray.length) {
     newSentence.push(factArray[count] + `!!!`);
     count++;
  }
  return newSentence;
}
