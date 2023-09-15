import "./styles.css";
import { computePosition, offset, arrow } from "@floating-ui/dom";

const reference = document.getElementById("reference");
const floating = document.getElementById("floating");
const arrowEl = document.getElementById("arrow");

computePosition(reference, floating, {
  placement: "bottom",
  // Try removing the arrow middleware. The arrow will no
  // longer be centered to the reference element.
  middleware: [offset(10), arrow({ element: arrowEl })]
}).then(({ x, y, middlewareData }) => {
  Object.assign(floating.style, {
    top: `${y}px`,
    left: `${x}px`
  });

  if (middlewareData.arrow) {
    const { x } = middlewareData.arrow;

    Object.assign(arrowEl.style, {
      left: `${x}px`,
      top: `${-arrowEl.offsetHeight / 2}px`
    });
  }
});