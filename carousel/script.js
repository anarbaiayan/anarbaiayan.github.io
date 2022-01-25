$(document).ready(function () {
    let owl = $(".owl-carousel")

    owl.owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: true,
        margin:8,
    });

    $('.arrow.prev').on('click', function () {
        owl.trigger('prev.owl.carousel')
    })
    
    $('.arrow.next').on('click', function () {
        owl.trigger('next.owl.carousel')
    })

});