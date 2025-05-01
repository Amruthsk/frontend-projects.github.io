// Go to the next step when the "Next" button is clicked
// Go to the previous step when the "Prev" button is clicked

// Select elements
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update(); // <-- This was missing before
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Update active classes on the circles and progress bar width
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // Update the progress bar width
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Enable/disable buttons based on current step
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

// Initialize the UI on page load
update();
