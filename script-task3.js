document.addEventListener("DOMContentLoaded", () => {
  const lights = {
    red: document.querySelector(".red"),
    yellow: document.querySelector(".yellow"),
    green: document.querySelector(".green")
  };

  const switchBtn = document.getElementById("switchBtn");

  const sequence = ["red", "yellow", "green", "yellow"];
  let currentIndex = 0;

  function updateLights() {
    // Вимикаємо всі
    Object.values(lights).forEach(light => light.classList.remove("active"));

    // Вмикаємо поточний
    const currentColor = sequence[currentIndex];
    lights[currentColor].classList.add("active");
  }

  switchBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sequence.length;
    updateLights();
  });

  updateLights(); // Початковий стан
});
