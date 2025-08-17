const button = document.querySelector(".burger")
const nav = document.querySelector(".nav")
const dialogButton = document.querySelector(".contacts__button")
const dialog = document.querySelector(".dialog")
const dialogClose = document.querySelector(".dialog__close")


dialogButton.onclick = () => {
    dialog.open = true
}
dialogClose.onclick = () => {
    dialog.open = false
}

button.onclick = () => {
    document.body.classList.toggle("scroll-lock")
    button.classList.toggle("burger_active")
    nav.classList.toggle("nav_active")
}
nav.onclick = (e) => {
    if (e.target.closest(".nav__link")) {
        document.body.classList.remove("scroll-lock")
        button.classList.remove("burger_active")
        nav.classList.remove("nav_active")
    }
}
