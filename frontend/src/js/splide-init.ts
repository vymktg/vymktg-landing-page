import Splide from "@splidejs/splide";

const partnerSlider = new Splide(".splide", {
  type: "loop",
  perPage: 5,
  breakpoints: {
    1024: {
      perPage: 4,
    },
    768: {
      perPage: 3,
    },
    640: {
      perPage: 2,
    },
  },
  arrows: false,
  autoplay: true,
  interval: 5000,
});

partnerSlider.mount();
