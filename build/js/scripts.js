"use strict";

$(document).ready(function () {
  $('body').append('<a href="#" id="go-top" alt="up"></a>');
});
$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "550") $(this).fadeIn("slow");
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "550") $(scrollDiv).fadeOut("slow");else $(scrollDiv).fadeIn("slow");
    });
    $(this).click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
    });
  };
});
$(function () {
  $("#go-top").scrollToTop();
}); // var btn = $('#button');
// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });
// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });
"use strict";

$(function () {
  $('.menu__icon').on('click', function () {
    $(this).closest('.menu').toggleClass('menu_state_open');
  });
  $('.menu__links-item').on('click', function (e) {
    $(this).closest('.menu').removeClass('menu_state_open');
    var url = this.href.split('#')[1];
    scrollToAnchor(url);
  });
});
jQuery;

function scrollToAnchor(aid) {
  var aTag = $("a[name='" + aid + "']");
  $('html,body').animate({
    scrollTop: aTag.offset().top
  }, 'slow');
}