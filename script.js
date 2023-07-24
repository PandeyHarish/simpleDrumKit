document.body.addEventListener("keypress", function (event) {
  var keypress = event.key;

  if (keypress === "a" || keypress === "A") {
    var audio = new Audio((src = "audiofiles/kick.wav"));
    audio.play();
    
  } else if (keypress === "s" || keypress === "S") {
    var audio = new Audio((src = "audiofiles/snare.wav"));
    audio.play();
    
  } else if (keypress === "d" || keypress === "D") {
    var audio = new Audio((src = "audiofiles/hihat.wav"));
    audio.play();
  } else if (keypress === "f" || keypress === "F") {
    var audio = new Audio((src = "audiofiles/boom.wav"));
    audio.play();
  } else if (keypress === "g" || keypress === "G") {
    var audio = new Audio((src = "audiofiles/clap.wav"));
    audio.play();
  } else if (keypress === "h" || keypress === "H") {
    var audio = new Audio((src = "audiofiles/ride.wav"));
    audio.play();
  } else if (keypress === "j" || keypress === "J") {
    var audio = new Audio((src = "audiofiles/tom.wav"));
    audio.play();
  } else if (keypress === "k" || keypress === "K") {
    var audio = new Audio((src = "audiofiles/tink.wav"));
    audio.play();
  } else if (keypress === "l" || keypress === "L") {
    var audio = new Audio((src = "audiofiles/openhat.wav"));
    audio.play();
  }
});
