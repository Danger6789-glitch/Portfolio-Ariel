document.querySelectorAll("[data-slider]").forEach((slider) => {
  const mainImage = slider.querySelector("[data-main-image]");
  const thumbs = Array.from(slider.querySelectorAll("[data-thumb]"));
  const prevBtn = slider.querySelector("[data-prev]");
  const nextBtn = slider.querySelector("[data-next]");

  let currentIndex = 0;

  const updateSlider = (index) => {
    currentIndex = index;
    const activeThumb = thumbs[currentIndex];
    mainImage.src = activeThumb.src;
    mainImage.alt = activeThumb.alt;

    thumbs.forEach((thumb) => thumb.classList.remove("active"));
    activeThumb.classList.add("active");
  };

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => updateSlider(index));
  });

  prevBtn.addEventListener("click", () => {
    const newIndex = currentIndex === 0 ? thumbs.length - 1 : currentIndex - 1;
    updateSlider(newIndex);
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = currentIndex === thumbs.length - 1 ? 0 : currentIndex + 1;
    updateSlider(newIndex);
  });

  setInterval(() => {
    const newIndex = currentIndex === thumbs.length - 1 ? 0 : currentIndex + 1;
    updateSlider(newIndex);
  }, 5000);
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".slider-image").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("open");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
  }
});
