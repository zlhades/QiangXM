console.log("Start watching");
String.prototype.contains = function (str) {
    return this.indexOf(str) >= 0;
}
var clicked = false;

$(document).ready(function () {

    function qiang() {
        try {
            if(!location.href.contains("item.mi.com/buyphone")){
                return;
            }
            select("标准", ".J_stepItem");
            //select("全网通", ".J_stepItem");
            select("白色", ".J_stepItem");
            select("必备套装", ".J_packageItem");
            //select("裸机", ".J_packageItem");
            $("#J_proBuyBtn").each(function () {
                var mo2g = '<span id="zlhades">forTest<span>';
                $(this).append(mo2g);
                $('#zlhades').click();
                clicked = true;
                return;
            });
            if ($("#J_proBuyBtn").length == 0) {
                refresh()
            }
        } catch (e) {
            console.log('==eee==' + e);
            refresh()
        }
        if(!clicked)
            setTimeout(qiang, 10);
    }
    function refresh(){
        //count++;
        //if (count > 10) {
        //    location.reload();
        //}
    }

    function select(name, className) {
        $(className).each(function () {
            if (this.innerHTML.trim().contains(name)) {
                if(!$(this).attr('class').contains('active')) {
                    $(this).click();
                }
            }
        });

    }

    setTimeout(qiang, 0);
});
