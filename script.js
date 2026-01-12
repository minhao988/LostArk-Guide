const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

let isScrollingByClick = false; // 判斷是否是點擊造成的滾動

// 初始化 active
if (links.length > 0) links[0].classList.add("active");

// 滾動自動高亮
window.addEventListener("scroll", () => {
  if (isScrollingByClick) return; // 點擊滾動時暫時忽略 scroll 更新

  let scrollPos = window.scrollY + 120;
  let currentId = sections[0].id;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) {
      currentId = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    }
  });
});

// 點擊平滑滾動
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    // 清除其他 active
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // 暫停 scroll 判斷
    isScrollingByClick = true;

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    });

    // 大約 500ms 後恢復 scroll 判斷
    setTimeout(() => {
      isScrollingByClick = false;
    }, 500);
  });
});
