import Splide from "@splidejs/splide";

const partnerSlider = new Splide(".splide", { 
    type: 'loop',
    perPage: 5,
    arrows: false,
    autoplay: true,
    interval: 5000,
});

partnerSlider.mount();
