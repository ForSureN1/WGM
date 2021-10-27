$('.main-slider__background').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick_prev head_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next head_arrow"></button>',
    dots: true,
    fade: true,
    speed: 1500,
    autoplaySpeed: 3000,
    asNavFor: '.main-slider__child',
    swipe: false,
    swipeToSlide: false,
});

$('.main-slider__child').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.main-slider__background',
    speed: 1500,
    swipe: false,
    swipeToSlide: false,
});

$('.main-slider__info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1500,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    rtl: true,
});

$('.news__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1500,
});


$('.main-slider__child').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    let items = document.querySelectorAll('.main-slider__child-item')
    items.forEach(item => {
        item.classList.add('opacity')
        setTimeout(() => { item.classList.remove('opacity') }, 300)
    })
    $('.main-slider__info').slick('slickGoTo', nextSlide);
    animationText();
});

$('.main-slider__info').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    animationText();
});

$('.main-slider__info').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    animationText();
});




let btn1 = document.querySelector('.slick_next.head_arrow')
btn1.addEventListener('click', () => {
    $('.main-slider__child').slick('slickNext');
    $('.main-slider__info').slick('slickNext');
    animationText();
})

let btn2 = document.querySelector('.slick_prev.head_arrow')
btn2.addEventListener('click', () => {
    $('.main-slider__child').slick('slickPrev');
    $('.main-slider__info').slick('slickPrev');
    animationText();
})

function animationText() {
    let text = document.querySelectorAll('.main-slider__content.slick-slide:not(.slick-active) .main-slider__text')
    let text_active = document.querySelectorAll('.main-slider__content.slick-slide.slick-active .main-slider__text')
    text.forEach(item => {
        item.classList.add('animation')
        setTimeout(() => { item.classList.remove('animation') }, 1000)
    })
    text_active.forEach(item => {
        item.classList.add('animation_two')
        setTimeout(() => { item.classList.remove('animation_two') }, 2000)
    })
    let header = document.querySelectorAll('.main-slider__content.slick-slide:not(.slick-active) .main-slider__header')
    let header_active = document.querySelectorAll('.main-slider__content.slick-slide.slick-active .main-slider__header')
    header.forEach(item => {
        item.classList.add('animation')
        setTimeout(() => { item.classList.remove('animation') }, 1000)
    })
    header_active.forEach(item => {
        item.classList.add('animation_two')
        setTimeout(() => { item.classList.remove('animation_two') }, 2000)
    })
}


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').style.overflow = "hidden"
    let anim1 = document.querySelector('.main-slider')
    anim1.classList.add('animation')
    let anim2 = document.querySelector('.main-slider__header')
    anim2.classList.add('firstanimation')
    let anim3 = document.querySelector('.main-slider__text')
    anim3.classList.add('firstanimation')
    let anim4 = document.querySelector('.btn-more')
    anim4.classList.add('animation')
    let anim5 = document.querySelector('li.slick-active')
    anim5.classList.add('animation')
    let anim6 = document.querySelectorAll('.head_arrow')
    anim6.forEach(btn => { btn.classList.add('animation') })


    let lastanim = document.querySelector('.head_arrow')
    lastanim.addEventListener('animationend', () => {
        anim1.classList.remove('animation')
        anim2.classList.remove('firstanimation')
        anim3.classList.remove('firstanimation')
        anim4.classList.remove('animation')
        anim5.classList.remove('animation')
        console.log('123')
        animationText();
        // $('.main-slider__background').slick('slickNext');
        // $('.main-slider__background').slick('slickSetOption', 'autoplay', true, true);
        let btn = document.querySelectorAll('ul.slick-dots button')
        let ul = document.querySelector('ul.slick-dots')
        btn.forEach(btn => { btn.style.opacity = '1' })
        ul.classList.add('no-befor')
        document.querySelector('body').style.overflow = "unset"
    })
    let btndots = document.querySelectorAll('.slick-dots li button')
    let btndotsarray = Array.from(btndots)
    let btndotsarrayreverse = btndotsarray.reverse();
    btndotsarrayreverse.forEach((btn, index) => {
        setTimeout(() => { btn.classList.add('animation') }, index * 100 + 500)
    })
})