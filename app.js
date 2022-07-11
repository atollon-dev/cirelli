jQuery(function($){
  $('.section-banner__toggle').click(function(e){
    e.preventDefault();
    $('.off-canvas').toggleClass('active')
  })
});