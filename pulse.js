const audio = document.getElementById("weirdscience");
const image = document.getElementById("dudeimage");
const splashText = document.getElementById("splash-text");

image.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    image.classList.add("pulse");

    const pulseDuration = splashText.textContent === "I asked him when the next stream was and he got mad..."
      ? 2600
      : 5500;

    setTimeout(() => {
      image.classList.remove("pulse");
    }, pulseDuration);
  } else {
    audio.pause();
    image.classList.remove("pulse");
  }
});
