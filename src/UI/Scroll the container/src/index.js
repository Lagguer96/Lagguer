import "./styles.css";
import { computePosition, size } from "@floating-ui/dom";

const reference = document.getElementById("reference");
const floating = document.getElementById("floating");

[...Array(100)].forEach((_, index) => {
  const element = document.createElement("div");
  element.textContent = `List item ${index + 1}`;
  floating.append(element);
});

computePosition(reference, floating, {
  placement: "bottom",
  // Try removing the middleware. The dropdown will
  // overflow the boundary's edge and get clipped!
  middleware: [
    size({
      apply({ availableHeight }) {
        Object.assign(floating.style, {
          maxHeight: `${availableHeight}px`
        });
      },
      padding: 5
    })
  ]
}).then(({ x, y }) => {
  Object.assign(floating.style, {
    top: `${y}px`,
    left: `${x}px`
  });
});
