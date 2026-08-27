export function setupParallax() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]"),
  );

  if (elements.length === 0) return () => undefined;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const smallScreen = window.matchMedia("(max-width: 720px)");
  let animationFrame = 0;

  const isDisabled = () => reducedMotion.matches || smallScreen.matches;

  const reset = () => {
    elements.forEach((element) => {
      element.style.setProperty("--parallax-y", "0px");
    });
  };

  const update = () => {
    animationFrame = 0;

    if (isDisabled()) {
      reset();
      return;
    }

    const viewportCenter = window.innerHeight / 2;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.bottom < -180 || rect.top > window.innerHeight + 180) return;

      const speed = Number.parseFloat(element.dataset.parallax ?? "0.03");
      const elementCenter = rect.top + rect.height / 2;
      const rawOffset = (elementCenter - viewportCenter) * speed;
      const offset = Math.max(-14, Math.min(14, rawOffset));

      element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
  };

  const requestUpdate = () => {
    if (animationFrame !== 0) return;
    animationFrame = window.requestAnimationFrame(update);
  };

  const handlePreferenceChange = () => {
    if (isDisabled()) reset();
    else requestUpdate();
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  reducedMotion.addEventListener("change", handlePreferenceChange);
  smallScreen.addEventListener("change", handlePreferenceChange);
  requestUpdate();

  return () => {
    if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    reducedMotion.removeEventListener("change", handlePreferenceChange);
    smallScreen.removeEventListener("change", handlePreferenceChange);
    reset();
  };
}
