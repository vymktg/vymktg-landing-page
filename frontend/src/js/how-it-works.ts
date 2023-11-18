/*
  initialized SVG element
*/

const svgElement = document.getElementById(
  "svg-desktop-hiw"
) as unknown as SVGGeometryElement | null;

const svgLength = svgElement.getTotalLength();

svgElement.style.strokeDasharray = `${svgLength}`;
svgElement.style.strokeDashoffset = `${svgLength}`;

let markScrollPercentage = 0;

const FAST_TIMER = 5;

/*
  initialized Draw SVG function
*/

const drawSVG = () => {
  let scrollPercentage =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (!markScrollPercentage) markScrollPercentage = scrollPercentage;

  scrollPercentage = scrollPercentage - markScrollPercentage;

  var draw = svgLength * scrollPercentage;
  const currentLength = (draw * FAST_TIMER) - svgLength;
  console.log(currentLength);

  svgElement.style.strokeDashoffset = `${currentLength}`;
};

/*
  setting observers
*/

let option = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      window.addEventListener("scroll", drawSVG);
    } else {
      window.removeEventListener("scroll", drawSVG);
    }
  });
};

const observer = new IntersectionObserver(callback, option);
observer.observe(document.querySelector("#how-it-works__content-layer"));
