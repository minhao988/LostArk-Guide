const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

// 一開始給第一個 link active
if (links.length > 0) {
  links[0].classList.add("active");
}

// 滾動時自動 highlight
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// 點擊時高亮並平滑滾動
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();  // 阻止預設跳轉
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100, // 微調偏移
        behavior: 'smooth'
      });
    }
  });
});
