$(document).ready(function () {
  console.log("hello world");



  $(".btn-red").click(function () {
    $(".item").addClass("hide");
    $(".item.red").removeClass("hide");
  });

  $(".btn-shape").click(function () {
    $(".item").addClass("hide");
    $(".item.shape").removeClass("hide");
  });

  $(".btn-scan").click(function () {
    $(".item").addClass("hide");
    $(".item.scan").removeClass("hide");
  });

  $(".btn-mag").click(function () {
    $(".item").addClass("hide");
    $(".item.mag").removeClass("hide");
  });

  $(".btn-plan").click(function () {
    $(".item").addClass("hide");
    $(".item.plan").removeClass("hide");
  });

  $(".btn-reset").click(function () {
    $(".item").removeClass("hide");
  });
});

