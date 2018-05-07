/**
 * Created by Administrator on 2017/4/19 0019.
 */
$(function () {
    var $_GET = (function () {
        var url = decodeURI(location.href);
        var u = url.split("?");
        if (typeof(u[1]) == "string") {
            u = u[1].split("&");
            var get = {};
            for (var i in u) {
                var j = u[i].split("=");
                get[j[0]] = j[1];
            }
            return get;
        } else {
            return {};
        }
    })();

    var date = $_GET['date'];

    $('.right div').hide();
    $('.right_nav li').css("background", "#889EA9");

    //首页点击影像中心跳转时
    if (date=='image') {
        $('#image').show();
        $('.image').css("background", "#204c79");
    }
    //首页点击乳腺中心跳转时
    else if(date=='breast'){
        $('#breast').show();
        $('.breast').css("background", "#204c79");
    }
    //页面点击小标题切换时
    else {
        $('.right_nav li').css("background", "#889EA9");
        $(".right_nav li:first-child").css("background", "#204c79");
        var className = $(".right_nav li:first-child").attr('class');
        $('.right div').hide();
        $('#' + className).fadeIn();
    }
    $('.right_nav li').click(function () {
        $('.right div').hide();
        var className = $(this).attr('class');
        $('.right_nav li').css("background", "#889EA9");
        $(this).css("background", "#204c79");
        $('.right div').hide();
        $('#' + className).fadeIn();
    });

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
})

