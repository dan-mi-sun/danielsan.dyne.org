$( document ).ready(function() {

    $('.content').slideUp();

    $('p.header').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      $target = $(this).parents('article');
      $others = $target.siblings('p.header');

      $others.find('.content').slideUp();

      if($target.find('.content').is(':visible')) {
        $target.find('.content').slideUp();
      } else {
        $target.find('.content').slideDown();
      }
    })
});
