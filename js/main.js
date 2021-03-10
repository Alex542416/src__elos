document.addEventListener("DOMContentLoaded", function () {
    
const mediaQuery = window.matchMedia("(max-width: 48em)").matches;

// 1. Mainslider
var mainSlider = new Swiper('.main__swiper-container', {

    slidesPerView: 1,
    //centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },

  	pagination: {
    el: '.main__swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '  / 0 ' +
              '<span class="' + totalClass + '"></span>';
  		}
  	},

    navigation: {
    	prevEl: '.main__swiper-button-prev',
    	nextEl: '.main__swiper-button-next',
  	},


  	breakpoints: {
    768: {
      direction: 'vertical',
    },
  },

}); // end Mainslider

// 2. Reviewsslider
var reviewsSlider = new Swiper('.reviews__swiper-container', {

    slidesPerView: 1,
    //centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },

  	pagination: {
    el: '.reviews__swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '  / 0 ' +
              '<span class="' + totalClass + '"></span>';
  		}
  	},

    navigation: {
    	prevEl: '.reviews__swiper-button-prev',
    	nextEl: '.reviews__swiper-button-next',
  	},

}); // end Reviewsslider

// 3. Residenceslider
var residenceSlider = new Swiper('.residence__swiper-container', {

    slidesPerView: 2,
    spaceBetween: 17,
    //centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },

  	pagination: {
    el: '.residence__swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '  / 0 ' +
              '<span class="' + totalClass + '"></span>';
  		}
  	},

    navigation: {
    	prevEl: '.residence__swiper-button-prev',
    	nextEl: '.residence__swiper-button-next',
  	},

  // 	// breakpoints: {
  //  //  768: {
  //  //   	spaceBetween: 17,
  //  //  },
  // },

}); // end Residenceslider

// 4. Aboutcenterslider
var aboutcenterSlider = new Swiper('.aboutcenter__swiper-container', {

    slidesPerView: 2,
    spaceBetween: 15,
    //centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },

  	pagination: {
    el: '.aboutcenter__swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '  / 0 ' +
              '<span class="' + totalClass + '"></span>';
  		}
  	},

    navigation: {
    	prevEl: '.aboutcenter__swiper-button-prev',
    	nextEl: '.aboutcenter__swiper-button-next',
  	},

  	breakpoints: {
    768: {
     	slidesPerView: 3,
     	spaceBetween: 25,
    },
  },

}); // end Aboutcenterslider

// 4. Aboutspecialist
var aboutspecialistSlider = new Swiper('.aboutspecialist__swiper-container', {

    init: false,

    slidesPerView: 1,
    //centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },

  	pagination: {
    el: '.aboutspecialist__swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '  / 0 ' + '<span class="my-total">' + aboutspecialistSlider.slides.length + '</span>' +
              '<span class="' + totalClass + '"></span>';
  		}
  	},

  // 	pagination: {
  //   el: '.main__workindetail__swiper-pagination',
  //   type: 'fraction',
  //   renderFraction: function (currentClass, totalClass) {
  //       return '<span class="' + currentClass + '"></span>' +
  //               ' / ' + '<span class="my-total">' + swiper2.slides.length + '</span>' +
  //               '<span class="' + totalClass + '"></span>';
  //   }
  // },

    navigation: {
    	prevEl: '.aboutspecialist__swiper-button-prev',
    	nextEl: '.aboutspecialist__swiper-button-next',
  	},

}); 

if (document.querySelector('.aboutspecialist__swiper-container')) {
        aboutspecialistSlider.init();
    }; // end Aboutspecialist



// Animation rating

let animationLine = document.querySelector('.rating__left--number--line');

if (window.screen.width >= 768) {
	window.onscroll = function () {
		if (window.pageYOffset > 1500) {
			animationLine.classList.add('active');
		}
	}
};

if (window.screen.width >= 320 && window.screen.width <=768) {
	window.onscroll = function () {
		if (window.pageYOffset > 2800) {
			animationLine.classList.add('active');
			// console.log('Right coordinates');
		}
	}
};

// if (window.screen.width >= 480) {
//   window.onscroll = function () {
// if (window.pageYOffset > 2000) {
//   animationLine.forEach(element => {
//     element.classList.add('active');
//   })
//   }
// };

// } else if (window.screen.width >= 320 && window.screen.width <=480) {
//   window.onscroll = function () {
// if (window.pageYOffset > 3000) {
//   animationLine.forEach(element => {
//     element.classList.add('active');
//   })
//   }
// };
// };




// Modal Window
$('.open-modal').click(function (e) {
  e.preventDefault();
  $('.modal').addClass('active')
});

$('.open-modal').click(function (e) {
  e.preventDefault();
  $('.overlay').addClass('active')
});

$('.close-modal').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('active')
});

$('.close-modal').click(function (e) {
  e.preventDefault();
  $('.overlay').removeClass('active')
});

$('.overlay').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('active')
});

$('.overlay').click(function (e) {
  e.preventDefault();
  $('.overlay').removeClass('active')
});



// Modal Window Mainreviews
$('.open-modal--mainreviews').click(function (e) {
  e.preventDefault();
  $('.modal--mainreviews').addClass('active')
});

$('.open-modal--mainreviews').click(function (e) {
  e.preventDefault();
  $('.overlay--mainreviews').addClass('active')
});

$('.close-modal--mainreviews').click(function (e) {
  e.preventDefault();
  $('.modal--mainreviews').removeClass('active')
});

$('.close-modal--mainreviews').click(function (e) {
  e.preventDefault();
  $('.overlay--mainreviews').removeClass('active')
});

$('.overlay--mainreviews').click(function (e) {
  e.preventDefault();
  $('.modal--mainreviews').removeClass('active')
});

$('.overlay--mainreviews').click(function (e) {
  e.preventDefault();
  $('.overlay--mainreviews').removeClass('active')
});


// Modal Window Reviews
$('.reviewsslide__btn').click(function (e) {
  e.preventDefault();
  $('.modal--reviews').addClass('active')
});

$('.reviewsslide__btn').click(function (e) {
  e.preventDefault();
  $('.overlay--reviews').addClass('active')
});

$('.close-modal--reviews').click(function (e) {
  e.preventDefault();
  $('.modal--reviews').removeClass('active')
});

$('.close-modal--reviews').click(function (e) {
  e.preventDefault();
  $('.overlay--reviews').removeClass('active')
});

$('.overlay--reviews').click(function (e) {
  e.preventDefault();
  $('.modal--reviews').removeClass('active')
});

$('.overlay--reviews').click(function (e) {
  e.preventDefault();
  $('.overlay--reviews').removeClass('active')
});

// For text inside container

$('.reviewsslide__btn').click(function (e) {
  e.preventDefault();
  $('.reviewsslide__text--full').addClass('active')
});

$('.close-modal--reviews').click(function (e) {
  e.preventDefault();
  $('.reviewsslide__text--full').removeClass('active')
});

$('.overlay--reviews').click(function (e) {
  e.preventDefault();
  $('.reviewsslide__text--full').removeClass('active')
});


// Copy-paste in Modal Reviews
let revmod = document.querySelectorAll('.modal--reviews')
let reviewItems = document.querySelectorAll('.reviewsslide__inner')

let nameOnModal = document.querySelector('.reviewsslide__top--name--modal');
let typeOnModal = document.querySelector('.reviewsslide__top--type--modal');
let textOnModal = document.querySelector('.reviewsslide__text--modal');
// let imgPathOnModal = document.querySelector('.review-modal__img img');
    reviewItems.forEach(element => {
        element.addEventListener('click', function() {
            nameOnModal.textContent = element.querySelector('.reviewsslide__top--name').textContent;
            typeOnModal.textContent = element.querySelector('.reviewsslide__top--type').textContent;
            textOnModal.textContent = element.querySelector('.reviewsslide__text--full').textContent;
            // imgPathOnModal.setAttribute("src", element.querySelector('.review__img img').getAttribute("src"));
            // openModal(revmod, 'revmod')
        })
    });

let reviewsTexts = document.querySelectorAll('.reviewsslide__text')

    reviewsTexts.forEach(element => {
        element.textContent = kitcut(element.textContent, 430)
    })
    function kitcut(text, limit) {
        text = text.trim();
        if (text.length <= limit) return text;

        text = text.slice(0, limit);

        return text.trim() + "...";
    };




// Popap after push button "send form"

$('.sendwindow').fadeOut();

$('.modal--submit').click(function(){
      showMessage();
    });

function showMessage() {
        
        $('.sendwindow').fadeIn(500,
            function() {
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });

        setTimeout(function() {
            
            $('.sendwindow').fadeOut(500);
            $('html').removeAttr('style');
        }, '3000');
    };

$('.sendwindow').fadeOut();

$('.mainslide__right--submit').click(function(){
      showMessage();
    });

function showMessage() {
        
        $('.sendwindow').fadeIn(500,
            function() {
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });

        setTimeout(function() {
            
            $('.sendwindow').fadeOut(500);
            $('html').removeAttr('style');
        }, '3000');
    };



// nav
    let nav = document.querySelector('.nav')
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function () {
        this.classList.toggle('active')
        nav.classList.toggle('active')
        toggleScroll('body', false)
    })
    

    // no scroll body
    function toggleScroll(el, bullet) {
        let element = document.querySelector(el)
        if (bullet) {
            element.style.overflow = 'hidden'
            return;
        }
        if (element.style.overflow == 'hidden') {
            element.style.overflow = 'visible'
        } else {
            element.style.overflow = 'hidden'
        }
    }


    // выпадающий список в меню
    let navLi = document.querySelectorAll('.nav__item');
    let url = window.location.pathname;
    if (mediaQuery) {
        navLi.forEach(element => {
            let drop = element.querySelector('.nav__drop');
            let arrow = element.querySelector('.nav__arrow');
            let href = element.querySelector('a').getAttribute('href');
            if (drop && arrow) {
                arrow.addEventListener('click', function () {
                    this.classList.toggle('active')
                    element.classList.toggle('active')
                    $(drop).slideToggle()
                });
            }
            if (href == url) {
                element.classList.add('current')
            } else {
                console.log(url, href)
            }
        });
        
        let header = document.querySelector('.header');
        let htmlDoc = document.querySelector('html');
        let lastScrollTop = 0;
        window.addEventListener('scroll', function () {
            let currentScrollTop = htmlDoc.scrollTop
            if (currentScrollTop == 0) {
                header.classList.remove('fixed')
                header.classList.remove('animate')
            } else if (currentScrollTop < lastScrollTop) {
                header.classList.add('fixed')
                header.classList.remove('animate')
            } else {
                header.classList.add('animate')
                header.classList.remove('fixed')
            }
            lastScrollTop = htmlDoc.scrollTop
        })
    } else {
        navLi.forEach(element => {
            let href = element.querySelector('a').getAttribute('href');
            if (element.querySelector('.nav__drop')) {
                element.addEventListener('mouseenter', function () {
                    navLi.forEach(item => item.classList.remove('active'))
                    this.classList.add('active')
                });
                element.addEventListener('mouseleave', function () {
                    navLi.forEach(item => item.classList.remove('active'))
                });
            }
            if (href == url) {
                element.classList.add('current')
            } else {
                console.log(url, href)
            }
        });
    };




})