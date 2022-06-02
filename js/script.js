window.addEventListener('DOMContentLoaded', () => {
//показать субменю 3го уровня
(function($) {
    $(function() {
      
      $('ul.tabs__caption').on('mouseenter', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);

    //показать список услуг
    $('#serv').mouseenter(function () {
        $('.tabs').removeClass('hide');
        $('.arrow__serv').addClass('rotate');
        $('#serv').addClass('accent');
        $('.overlay').show();
    });
    $('#serv').mouseleave(function () {
        $('.tabs').addClass('hide');
        $('.arrow__serv').removeClass('rotate');
        $('#serv').removeClass('accent');
        $('.overlay').hide();
    });
    $('.tabs').mouseenter(function () {
        $('.tabs').removeClass('hide');
        $('.arrow__serv').addClass('rotate');
        $('#serv').addClass('accent');
        $('.overlay').show();
    });
    $('.tabs').mouseleave(function () {
        $('.tabs').addClass('hide');
        $('.arrow__serv').removeClass('rotate');
        $('#serv').removeClass('accent');
        $('.overlay').hide();
    });

    //раскрытие 3 уровень
    $('.select').each(function(i) {
        $(this).on('click', function(e) {
            $('.option').eq(i).toggleClass('hide');
            $('.arrow').eq(i).toggleClass('rotate');
            
            });
        });
});