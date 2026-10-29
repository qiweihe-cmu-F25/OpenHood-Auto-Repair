"use strict";

const helloButton = document.querySelector("#hello-button");
const aboutButton = document.querySelector("#about-button");
const about = document.querySelector("#about");
const feedback = document.querySelector("#feedback");

helloButton.addEventListener("click", () => {
  feedback.textContent = "Hello! Your website is up and running. 👋";
});

aboutButton.addEventListener("click", () => {
  const expanded = aboutButton.getAttribute("aria-expanded") === "true";
  aboutButton.setAttribute("aria-expanded", String(!expanded));
  about.hidden = expanded;
  aboutButton.replaceChildren(
    document.createTextNode(expanded ? "Learn more " : "Show less "),
    Object.assign(document.createElement("span"), { textContent: expanded ? "+" : "−" })
  );
  aboutButton.lastElementChild.setAttribute("aria-hidden", "true");
});
