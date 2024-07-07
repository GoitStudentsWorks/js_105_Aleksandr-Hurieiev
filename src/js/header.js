const refs = {
    menu: document.querySelector('.header-nav-menu'),
    menuItems: document.querySelector('.header-menu'),
    btnOrder: document.querySelector('.header-btn'),
    btnBurger: document.querySelector('.open-menu-btn')
}

refs.menu.addEventListener('click', (e) => {
    e.preventDefault();
    if (refs.menuItems.classList.contains('hidden') == true){
        refs.menuItems.classList.remove('hidden');
    } else {
        refs.menuItems.classList.add('hidden');
    }
})