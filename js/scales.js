

var noteArray = ['C3','C#3','D3', 'D#3','E3','F3','F#3','G3', 'G#3', 'A3', 'A#3', 'B3','C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];


function majorScale(noteArray, note){
	var root = noteArray.indexOf(note);
  var newScale = [];
  newScale.push(noteArray[root]);
  newScale.push(noteArray[root + 2]);
  newScale.push(noteArray[root + 4]);
  newScale.push(noteArray[root + 5]);
  newScale.push(noteArray[root + 7]);
  newScale.push(noteArray[root + 9]);
  newScale.push(noteArray[root + 11]);
  newScale.push(noteArray[root + 12]);
  return newScale;
}

function minorScale(noteArray, note){
	var root = noteArray.indexOf(note);
  var newScale = [];
  newScale.push(noteArray[root]);
  newScale.push(noteArray[root + 2]);
  newScale.push(noteArray[root + 3]);
  newScale.push(noteArray[root + 5]);
  newScale.push(noteArray[root + 7]);
  newScale.push(noteArray[root + 8]);
  newScale.push(noteArray[root + 10]);
  newScale.push(noteArray[root + 12]);
  return newScale;
}

var synth = new Tone.MonoSynth().toMaster()

var minorArray = minorScale(noteArray, "D3")
var i = 0
minorArray.forEach(function(note) {
  synth.triggerAttackRelease(note, '16n', (0 + i));
  i = i+.5;
});
minorArray.reverse().forEach(function(note) {
  synth.triggerAttackRelease(note, '16n', (0 + i));
  i = i+.5;
});

var majorArray = majorScale(noteArray, "D3")
var i = 0
majorArray.forEach(function(note) {
	synth.triggerAttackRelease(note, '16n', (0 + i));
  i = i + .5;
});
majorArray.reverse().forEach(function(note) {
	synth.triggerAttackRelease(note, '16n', (0 + i));
  i = i + .5;
});
//synth.triggerAttackRelease('C#4', 0.5, 1)
