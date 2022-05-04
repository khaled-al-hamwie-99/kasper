const btn = document.querySelector(".mobile-nav-toggle");
const menu = document.getElementById("primary-navigation");
console.log(btn.parentElement);
btn.parentElement.addEventListener("click", menuNavigator);
window.addEventListener("scroll", stopScrolling);

function menuNavigator() {
    if (btn.getAttribute("aria-checked") == "false") {
        menu.style.display = "flex";
        window.setTimeout(() => { menu.setAttribute("data-visible", "true") }, 0.0000000001)
        btn.setAttribute("aria-checked", "true");
    }
    else if (btn.getAttribute("aria-checked") == "true") {
        btn.setAttribute("aria-checked", "false");
        menu.setAttribute("data-visible", "false");
        window.setTimeout(() => { menu.style.display = "none" }, 601);
    }
}
function stopScrolling() {
    if (menu.getAttribute("data-visible") == "true") {
        window.scrollTo(0, 0)
    }
}