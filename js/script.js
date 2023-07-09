document.addEventListener('DOMContentLoaded', function () {
    const quiz = new Swiper('.quiz__swiper', {
        pagination: {
            el: ".qiuz__pagination",
            type: "fraction",
          },
        autoHeight: true,
        navigation: {
          nextEl: '.quiz__button-next',
          prevEl: '.quiz__button-prev',
        },
      });

      const example = new Swiper('.example__swiper', {
        // Кол-ва слайдов на показ за раз
        slidesPerView: 3,
        // Отступ между слайдерами 
        spaceBetween: 30,
        // Пагинация
        pagination: {
          el: ".swiper-pagination",
          clickable: true,

        }
      });

      const recommendation = new Swiper('.recommendation__swiper', {
        // Кол-ва слайдов на показ за раз
        slidesPerView: 3,
        // Отступ между слайдерами 
        spaceBetween: 30,
        // Пагинация
        pagination: {
          el: ".swiper-pagination",
          clickable: true,

        }
      });

      const rewies = new Swiper('.rewies__swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      // // Кол-ва слайдов на показ за раз
      // slidesPerView: 3,
      // // Отступ между слайдерами 
      // spaceBetween: 20,
      });

      const rewies2 = new Swiper('.rewies2__swiper', {
        cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,

      // // Кол-ва слайдов на показ за раз
      // slidesPerView: 3,
      // // Отступ между слайдерами 
      // spaceBetween: 20,
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
})
  
  