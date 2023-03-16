const button = document.querySelector("button")
const dropdownMenu = document.querySelector("ul.dropdown-menu")
console.log(dropdownMenu)
dropdownMenu.hidden = true;
button.addEventListener("click", dropdownBtn);
function dropdownBtn() {
    dropdownMenu.hidden = !dropdownMenu.hidden
}