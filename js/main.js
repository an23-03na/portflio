const button = document.querySelector(".nav__button")
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
    nav.classList.toggle("nav_active")
}