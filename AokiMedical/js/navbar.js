"use strict";

/**
 * Created by Administrator on 2017/6/29 0029.
 */
var NavBar = React.createClass({
    displayName: "NavBar",

    render: function render() {
        return React.createElement(
            "div",
            { className: "nav" },
            React.createElement(
                "ul",
                { className: "navbar content" },
                React.createElement(
                    "li",
                    null,
                    React.createElement("a", { href: "index.html" })
                ),
                React.createElement(
                    "li",
                    { className: "change" },
                    React.createElement(
                        "a",
                        { href: "advantage.html" },
                        "\u6D77\u5916\u4F18\u52BF"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "change" },
                    React.createElement(
                        "a",
                        { href: "service.html" },
                        "\u670D\u52A1\u5185\u5BB9"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "change" },
                    React.createElement(
                        "a",
                        { href: "cooperation.html" },
                        "\u5408\u4F5C\u533B\u9662"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "change" },
                    React.createElement(
                        "a",
                        { href: "medTour.html" },
                        "\u533B\u7597\u65C5\u6E38"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "change" },
                    React.createElement(
                        "a",
                        { className: "info", href: "information.html" },
                        "\u65B0\u95FB\u8D44\u8BAF"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "change" },
                    React.createElement(
                        "a",
                        { href: "aboutUs.html" },
                        "\u5173\u4E8E\u6211\u4EEC"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "tel" },
                    React.createElement("span", { className: "tel" }),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "span",
                            null,
                            "\u5168\u56FD\u670D\u52A1\u70ED\u7EBF"
                        ),
                        "400-880-xxxx"
                    )
                )
            ),
            React.createElement(
                "ul",
                { className: "fixedNav" },
                React.createElement(
                    "li",
                    null,
                    React.createElement("a", { className: "home", href: "index.html" })
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { className: "weiXin", href: "javascript:;" },
                        React.createElement("span", null)
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { className: "QQ", href: "javascript:;" },
                        React.createElement(
                            "span",
                            null,
                            "\u70B9\u51FB\u8054\u7CFB\u5BA2\u670D"
                        )
                    ),
                    React.createElement("a", { className: "service", target: "_blank", href: "http://wpa.qq.com/msgrd?v=3&uin=822800870&site=qq&menu=yes" })
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { className: "tel", href: "javascript:;" },
                        React.createElement(
                            "span",
                            null,
                            "400-880-xxxx"
                        )
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("a", { className: "top", href: "javascript:;" })
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(NavBar, null), document.getElementById('nav'));
$(function () {
    // 当前页面对应标签为选中状态
    var htmlName = window.location.pathname;
    var a = htmlName.split("/");
    var b = a[1];
    console.log(a);
    console.log(b);
    $(".nav_ul>li>a").attr("href", function () {
        var c = $(this).attr("href");
        if (b == c) {
            $(this).css({ "color": "#16BAB6", "border-top": "5px solid #16bbb7" });
        }
    });

    if (b == "wangshi.html" || b == "themePark.html" || b == "tokyoExperience.html") {
        $(".nav_ul>li>a.info").css({ "color": "#16BAB6", "border-top": "5px solid #16bbb7" });
    }

    //        返回顶部按钮显示与隐藏
    var $topLi = $(".nav .fixedNav li:last-child");
    $($topLi).hide();
    $($topLi).click(function () {
        $("html,body").animate({ scrollTop: 0 }, 300);
    });

    $(window).scroll(function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var osHeight = document.documentElement.clientHeight;

        if (osTop >= osHeight) {
            $($topLi).show();
        } else {
            $($topLi).hide();
        }
    });
});