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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 30,
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
});

let swiper3 = new Swiper(".uswiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
      nextEl: ".next3",
      prevEl: ".previous3",
    },
  breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
});