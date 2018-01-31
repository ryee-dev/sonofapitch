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

function playNote(note){
  var synth = new Tone.Synth().toMaster()
  synth.triggerAttackRelease(note, '8n')
  // /alert(note.replace("#", "sharp"));
}

Scale.prototype.playScale = function(){
  var delayInMilliseconds = 0;
  this.scaleArray.forEach(function(note){
    setTimeout(function() {
      playNote(note);
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
  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 65) {
    playNote("C4");
    $("#C4").classToggle("highlight");
    } else if (keyPressed.keyCode == 68) {
    playNote("E4");
    }  else if (keyPressed.keyCode == 83) {
    playNote("D4");
    } else if (keyPressed.keyCode == 68) {
    playNote("E4");
    } else if (keyPressed.keyCode == 70) {
    playNote("F4");
    } else if (keyPressed.keyCode == 71) {
    playNote("G4");
    } else if (keyPressed.keyCode == 72) {
    playNote("A4");
    } else if (keyPressed.keyCode == 74) {
    playNote("B4");
    } else if (keyPressed.keyCode == 75) {
    playNote("C5");
    } else if (keyPressed.keyCode == 76) {
    playNote("D5");
    } else if (keyPressed.keyCode == 186) {
    playNote("E5");
    } else if (keyPressed.keyCode == 222) {
    playNote("F5");
    } else if (keyPressed.keyCode == 13) {
    playNote("G5");
    } else if (keyPressed.keyCode == 191) {
    playNote("A5");
    } else if (keyPressed.keyCode == 16) {
    playNote("B5");
    } else if (keyPressed.keyCode == 87) {
    playNote("C#4");
    }  else if (keyPressed.keyCode == 69) {
    playNote("D#4");
    } else if (keyPressed.keyCode == 82) {
    playNote("F#4");
    } else if (keyPressed.keyCode == 84) {
    playNote("G#4");
    } else if (keyPressed.keyCode == 89) {
    playNote("A#4");
    } else if (keyPressed.keyCode == 85) {
    playNote("C#5");
    } else if (keyPressed.keyCode ==73) {
    playNote("D#5");
    } else if (keyPressed.keyCode == 79) {
    playNote("F#5");
    } else if (keyPressed.keyCode == 80) {
    playNote("G#5");
    } else if (keyPressed.keyCode == 219) {
    playNote("A#5");
    }
    });


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
      } else if (sliderVal === "3") {
          $("#scaleList").empty();
          var minorScaleArray = newScale.createMinorScaleArray();
          newScale.playScale();
          $("#scaleList").append("<p>" + minorScaleArray + "</p>");
      } else if (sliderVal === "4") {
          $("#scaleList").empty();
          var createSongOne = newScale.createSongOne();
          newScale.playScale();
      } else if (sliderVal === "5") {
          $("#scaleList").empty();
          var createSongTwo = newScale.createSongTwo();
          newScale.playScale();
      } else if (sliderVal === "6") {
          $("#scaleList").empty();
          var createSongThree = newScale.createSongThree();
          newScale.playScale();
      } else {
          playNote(keyPick);
          $(".key").css("pointer-events", "auto");
      }


    });

    // $('.slider').slick({
    //   infinite: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 2

});
