// // const button = document.querySelector("button")
// // const dropdownMenu = document.querySelector("ul.dropdown-menu")
// // console.log(dropdownMenu)
// // dropdownMenu.hidden = true;
// // button.addEventListener("click", dropdownBtn);
// // function dropdownBtn() {
// //     dropdownMenu.hidden = !dropdownMenu.hidden
// // }

// // const button = document.querySelectorAll("button")
// const accordionItems = document.querySelectorAll(".accordion-item")
// console.log(accordionItems)
// const collapseOne =
//     function accordionButton() {


//     }

// for (let i = 0; i < accordionItems.length; i++) {
//     const accordion = accordionItems[i];
//     const button = accordion.querySelector("button")
//     button.addEventListener("click", accordionButton)
// }
// // button.addEventListener("click", accordionButton);
const checkH2 = document.querySelectorAll("h2")
console.log(checkH2)

const collapses = document.querySelectorAll(".collapse")
console.log(collapses)
for (let i = 0; i < collapses.length; i++) {
    let hiddenText = collapses[i];
    hiddenText.hidden = true;
}
for (let i = 0; i < checkH2.length; i++) {
    let h2Item = checkH2[i];
    let collapse = collapses[i]
    h2Item.addEventListener("click", accordionButton)
    function accordionButton() {
        collapse.hidden = !collapse.hidden
    }
}