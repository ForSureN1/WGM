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
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
        }
    }
]
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

// let render = document.querySelector('.stock__list')
// let flag_slider = true;
// if (render) {
//     if (window.innerWidth < 500 && flag_slider) {
//         setSlider();
//         flag_slider = false;
//     } else if (window.innerWidth > 501 && !flag_slider) {
//         $('.stock__list').slick('unslick');
//         flag_slider = true;
//     };

//     // console.log(x)

//     window.addEventListener('resize', () => {
//         if (window.innerWidth < 500 && flag_slider) {
//             setSlider();
//             flag_slider = false;
//         } else if (window.innerWidth > 501 && !flag_slider) {
//             $('.stock__list').slick('unslick');
//             flag_slider = true;
//         }
//         // console.log(x)
//     });
// }



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
    $('.menu-btn').on('click', (e) => {
            if(e.target.classList.contains('active')) {
                $('.menu').slideUp();
                e.target.classList.remove('active')
            } else {
                e.target.classList.add('active')
                $('.menu').slideDown();
            }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1100) {
            document.querySelector('.menu').style.display = "block";
        } else {
            document.querySelector('.menu').style.display = "none";
        }
    })

    // lang 
    let lang = document.querySelector('.header__lang-active')
    let otherlang = document.querySelector('.other__lang')
    if(lang) {
        lang.addEventListener('click', () => {
            otherlang.classList.toggle('active')
        })
    }

    //nav menu
    // let nav_menu = document.querySelector('.nav__menu')

    // if(nav_menu) {
    //     nav_menu.addEventListener('click', showMenu)
    // }
    // function showMenu(e) {
    //     const target = e.target;
    //     let openmenu = document.querySelectorAll('.menu__item-child.active')
    //     let openlink = document.querySelectorAll('.menu__item-link.active')
    //     if(target.classList.contains('active')) {
    //         if(target.nextElementSibling.classList.contains('menu__item-child')) {
    //             openmenu.forEach(item => {
    //                 item.classList.remove('active')
    //             })
    //             target.classList.remove('active')
    //         } else {

    //         }
    //     } else if(target.classList.contains('menu__item-link')) {
    //         openmenu.forEach(item => {
    //             item.classList.remove('active')
    //         })
    //         target.nextElementSibling.classList.add('active')
    //         openlink.forEach(link => {
    //             link.classList.remove('active')
    //         })
    //         target.classList.add('active')
    //     }

    // }
    $('.menu__item-link').on("click", function(e) {
        const target = e.target
        if (target.classList.contains('active')) {
            $(target.nextElementSibling).slideUp();
            target.classList.remove('active')
        } else {
            $('.menu__item-child').slideUp();
            $(target.nextElementSibling).slideDown();
            $('.menu__item-link').removeClass('active')
            target.classList.add('active')
        }
    });


    let main_slider = document.querySelector('.main-slider')
    if (main_slider) {
        document.querySelector('body').style.overflow = "hidden";
        $('.header').addClass('animation')
        $('.header__stock').addClass('animation')
        $('.header__phone').addClass('animation')
        $('.header__lang').addClass('animation')
        $('.header__bottom-items').addClass('animation')
        $('.main-slider__child-item.one:not(.slick-cloned)').addClass('animation_one')
        $('.main-slider__child-item.two:not(.slick-cloned)').addClass('animation_two')
        $('.main-slider__child-item.three:not(.slick-cloned)').addClass('animation_three')
        $('.main-slider').addClass('animation')
        $('.main-slider__header').addClass('firstanimation')
        $('.main-slider__text').addClass('firstanimation')
        $('.btn-more').addClass('animation')
        $('li.slick-active').addClass('animation')
        $('.head_arrow').addClass('animation')
        $('.number-slide').addClass('animation')

        let lastanim = document.querySelector('.head_arrow')
        if (lastanim) {

        }

        lastanim.addEventListener('animationend', () => {
            $('.header').removeClass('animation')
            $('.header__stock').removeClass('animation')
            $('.header__phone').removeClass('animation')
            $('.header__lang').removeClass('animation')
            $('.header__bottom-items').removeClass('animation')
            $('.main-slider__child-item.one:not(.slick-cloned)').removeClass('animation_one')
            $('.main-slider__child-item.two:not(.slick-cloned)').removeClass('animation_two')
            $('.main-slider__child-item.three:not(.slick-cloned)').removeClass('animation_three')
            $('.main-slider').removeClass('animation')
            $('.main-slider__header').removeClass('firstanimation')
            $('.main-slider__text').removeClass('firstanimation')
            $('.btn-more').removeClass('animation')
            $('li.slick-active').removeClass('animation')
            $('.head_arrow').removeClass('animation')
            $('.number-slide').removeClass('animation')
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



function r(t, e) {
    var n = parseFloat(t).toFixed(e);
    return "ru" == $("html").attr("lang") ? (n = n.replace(/\./g, ","),
    n = n.replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;")) : n = n.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    n
}

$.ajax({
    url: "https://tools.eurolandir.com/tools/pricefeed/?companycode=je-poly&index=1&format=json",
    dataType: "jsonp",
    success: function(t) {
        var e = t
          , n = r(e.LondonGold.Last, 2)
          , i = r(e.LondonGold.Change, 2)
          , a = r(e.LondonGold.ChangePercent, 2)
          , o = "indicator--down";
        return "-" !== i[0] && (i = "+" + i,
        a = "+" + a,
        o = "indicator--up"),
        a += "%",
        $(".js-stockchart--small__GOLD").addClass(o),
        $(".js-stockchart--small__GOLD").find(".js-stockchart--small__value").html(n),
        $(".js-stockchart--small__GOLD").find(".js-stockchart--small__diff").html(a),
        e,
        console.log(e)
    },
    error: function(t) {
        console.error("Error: " + (0,
        l.default)(t))
    }
})

// $.ajax({
//     url: "https://tools.eurolandir.com/tools/pricefeed/?companycode=je-poly&format=json",
//     dataType: "jsonp",
//     success: function(t) {
//         var e = t
//           , n = r(e["Polymetal International (AIX)"].Last, 2)
//           , i = r(e["Polymetal International (AIX)"].ChangePercent, 2)
//           , a = r(e["Polymetal International (AIX)"].Change, 2)
//           , o = e["Polymetal International (AIX)"].Date
//           , l = e["Polymetal International (AIX)"].Currency
//           , c = r(e["Polymetal International (MOEX)"].Last, 2)
//           , d = r(e["Polymetal International (MOEX)"].ChangePercent, 2)
//           , h = r(e["Polymetal International (MOEX)"].Change, 2)
//           , f = e["Polymetal International (MOEX)"].Date
//           , p = e["Polymetal International (MOEX)"].Currency
//           , m = e["Polymetal International (MOEX)"].MarketName
//           , g = r(e["Polymetal International (MOEX)"].NoShares, 0)
//           , v = r(e["Polymetal International (MOEX)"].MarketCap, 0)
//           , _ = r(e["Polymetal International (LSE)"].Last, 2)
//           , y = r(e["Polymetal International (LSE)"].ChangePercent, 2)
//           , b = r(e["Polymetal International (LSE)"].Change, 2)
//           , x = e["Polymetal International (LSE)"].Date
//           , w = e["Polymetal International (LSE)"].Currency
//           , M = e["Polymetal International (LSE)"].ISIN
//           , S = e["Polymetal International (LSE)"].Symbol
//           , L = e["Polymetal International (LSE)"].MarketName
//           , k = r(e["Polymetal International (LSE)"].NoShares, 0)
//           , T = r(e["Polymetal International (LSE)"].MarketCap, 0)
//           , D = "key-indicator__diff--decr key-indicator__diff--incr"
//           , C = "key-indicator__diff--decr"
//           , A = "key-indicator__diff--decr"
//           , E = "key-indicator__diff--decr";
//         "-" !== i[0] && (i = "+" + i,
//         a = "+" + a,
//         C = "key-indicator__diff--incr"),
//         "-" !== d[0] && (d = "+" + d,
//         h = "+" + h,
//         A = "key-indicator__diff--incr"),
//         "-" !== y[0] && (y = "+" + y,
//         b = "+" + b,
//         E = "key-indicator__diff--incr"),
//         i = "(" + i + "%)",
//         d = "(" + d + "%)",
//         y = "(" + y + "%)",
//         T = "ru" == $("html").attr("lang") ? Math.round(parseInt(T.replace(/&nbsp;/g, "")) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : Math.round(parseInt(T.replace(/,/g, "")) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//         $.each(function(t, e) {
//             $(e).find(".js-stockchart__AIX-value").html(n),
//             $(e).find(".js-stockchart__MICEX-value").html(c),
//             $(e).find(".js-stockchart__LSE-value").html(_),
//             $(e).find(".js-stockchart__AIX-change_percent").removeClass(D).addClass(C).html(i),
//             $(e).find(".js-stockchart__MICEX-change_percent").removeClass(D).addClass(A).html(d),
//             $(e).find(".js-stockchart__LSE-change_percent").removeClass(D).addClass(E).html(y),
//             $(e).find(".js-stockchart__AIX-change").removeClass(D).addClass(C).html(a),
//             $(e).find(".js-stockchart__MICEX-change").removeClass(D).addClass(A).html(h),
//             $(e).find(".js-stockchart__LSE-change").removeClass(D).addClass(E).html(b),
//             $(e).find(".js-stockchart__AIX-date").html(s(o).format("DD MMM YYYY HH:mm")),
//             $(e).find(".js-stockchart__MICEX-date").html(s(f).format("DD MMM YYYY HH:mm")),
//             $(e).find(".js-stockchart__LSE-date").html(s(x).format("DD MMM YYYY HH:mm")),
//             $(e).find(".js-stockchart__AIX-currency").html(l),
//             $(e).find(".js-stockchart__MICEX-currency").html(p),
//             $(e).find(".js-stockchart__LSE-currency").html(w),
//             $(e).find(".js-stockchart__MICEX-market_name").html(m),
//             $(e).find(".js-stockchart__LSE-market_name").html(L),
//             $(e).find(".js-stockchart__MICEX-no_shares").html(g),
//             $(e).find(".js-stockchart__LSE-no_shares").html(k),
//             $(e).find(".js-stockchart__MICEX-cap").html(v),
//             $(e).find(".js-stockchart__LSE-cap").html(T),
//             $(e).find(".js-stockchart__LSE-ISIN").html(M),
//             $(e).find(".js-stockchart__LSE-symbol").html(S)
//         });
//         var j = "indicator--down indicator--up"
//           , Y = "indicator--down"
//           , P = "indicator--down"
//           , z = "indicator--down";
//         return "-" !== a[0] && (Y = "indicator--up"),
//         "-" !== h[0] && (P = "indicator--up"),
//         "-" !== b[0] && (z = "indicator--up"),
//         $(".js-stockchart--small__LSE").removeClass(j).addClass(z),
//         $(".js-stockchart--small__AIX").removeClass(j).addClass(Y),
//         $(".js-stockchart--small__MICEX").removeClass(j).addClass(P),
//         $(".js-stockchart--small__LSE").find(".js-stockchart--small__value").html(_),
//         $(".js-stockchart--small__AIX").find(".js-stockchart--small__value").html(n),
//         $(".js-stockchart--small__MICEX").find(".js-stockchart--small__value").html(c),
//         $(".js-stockchart--small__LSE").find(".js-stockchart--small__diff").html(y.substr(1, y.length - 2)),
//         $(".js-stockchart--small__MICEX").find(".js-stockchart--small__diff").html(d.substr(1, d.length - 2)),
//         $(".js-stockchart--small__AIX").find(".js-stockchart--small__diff").html(i.substr(1, i.length - 2)),
//         e
//     },
//     error: function(t) {
//         console.error("Error: " + (0,
//         l.default)(t))
//     }
// })