$(function(){

    $(window).scroll(function(){
        var windowOFFY = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.sessao').each(function(){
            var elOFFY = $(this).offset().top;
            
            if(elOFFY+250 < (windowOFFY + windowHeight)){
                $('.menu-desk a, .menu-mobile a').css('color','#b4b4b4');    
                var target = $(this).attr('target');
                
                if(target != 'ttop'){
                    $('.'+target).css('color','rgb(68, 68, 190)'); 
                }
                else{
                    $('.tpq-site_container').css('color','#b4b4b4'); 
                }
                   
                return;
            }
        });
    });

    menuMobile();
    function menuMobile(){
        $('.header-menu-mobile').click(function(){
            $(this).find('ul').slideToggle();
        })
    }

});