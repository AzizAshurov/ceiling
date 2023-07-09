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

      const example = new Swiper('.image__swiper');
})
  
  