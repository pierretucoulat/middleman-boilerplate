$(document).ready(function() {
  $("#banner-bg-home").css("height", $(window).height());
});

$(document).ready(function() {
  $("#banner-bg-contact").css("height", $(window).height());
});

$(document).ready(function() {
  $("#banner-bg-boards").css("height", $(window).height());
});


$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


