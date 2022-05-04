const btn = document.querySelector(".mobile-nav-toggle");
const menu = document.getElementById("primary-navigation");
btn.parentElement.addEventListener("click", menuNavigator);

function menuNavigator() {
    if (btn.getAttribute("aria-checked") == "false") {
        menu.style.display = "flex";
        window.setTimeout(() => { menu.setAttribute("data-visible", "true"); stopScrolling(); }, 0.0000000001)
        btn.setAttribute("aria-checked", "true");

    }
    else if (btn.getAttribute("aria-checked") == "true") {
        btn.setAttribute("aria-checked", "false");
        menu.setAttribute("data-visible", "false");
        window.setTimeout(() => { menu.style.display = "none" }, 601);
    }
}
function stopScrolling() {
    // console.log(menu.getAttribute("data-visible"));
    if (menu.getAttribute("data-visible") == "true") {
        document.body.style.overflowY = "hidden";
        window.scrollTo(0, 0);
    }
}