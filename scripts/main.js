$('.nav-link').hover(function() {
    $(this).closest('.nav-item.dropdown').siblings('.nav-item.dropdown').removeClass('show').find('.dropdown-menu').removeClass('show');
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeInDown',

    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})