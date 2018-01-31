<<<<<<< HEAD
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
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 8]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 10]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 12]);
  return this.scaleArray;
}

function playNote(note){
  var synth = new Tone.Synth().toMaster()
  synth.triggerAttackRelease(note, '8n')
}

Scale.prototype.playScale = function(){
  var delayInMilliseconds = 0;
  this.scaleArray.forEach(function(note){

    setTimeout(function() {
      playNote(note);
    }, delayInMilliseconds);

    delayInMilliseconds += 300;

  });
}

$(document).ready(function() {

    $(".key").click(function() {
      $(".key").css("pointer-events", "none");
      $("#scaleList").empty();
      var keyPick = ($(this).text());
      var newScale = new Scale(keyPick);
      var sliderVal = $("#major-minor").val();

      if (sliderVal === "1") {
        $("#scaleList").empty();
        var majorScaleArray = newScale.createMajorScaleArray();
        newScale.playScale();
        $("#scaleList").append("<p>" + majorScaleArray + "</p>");
        setTimeout(function() {
          $(".key").css("pointer-events", "auto");
        }, 2400);
      } else if (sliderVal === "3") {
        $("#scaleList").empty();
        var minorScaleArray = newScale.createMinorScaleArray();
        newScale.playScale();
        $("#scaleList").append("<p>" + minorScaleArray + "</p>");
        setTimeout(function() {
          $(".key").css("pointer-events", "auto");
        }, 2400);
      } else {
        playNote(keyPick);
        $(".key").css("pointer-events", "auto");
      }

      console.log(sliderVal);

    });

    // $('.slider').slick({
    //   infinite: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 2
=======
// function Notes(keySignature) {
//     this.majorScale = [];
//     this.minorScale = [];
//     this.keySignature = keySignature;
// }

$(document).ready(function() {

  $("#c4").click(function(){
    $(".c").fadeIn();
    $("#results").fadeIn();
  });

  $("#d4").click(function(){
    $(".d").fadeIn();
    $("#results").fadeIn();
  });

  $("#e4").click(function(){
    $("#results").fadeIn();
    $(".e").fadeIn();
  });

  $("#f4").click(function(){
    $("#results").fadeIn();
    $(".f").fadeIn();
  });

  $("#g4").click(function(){
    $("#results").fadeIn();
    $(".g").fadeIn();
  });

  $("#a5").click(function(){
    $("#results").fadeIn();
    $(".a").fadeIn();
  });

  $("#b5").click(function(){
    $("#results").fadeIn();
    $(".b").fadeIn();
  });

  $("#c5").click(function(){
    $("#results").fadeIn();
    $(".c").fadeIn();
  });

  $("button#close-button").click(function(){
    $("#results").fadeOut();
  });
>>>>>>> 2a744dd0f5a40806eda0b09e193628a273ea5af5

});
