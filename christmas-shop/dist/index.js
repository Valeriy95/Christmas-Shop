const body = document.querySelector('body');
const burgerMenuIcon = document.querySelector('.burger-menu');
const burgerMenuFon = document.querySelector('.burger-menu-fon');
const burgerMenuLine = document.querySelector('.burger-menu__line');
export const burgerMenuLineTwo = document.querySelector('.burger-menu__line_two');
const burgerMenuListLink = document.querySelectorAll('.burger-menu-list__link');
for (let i = 0; i < burgerMenuListLink.length; i++) {
    burgerMenuListLink[i].addEventListener('click', openCloseBurgerMenu);
}
console.log(burgerMenuListLink);
burgerMenuIcon.addEventListener('click', openCloseBurgerMenu);
export function openCloseBurgerMenu() {
    body.classList.toggle('overflow');
    burgerMenuLine.classList.toggle('rotate-line');
    burgerMenuLineTwo.classList.toggle('rotate-line-two');
    burgerMenuFon.classList.toggle('open-burger-menu-nav-container');
}
