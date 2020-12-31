$(function(){
    $(".mosaico .container .mosaico-wraper").slick({
        centerMode: false,
        slidesToShow:6,
        arrows:false,
        responsive:[

        {
            breakpoint:768,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:3
            }
        },

        {
            breakpoint:580,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:2
            }
        },

        {
            breakpoint:300,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:1
            }
        },
        ]
    });

    $(".motivos .container").slick({
        centerMode:false,
        slidesToShow:3,
        arrows:false,
        dots:true,
        infinite: false,
        responsive:[

            {
                breakpoint:768,
                    settings:{
                    arrows:false,
                    dots:true,
                    centerMode:false,
                    slidesToShow:2
                }
            },

            {
                breakpoint:580,
                    settings:{
                    arrows:false,
                    dots:true,
                    centerMode:false,
                    slidesToShow:1
                }
            }
        ]
    });

    $(".depoimentos .container").slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        dots:true,
        infinite: false
    });

    $(".social .mosaico-social").slick({
        centerMode: false,
        slidesToShow:9,
        arrows:false,
        responsive:[

        {
            breakpoint:1100,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:6
            }
        },

        {
            breakpoint:900,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:4
            }
        },

        {
            breakpoint:600,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:3
            }
        },

        {
            breakpoint:400,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:2
            }
        },

        {
            breakpoint:300,
            settings:{
                arrows:false,
                centerMode:true,
                slidesToShow:1
            }
        },
        ]
    });
});