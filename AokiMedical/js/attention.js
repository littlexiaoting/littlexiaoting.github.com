$(function () {
    var preHeight = $(".ul_left").height() + 90;
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

    var index = $_GET['index'];

    if (index) {
        console.log("aaa");
        console.log($(".ul_left li").eq(index));
        $(".ul_left li").eq(index).addClass("li_checked").siblings().removeClass("li_checked");

        $(".ul_right li").eq(index - 1).show().siblings().hide();
        var nowHeight = $(".ul_right").height() + 80;
        $(".ul_left").css("height", nowHeight);
        $(".ul_left li:not(:first-child)").click(function () {
            $(this).addClass("li_checked").siblings().removeClass("li_checked");
            var a = $(".ul_left li").index(this) - 1;
            $($(".ul_right>li")[a]).fadeIn().siblings().hide();

            changeHeight(preHeight);
        });

    } else {
        $(".ul_left li:nth-child(2)").addClass("li_checked");
        $(".ul_right>li:not(:first-child)").hide();
        changeHeight(preHeight);

        $(".ul_left li:not(:first-child)").click(function () {
            $(this).addClass("li_checked").siblings().removeClass("li_checked");
            var a = $(".ul_left li").index(this) - 1;
            $($(".ul_right>li")[a]).fadeIn().siblings().hide();

            changeHeight(preHeight);
        });
    }
})

function changeHeight(height) {
    var nowHeight = $(".ul_right").height() + 80;
    if (nowHeight > height) {
        $(".ul_left").css("height", nowHeight);
    }
    else {
        $(".ul_left").css("height", height);
    }
}