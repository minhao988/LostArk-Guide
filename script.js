const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

// 初始化 active
if (links.length > 0) links[0].classList.add("active");

// 滾動自動高亮
window.addEventListener("scroll", () => {
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

// 點擊高亮（不阻止 href 預設跳轉）
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
