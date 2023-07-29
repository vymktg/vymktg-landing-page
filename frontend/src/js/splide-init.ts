import Splide from "@splidejs/splide";

const partnerSlider = new Splide(".splide", { 
    type: 'loop',
    perPage: 5,
    arrows: false,
});

partnerSlider.mount();
