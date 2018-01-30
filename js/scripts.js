function Scale(root){
  this.pianoKeyArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  this.root = root;
  this.rootIndex = this.pianoKeyArray.indexOf(this.root);
  this.scaleArray = [];
}

Scale.prototype.createMajorScaleArray = function(){
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

Scale.prototype.createMinorScaleArray = function(){
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
  $(".key").click(function(){
    var keyPick = ($(this).text());
    alert($(this).text());
    var newScale = new Scale(keyPick);
    var majorScaleArray = newScale.createMajorScaleArray();
    alert(majorScaleArray);
  });

  $(".key")
});
