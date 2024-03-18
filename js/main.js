const menuBtn = document.querySelector('.menu__btn')
const menuClose = document.querySelector('.menu__close')
const menuList = document.querySelector('.menu__list')
const menuCloseBg = document.querySelector('.menu--close')

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open')
    menuCloseBg.classList.toggle('menu--open')
})

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open')
    menuCloseBg.classList.remove('menu--open')
})

