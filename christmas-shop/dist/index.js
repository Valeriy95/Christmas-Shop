const body = document.querySelector('body');
const burgerMenuIcon = document.querySelector('.burger-menu');
const burgerMenuFon = document.querySelector('.burger-menu-fon');
const burgerMenuLine = document.querySelector('.burger-menu__line');
export const burgerMenuLineTwo = document.querySelector('.burger-menu__line_two');
const burgerMenuListLink = document.querySelectorAll('.burger-menu-list__link');
for (let i = 0; i < burgerMenuListLink.length; i++) {
    burgerMenuListLink[i].addEventListener('click', openCloseBurgerMenu);
}
burgerMenuIcon.addEventListener('click', openCloseBurgerMenu);
export function openCloseBurgerMenu() {
    body.classList.toggle('overflow');
    burgerMenuLine.classList.toggle('rotate-line');
    burgerMenuLineTwo.classList.toggle('rotate-line-two');
    burgerMenuFon.classList.toggle('open-burger-menu-nav-container');
}
//Slide
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderbtnRight = document.querySelector('.slider-btn__right');
const sliderBtnLeft = document.querySelector('.slider-btn__left');
const sliderRow = document.querySelector('.slider-row');
let currentStep = 0;
let click = 0;
sliderbtnRight.addEventListener('click', function () {
    sliderBtnLeft.classList.add('slider-btn__left_active');
    sliderBtnLeft.classList.remove('slider-btn_noactive');
    if (body.offsetWidth > 768 && click < 3) {
        click++;
        moveSlider(3);
    }
    if (body.offsetWidth < 768 && click < 6) {
        click++;
        moveSlider(6);
    }
    if (body.offsetWidth > 768 && click === 3) {
        sliderbtnRight.classList.remove('slider-btn__right_active');
        sliderbtnRight.classList.add('slider-btn_noactive');
    }
    if (body.offsetWidth < 768 && click === 6) {
        sliderbtnRight.classList.remove('slider-btn__right_active');
        sliderbtnRight.classList.add('slider-btn_noactive');
    }
});
sliderBtnLeft.addEventListener('click', function () {
    if (click > 0) {
        sliderbtnRight.classList.add('slider-btn__right_active');
        sliderbtnRight.classList.remove('slider-btn_noactive');
        if (body.offsetWidth > 768 && click <= 3) {
            moveSliderPrev(3);
            click--;
        }
        if (body.offsetWidth < 768 && click <= 6) {
            moveSliderPrev(6);
            click--;
        }
    }
    if (click === 0) {
        sliderBtnLeft.classList.remove('slider-btn__left_active');
        sliderBtnLeft.classList.add('slider-btn_noactive');
    }
});
function moveSlider(num) {
    const sliderWidth = 1993 - sliderWrapper.offsetWidth;
    const step = sliderWidth / num;
    currentStep += Math.round(step);
    sliderRow.style.transform = `translateX(-${currentStep}px)`;
}
function moveSliderPrev(num) {
    const sliderWidth = 1993 - sliderWrapper.offsetWidth;
    const step = sliderWidth / num;
    currentStep -= Math.round(step);
    sliderRow.style.transform = `translateX(-${currentStep}px)`;
}
window.addEventListener('resize', function () {
    if (currentStep !== 0) {
        sliderRow.style.transform = `translateX(0px)`;
        click = 0;
        currentStep = 0;
        sliderBtnLeft.classList.remove('slider-btn__left_active');
        sliderBtnLeft.classList.add('slider-btn_noactive');
    }
});
