

  $(function() {
    $('.menu__icon').on('click', function() {
      $(this)
        .closest('.menu')
        .toggleClass('menu_state_open');
    });
    $('.menu__links-item').on('click', function(e) {
      $(this)
        .closest('.menu')
        .removeClass('menu_state_open');

      const url = this.href.split('#')[1];

      scrollToAnchor(url);
    });
  });
(jQuery);

function scrollToAnchor(aid) {
  const aTag = $("a[name='" + aid + "']");
  $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}