$('.owl-carousel').owlCarousel({
    loop:true, /* faz com que o carrosel gire infinitamente. */
    margin:10,
    nav: false, /* setas abaixo dos filmes para rodar o carrossel.  */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})