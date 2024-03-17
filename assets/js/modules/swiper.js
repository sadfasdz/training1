import Swiper from "swiper";

function swipers() {
  console.log(1);
  const carusel = $("[data-carusel]");

  carusel.each(function (i, el) {
    let obj = $(el),
      type = obj.data("carusel"),
      container = $("[data-carusel-container]", obj),
      prev = $("[data-carusel-prev]", obj),
      next = $("[data-carusel-next]", obj),
      pagination = $("[data-carousel-pagination]", obj),
      params = {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        loop: true,
        pagination: {
          el: pagination,
          clickable: true,
        },
      },
      paramsCustom = {};

    if (type === "infinity") {
      paramsCustom = {
        slidesPerView: "auto",
        centeredSlides: true,
        breakpoints: {
          375: {
            spaceBetween: 4,
          },
          768: {
            spaceBetween: 20,
          },
          1440: {
            spaceBetween: 30,
          },
        },
      };
    }

    params = $.extend(params, paramsCustom);

    let instance = new Swiper(container, params);
  });
}

export default swipers;
