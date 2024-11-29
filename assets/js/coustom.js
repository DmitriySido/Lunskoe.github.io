(function ($) {
    'use strict';


    // category List
    $('.hero-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed:1500,
        autoplayTimeout: 10000,
        dots:true,
        nav:false,
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 


    

    // Room Active
    $('.room_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        dots:false,
        nav:true,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
    // Teastimonail
    $('.teastimonila').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        dots:false,
        nav:true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // Room List Home Two
    $('.room_list_two').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        dots:true,
        nav:false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })  

    // Teastimonial List Home Two
    $('.teasti_list_two').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 9000,
        dots:true,
        nav:false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1365: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })






})(jQuery);