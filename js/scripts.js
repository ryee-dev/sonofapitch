function Scale(root) {
  this.pianoKeyArray = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"];
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
  var map = {90: false, 67: false, 66: false, 188:false, 83:false, 77:false, 78:false, 68:false, 65:false, 86:false, 71:false};
  var theSynth = new Tone.Synth().toMaster();
  var sliderVal = $(".knob").val();

  $("button").click(function(){
    if ($(this).val() === "AMSynth"){
      theSynth = new Tone.AMSynth().toMaster();
    }else if ($(this).val() === "FMSynth"){
      theSynth = new Tone.DuoSynth().toMaster();
    }else if ($(this).val() === "PolySynth"){
      theSynth = new Tone.PolySynth().toMaster();
    }


  });

  $(document).keydown(function(keyPressed) {
    if (keyPressed.keyCode == 90) {
      $("#C4").toggleClass("highlight");
      setTimeout(function () {
       $("#C4").removeClass("highlight");
      },200);
    playNote("C4", theSynth);
    } else if (keyPressed.keyCode == 88) {
        $("#D4").toggleClass("highlight");
        setTimeout(function () {
         $("#D4").removeClass("highlight");
       },200);
      playNote("D4", theSynth);
    } else if (keyPressed.keyCode == 67) {
      $("#E4").toggleClass("highlight");
      setTimeout(function () {
       $("#E4").removeClass("highlight");
      },200);
    playNote("E4", theSynth);
  }  else if (keyPressed.keyCode == 86) {
      $("#F4").toggleClass("highlight");
      setTimeout(function () {
       $("#F4").removeClass("highlight");
     },200);
    playNote("F4", theSynth);
  } else if (keyPressed.keyCode == 66) {
      $("#G4").toggleClass("highlight");
      setTimeout(function () {
       $("#G4").removeClass("highlight");
     },200);
    playNote("G4", theSynth);
  } else if (keyPressed.keyCode == 78) {
      $("#A4").toggleClass("highlight");
      setTimeout(function () {
       $("#A4").removeClass("highlight");
     },200);
    playNote("A4", theSynth);
  } else if (keyPressed.keyCode == 77) {
      $("#B4").toggleClass("highlight");
      setTimeout(function () {
       $("#B4").removeClass("highlight");
     },200);
    playNote("B4", theSynth);
  } else if (keyPressed.keyCode == 188 || keyPressed.keyCode == 65) {
      $("#C5").toggleClass("highlight");
      setTimeout(function () {
       $("#C5").removeClass("highlight");
     },200);
    playNote("C5", theSynth);
  } else if (keyPressed.keyCode == 83) {
      $("#D5").toggleClass("highlight");
      setTimeout(function () {
       $("#D5").removeClass("highlight");
     },200);
    playNote("D5", theSynth);
  } else if (keyPressed.keyCode == 68) {
      $("#E5").toggleClass("highlight");
      setTimeout(function () {
       $("#E5").removeClass("highlight");
     },200);
    playNote("E5", theSynth);
  } else if (keyPressed.keyCode == 70) {
      $("#F5").toggleClass("highlight");
      setTimeout(function () {
       $("#F5").removeClass("highlight");
     },200);
    playNote("F5", theSynth);
  } else if (keyPressed.keyCode == 71) {
      $("#G5").toggleClass("highlight");
      setTimeout(function () {
       $("#G5").removeClass("highlight");
     },200);
    playNote("G5", theSynth);
  } else if (keyPressed.keyCode == 72) {
      $("#A5").toggleClass("highlight");
      setTimeout(function () {
       $("#A5").removeClass("highlight");
     },200);
    playNote("A5", theSynth);
  } else if (keyPressed.keyCode == 74) {
      $("#B5").toggleClass("highlight");
      setTimeout(function () {
       $("#B5").removeClass("highlight");
     },200);
    playNote("B5", theSynth);
  } else if (keyPressed.keyCode == 81) {
      $("#Cs4").toggleClass("highlight");
      setTimeout(function () {
       $("#Cs4").removeClass("highlight");
     },200);
    playNote("C#4", theSynth);
  } else if (keyPressed.keyCode == 75) {
      $("#C6").toggleClass("highlight");
      setTimeout(function () {
       $("#C6").removeClass("highlight");
     },200);
    playNote("C6", theSynth);
  } else if (keyPressed.keyCode == 87) {
      $("#Ds4").toggleClass("highlight");
      setTimeout(function () {
       $("#Ds4").removeClass("highlight");
     },200);
    playNote("D#4", theSynth);
  } else if (keyPressed.keyCode == 69) {
      $("#Fs4").toggleClass("highlight");
      setTimeout(function () {
       $("#Fs4").removeClass("highlight");
     },200);
    playNote("F#4", theSynth);
  } else if (keyPressed.keyCode == 82) {
      $("#Gs4").toggleClass("highlight");
      setTimeout(function () {
       $("#Gs4").removeClass("highlight");
     },200);
    playNote("G#4", theSynth);
  } else if (keyPressed.keyCode == 84) {
      $("#As4").toggleClass("highlight");
      setTimeout(function () {
       $("#As4").removeClass("highlight");
     },200);
    playNote("A#4", theSynth);
  } else if (keyPressed.keyCode == 89) {
      $("#Cs5").toggleClass("highlight");
      setTimeout(function () {
       $("#Cs5").removeClass("highlight");
     },200);
    playNote("C#5", theSynth);
  } else if (keyPressed.keyCode == 85) {
      $("#Ds5").toggleClass("highlight");
      setTimeout(function () {
       $("#Ds5").removeClass("highlight");
     },200);
    playNote("D#5", theSynth);
  } else if (keyPressed.keyCode == 73) {
      $("#Fs5").toggleClass("highlight");
      setTimeout(function () {
       $("#Fs5").removeClass("highlight");
     },200);
    playNote("F#5", theSynth);
  } else if (keyPressed.keyCode == 79) {
      $("#Gs5").toggleClass("highlight");
      setTimeout(function () {
       $("#Gs5").removeClass("highlight");
     },200);
    playNote("G#5", theSynth);
  } else if (keyPressed.keyCode == 80) {
      $("#As5").toggleClass("highlight");
      setTimeout(function () {
       $("#As5").removeClass("highlight");
     },200);
    playNote("A#5", theSynth);
    }
    });

    $(document).keydown(function(chord) {
    if(chord.keyCode in map){
      map[chord.keyCode]=true;
      }
    }).keyup(function(chord) {
     if ((map[90] && map[67] && map[66])||(map[65] && map[68] && map[71])){
        $("#cmajor").fadeIn();
        $("#cmajor").fadeOut(1500);
      } else if (map[66] && map[77] && map[83]){
        $("#gmajor").fadeIn();
        $("#gmajor").fadeOut(1500);
      } else if ((map[78] && map[65] && map[68])||(map[78] && map[188] && map[68])){
        $("#aminor").fadeIn();
        $("#aminor").fadeOut(1500);
      } else if ((map[86] && map[78] && map[188])||(map[86] && map[78] && map[65])){
        $("#fmajor").fadeIn();
        $("#fmajor").fadeOut(1500);
      }
      map[chord.keyCode]=false;
    });

    $(".key").click(function() {
      var sliderVal = $(".knob[type='radio'][name='radio-choice']:checked").val();
      $(".key").css("pointer-events", "none");
      $("#scaleList").empty();
      var keyPick = ($(this).text());
      var newScale = new Scale(keyPick);
      if (sliderVal === "Major") {
          $("#results").empty();
          $("#results").show();
          $("#results").append("<img src='img/scales/majorScales/" + keyPick.replace(/[0-9]/g, "").replace('#', 's') + ".png'>");
          var majorScaleArray = newScale.createMajorScaleArray();
          newScale.playScale(theSynth);
      } else if (sliderVal === "Minor") {
          $("#results").empty();
          $("#results").empty();
          $("#results").append("<img src='img/scales/minorScales/" + keyPick.replace(/[0-9]/g, "").replace('#', 's') + ".png'>");
          var minorScaleArray = newScale.createMinorScaleArray();
          newScale.playScale(theSynth);
          $("#scaleList").append("<p>" + minorScaleArray + "</p>");
      // } else if (sliderVal === "4") {
      //     $("#scaleList").empty();
      //     var createSongOne = newScale.createSongOne();
      //     newScale.playScale(theSynth);
      // } else if (sliderVal === "5") {
      //     $("#scaleList").empty();
      //     var createSongTwo = newScale.createSongTwo();
      //     newScale.playScale(theSynth);
      // } else if (sliderVal === "5") {
      //     $("#scaleList").empty();
      //     var createSongThree = newScale.createSongThree();
      //     newScale.playScale(theSynth);
      } else {
          playNote(keyPick, theSynth);
          $(".key").css("pointer-events", "auto");
      }


    });

    var sheet = document.createElement('style'),
      $rangeInput = $('.range input'),
      prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {
      var curVal = el.value,
          val = (curVal - 1) * 16.666666667,
          style = '';

      // Set active label
      $('.range-labels li').removeClass('active selected');

      var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

      curLabel.addClass('active selected');
      curLabel.prevAll().addClass('selected');

      // Change background gradient
      for (var i = 0; i < prefs.length; i++) {
        style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
        style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
      }

      return style;
    }


    // $('.slider').slick({
    //   infinite: false,
    //   slidesToShow: 1,
    //   slidesToScroll: 2

});
