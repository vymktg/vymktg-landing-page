// set height of the svg path as constant
const svg = document.getElementById(
  "svg-desktop-hiw"
) as SVGGeometryElement | null;

if (svg != null) {
  const length = svg.getTotalLength();

  //   // start positioning of svg drawing
  svg.style.strokeDasharray = `${length}px`;

  //   // hide svg before scrolling starts
  svg.style.strokeDashoffset = `${length}px`;

  console.log(length);

  let callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(() => {
      window.addEventListener("scroll", function () {
        const scrollpercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        const draw = length * (scrollpercent * 3.5);
        console.log("draw", draw);

        // Reverse the drawing when scroll upwards
        svg.style.strokeDashoffset = `${draw}`;
      });
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "30px",
    threshold: 0,
  });

  const elements = document.querySelectorAll("section#how-it-works");

  if (elements != null) {
    elements.forEach((section) => {
      observer.observe(section);
    });
  }
}
