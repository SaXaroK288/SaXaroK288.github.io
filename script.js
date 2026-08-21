// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// ===================== I18N =====================
const translations = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.reels': 'Reels',
    'nav.wb': 'Карточки WB',
    'nav.case': 'Кейс',
    'nav.contact': 'Контакты',

    'hero.rec': 'REC · монтаж',
    'hero.title': 'Зацепил — удержал.',
    'hero.subtitle': 'Короткие ролики с помощью ИИ и CapCut, карточки товаров для Wildberries — делаю так, чтобы контент останавливал скролл.',
    'hero.cta.work': 'Смотреть работы',
    'hero.cta.contact': 'Написать',
    'hero.scope.frame': 'КАДР 16:9 / 9:16 / 1:1',
    'hero.scope.tools': 'CapCut · AI-инструменты',

    'about.title': 'Обо мне',
    'about.text': 'Я монтажёр-дизайнер. Собираю короткие видео с использованием ИИ-инструментов и CapCut, а также делаю карточки товаров для маркетплейсов. Работал в нескольких местах: снимал и монтировал ролики для соцсетей в команде, самостоятельно вёл карточки товаров как WB-менеджер, и выполнял видеозадачи по контракту, где результат нельзя показать напрямую — только описать. Умею и работать в команде, и вести проект от начала до конца в одиночку.',

    'tag.editing': 'Монтаж видео',
    'tag.capcut': 'CapCut',
    'tag.gen': 'Kling, Seedance 2.0',
    'tag.higgsfield': 'Higgsfield',
    'tag.elevenlabs': 'ElevenLabs — озвучка, войсчендж',
    'tag.heygen': 'HeyGen — ИИ-аватары',
    'tag.wb': 'Карточки Wildberries',
    'tag.vertical': 'Короткие вертикальные ролики',
    'tag.brief': 'Работа с брифом заказчика',

    'reels.title': 'Reels · видео с ИИ и CapCut',
    'reels.hint': 'Короткие вертикальные ролики.',

    'reelproj1.title': 'Серия для клиента — TikTok',
    'reelproj2.title': 'Уличный 3D-экран',
    'reelproj2.meta': 'Коммерческий проект — MOSKVA Metropolitan',

    'reel1.caption': 'Серия 1 — ролик для клиента (TikTok)',
    'reel1.tools': 'Kling, Seedance 2.0 · озвучка ElevenLabs · монтаж CapCut',
    'reel2.badge': 'Экран',
    'reel2.caption': '3D-ролик для уличного углового экрана',
    'reel2.tools': 'Seedance, After Effects · монтаж CapCut',
    'reel2.team': 'В команде с другим дизайнером',
    'reel3.badge': 'С улицы',
    'reel3.caption': 'Тот же ролик — съёмка на здании',
    'reel3.tools': 'Как это выглядит вживую',

    'wb.title': 'Карточки товаров · Wildberries',
    'wb.hint': 'Работал WB-менеджером в одиночку, карточки собирал с помощью ИИ-инструментов.',
    'wb.soap.title': 'Парфюмированное мыло',
    'wb.soap.meta': '13 карточек · 3 ароматические линии',
    'wb.socks.title': 'Носки',
    'wb.socks.meta': '4 карточки · 2 бренда — DMDBS, ADIX',

    'case.title': 'Кейс по контракту',
    'case.note': 'Материалы под NDA — показать нельзя, но можно рассказать',
    'case.body.title': 'Видео по контракту',
    'case.body.text': 'Монтировал видео по контракту — название заказчика и сами материалы раскрывать нельзя по условиям NDA, но рабочий процесс могу описать. Основа монтажа — CapCut. Часть визуального материала генерировал через Seedance 2.0, картинки — через Higgsfield. Также использовал функции переноса движения: повторение движений из оригинального видео в новом ИИ-видео. Озвучку и смену голоса делал через ElevenLabs. Для роликов с аватарами использовал HeyGen.',
    'case.fact.role.l': 'Роль', 'case.fact.role.v': 'Монтажёр',
    'case.fact.edit.l': 'Монтаж', 'case.fact.edit.v': 'CapCut',
    'case.fact.video.l': 'Генерация видео', 'case.fact.video.v': 'Seedance 2.0',
    'case.fact.image.l': 'Генерация картинок', 'case.fact.image.v': 'Higgsfield',
    'case.fact.motion.l': 'Перенос движения', 'case.fact.motion.v': 'повтор анимации из ориг. видео в ИИ-видео',
    'case.fact.voice.l': 'Голос', 'case.fact.voice.v': 'ElevenLabs — озвучка и войсчендж',
    'case.fact.avatar.l': 'Аватары', 'case.fact.avatar.v': 'HeyGen',

    'contact.title': 'Контакты',
    'contact.text': 'Открыт к проектам: короткие видео, ИИ-монтаж, карточки для маркетплейсов.',

    'footer.title': 'Портфолио монтажёра',
    'footer.built': 'Собрано вручную · GitHub Pages',
  }
};

const LANG_KEY = 'portfolio-lang';
const langToggle = document.getElementById('langToggle');

function applyLang(lang){
  const isRu = lang === 'ru';
  document.documentElement.lang = isRu ? 'ru' : 'en';
  if (isRu){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations.ru[key] !== undefined){
        el.textContent = translations.ru[key];
      }
    });
  } else {
    // Возврат к исходному английскому тексту, зашитому в HTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.dataset.enOriginal === undefined){
        el.dataset.enOriginal = el.textContent;
      } else {
        el.textContent = el.dataset.enOriginal;
      }
    });
  }
  if (langToggle) langToggle.textContent = isRu ? 'EN' : 'RU';
  try { localStorage.setItem(LANG_KEY, isRu ? 'ru' : 'en'); } catch(e){}
}

// Сохраняем оригинальный английский текст сразу при загрузке,
// чтобы можно было корректно вернуться к нему после переключения на RU
document.querySelectorAll('[data-i18n]').forEach(el => {
  el.dataset.enOriginal = el.textContent;
});

if (langToggle){
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'ru' ? 'ru' : 'en';
    applyLang(current === 'ru' ? 'en' : 'ru');
  });
}

let savedLang = 'en';
try { savedLang = localStorage.getItem(LANG_KEY) || 'en'; } catch(e){}
if (savedLang === 'ru') applyLang('ru');

// ===================== АКТИВНЫЙ РАЗДЕЛ В НАВИГАЦИИ =====================
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
