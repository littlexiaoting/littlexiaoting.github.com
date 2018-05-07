"use strict";

/**
 * Created by Administrator on 2017/7/3 0003.
 */
var Footer = React.createClass({
    displayName: "Footer",

    render: function render() {
        return React.createElement(
            "div",
            { className: "footer" },
            React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "div",
                    { className: "footer_left" },
                    React.createElement(
                        "h6",
                        null,
                        "\u8096\u5A77\u7684\u6D4B\u8BD5\u7F51\u9875"
                    ),
                    React.createElement(
                        "span",
                        { className: "tel" },
                        "TEL: 025-58888xxx"
                    ),
                    React.createElement(
                        "span",
                        { className: "address" },
                        "\u5357\u4EAC\u5E02\u6D66\u53E3\u533A\u5357\u4EAC\u4FE1\u606F\u5DE5\u7A0B\u5927\u5B66\u5BF9\u9762"
                    ),
                    React.createElement(
                        "a",
                        { href: "javascript:;" },
                        React.createElement("i", { className: "wechat" })
                    ),
                    React.createElement(
                        "a",
                        { href: "javascript:;" },
                        React.createElement("i", { className: "qq" })
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "@2017 \u5357\u4EACxx\u54A8\u8BE2\u6709\u9650\u516C\u53F8\u7248\u6743\u6240\u6709"
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Footer, null), document.getElementById("footer"));
$(function () {
    var screen = $(window).width();
    var dRight = (screen - 1200) / 2 / 2;
    var sWidth = $(".icon-angle-up").width();
    var rRight = dRight - sWidth / 2;
    $(".icon-angle-up").css("right", rRight + "px");
});