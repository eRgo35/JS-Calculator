// Menu Functions

$(document).on("click", "#menu-open", function () {
  $("#menu-bar").animate({left: 0});
  $("#dimmer").fadeIn();
});
$(document).on("click", "#history-open", function () {
  $("#history-bar").animate({bottom: 0});
  $("#dimmer3").fadeIn();
});
$(document).on("click", "#menu-close", function () {
  $("#menu-bar").animate({left: "-60%"});
  $("#dimmer").fadeOut();
});
$(document).on("click", "#complex-open", function () {
  $("#complex").animate({right: 0});
  $("#dimmer2").fadeIn();
});
$(document).on("click", "#complex-close", function () {
  $("#complex").animate({right: "-80%"}); 
  $("#dimmer2").fadeOut();
});
$(document).on("click", "#dimmer", function () {
  $("#menu-bar").animate({left: "-60%"});
  $("#history-bar").animate({bottom: "-=800px"});
  $("#dimmer").fadeOut();
});
$(document).on("click", "#dimmer2", function () {
  $("#complex").animate({right: "-80%"}); 
  $("#dimmer2").fadeOut();
});
$(document).on("click", "#dimmer3", function () {
  $("#history-bar").animate({bottom: "-=800px"});
  $("#dimmer3").fadeOut();
});
// Calculator

function Input(val) {
  var screen = document.getElementById('screen');
  var preview = document.getElementById('preview');
  screen.value += val;
  preview.value = eval(screen.value);
}

function Ans() {
  var screen = document.getElementById('screen');
  var preview = document.getElementById('preview');
  screen.value = eval(screen.value);
  preview.value = '';

  document.getElementById("clear").style.display = "block";
  document.getElementById("back").style.display = "none";
}

function Clear() {
  var screen = document.getElementById('screen');
  screen.value = "";

  document.getElementById("clear").style.display = "none";
  document.getElementById("back").style.display = "block";
}

function Back() {
  var screen = document.getElementById('screen');
  screen.value = screen.value.substring(0, screen.value.length - 1);
}