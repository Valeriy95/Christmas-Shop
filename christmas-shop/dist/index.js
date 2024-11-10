const body = document.querySelector('body');
const burgerMenuIcon = document.querySelector('.burger-menu');
const burgerMenuFon = document.querySelector('.burger-menu-fon');
const burgerMenuLine = document.querySelector('.burger-menu__line');
const burgerMenuLineTwo = document.querySelector('.burger-menu__line_two');
const burgerMenuListLink = document.querySelectorAll('.burger-menu-list__link');
for (let i = 0; i < burgerMenuListLink.length; i++) {
    burgerMenuListLink[i].addEventListener('click', openCloseBurgerMenu);
}
burgerMenuIcon.addEventListener('click', openCloseBurgerMenu);
function openCloseBurgerMenu() {
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
// Timer
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
function getTimeRemaining() {
    const now = new Date();
    const nextYear = now.getUTCFullYear() + 1;
    const newYear = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0));
    const totalSeconds = Math.floor((newYear.getTime() - now.getTime()) / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
}
function updateTimerDisplay() {
    const time = getTimeRemaining();
    daysElement.textContent = time.days.toString();
    hoursElement.textContent = time.hours.toString();
    minutesElement.textContent = time.minutes.toString();
    secondsElement.textContent = time.seconds.toString();
}
setInterval(updateTimerDisplay, 1000);
updateTimerDisplay();
// Random Card
const giftsObject = [
    {
        name: 'Bug Magnet',
        description: 'Able to find bugs in code like they were placed there on purpose.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+200',
            dream: '+400',
        },
    },
    {
        name: 'Console.log Guru',
        description: 'Uses console.log like a crystal ball to find any issue.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+200',
            dream: '+400',
        },
    },
    {
        name: 'Shortcut Cheater',
        description: 'Knows every keyboard shortcut like they were born with them.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+400',
            dream: '+200',
        },
    },
    {
        name: 'Merge Master',
        description: 'Merges branches in Git without conflicts, like a wizard during an exam.',
        category: 'For Work',
        superpowers: {
            live: '+200',
            create: '+500',
            love: '+200',
            dream: '+300',
        },
    },
    {
        name: 'Async Tamer',
        description: 'Handles asynchronous code and promises like well-trained pets.',
        category: 'For Work',
        superpowers: {
            live: '+100',
            create: '+400',
            love: '+200',
            dream: '+300',
        },
    },
    {
        name: 'CSS Tamer',
        description: 'Can make Flexbox and Grid work together like they were always best friends.',
        category: 'For Work',
        superpowers: {
            live: '+200',
            create: '+500',
            love: '+200',
            dream: '+300',
        },
    },
    {
        name: 'Time Hacker',
        description: 'Writes code at the last moment but always meets the deadline.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+500',
            dream: '+200',
        },
    },
    {
        name: 'Layout Master',
        description: "Creates perfect layouts on the first try, like they can read the designer's mind.",
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+300',
            love: '+200',
            dream: '+200',
        },
    },
    {
        name: 'Documentation Whisperer',
        description: 'Understands cryptic documentation as if they wrote it themselves.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+200',
            dream: '+100',
        },
    },
    {
        name: 'Feedback Master',
        description: 'Accepts client revisions with the Zen calm of Buddha.',
        category: 'For Work',
        superpowers: {
            live: '+300',
            create: '+500',
            love: '+300',
            dream: '+400',
        },
    },
    {
        name: 'Code Minimalist',
        description: 'Writes code so concise that one line does more than a whole file.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+500',
            dream: '+200',
        },
    },
    {
        name: 'Pixel-Perfect Magician',
        description: 'Aligns elements to the last pixel, even when the design looks abstract.',
        category: 'For Work',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+400',
            dream: '+400',
        },
    },
    {
        name: 'Posture Levitation',
        description: 'Can sit for hours, but maintains perfect posture like a ballerina.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+500',
            love: '+500',
            dream: '+400',
        },
    },
    {
        name: 'Step Master',
        description: 'Gets 10,000 steps a day even while sitting at the computer.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+300',
            love: '+500',
            dream: '+400',
        },
    },
    {
        name: 'Snack Resister',
        description: 'Ignoring desktop snacks like a strict dietician.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+100',
            love: '+200',
            dream: '+400',
        },
    },
    {
        name: 'Hydration Bot',
        description: 'Drinks the recommended 2 liters of water a day like a health-programmed robot.',
        category: 'For Health',
        superpowers: {
            live: '+500',
            create: '+300',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Sleep Overlord',
        description: 'Sleeps 6 hours but feels like they had 10.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+500',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Break Guru',
        description: 'Takes a stretch break every hour without forgetting, no matter how focused.',
        category: 'For Health',
        superpowers: {
            live: '+300',
            create: '+300',
            love: '+300',
            dream: '+400',
        },
    },
    {
        name: 'Eye Protector',
        description: 'Can work all day at the monitor without feeling like their eyes are on fire.',
        category: 'For Health',
        superpowers: {
            live: '+100',
            create: '+300',
            love: '+500',
            dream: '+400',
        },
    },
    {
        name: 'Stress Dodger',
        description: 'Masters meditation right at the keyboard.',
        category: 'For Health',
        superpowers: {
            live: '+100',
            create: '+400',
            love: '+200',
            dream: '+400',
        },
    },
    {
        name: 'Yoga Coder',
        description: 'Easily switches from coding to yoga and back.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+400',
            love: '+400',
            dream: '+400',
        },
    },
    {
        name: 'Healthy Snacker',
        description: 'Always picks fruit, even when chocolate is within arm’s reach.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+300',
            love: '+200',
            dream: '+400',
        },
    },
    {
        name: 'Chair Exerciser',
        description: 'Manages to work out without leaving the chair.',
        category: 'For Health',
        superpowers: {
            live: '+500',
            create: '+500',
            love: '+500',
            dream: '+400',
        },
    },
    {
        name: 'Caffeine Filter',
        description: 'Drinks coffee at night and still falls asleep with no problem.',
        category: 'For Health',
        superpowers: {
            live: '+400',
            create: '+300',
            love: '+500',
            dream: '+200',
        },
    },
    {
        name: 'Joy Charger',
        description: 'Finds joy in the little things—even in a build that finishes unexpectedly fast.',
        category: 'For Harmony',
        superpowers: {
            live: '+200',
            create: '+200',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Error Laugher',
        description: 'Laughs at code errors like they’re jokes instead of getting angry.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Bug Acceptance Guru',
        description: 'Accepts bugs as part of the journey to perfection — it’s just another task.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+500',
            dream: '+400',
        },
    },
    {
        name: 'Spontaneous Coding Philosopher',
        description: 'Philosophically accepts any client suggestion after a long refactor.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+500',
            dream: '+400',
        },
    },
    {
        name: 'Deadline Sage',
        description: 'Remains zen even when the deadline is close and the project manager is stressed.',
        category: 'For Harmony',
        superpowers: {
            live: '+200',
            create: '+200',
            love: '+300',
            dream: '+500',
        },
    },
    {
        name: 'Inspiration Maestro',
        description: 'Finds inspiration on an empty screen as if masterpieces are already there.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+400',
            dream: '+100',
        },
    },
    {
        name: 'Peace Keeper',
        description: 'Maintains inner calm even in moments of intense crisis.',
        category: 'For Harmony',
        superpowers: {
            live: '+200',
            create: '+200',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Empathy Guru',
        description: 'Feels the team’s mood and can lift everyone’s spirits.',
        category: 'For Harmony',
        superpowers: {
            live: '+500',
            create: '+200',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Laughter Generator',
        description: 'Can lighten any tense situation with a joke that even bugs laugh at.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+200',
            dream: '+500',
        },
    },
    {
        name: 'Pause Master',
        description: 'Knows when to just step back from the keyboard and breathe.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+100',
            dream: '+100',
        },
    },
    {
        name: 'Coder Healer',
        description: 'Can support a colleague in their darkest hour, even if it’s a 500 error.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+500',
            dream: '+500',
        },
    },
    {
        name: 'Music Code Curator',
        description: 'Creates work playlists so good, even deadlines follow the rhythm.',
        category: 'For Harmony',
        superpowers: {
            live: '+300',
            create: '+200',
            love: '+300',
            dream: '+200',
        },
    },
];
function getRandomGifts() {
    const arrayCopy = [...giftsObject];
    const selectedGifts = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length);
        selectedGifts.push(arrayCopy[randomIndex]);
        arrayCopy.splice(randomIndex, 1);
    }
    return selectedGifts;
}
const bestGiftsContent = document.querySelector('.best-gifts-content');
function renderingRandomCard() {
    const arrGifts = getRandomGifts();
    for (let i = 0; i < arrGifts.length; i++) {
        const bestGiftsCard = document.createElement('div');
        bestGiftsCard.className = 'best-gifts-card';
        bestGiftsCard.setAttribute('data-name', `${arrGifts[i].name}`);
        const imgCard = document.createElement('img');
        imgCard.className = 'best-gifts__img';
        imgCard.src = `../assets/img/${arrGifts[i].category}.png`;
        const bestGiftsCardContent = document.createElement('div');
        bestGiftsCardContent.className = 'best-gifts-card-content';
        const bestGiftsCardTitle = document.createElement('h4');
        bestGiftsCardTitle.className = 'best-gifts-card__title';
        bestGiftsCardTitle.textContent = arrGifts[i].category;
        if (bestGiftsCardTitle.innerText === 'For Work') {
            bestGiftsCardTitle.classList.add('text_blue');
        }
        else if (bestGiftsCardTitle.innerText === 'For Harmony') {
            bestGiftsCardTitle.classList.add('text_pink');
        }
        else {
            bestGiftsCardTitle.classList.add('text_green');
        }
        const bestGiftsCardText = document.createElement('h3');
        bestGiftsCardText.className = 'best-gifts-card__text';
        bestGiftsCardText.textContent = arrGifts[i].name;
        bestGiftsContent.append(bestGiftsCard);
        bestGiftsCard.append(imgCard);
        bestGiftsCard.append(bestGiftsCardContent);
        bestGiftsCardContent.append(bestGiftsCardTitle);
        bestGiftsCardContent.append(bestGiftsCardText);
        bestGiftsCard.addEventListener('click', function (e) {
            const target = e.currentTarget;
            const attributeName = target.getAttribute('data-name');
            if (attributeName) {
                if (findGiftByName(giftsObject, attributeName)) {
                    const currentGiftObj = findGiftByName(giftsObject, attributeName);
                    openModalWindow(currentGiftObj);
                }
            }
        });
    }
}
function findGiftByName(gifts, name) {
    return gifts.find((gift) => gift.name === name);
}
renderingRandomCard();
// Modal window
const modalWindow = document.querySelector('.modal-window');
const modalWindowCardImg = document.querySelector('.modal-window-card__img');
const modalWindowCardContentCategory = document.querySelector('.modal-window-card-content__category');
const modalWindowCardContentName = document.querySelector('.modal-window-card-content__name');
const modalWindowCardContentDesc = document.querySelector('.modal-window-card-content__desc');
const modalWindowCardLiveNumber = document.querySelector('.modal-window-card-live__number');
const modalWindowCardCreateNumber = document.querySelector('.modal-window-card-create__number');
const modalWindowCardLoveNumber = document.querySelector('.modal-window-card-love__number');
const modalWindowCardDreamNumber = document.querySelector('.modal-window-card-dream__number');
const allIconsLive = document.querySelectorAll('.modal-window-card-icon__live');
const allIconsCreate = document.querySelectorAll('.modal-window-card-icon__create');
const allIconsLove = document.querySelectorAll('.modal-window-card-icon__love');
const allIconsDream = document.querySelectorAll('.modal-window-card-icon__dream');
const modalIconClose = document.querySelector('.modal-window-icon-close');
function openModalWindow(gifts) {
    modalWindow.style.display = 'flex';
    body.style.overflow = 'hidden';
    console.log(gifts);
    modalWindowCardImg.src = `../assets/img/${gifts.category}.png`;
    modalWindowCardContentCategory.textContent = gifts.category;
    if (modalWindowCardContentCategory.innerText === 'FOR WORK') {
        modalWindowCardContentCategory.classList.add('text_blue');
    }
    else if (modalWindowCardContentCategory.innerText === 'FOR HARMONY') {
        modalWindowCardContentCategory.classList.add('text_pink');
    }
    else {
        modalWindowCardContentCategory.classList.add('text_green');
    }
    modalWindowCardContentName.textContent = gifts.name;
    modalWindowCardContentDesc.textContent = gifts.description;
    modalWindowCardLiveNumber.textContent = gifts.superpowers.live;
    modalWindowCardCreateNumber.textContent = gifts.superpowers.create;
    modalWindowCardLoveNumber.textContent = gifts.superpowers.love;
    modalWindowCardDreamNumber.textContent = gifts.superpowers.dream;
    const liveNumber = +modalWindowCardLiveNumber.textContent.slice(1, 2);
    const createNumber = +modalWindowCardCreateNumber.textContent.slice(1, 2);
    const loveNumber = +modalWindowCardLoveNumber.textContent.slice(1, 2);
    const dreamNumber = +modalWindowCardDreamNumber.textContent.slice(1, 2);
    for (let i = 0; i < liveNumber; i++) {
        allIconsLive[i].style.opacity = '1';
    }
    for (let i = 0; i < createNumber; i++) {
        allIconsCreate[i].style.opacity = '1';
    }
    for (let i = 0; i < loveNumber; i++) {
        allIconsLove[i].style.opacity = '1';
    }
    for (let i = 0; i < dreamNumber; i++) {
        allIconsDream[i].style.opacity = '1';
    }
}
document.addEventListener('click', function (e) {
    const target = e.target;
    if (target && target.classList.contains('modal-window')) {
        closeModalWindow();
    }
});
modalIconClose.addEventListener('click', closeModalWindow);
function closeModalWindow() {
    modalWindow.style.display = 'none';
    body.style.overflow = 'auto';
    if (modalWindowCardContentCategory.classList.contains('text_blue')) {
        modalWindowCardContentCategory.classList.remove('text_blue');
    }
    else if (modalWindowCardContentCategory.classList.contains('text_pink')) {
        modalWindowCardContentCategory.classList.remove('text_pink');
    }
    else {
        modalWindowCardContentCategory.classList.remove('text_green');
    }
    for (let i = 0; i < 5; i++) {
        allIconsLive[i].style.opacity = '0.3';
    }
    for (let i = 0; i < 5; i++) {
        allIconsCreate[i].style.opacity = '0.3';
    }
    for (let i = 0; i < 5; i++) {
        allIconsLove[i].style.opacity = '0.3';
    }
    for (let i = 0; i < 5; i++) {
        allIconsDream[i].style.opacity = '0.3';
    }
}
export {};
