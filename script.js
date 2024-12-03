$(document).ready(function() {
  var envelope = $('#envelope');
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = $("#background-music")[0]; // Get audio element
  var hbdPaper = $("#hbd-paper");

  // Open envelope on click
  envelope.click(function() {
    open();
  });

  btn_open.click(function() {
    open();
  });

  btn_reset.click(function() {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    music.play(); // Play the music when the "Open" button is clicked
    hbdPaper.addClass("open"); // Trigger the HBD paper to slide out
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    music.pause(); // Pause the music when reset
    hbdPaper.removeClass("open"); // Reset the HBD paper
    hbdPaper.hide(); // Hide the paper
  }
});
