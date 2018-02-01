function Scale(root) {
  this.pianoKeyArray = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6"]
  this.root = root;
  this.rootIndex = this.pianoKeyArray.indexOf(this.root);
  this.scaleArray = [];
}


Scale.prototype.createSongOne = function() {
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 4]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 2]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
}

Scale.prototype.createSongTwo = function() {
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 7]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 5]);
}

Scale.prototype.createSongThree = function() {
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 3]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 3]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 3]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 3]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
  this.scaleArray.push(this.pianoKeyArray[this.rootIndex + 1]);
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

function playNote(note, synth){
  synth.triggerAttackRelease(note, '8n')
  // /alert(note.replace("#", "sharp"));
}

Scale.prototype.playScale = function(synth){
  var delayInMilliseconds = 0;
  this.scaleArray.forEach(function(note){
    setTimeout(function() {
      playNote(note, synth);
      $("#"+(note.replace('#','s'))).toggleClass("highlight");
    }, delayInMilliseconds);
    setTimeout(function() {
      $("#"+(note.replace('#','s'))).toggleClass("highlight");
    }, delayInMilliseconds + 350);
    delayInMilliseconds += 300;
    setTimeout(function() {
      $(".key").css("pointer-events", "auto");
    }, 2400);
  });
}

$(document).ready(function() {
  var theSynth = new Tone.Synth().toMaster();
  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 65) {
      $("#C4").toggleClass("highlight");
      setTimeout(function () {
       $("#C4").removeClass("highlight");
      },200);
    playNote("C4", theSynth);
    } else if (keyPressed.keyCode == 68) {
      $("#E4").toggleClass("highlight");
      setTimeout(function () {
       $("#E4").removeClass("highlight");
     },200);
    playNote("E4", theSynth);
    }  else if (keyPressed.keyCode == 83) {
      $("#D4").toggleClass("highlight");
      setTimeout(function () {
       $("#D4").removeClass("highlight");
     },200);
    playNote("D4", theSynth);
    } else if (keyPressed.keyCode == 70) {
      $("#F4").toggleClass("highlight");
      setTimeout(function () {
       $("#F4").removeClass("highlight");
     },200);
    playNote("F4", theSynth);
    } else if (keyPressed.keyCode == 71) {
      $("#G4").toggleClass("highlight");
      setTimeout(function () {
       $("#G4").removeClass("highlight");
     },200);
    playNote("G4", theSynth);
    } else if (keyPressed.keyCode == 72) {
      $("#A4").toggleClass("highlight");
      setTimeout(function () {
       $("#A4").removeClass("highlight");
     },200);
    playNote("A4", theSynth);
    } else if (keyPressed.keyCode == 74) {
      $("#B4").toggleClass("highlight");
      setTimeout(function () {
       $("#B4").removeClass("highlight");
     },200);
    playNote("B4", theSynth);
    } else if (keyPressed.keyCode == 75) {
      $("#C5").toggleClass("highlight");
      setTimeout(function () {
       $("#C5").removeClass("highlight");
     },200);
    playNote("C5", theSynth);
    } else if (keyPressed.keyCode == 76) {
      $("#D5").toggleClass("highlight");
      setTimeout(function () {
       $("#D5").removeClass("highlight");
     },200);
    playNote("D5", theSynth);
    } else if (keyPressed.keyCode == 186) {
      $("#E5").toggleClass("highlight");
      setTimeout(function () {
       $("#E5").removeClass("highlight");
     },200);
    playNote("E5", theSynth);
    } else if (keyPressed.keyCode == 222) {
      $("#F5").toggleClass("highlight");
      setTimeout(function () {
       $("#F5").removeClass("highlight");
     },200);
    playNote("F5", theSynth);
    } else if (keyPressed.keyCode == 13) {
      $("#G5").toggleClass("highlight");
      setTimeout(function () {
       $("#G5").removeClass("highlight");
     },200);
    playNote("G5", theSynth);
    } else if (keyPressed.keyCode == 191) {
      $("#A5").toggleClass("highlight");
      setTimeout(function () {
       $("#A5").removeClass("highlight");
     },200);
    playNote("A5", theSynth);
    } else if (keyPressed.keyCode == 16) {
      $("#B5").toggleClass("highlight");
      setTimeout(function () {
       $("#B5").removeClass("highlight");
     },200);
    playNote("B5", theSynth);
    } else if (keyPressed.keyCode == 87) {
      $("#Cs4").toggleClass("highlight");
      setTimeout(function () {
       $("#Cs4").removeClass("highlight");
     },200);
    playNote("C#4", theSynth);
    }  else if (keyPressed.keyCode == 69) {
      $("#Ds4").toggleClass("highlight");
      setTimeout(function () {
       $("#Ds4").removeClass("highlight");
     },200);
    playNote("D#4", theSynth);
    } else if (keyPressed.keyCode == 82) {
      $("#Fs4").toggleClass("highlight");
      setTimeout(function () {
       $("#Fs4").removeClass("highlight");
     },200);
    playNote("F#4", theSynth);
    } else if (keyPressed.keyCode == 84) {
      $("#Gs4").toggleClass("highlight");
      setTimeout(function () {
       $("#Gs4").removeClass("highlight");
     },200);
    playNote("G#4", theSynth);
    } else if (keyPressed.keyCode == 89) {
      $("#As4").toggleClass("highlight");
      setTimeout(function () {
       $("#As4").removeClass("highlight");
     },200);
    playNote("A#4", theSynth);
    } else if (keyPressed.keyCode == 85) {
      $("#Cs5").toggleClass("highlight");
      setTimeout(function () {
       $("#Cs5").removeClass("highlight");
     },200);
    playNote("C#5", theSynth);
    } else if (keyPressed.keyCode ==73) {
      $("#Ds5").toggleClass("highlight");
      setTimeout(function () {
       $("#Ds5").removeClass("highlight");
     },200);
    playNote("D#5", theSynth);
    } else if (keyPressed.keyCode == 79) {
      $("#Fs5").toggleClass("highlight");
      setTimeout(function () {
       $("#Fs5").removeClass("highlight");
     },200);
    playNote("F#5", theSynth);
    } else if (keyPressed.keyCode == 80) {
      $("#Gs5").toggleClass("highlight");
      setTimeout(function () {
       $("#Gs5").removeClass("highlight");
     },200);
    playNote("G#5", theSynth);
    } else if (keyPressed.keyCode == 219) {
      $("#As5").toggleClass("highlight");
      setTimeout(function () {
       $("#As5").removeClass("highlight");
     },200);
    playNote("A#5", theSynth);
    }
    });


    $(".key").click(function() {
      $(".key").css("pointer-events", "none");
      $("#scaleList").empty();
      var keyPick = ($(this).text());
      var newScale = new Scale(keyPick);
      var sliderVal = $("#major-minor").val();
      
      if (sliderVal === "2") {
          $("#results").append(keyPick + ".png"
          var majorScaleArray = newScale.createMajorScaleArray();
          newScale.playScale(theSynth);
      } else if (sliderVal === "3") {
          $("#scaleList").empty();
          var minorScaleArray = newScale.createMinorScaleArray();
          newScale.playScale(theSynth);
          $("#scaleList").append("<p>" + minorScaleArray + "</p>");
      } else if (sliderVal === "4") {
          $("#scaleList").empty();
          var createSongOne = newScale.createSongOne();
          newScale.playScale(theSynth);
      } else if (sliderVal === "5") {
          $("#scaleList").empty();
          var createSongTwo = newScale.createSongTwo();
          newScale.playScale(theSynth);
      } else if (sliderVal === "5") {
          $("#scaleList").empty();
          var createSongThree = newScale.createSongThree();
          newScale.playScale(theSynth);
      } else {
          playNote(keyPick, theSynth);
          $(".key").css("pointer-events", "auto");
      }


    });

    // $('.slider').slick({
    //   infinite: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 2

});
