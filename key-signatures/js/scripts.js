function Key(note, scale) {
  this.note = note;
  this.scale = scale;
}

var findScale = function(noteSelected, scaleSelected) {
  var scaleArray = [];
  if (noteSelected === "c" && scaleSelected === "major") {
    scaleArray = ["C", "D", "E", "F", "G", "A", "B", "C"]
  } else if (noteSelected === "c" && scaleSelected === "minor") {
    scaleArray = ["C", "D", "Eb", "F", "G", "A", "B", "C"]
  }
  return scaleArray;
}

$(document).ready(function() {
  $("form#keyForm").submit(function(event){
    var noteSelected = $("select#note").val();
    var scaleSelected = $("input:radio[name=scale-type]:checked").val();

    var keyInfo = new Key(noteSelected, scaleSelected);
    var scaleOutput = findScale(noteSelected, scaleSelected);

    console.log(noteSelected, scaleSelected);
    console.log(scaleOutput);

    $("ul#listKeyName").append("<li><span class='showKey'>" + keyInfo.note + " " + keyInfo.scale + "</span></li>");

    $(".showKey").last().click(function(){
      $("#displayKey").show();
      $("#displayKey h2").text(keyInfo.note);
      $("#displayKey h3").text(keyInfo.scale);
      $("#majorScale").text(scaleOutput);
    });

    $("#showKeyName").show();
    $("select#note").val("");
    $("input:radio[name=scale-type]:checked").val("");

      event.preventDefault();
  });

});
