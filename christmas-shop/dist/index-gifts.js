const burgerMenuIcon = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const burgerMenuLine = document.querySelector('.burger-menu__line');
const burgerMenuLineTwo = document.querySelector('.burger-menu__line_two');
const burgerMenuFon = document.querySelector('.burger-menu-fon');
const burgerMenuListLink = document.querySelectorAll('.burger-menu-list__link');
for (let i = 0; i < burgerMenuListLink.length; i++) {
    burgerMenuListLink[i].addEventListener('click', openCloseBurgerMenu);
}
burgerMenuIcon.addEventListener('click', function () {
    openCloseBurgerMenu();
});
function openCloseBurgerMenu() {
    body.classList.toggle('overflow');
    burgerMenuLine.classList.toggle('rotate-line');
    burgerMenuLineTwo.classList.toggle('rotate-line-two');
    burgerMenuFon.classList.toggle('open-burger-menu-nav-container');
}
// Category switching
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
const giftsCardContainer = document.querySelector('.gifts-card-container');
const giftsTabAll = document.querySelector('.gifts-tab__1');
const giftsTabForWork = document.querySelector('.gifts-tab__2');
const giftsTabForHealth = document.querySelector('.gifts-tab__3');
const giftsTabForHarmony = document.querySelector('.gifts-tab__4');
giftsTabAll.addEventListener('click', function () {
    if (giftsTabForWork.classList.contains('gifts-tab_active')) {
        giftsTabForWork.classList.remove('gifts-tab_active');
    }
    if (giftsTabForHealth.classList.contains('gifts-tab_active')) {
        giftsTabForHealth.classList.remove('gifts-tab_active');
    }
    if (giftsTabForHarmony.classList.contains('gifts-tab_active')) {
        giftsTabForHarmony.classList.remove('gifts-tab_active');
    }
    giftsTabAll.classList.add('gifts-tab_active');
    giftsCardContainer.innerHTML = '';
    const arrCardWork = getRandomGifts();
    renderingCard(arrCardWork);
});
renderingCard(getRandomGifts());
giftsTabForWork.addEventListener('click', function () {
    if (giftsTabAll.classList.contains('gifts-tab_active')) {
        giftsTabAll.classList.remove('gifts-tab_active');
    }
    if (giftsTabForHealth.classList.contains('gifts-tab_active')) {
        giftsTabForHealth.classList.remove('gifts-tab_active');
    }
    if (giftsTabForHarmony.classList.contains('gifts-tab_active')) {
        giftsTabForHarmony.classList.remove('gifts-tab_active');
    }
    giftsTabForWork.classList.add('gifts-tab_active');
    giftsCardContainer.innerHTML = '';
    const arrCardWork = findGiftByCategory('For Work');
    renderingCard(arrCardWork);
});
giftsTabForHealth.addEventListener('click', function () {
    if (giftsTabAll.classList.contains('gifts-tab_active')) {
        giftsTabAll.classList.remove('gifts-tab_active');
    }
    if (giftsTabForWork.classList.contains('gifts-tab_active')) {
        giftsTabForWork.classList.remove('gifts-tab_active');
    }
    if (giftsTabForHarmony.classList.contains('gifts-tab_active')) {
        giftsTabForHarmony.classList.remove('gifts-tab_active');
    }
    giftsTabForHealth.classList.add('gifts-tab_active');
    giftsCardContainer.innerHTML = '';
    const arrCardHealth = findGiftByCategory('For Health');
    renderingCard(arrCardHealth);
});
giftsTabForHarmony.addEventListener('click', function () {
    if (giftsTabAll.classList.contains('gifts-tab_active')) {
        giftsTabAll.classList.remove('gifts-tab_active');
    }
    if (giftsTabForWork.classList.contains('gifts-tab_active')) {
        giftsTabForWork.classList.remove('gifts-tab_active');
    }
    if (giftsTabForHealth.classList.contains('gifts-tab_active')) {
        giftsTabForHealth.classList.remove('gifts-tab_active');
    }
    giftsTabForHarmony.classList.add('gifts-tab_active');
    giftsCardContainer.innerHTML = '';
    const arrCardHarmony = findGiftByCategory('For Harmony');
    renderingCard(arrCardHarmony);
});
function findGiftByCategory(text) {
    const forWorkGifts = giftsObject.filter((gift) => gift.category === text);
    console.log(forWorkGifts);
    return forWorkGifts;
}
function getRandomGifts() {
    const arrayCopy = [...giftsObject];
    const selectedGifts = [];
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length);
        selectedGifts.push(arrayCopy[randomIndex]);
        arrayCopy.splice(randomIndex, 1);
    }
    return selectedGifts;
}
function renderingCard(arrCar) {
    for (let i = 0; i < arrCar.length; i++) {
        const giftsCard = document.createElement('div');
        giftsCard.className = 'gifts-card';
        giftsCard.setAttribute('data-name', `${arrCar[i].name}`);
        const imgCard = document.createElement('img');
        imgCard.className = 'gifts__img';
        imgCard.src = `../assets/img/${arrCar[i].category}.png`;
        const giftsCardContent = document.createElement('div');
        giftsCardContent.className = 'gifts-card-content';
        const giftsCardTitle = document.createElement('h4');
        giftsCardTitle.className = 'gifts-card__title';
        giftsCardTitle.textContent = arrCar[i].category;
        console.log(giftsCardTitle.innerText);
        if (giftsCardTitle.innerText === 'For Work') {
            giftsCardTitle.classList.add('text_blue');
        }
        else if (giftsCardTitle.innerText === 'For Harmony') {
            giftsCardTitle.classList.add('text_pink');
        }
        else {
            giftsCardTitle.classList.add('text_green');
        }
        const giftsCardText = document.createElement('h3');
        giftsCardText.className = 'gifts-card__text';
        giftsCardText.textContent = arrCar[i].name;
        giftsCardContainer.append(giftsCard);
        giftsCard.append(imgCard);
        giftsCard.append(giftsCardContent);
        giftsCardContent.append(giftsCardTitle);
        giftsCardContent.append(giftsCardText);
        giftsCard.addEventListener('click', function (e) {
            const target = e.currentTarget;
            const attributeName = target.getAttribute('data-name');
            if (attributeName) {
                if (findGiftByName(attributeName)) {
                    const currentGiftObj = findGiftByName(attributeName);
                    openModalWindow(currentGiftObj);
                }
            }
        });
    }
}
function findGiftByName(name) {
    return giftsObject.find((gift) => gift.name === name);
}
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
// Button UP
const btnUp = document.querySelector('.btn-up');
function toggleScrollButton() {
    if (window.innerWidth <= 768) {
        if (window.scrollY > 100) {
            btnUp.classList.add('show-btn-up');
        }
        else {
            btnUp.classList.remove('show-btn-up');
        }
    }
    else {
        btnUp.classList.remove('show-btn-up');
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0 });
}
btnUp.addEventListener('click', scrollToTop);
window.addEventListener('scroll', toggleScrollButton);
window.addEventListener('resize', toggleScrollButton);
export {};
