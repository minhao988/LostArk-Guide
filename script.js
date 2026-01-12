const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("#toc a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});