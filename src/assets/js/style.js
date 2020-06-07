import $ from "jquery";

$(document).ready(function() {
    autoWinht ();
    // if($(".tabs-child div").hasClass('series') || $(".tabs-child div").hasClass('movies')) {
    //     $("footer#footer").css("position",'relative');
    // }
    // else {
    //     $("footer#footer").css("position",'fixed');
    // }
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