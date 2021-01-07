$(function(){
    $(window).scroll(function(){
        var windowOFFY = $(window).scrollTop();
        var windowHeight = $(window).height();
        $(".sessao").each(function(){
            var elOFFY = $(this).offset().top;
            
            if(elOFFY+550 < (windowOFFY + windowHeight)){
                $(".menu-desk li, .menu-mobile li a").css("color","#b4b4b4");    
                var target = $(this).attr("target");
                
                if(target !== "ttop"){
                    $("."+target).css("color","rgb(68, 68, 190)"); 
                }
                else{
                    $(".tpq-site_container").css("color","#b4b4b4"); 
                }
                   
                return;
            }
        });
    });

    function menuMobile(){
        $(".header-menu-mobile").click(function(){
            $(this).find("ul").slideToggle();
        });
    }
    menuMobile();
});