$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    $(".portfolio_item_webdesign").click(function() {
        $('.portfolio_graphicdesign').fadeOut();
        $('.portfolio_webdesign').fadeIn();
        $('.portfolio_atwork').fadeOut();
        $('.portfolio_item_all').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_webdesign').css('color', '#ffffff').css('border', '1px solid #ffffff');
        $('.portfolio_item_graphicdesign').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_atwork').css('color', '#666d89').css('border', '1px solid #666d89');
    });
    $(".portfolio_item_all").click(function() {
        $('.portfolio_graphicdesign').fadeIn();
        $('.portfolio_webdesign').fadeIn();
        $('.portfolio_atwork').fadeIn();
        $('.portfolio_item_all').css('color', '#ffffff').css('border', '1px solid #ffffff');
        $('.portfolio_item_webdesign').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_graphicdesign').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_atwork').css('color', '#666d89').css('border', '1px solid #666d89');
    });
    $(".portfolio_item_graphicdesign").click(function() {
        $('.portfolio_graphicdesign').fadeIn();
        $('.portfolio_webdesign').fadeOut();
        $('.portfolio_atwork').fadeOut();
        $('.portfolio_item_all').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_webdesign').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_graphicdesign').css('color', '#ffffff').css('border', '1px solid #ffffff');
        $('.portfolio_item_atwork').css('color', '#666d89').css('border', '1px solid #666d89');
    });
    $(".portfolio_item_atwork").click(function() {
        $('.portfolio_graphicdesign').fadeOut();
        $('.portfolio_webdesign').fadeOut();
        $('.portfolio_atwork').fadeIn();
        $('.portfolio_item_all').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_webdesign').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_graphicdesign').css('color', '#666d89').css('border', '1px solid #666d89');
        $('.portfolio_item_atwork').css('color', '#ffffff').css('border', '1px solid #ffffff');
    });

    $(".burger").click(function() {
        $('.hidden_menu').fadeToggle();
    });
    $(".hidden_menu>a").click(function() {
        $('.hidden_menu').fadeToggle();
    });
    $(".close_hidden_menu").click(function() {
        $('.hidden_menu').fadeToggle();
    });
});
$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$(document).ready(function() {
    $("#mobile_menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});