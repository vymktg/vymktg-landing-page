/*
  initialized SVG element
*/

const svgLayerElement = document.querySelectorAll(
  ".how-it-works__svg-layer svg"
);

let svgElement = null;

svgLayerElement.forEach((element: Element) => {
  if (element.getBoundingClientRect().width > 0) {
    svgElement = element.getElementsByClassName(
      "svg-drawer"
    )[0] as unknown as SVGGeometryElement | null;
  }
});

const svgLength = svgElement.getTotalLength();
const { fastTimer = 10, isReverse = false } = svgElement.dataset;

svgElement.style.strokeDasharray = `${svgLength}`;
svgElement.style.strokeDashoffset = `${svgLength}`;

let markScrollPercentage = 0;

const drawSVG = () => {
  let scrollPercentage =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (!markScrollPercentage) markScrollPercentage = scrollPercentage;

  scrollPercentage = scrollPercentage - markScrollPercentage;

  const fastTime = parseFloat(fastTimer);

  var draw = svgLength * scrollPercentage;
  let currentLength = isReverse
    ? (draw * fastTime) - svgLength
    : svgLength - (draw * fastTime);

  if (!!isReverse) {
    currentLength = currentLength < 0 ? currentLength : 0;
  } else {
    currentLength = currentLength > 0 ? currentLength : 0;
  }

  svgElement.style.strokeDashoffset = `${currentLength}`;
};

/*
setting observers
*/

let option = {
  root: null,
  rootMargin: "-20px",
  threshold: 0,
};

const callback = (entries: any[]) => {
  entries.forEach((entry: { isIntersecting: any }) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      window.addEventListener("scroll", drawSVG);
    } else {
      window.removeEventListener("scroll", drawSVG);
    }
  });
};

const observer = new IntersectionObserver(callback, option);
observer.observe(document.querySelector("#how-it-works-item-1"));
