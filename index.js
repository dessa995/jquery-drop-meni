$(document).ready(function () {
  $(".btn1").click(function () {
    $(".btn1-div").toggleClass(".btn1-div-visable");
  });

  $(".btn1").click(function () {
    var id = this.id;
    var split_id = id.split("_");
    var post_id = "post_" + split_id[1];
  });
});
