$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 750) {
      $(".navbar").css({
        "background": "white",
        "box-shadow": "0 0 2px white"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
  });
});

// $(document).ready(function() {
//   // navbar transition jQuery script
//   $(window).scroll(function(e){
//     if ($(this).scrollTop() > 200) {
//       $(".navbar").slideUp();
//     }
//     else {
//       $(".navbar").slideDown();
//     }
//   });
// });