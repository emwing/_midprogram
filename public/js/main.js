$(document).ready(function() {
// chrome mobile vh fix (prevent resizing vh when url bar disappears on scroll) (referenced from https://stackoverflow.com/questions/39384154/calculating-viewport-height-on-chrome-android-with-css)
  function calcVH() {
    $("#pageWrap").innerHeight( $(this).innerHeight() );
  }
  (function ($) {
    calcVH();
    $(window).on("orientationchange resize", function () {
      calcVH;
    });
  })(jQuery);

/* index page-only menu controls
    listens for click on portfolio button to open side menu */
  $("#buttonNavOpen").click (function() {
    $("#rightNav").animate ( {
      "right": "0"
    }, 600, "linear");
  });
  $("#buttonNavClose").click (function() {
    $("#rightNav").animate ( {
      "right": "-100%"
    }, 600, "linear");
  });

/* non-landing page mainNav controls
  listens for click on menu icon to open side menu */
  $("#iconNav").click (function() {
    $("#navList").animate ( {
      "right": "0"
    }, 1000, "swing");
  });
  $("#buttonMainNavClose").click (function() {
    $("#navList").animate ( {
      "right": "-100%"
    }, 1000, "swing");
  });

  // fadeToggle() the about articles when next/previous button clicked (referenced code from http://jsfiddle.net/n53qg/ )
  $("#buttonSkillsDesignN").click (function() { // bg to design
    $("#backgroundInfo").fadeOut (350);
    $("#skillsDesign").delay(355).fadeIn (1000);
    // change the section bgcolor (referenced code from https://stackoverflow.com/questions/14421985/delay-not-working-when-changing-background-color-of-div )
    var $el = $("#rightInfoSection");

    $el.css("background", "#fff");

    setTimeout(function() {
      $el.css("background", "#2D313A");
    }, 360);
  });
  $("#buttonBackgroundInfoP").click (function() { // design to bg
    $("#skillsDesign").fadeOut (350);
    $("#backgroundInfo").delay(355).fadeIn (1000);
  });
  $("#buttonSkillsWebN").click (function() { // design to web
    $("#skillsDesign").fadeOut (350);
    $("#skillsWeb").delay(355).fadeIn (1000);
  });
  $("#buttonSkillsDesignP").click (function() { // web to design
    $("#skillsWeb").fadeOut (350);
    $("#skillsDesign").delay(355).fadeIn (1000);
  });
  $("#buttonSkillsOfficeN").click (function() { // web to office
    $("#skillsWeb").fadeOut (350);
    $("#skillsOffice").delay(355).fadeIn (1000);
  });
  $("#buttonSkillsWebP").click (function() { // office to web
    $("#skillsOffice").fadeOut (350);
    $("#skillsWeb").delay(355).fadeIn (1000);
  });
  $("#buttonTopBg").click (function() { // return to top
    $(".hideSection").fadeOut (350);
    $("#backgroundInfo").delay(355).fadeIn (1000);
    var $el = $("#rightInfoSection");

    $el.css("background", "#2D313A");

    setTimeout(function() {
      $el.css("background", "#fff");
    }, 360);
  });

  // fadeToggle() the non-About page articles when next/previous button clicked (referenced code from http://jsfiddle.net/n53qg/ )
  $("#button01-02").click (function() { // 1 to 2
    $("#article01").fadeOut (350);
    $("#article02").delay(355).fadeIn (1000);
  });
  $("#button02-01").click (function() { // 2 to 1
    $("#article02").fadeOut (350);
    $("#article01").delay(355).fadeIn (1000);
  });
  $("#button02-03").click (function() { // 2 to 3
    $("#article02").fadeOut (350);
    $("#article03").delay(355).fadeIn (1000);
  });
  $("#button03-02").click (function() { // 3 to 2
    $("#article03").fadeOut (350);
    $("#article02").delay(355).fadeIn (1000);
  });
  $("#button03-04").click (function() { // 3 to 4
    $("#article03").fadeOut (350);
    $("#article04").delay(355).fadeIn (1000);
  });
  $("#button04-03").click (function() { // 4 to 3
    $("#article04").fadeOut (350);
    $("#article03").delay(355).fadeIn (1000);
  });
  $("#button04-05").click (function() { // 4 to 5
    $("#article04").fadeOut (350);
    $("#article05").delay(355).fadeIn (1000);
  });
  $("#button05-04").click (function() { // 5 to 4
    $("#article05").fadeOut (350);
    $("#article04").delay(355).fadeIn (1000);
  });
  $("#button05-06").click (function() { // 5 to 6
    $("#article05").fadeOut (350);
    $("#article06").delay(355).fadeIn (1000);
  });
  $("#button06-05").click (function() { // 6 to 5
    $("#article06").fadeOut (350);
    $("#article05").delay(355).fadeIn (1000);
  });
  $("#button06-07").click (function() { // 6 to 7
    $("#article06").fadeOut (350);
    $("#article07").delay(355).fadeIn (1000);
  });
  $("#button07-06").click (function() { // 7 to 7
    $("#article07").fadeOut (350);
    $("#article06").delay(355).fadeIn (1000);
  });
  $("#buttonTop").click (function() { // return to top
    $(".hideSection").fadeOut (350);
    $("#article01").delay(355).fadeIn (1000);
  });
});  // ends document ready
