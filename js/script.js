// Строгий режим
"use strict"

document.addEventListener('DOMContentLoaded', function() {
    // AOS
    AOS.init({
        duration: 1000,
        offset: 0,
        once: true,
    });

    // Click
    document.addEventListener('click', documentAction)
    function documentAction(e) {
        // Open Menu
        const elementTarget = e.target
        if(elementTarget.closest('.add-toggle-menu')) {
            const currentElement = elementTarget.closest('.add-toggle-menu')
            currentElement.closest('.header').classList.toggle('header-menu-open')
            if(currentElement.closest('.header').classList.contains('header-menu-open')) {
                document.querySelector('html').style.overflowY = "hidden"
                window.scrollTo(0,0)
            } else {
                document.querySelector('html').style.overflowY = "unset"
            }
        }

        // Open Accordion
        if(elementTarget.closest('.more__title-wrapper')) {
            const acordionButtons = document.querySelectorAll('.more__title-wrapper')
            if(acordionButtons.length) {
                acordionButtons.forEach(acordionButton => {
                    if(acordionButton === elementTarget.closest('.more__title-wrapper')) {
                        acordionButton.closest('.more__element').classList.toggle('more__element--open')
                        
                    } else {
                        acordionButton.closest('.more__element').classList.remove('more__element--open')
                    }
                })
            }
        }

        // Open Search
        // if(elementTarget.closest('.header__search-button')) {
        //     const parentElement = elementTarget.closest('.header__search-wrapper')
        //     parentElement.querySelector('.header__input').classList.toggle('header__input--active')
        //     parentElement.querySelector('.header__input').focus()
        // } 
        // if(!elementTarget.closest('.header__search-wrapper')) {
        //     const parentElement = document.querySelector('.header__search-wrapper')
        //     parentElement.querySelector('.header__input').classList.remove('header__input--active')
        // }

        // Close Copy
        // if(elementTarget.closest('.header__cross')) {
        //     const currentElement = elementTarget.closest('.header__cross')
        //     currentElement.closest('.header__copy-wrapper').classList.add('header__copy-wrapper--close')
        // }

        // Open Sub-Menu
        // if(elementTarget.closest('.header__item-image')) {
        //     const arrows = document.querySelectorAll('.header__item-image')
        //     if(arrows.length) {
        //         arrows.forEach(arrow => {
        //             if(arrow === elementTarget.closest('.header__item-image')) {
        //                 arrow.closest('.header__item').classList.toggle('header__item--active')
        //             } else {
        //                 arrow.closest('.header__item').classList.remove('header__item--active')
        //             }
        //         });
        //     }
        // }

        // . Cart-Counter
        // if(elementTarget.closest('.quantity__image.quantity__image--minus')) {
        //     console.log(true);
            
        //     const currentInput = elementTarget.closest('.quantity__image.quantity__image--minus').nextElementSibling
        //     currentInput.value = currentInput.value - 1 > 0 ? --currentInput.value : 1
        //     e.preventDefault()
        // } else if(elementTarget.closest('.quantity__image.quantity__image--plus')) {
        //     const currentInput = elementTarget.closest('.quantity__image.quantity__image--plus').previousElementSibling
        //     currentInput.value = ++currentInput.value
        //     e.preventDefault()
        // }

        // Open Cart
        // if(elementTarget.closest('.header__cart-button') || elementTarget.closest('.header__cross')) {
        //     const parentElement = elementTarget.closest('.header__cart-wrapper')
        //     parentElement.querySelector('.header__cart').classList.toggle('open-cart')
        // }
        // if(!elementTarget.closest('.header__cart-wrapper')) {
        //     const parentElement = document.querySelector('.header__cart-wrapper')
        //     parentElement.querySelector('.header__cart').classList.remove('open-cart')
        // }
    }


    // Add background to header
    const header = document.querySelector(".header")
    window.addEventListener('scroll', addClassToScroll) 
    function addClassToScroll() {
        const scrollPos = window.scrollY
        if (scrollPos > 0) {
            header.classList.add('header--with-background')
        } else {
            header.classList.remove('header--with-background')
        }
    }
    addClassToScroll()
})



// // Dynamic Button
// const smallDevice = window.matchMedia('(max-width: 767px)')
// smallDevice.addListener(dynamicSearch)

// function dynamicSearch(e) {
//     const search = document.querySelector('.header__search-wrapper')
//     const action = document.querySelector('.header__action-wrapper')

//     if(e.matches) {
//         if(search) {
//             action.insertAdjacentElement('afterbegin', search)
//         }
//     } else {
//         if(search) {
//             document.querySelector('.header__navigation').insertAdjacentElement('afterend', search)
//         }
//     }
// }
// dynamicSearch(smallDevice)



// Dynamic Button
// const mobileDevice = window.matchMedia('(max-width: 424px)')
// mobileDevice.addListener(dynamicBtn)

// function dynamicBtn(e) {
//     const button = document.querySelector('.header__button')
//     const navigation = document.querySelector('.header__navigation')

//     if(e.matches) {
//         if(button) {
//             navigation.insertAdjacentElement('beforeend', button)
//         }
//     } else {
//         if(button) {
//             document.querySelector('.header__action').insertAdjacentElement('afterbegin', button)
//         }
//     }
// }
// dynamicBtn(mobileDevice)




//                                     // Swiper Initialization

// // swiperCards
// const swiperCards = new Swiper('.product__swiper', {
//     // Optional parameters
//     slidesPerView: 'auto',
//     spaceBetween: 20
//   });



//   // swiperTestimonials
// const swiperTestimonials = new Swiper('.testimonials__swiper', {
//     // Optional parameters
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//       // Navigation arrows
//     navigation: {
//         nextEl: '.testimonials__button-next',
//         prevEl: '.testimonials__button-prev',
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         // when window width is >= 480px
//         550: {
//             slidesPerView: 'auto',
//             spaceBetween: 20,
//         }
//     }
//   });



// //   swiperSingleCard
// const mainSlide = new Swiper('.single-product__swiper-main', {
//     spaceBetween: 10,
//     loop: true,
//     loopedSlides: 1,
//   });

// const galleryThumbs = new Swiper('.single-product__swiper-thumbs', {
//     spaceBetween: 10,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     touchRatio: 0.2,
//     slideToClickedSlide: true,
//           loop: true,
//           loopedSlides: 4
//   });

// //   galleryTop.controller.control = galleryThumbs;
// //   galleryThumbs.controller.control = galleryTop;
