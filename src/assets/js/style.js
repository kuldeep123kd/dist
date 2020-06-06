import $ from "jquery";

$(document).ready(function() {
    autoWinht ();
});
$(window).resize(function() {
    autoWinht ();
});

function autoWinht () {
    var winht = $(window).height();
    if(winht <= 630) {
        $("footer").css("position",'unset');
    }
    else {
        $("footer").css("position",'fixed');
    }
}