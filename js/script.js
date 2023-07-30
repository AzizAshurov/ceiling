document.addEventListener('DOMContentLoaded', function () {
    const quiz = new Swiper('.quiz__swiper', {
        
        // pagination: {
        //     el: ".qiuz__pagination",
        //     type: "fraction",
        //   },
        autoHeight: true,
        navigation: {
          nextEl: '.quiz__button-next',
          prevEl: '.quiz__button-prev',
        },
        on: {
          slideChange: function () {
            // Нужно добиться что бы когда на последней странице квиза, пропадала пагинация и менялся заголовок
            // и менялась кнопка и её позиция
            const lastSlideIndex = this.slides.length-1
            const quiz = this.el.closest(".quiz")
            quiz.querySelector(".qiuz__pagination").innerText = `${this.activeIndex + 1} / ${this.slides.length - 1}`
            if (lastSlideIndex == this.activeIndex) {
            console.log(quiz.querySelector('.qiuz__pagination'))

            quiz.classList.add("quiz--last__slide")
            const title = quiz.querySelector('.quiz__head-title')  
            title.innerText = 'Отлично, остался последний шаг!' 
            document.querySelector(".quiz__head-icon").style.display='none';

            
            } 
            else {
              console.log(quiz.querySelector('.qiuz__pagination'))
              quiz.classList.remove("quiz--last__slide")
              
              const title = quiz.querySelector('.quiz__head-title')  
              title.innerText = 'Калькулятор стоимости проекта + бонусы' 
              document.querySelector(".quiz__head-icon").style.display='block';
            }
          }
        }
      });

      const example = new Swiper('.example__swiper', {
        // Кол-ва слайдов на показ за раз
        slidesPerView: 1,
        // Отступ между слайдерами 
        spaceBetween: 30,
        // Пагинация
        pagination: {
          el: ".swiper-pagination",
          clickable: true,

        },
        navigation: {
          nextEl: ".example-next",
          prevEl: ".example-prev",
        },
        // Адаптация
        breakpoints: {
          650: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        },
      });


      const recommendation = new Swiper('.recommendation__swiper', {
        // Кол-ва слайдов на показ за раз
        slidesPerView: 1,
        // Отступ между слайдерами 
        spaceBetween: 30,
        // Пагинация
        pagination: {
          el: ".swiper-pagination",
          clickable: true,

        },
        navigation: {
          nextEl: ".recommendation-next",
          prevEl: ".recommendation-prev",
        },
        breakpoints: {
          650: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        },

      });

      const rewiestop = new Swiper('.rewies-top__swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".rewies-top-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".rewies-top-button-next",
          prevEl: ".rewies-top-button-prev",
        },
        breakpoints: {
          650: {
            slidesPerView: 2,
          },

          962: {
            slidesPerView: 3,
          },
        },

      });

      const rewiesbottom = new Swiper('.rewies-bottom__swiper', {
        cssMode: true,
      navigation: {
        nextEl: ".rewies-bottom-button-next",
        prevEl: ".rewies-bottom-button-prev",
      },
      pagination: {
        el: ".rewies-bottom-pagination",
      },
      mousewheel: true,
      keyboard: true,
      });

      Fancybox.bind('[data-fancybox]', {
        beforeShow: (instance, current) => {
          if (current.type === 'image') {
            current.zoom = {
              click: 'auto', // disable zoom on click
              wheel: 'auto', // enable zoom with mousewheel
              pinch: 'auto' // enable zoom with pinch gesture on touch devices
            };
          }
        },
      });

      const telInputs = document.querySelectorAll('input[type="tel"]');
      telInputs.forEach(tel => {
        const maskOptions = {
          mask: '+7(999) 999-99-99',
          inputmode: 'tel',
        };

        new Inputmask(maskOptions).mask(tel);
      })

  const telLinks = document.querySelectorAll('a[href^="tel:"]')
  telLinks.forEach((tel) => {
    tel.addEventListener('click', () => {
      if (typeof ym == 'undefined') {
        console.warn('Кажется, метрика не подключена');
        return;
      };

      ym(94322465,'reachGoal','click-phone');
    })
  })


// Заклинание на плавные якоря
function getTopOffset(percents = 100) {
    return window.innerHeight / 100 * percents;
}
function scrollTosectionToScroll(percents = 9) {
    const linkElems = document.querySelectorAll('[href^="#"]')
    if (!linkElems) return;
    for (let i = 0; i < linkElems.length; i++) {
        const link = linkElems[i];
        link.addEventListener('click', (e) => {
            e.preventDefault()
            let href = link.getAttribute('href')
            if (!href || href == "#") return;
            let sectionToScroll = document.querySelector(href)
            if (!sectionToScroll) return;
            if (sectionToScroll.classList.contains('poppa')) return;
            if (sectionToScroll.classList.contains('b_modal')) return;

            if (link.classList.contains('header__nav-link')) {
                window.closeBurger();
            }
            window.scroll({
                top: sectionToScroll.getBoundingClientRect().top + pageYOffset - getTopOffset(percents),
                left: 0,
                behavior: 'smooth'
            })
        })
    }
}
scrollTosectionToScroll(0);
// end Заклинание на плавные якоря




  

})
  
  