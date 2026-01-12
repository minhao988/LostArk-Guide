const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

// 初始給第一個 link active
if (links.length > 0) links[0].classList.add("active");

// 取得 section top 位移
function getSectionPositions() {
  return Array.from(sections).map(sec => ({
    id: sec.id,
    offsetTop: sec.offsetTop
  }));
}

let sectionPositions = getSectionPositions();

// 滾動事件
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 120; // 調整偏移
  let currentId = sections[0].id; // 預設第一個

  // 找最接近 scrollPos 的 section
  for (let i = 0; i < sectionPositions.length; i++) {
    if (scrollPos >= sectionPositions[i].offsetTop) {
      currentId = sectionPositions[i].id;
    }
  }

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

    // 平滑滾動到目標
    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});

// 重新計算 section 位置（如果頁面大小改變）
window.addEventListener("resize", () => {
  sectionPositions = getSectionPositions();
});
