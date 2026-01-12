const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

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

// 點擊時也高亮
links.forEach(link => {
  link.addEventListener("click", (e) => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
