
const sections = document.querySelectorAll('.mountain-slide');
let currentIndex = 0;
let seasonIndex = 0;

const seasons = ['spring', 'summer', 'autumn', 'winter'];
const backgrounds = {
  spring: '#3CB371',
  summer: '#FFD700',
  autumn: '#FF8C00',
  winter: '#87CEEB'
};

function rotateMountain() {
  seasonIndex = (seasonIndex + 1) % seasons.length;
  document.body.style.backgroundColor = backgrounds[seasons[seasonIndex]];
}

document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentIndex < sections.length - 1) {
    currentIndex++;
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
  rotateMountain();
});
