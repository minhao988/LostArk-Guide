const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

let isScrollingByClick = false;

// 初始化：第一個 section active
window.addEventListener("load", () => {
  if (sections.length === 0) return;

  const firstId = sections[0].id;
  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + firstId
    );
  });
});

// scroll spy
window.addEventListener("scroll", () => {
  if (isScrollingByClick) return;

  const scrollPos = window.scrollY + 120;
  let currentId = sections[0]?.id;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) {
      currentId = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + currentId
    );
  });
});

// click handling
links.forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // ✅ 不是頁內錨點 → 讓瀏覽器正常 redirect
    if (!href.startsWith("#")) {
      return;
    }

    // ✅ 是頁內錨點才攔截
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    isScrollingByClick = true;

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth"
    });

    setTimeout(() => {
      isScrollingByClick = false;
    }, 500);
  });
});
