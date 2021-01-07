$(function(){
    $(".menu-mobile a").click(function(){
        var href = $(this).attr("href");
        var offSetTop = $(href).offset().top;

        $("html,body").animate({"scrollTop":offSetTop-80});

        return false;
    });
});

$(function() {
    $("nav.header-menu-mobile ul li a").click(function() {
        document.getElementById("menuMobile").style.display = "none";
        return false;
    });
});
