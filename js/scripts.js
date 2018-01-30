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

});
