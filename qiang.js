console.log("开始监控");
String.prototype.contains = function (str) {
    return this.indexOf(str) >= 0;
    ;
}
var count = 0;
$(document).ready(function () {

    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }


    function qiang() {
        try {
            if(!location.href.contains("item.mi.com/buyphone")){
                return;
            }
            select("标准", ".J_stepItem");
            select("全网通", ".J_stepItem");
            //select("双网通", ".J_stepItem");
            select("白色", ".J_stepItem");
            $(".J_packageItem").each(function () {
                $(this).click();
            });
            select("裸机", ".J_packageItem");
            console.log('==length==' + $("#J_proBuyBtn").length);
            $("#J_proBuyBtn").each(function () {
                var mo2g = '<span id="mo2g">forTest<span>';
                $(this).append(mo2g);
                $('#mo2g').click();
                return;
            });
            if ($("#J_proBuyBtn").length == 0) {
                refresh()
            }
        } catch (e) {
            console.log('==eee==' + e);
            refresh()
        }

        setTimeout(qiang, 10);
    }
    function refresh(){
        count++;
        if (count > 10) {
            location.reload();
        }
    }

    function select(name, className) {
        $(className).each(function () {
            if (this.innerHTML.trim().contains(name)) {
                $(this).click();
            }
        });

    }

    setTimeout(qiang, 0);
});
