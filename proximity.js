// Select all elements with the class "eye"
const eyes = document.querySelectorAll('.eye');

// Select the element with the id "anchor"
const anchor = document.getElementById('anchor');

// Get the size and position of the anchor element
const rekt = anchor.getBoundingClientRect();

// Calculate the center point of the anchor element
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

// When the mouse moves on the document, do this function
document.addEventListener('mousemove', (e) => {
  // Log the mouse event to the console (just for debugging)
  console.log(e);

  // Get the X and Y coordinates of the mouse cursor
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculate the angle between the mouse cursor and the anchor point
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  // Log the angle to the console (just for debugging)
  console.log(angleDeg);

  // For each element with the class "eye", rotate it to face the mouse cursor
  eyes.forEach(eye => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    // anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
  });
});

// A function to calculate the angle between two points
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}
