(function($) {

  function scrollParallaxElements() {
    $('.parallax').each(function() {
      var $this   = $(this);
      $this.css('background-position', '50% -' + (($(window).height() + $this.height() - Math.max(0, Math.min($(window).height() + $this.height(), $this.offset().top + $this.height() - $(window).scrollTop()))) / $this.data('speed')) + 'px');
    });
  }

  $(window).bind('scroll', scrollParallaxElements);

})(jQuery);
