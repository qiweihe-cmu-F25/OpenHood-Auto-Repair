"use strict";

const watchLink = document.getElementById("watch-story");

function trackEvent(name) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, { event_category: "concept_video" });
  }
}

watchLink.addEventListener("click", () => {
  trackEvent("before_after_cta_click");
});
