const menuBtn = document.querySelector('.hamburger_menu'),
navBar = document.querySelector('.navbar')

menuBtn.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})