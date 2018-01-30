function Scale(root) {
  this.pianoKeyArray = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6"]
  this.root = root;
  this.rootIndex = this.pianoKeyArray.indexOf(this.root);
  this.scaleArray = [];
}

Scale.prototype.createMajorScaleArray = function() {
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 9]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 11]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 12]);
  return this.scaleArray;
}

Scale.prototype.createMinorScaleArray = function() {
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 3]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 6]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 9]);
  return this.scaleArray;
}


$(document).ready(function() {
  $(".key").click(function() {
    var majButton = $(("#major").checked);
    var minButton = $(("#minor").checked);
    // if (majButton){
    //   alert("butt");
    // } else if (minButton){
    //   alert("lil butt");
    // } else {
    //   alert("no butt");
    // }
    // if(){
    //   $("#scaleList").empty();
    //   var keyPick = ($(this).text());
    //   var newScale = new Scale(keyPick);
    //   var majorScaleArray = newScale.createMajorScaleArray();
    //   $("#scaleList").append("<p>" + majorScaleArray + "</p>");
    // }
  });

});
