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
        $("footer#footer").css("position",'unset');
    }
    else {
        $("footer#footer").css("position",'fixed');
    }
}