/**
 * Created by Administrator on 2017/4/13 0013.
 */
$(function () {
    //切换语言
    $("#language").hide();
    $(".nav p").click(function () {
        $(this).hide();
        $("#language").fadeIn();
    })
    $("#language").click(function () {
        $(this).hide();
        $("p").fadeIn();
    });
    $("#language").mouseleave(function () {
        $(this).hide();
        $("p").fadeIn();
    });

    $('.right_nav li').css("background", "#889EA9");
    $(".right_nav li:first-child").css("background", "#204c79");
    var className = $(".right_nav li:first-child").attr('class');
    $('.right div').hide();
    $('#' + className).show();
    $('.right_nav li').click(function () {
        var className = $(this).attr('class');
        $('.right_nav li').css("background", "#889EA9");
        $(this).css("background", "#204c79");
        $('.right div').hide();
        $('#' + className).fadeIn();
    });
});
