$(function() {
  $('#slider-mini').change(function() {
    $.fn.carousel('setSlidePosition', $('#slider-mini').attr('value')-1);
  });
});