$(document).ready(function () {
  $(".btn1").hover(function () {
    $(".btn1-div").toggleClass("btn1-div-visable");
  });

  $(".btn2").click(function () {
    $(".btn2-div").toggleClass("btn2-div-visable");
  });

  $(".btn3").hover(function () {
    $(".btn3-div").toggleClass("btn3-div-visable");
  });

  $(".btn4").click(function () {
    $(".btn4-div").toggleClass("btn4-div-visable");
  });
});
