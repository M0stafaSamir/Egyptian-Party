//navbar
const sidebar = $("aside");
const titleSection = $("#title");
$("#navbarBtn").on("click", function () {
  titleSection.animate({ marginLeft: "250px" }, 500);
  sidebar.animate({ left: "0px" }, 500);
});
$("#closeNavBtn").on("click", function () {
  titleSection.animate({ marginLeft: "0" }, 500);
  sidebar.animate({ left: "-250px" }, 500);
});

//slide boxes
const boxes = $(".boxHead").nextAll("div");
$(".boxHead").on("click", function (e) {
  console.log(boxes);
  let box = $(e.target).next()[0];
  if ($(box).css("display") == "block") {
    $(box).slideUp(500);
    $(boxes).slideUp(500);
  } else {
    $(boxes).slideUp(500);
    $(box).slideDown(500);
  }
});

// timer
$(function () {
  var targetDate = new Date(
    "dec 30, " + new Date().getFullYear() + " 00:00:00"
  ).getTime();

  var countdownFunction = setInterval(function () {
    var now = new Date().getTime();

    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#day").text(days + " D");
    $("#hours").text(hours + " h");
    $("#minutes").text(minutes + " m");
    $("#seconds").text(seconds + " s");

    if (distance < 0) {
      clearInterval(countdownFunction);
      $("#day").text("EXPIRED");
      $("#hours").text("EXPIRED");
      $("#minutes").text("EXPIRED");
      $("#seconds").text("EXPIRED");
    }
  }, 1000);
});

//loader
$(function () {
  $(".loaderBackgrond").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});

// characters
let chars = $("#chars");
const count = 100;
$("#textArea").on("input", function () {
  let inp = $("#textArea").val().length;
  console.log(inp);
  let totalChars = count - inp;
  if (totalChars <= 0) {
    chars.html(
      `<span class="fs-4 text-danger">your available character finished</span>`
    );
  } else {
    chars.html(
      `<span class="fs-4 text-danger">${totalChars} </span>character Reamining`
    );
  }
});

//scroll

$(".asideLink").on("click", function (e) {
  let section = e.target.getAttribute("href");
  let sectionOffset = $(section).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 2000);
});
