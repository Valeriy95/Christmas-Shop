const body = document.querySelector('body') as HTMLElement
const burgerMenuIcon = document.querySelector('.burger-menu') as HTMLElement
const burgerMenuFon = document.querySelector('.burger-menu-fon') as HTMLElement
const burgerMenuLine = document.querySelector(
  '.burger-menu__line',
) as HTMLElement
export const burgerMenuLineTwo = document.querySelector(
  '.burger-menu__line_two',
) as HTMLElement
const burgerMenuListLink: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.burger-menu-list__link')

for (let i = 0; i < burgerMenuListLink.length; i++) {
  burgerMenuListLink[i].addEventListener('click', openCloseBurgerMenu)
}

console.log(burgerMenuListLink)

burgerMenuIcon.addEventListener('click', openCloseBurgerMenu)

export function openCloseBurgerMenu(): void {
  body.classList.toggle('overflow')
  burgerMenuLine.classList.toggle('rotate-line')
  burgerMenuLineTwo.classList.toggle('rotate-line-two')
  burgerMenuFon.classList.toggle('open-burger-menu-nav-container')
}
