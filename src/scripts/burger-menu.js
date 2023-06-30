const burgerItem = document.querySelector('.header__burger__img');
const menu = document.querySelector('.header-wrap-menu');
const menuCloseItem = document.querySelector('.nav-menu__img__close');
const bgMain = document.querySelector('.main-open');
burgerItem.addEventListener('click', () => {
    menu.classList.add('header-wrap-menu_active');
    bgMain.classList.add('main__open-menu');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header-wrap-menu_active');
    bgMain.classList.remove('main__open-menu');
})
bgMain.addEventListener('click', () => {
    menu.classList.remove('header-wrap-menu_active');
    bgMain.classList.remove('main__open-menu');
})