$('#sponsors').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

$('#experts').owlCarousel({
    loop: true,
    margin: 180,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('#slider-content').owlCarousel({
    touchDrag: false,
    mouseDrag: false,
    loop: true,
    autoplay: true,

    responsive: {
        0: {
            items: 1
        }
    }
});

$('#feedback').owlCarousel({
    touchDrag: false,
    mouseDrag: false,
    loop: true,
    autoplay: true,

    responsive: {
        0: {
            items: 1
        }
    }
});

$('#case-studies').owlCarousel({
    touchDrag: true,
    mouseDrag: true,
    loop: true,
    autoplay: false,
    margin: 20,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2.3
        },
        1000: {
            items: 3.3
        }
    }
});








