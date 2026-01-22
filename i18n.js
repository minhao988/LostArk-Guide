let currentLang = localStorage.getItem('lang') || 'zh-TW';
let langData = {};

// 載入語言檔
async function loadLanguage(lang) {
  try {
    const res = await fetch(`./lang/${lang}.json`);
    langData = await res.json();
    applyLanguage();
    localStorage.setItem('lang', lang);
  } catch (e) {
    console.error('Language load failed:', e);
  }
}

// 套用語言到 HTML
function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (text) el.innerHTML = text;
  });

  // 給 JS 動態用（例如你 render raid）
  document.dispatchEvent(new Event('langChanged'));
}

// 翻譯函式（給 JS 用）
function t(key) {
  return key.split('.').reduce((obj, k) => obj?.[k], langData);
}

// 切換語言
function changeLang(lang) {
  currentLang = lang;
  loadLanguage(lang);
}

// 初始
loadLanguage(currentLang);
