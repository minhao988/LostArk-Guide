let currentLang = localStorage.getItem('lang') || 'zh-TW';
let langData = {};
let fallbackData = {};
const cache = {};

// 载入语言
async function loadLanguage(lang) {
  try {
    // ✅ cache
    if (cache[lang]) {
      langData = cache[lang];
    } else {
      const res = await fetch(`/lang/${lang}.json`);
      const data = await res.json();
      cache[lang] = data;
      langData = data;
    }

    // ✅ fallback (默认 zh-TW)
    if (!fallbackData || Object.keys(fallbackData).length === 0) {
      const res = await fetch(`/lang/zh-TW.json`);
      fallbackData = await res.json();
    }

    applyLanguage();
    localStorage.setItem('lang', lang);

  } catch (e) {
    console.error('Language load failed:', e);
  }
}

// 套用到 HTML
function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);

    if (text) {
      el.innerHTML = text;
    } else {
      // ❗debug提示
      el.innerHTML = `⚠️ ${key}`;
      console.warn(`Missing i18n key: ${key}`);
    }
  });

  document.dispatchEvent(new Event('langChanged'));
}

// 翻译函数（带 fallback）
function t(key) {
  const value =
    key.split('.').reduce((obj, k) => obj?.[k], langData) ??
    key.split('.').reduce((obj, k) => obj?.[k], fallbackData);

  return value || null;
}

// 切换语言
function changeLang(lang) {
  currentLang = lang;
  loadLanguage(lang);
}

// 初始化
loadLanguage(currentLang);
