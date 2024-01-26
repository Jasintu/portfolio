
const carrossel = document.querySelector('.carrossel');
let isMouseDown = false;
let startX, scrollLeft;

carrossel.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});

carrossel.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

carrossel.addEventListener('mouseup', () => {
  isMouseDown = false;
});

carrossel.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - carrossel.offsetLeft;
  const walk = (x - startX) * 3;
  carrossel.scrollLeft = scrollLeft - walk;
});