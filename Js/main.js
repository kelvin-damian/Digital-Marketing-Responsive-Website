/*=============SHOW MENU====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('menu-button'),
    navClose = document.getElementById('nav-close')

/*==============MENU SHOW=====================*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*==============MENU HIDDEN====================*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*===================REMOVE MOBILE MENU=====================*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))