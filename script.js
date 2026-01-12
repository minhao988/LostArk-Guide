const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("#toc a");

window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(section => {
    const offset = section.offsetTop - 120;
    if (window.scrollY >= offset) {
      currentId = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("active");
    }
  });
});