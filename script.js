// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Подсветка активного пункта на "таймлайне" при скролле
const marks = Array.from(document.querySelectorAll('.timeline__mark'));
const sections = marks
  .map(m => document.querySelector(m.getAttribute('href')))
  .filter(Boolean);
const playhead = document.getElementById('playhead');
const track = document.querySelector('.timeline__track');

function setActive(index){
  marks.forEach((m, i) => m.classList.toggle('is-active', i === index));
  const active = marks[index];
  if (active && track){
    const trackRect = track.getBoundingClientRect();
    const markRect = active.getBoundingClientRect();
    const offset = markRect.left - trackRect.left + track.scrollLeft;
    playhead.style.left = offset + 'px';
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const idx = sections.indexOf(entry.target);
      if (idx !== -1) setActive(idx);
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));
setActive(0);
