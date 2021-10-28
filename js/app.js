window.addEventListener("scroll",()=>{
    var nav=document.querySelector('nav');
    nav.classList.toggle('sticky',window.scrollY>0)
})
function open_menu() {
    let nav_links=document.querySelector('.mini-bar .nav-links')
    let menu_icon=document.querySelector('.mini-bar .nav .open-menu')
    let close_icon=document.querySelector('.mini-bar .nav .close-menu')
    nav_links.classList.add('show')
    menu_icon.classList.add('hide')
    close_icon.classList.add('show')
}
function close_menu() {
    let nav_links=document.querySelector('.mini-bar .nav-links')
    let menu_icon=document.querySelector('.mini-bar .nav .open-menu')
    let close_icon=document.querySelector('.mini-bar .nav .close-menu')
    nav_links.classList.add('hide')
    setTimeout(()=>{
        nav_links.classList.remove('show')
        menu_icon.classList.remove('hide')
        close_icon.classList.remove('show')
        nav_links.classList.remove('hide')
    },500)
}
function show_skills(number){
    let skills=document.querySelectorAll('.programs')
    let arrow_up=document.querySelectorAll('.arrow-up')
    let arrow_down=document.querySelectorAll('.arrow-down')
    skills[number].classList.toggle('show')
    arrow_down[number].classList.toggle('hide')
    arrow_up[number].classList.toggle('show')
}