import Splide from "@splidejs/splide";

const config = {
  perPage: 2,
  gap: 25,
  breakpoints: {
    650: {
      perPage: 1,
    },
  },
  arrows: true,
  classes: {
    pagination: "splide__pagination !-bottom-5 splide__pagination--custom",
  }, 
  rewind: true,
};

const slidePhases = document.querySelectorAll(".splide__phase");

slidePhases.forEach((slide) => {
  const slideEl = new Splide(slide, config);

  // slideEl.on("pagination:mounted", function (data) {
  //   // You can add your class to the UL element
  //   data.list.classList.add("splide__pagination--custom");

  //   // `items` contains all dot items
  //   data.items.forEach(function (item) {
  //     item.button.textContent = String(item.page + 1);
  //     //item.button.classList.add("");
  //   });
  // });

  slideEl.mount();
});
