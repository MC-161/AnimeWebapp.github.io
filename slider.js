let swiper1 = new Swiper(".topswiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
      nextEl: ".next",
      prevEl: ".previous",
    },
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
    },
});

let swiper2 = new Swiper(".bottomswiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
      nextEl: ".next2",
      prevEl: ".previous2",
    },
  breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 50,
      },
    },
});