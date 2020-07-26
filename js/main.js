function hider() {
    let nav = document.querySelector(".navbar-mobile");

    nav.classList.toggle("hide");
}
function hiderLight() {
    let nav = document.querySelector(".navbar-mobile-light");

    nav.classList.toggle("hide");
}

AOS.init({
    duration: 900,
})