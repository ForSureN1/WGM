$('.main-slider__background').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick_prev head_arrow"></button>',
    nextArrow: '<button type="button" class="slick_next head_arrow"></button>',
    dots: true,
    fade: true,
    speed: 1500,
    autoplaySpeed: 2000,
    asNavFor: '.main-slider__child',
    swipe: false,
    infinite: true,
});

$('.main-slider__child').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: false,
    asNavFor: '.main-slider__background',
    speed: 1500,
    swipe: false,
    swipeToSlide: false,
    infinite: true,
});

$('.main-slider__info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 1500,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    rtl: true,
    infinite: true,
});

$('.news__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1500,
    responsive: [{
        breakpoint: 1260,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }
    
]
});

$('.partners__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<button type="button" class="slick_prev part_arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_367_100)"><path d="M16.5253 17.6417L8.88366 10L16.5253 2.35834L14.167 0L4.16699 10L14.167 20L16.5253 17.6417Z" fill="white"/></g><defs><clipPath id="clip0_367_100"><rect width="20" height="20" fill="white" transform="translate(0 20) rotate(-90)"/></clipPath></defs></svg></button>',
    nextArrow: '<button type="button" class="slick_next part_arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_367_95)"><path d="M3.47467 17.6417L11.1163 10L3.47467 2.35834L5.83301 0L15.833 10L5.83301 20L3.47467 17.6417Z" fill="white"/></g><defs><clipPath id="clip0_367_95"><rect width="20" height="20" fill="white" transform="matrix(0 -1 -1 0 20 20)"/></clipPath></defs></svg></button>',
    autoplay: true,
    speed: 1500,
});


function setSlider() {
    $('.stock__list').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
        // nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
        // responsive: [{
        //         breakpoint: 700,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 450,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    })
}

let render = document.querySelector('.stock__list')
let flag_slider = true;
if (render) {
    if (window.innerWidth < 500 && flag_slider) {
        setSlider();
        flag_slider = false;
    } else if (window.innerWidth > 501 && !flag_slider) {
        $('.stock__list').slick('unslick');
        flag_slider = true;
    };

    // console.log(x)

    window.addEventListener('resize', () => {
        if (window.innerWidth < 500 && flag_slider) {
            setSlider();
            flag_slider = false;
        } else if (window.innerWidth > 501 && !flag_slider) {
            $('.stock__list').slick('unslick');
            flag_slider = true;
        }
        // console.log(x)
    });
}



let count = document.querySelector('.number-slider__count')
if (count) {
    count.innerHTML = '01 /'
}
$('.main-slider__child').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    let items = document.querySelectorAll('.main-slider__child-item')
    items.forEach(item => {
        item.classList.add('opacity')
        setTimeout(() => {
            item.classList.remove('opacity')
        }, 300)
    })
    $('.main-slider__info').slick('slickGoTo', nextSlide);
    animationText();
    let quantity = $('.main-slider__info').slick('slickCurrentSlide')
    if ((quantity + 1) < 10) {
        count.innerHTML = '0' + parseInt(quantity + 1) + ' /'
    } else {
        count.innerHTML = parseInt(quantity + 1) + ' /'
    }
});

$('.main-slider__info').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    animationText();
});

$('.main-slider__info').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    animationText();
});




let btn1 = document.querySelector('.slick_next.head_arrow')
if (btn1) {
    btn1.addEventListener('click', () => {
        $('.main-slider__child').slick('slickNext');
        $('.main-slider__info').slick('slickNext');
        animationText();
    })
}


let btn2 = document.querySelector('.slick_prev.head_arrow')
if (btn2) {
    btn2.addEventListener('click', () => {
        $('.main-slider__child').slick('slickPrev');
        $('.main-slider__info').slick('slickPrev');
        animationText();
    })
}


let btn3 = document.querySelector('.news__prev')
let btn4 = document.querySelector('.news__next')

if (btn3 && btn4) {
    btn3.addEventListener('click', () => {
        $('.news__slider').slick('slickPrev');
    })
    btn4.addEventListener('click', () => {
        $('.news__slider').slick('slickNext');
    })
}

function animationText() {
    let text = document.querySelectorAll('.main-slider__content.slick-slide:not(.slick-active) .main-slider__text')
    let text_active = document.querySelectorAll('.main-slider__content.slick-slide.slick-active .main-slider__text')
    text.forEach(item => {
        item.classList.add('animation')
        setTimeout(() => {
            item.classList.remove('animation')
        }, 1000)
    })
    text_active.forEach(item => {
        item.classList.add('animation_two')
        setTimeout(() => {
            item.classList.remove('animation_two')
        }, 2000)
    })
    let header = document.querySelectorAll('.main-slider__content.slick-slide:not(.slick-active) .main-slider__header')
    let header_active = document.querySelectorAll('.main-slider__content.slick-slide.slick-active .main-slider__header')
    header.forEach(item => {
        item.classList.add('animation')
        setTimeout(() => {
            item.classList.remove('animation')
        }, 1000)
    })
    header_active.forEach(item => {
        item.classList.add('animation_two')
        setTimeout(() => {
            item.classList.remove('animation_two')
        }, 2000)
    })
}


window.addEventListener('DOMContentLoaded', () => {

    // burger
    let menu_btn = document.querySelector('.menu-btn')
    let menu = document.querySelector('.menu')
    if(menu_btn) {
        menu_btn.addEventListener('click', ()=> {
            menu_btn.classList.toggle('active')
            menu.classList.toggle('active')
        })
    }


    let main_slider = document.querySelector('.main-slider')
    if (main_slider) {
        document.querySelector('body').style.overflow = "hidden";
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
        anim6.forEach(btn => {
            btn.classList.add('animation')
        })
        let anim7 = document.querySelectorAll('.main-slider__child-item')
        let anim8 = document.querySelector('.number-slide')
        anim8.classList.add('animation')


        let lastanim = document.querySelector('.head_arrow')
        if (lastanim) {

        }
        lastanim.addEventListener('animationend', () => {
            anim1.classList.remove('animation')
            anim2.classList.remove('firstanimation')
            anim3.classList.remove('firstanimation')
            anim4.classList.remove('animation')
            anim5.classList.remove('animation')
            for (let i = 0; i < anim7.length; i++) {
                anim7[0].classList.remove('animation_one')
                anim7[1].classList.remove('animation_two')
                anim7[2].classList.remove('animation_three')
            }
            anim8.classList.remove('animation')
            animationText();
            $('.main-slider__background').slick('slickNext');
            $('.main-slider__background').slick('slickSetOption', 'autoplay', true, true);
            let btn = document.querySelectorAll('ul.slick-dots button')
            let ul = document.querySelector('ul.slick-dots')
            btn.forEach(btn => {
                btn.style.opacity = '1'
            })
            ul.classList.add('no-befor')
            document.querySelector('body').style.overflow = "unset";
        })
        let btndots = document.querySelectorAll('.slick-dots li button')
        let btndotsarray = Array.from(btndots)
        let btndotsarrayreverse = btndotsarray.reverse();
        let quantity = document.querySelector('.number-slider__quantity')
        btndotsarrayreverse.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add('animation')
            }, index * 100 + 500)
            if (index < 10) {
                quantity.innerHTML = '0' + parseInt(index + 1)
            } else {
                quantity.innerHTML = parseInt(index + 1)
            }

        })
    }


    // svg map

    // let svg_map = document.querySelector('.map-svg')

    // if (svg_map) {
    //     svg_map.addEventListener('click', showCity)
    // }

    // function showCity(e) {
    //     const target = e.target;
    //     let allpath = document.querySelectorAll('.city.active')
    //     let allpointer = document.querySelectorAll('.pointer.active')
    //     if (target.classList.contains('city')) {
    //         target.classList.toggle('active')
    //         if (target.nextElementSibling.classList.contains('pointer')) {
    //             target.nextElementSibling.classList.toggle('active')
    //         }
    //         console.log(target.nextElementSibling)
    //         allpath.forEach(city => {
    //             city.classList.remove('active')
    //         })
    //         allpointer.forEach(point => {
    //             point.classList.remove('active')
    //         })
    //     }

    // }


    // TABS

    $('.info__tabs-btn').on("click", function(e) {
        const target = e.target
        if (target.classList.contains('active')) {
            $(target.nextElementSibling).slideUp();
            target.classList.remove('active')
                // console.log(target)  
        } else {
            $('.info__tabs-content').slideUp();
            $(target.nextElementSibling).slideDown();
            $('.info__tabs-btn').removeClass('active')
            target.classList.add('active')
        }
    });


    //resume
    let form_input = document.querySelector('.input-file')
    let resume_link = document.querySelectorAll('.js-resume')
    let form = document.querySelector('.popup__resume');
    if (form_input) {
        form_input.addEventListener('input', showFile)

        form.addEventListener('click', (e) => {
            if (e.target === form) {
                form.classList.remove('active')
                setTimeout(() => { form.style.display = "none" }, 300)
                document.querySelector('body').style.overflow = "unset"
            }
        })
    }

    function showFile(e) {
        let file_name = document.querySelector('.file-name')
        if (e.target.files?.length) {
            file_name.innerHTML = e.target?.files[0]?.name;
        } else {
            file_name.innerHTML = 'Прикрепить документ'
        }
    }

    resume_link.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('body').style.overflow = "hidden"
            form.style.display = "flex"
            setTimeout(() => { form.classList.add('active') }, 1)
        })
    })

    let closemap = document.querySelectorAll('.box__close');
    closemap.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.parentElement.classList.remove('active')
            stopInitMap();
        })
    })


    // SHOW BLOCK POINTER

    let map_svg = document.querySelector('.map-svg')
    if (map_svg) {
        map_svg.addEventListener('click', initMap)
    }
    function stopInitMap() {
        let boxsactive = document.querySelectorAll('.map__box.active')
        let pointers = document.querySelectorAll('.pointer.active')
        let cityactive = document.querySelectorAll('.city.active')
        cityactive.forEach(city => {
            city.classList.remove('active')
        })
        boxsactive.forEach(box => {
            box.classList.remove('active')
        })
        pointers.forEach(point => {
            point.classList.remove('active')
        })
    }
    function initMap(e) {
        const target = e.target
        const point = target.parentNode
        let boxs = document.querySelectorAll('.map__box')
        // console.log(target.parentNode)
        if(point.classList.contains('pointer')) {
            stopInitMap();
            boxs.forEach(box => {
                if(point.getAttribute('data-name') === box.getAttribute('data-name')) {
                    point.classList.toggle('active')
                    box.classList.toggle('active')
                    point.parentNode.previousElementSibling.classList.add('active')
                }
            })
        } else {
            return;
        }
    }

})