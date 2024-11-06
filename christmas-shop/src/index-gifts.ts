const burgerMenuIcon = document.querySelector('.burger-menu') as HTMLElement
const burgerMenuListLink: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.burger-menu-list__link')

import { openCloseBurgerMenu } from './index.js'

for (let i = 0; i < burgerMenuListLink.length; i++) {
  burgerMenuListLink[i].addEventListener('click', openCloseBurgerMenu)
}

burgerMenuIcon.addEventListener('click', openCloseBurgerMenu)
