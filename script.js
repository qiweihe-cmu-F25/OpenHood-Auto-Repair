"use strict";

const watchLink = document.getElementById("watch-story");

// Local files cannot send the HTTP referrer required by YouTube embeds.
if (window.location.protocol === "file:") {
  const video = document.getElementById("before-after-video");
  const videoLink = document.createElement("a");
  videoLink.href = "https://www.youtube.com/watch?v=nXgUkENXta4";
  videoLink.className = "video-fallback";
  videoLink.textContent = "▶ Watch OpenHood before & after on YouTube";
  video.replaceWith(videoLink);
}

function trackEvent(name) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, { event_category: "concept_video" });
  }
}

watchLink.addEventListener("click", () => {
  trackEvent("before_after_cta_click");
});
