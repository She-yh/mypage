import $ from "jquery";
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > ($(this).height() - 65)) {
            $('#header').css({
                'background-color': 'rgb(68,81,90)',
                'box-shadow': '0px 0px 10px rgba(0,0,0,0.5)'
            });
            $('#topbar').show();
        } else {
            $('#header').css({
                'background-color': 'transparent',
                'box-shadow': '0px 0px 10px rgba(0,0,0,0)'
            });
            $('#topbar').hide();
        }
        var brightness = (100 - $(this).scrollTop() / 4);
        var opacity = (100 - $(this).scrollTop() / 5) + "%";
        if (brightness > 65) brightness = 65;
        if (brightness < 25) brightness = 25;
        brightness = "brightness(" + brightness + "%)";
        $('.text-contain').css("opacity", opacity);
        $('#video').css("filter", brightness);
    });
});
