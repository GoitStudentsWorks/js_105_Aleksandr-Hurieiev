const refs = {
    menu: document.querySelector('.header-nav-menu'),
    menuItems: document.querySelector('.header-menu'),
    btnOrder: document.querySelector('#orderProject'),
    targetOrder: document.querySelector('#work-together'),
    btnBurger: document.querySelector('.open-menu-btn'),
    mobileMenu: document.querySelector('.mobile-menu'),
    linkAboutMe: document.querySelector('#header-about-me'),
    targetAboutMe: document.querySelector('#about_me'),
    linkBenefits: document.querySelector('#header-benefits'),
    targetBenefits: document.querySelector('#benefits'),
    linkProjects: document.querySelector('#header-projects'),
    targetProjects: document.querySelector('#projects'),
    linkFaq: document.querySelector('#header-faq'),
    targetFaq: document.querySelector('#faq-section'),
    closeMenuBtn: document.querySelector('.modal-close-btn'),
}

export const menuAnim = refs.menu.addEventListener('click', (e) => {
    openCloseMenu(e, refs.menuItems);
})

export const scrollToAboutMe = refs.linkAboutMe.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetAboutMe.scrollIntoView({
        behavior: 'smooth'
    });
    closeMenu(e, refs.mobileMenu);
})

export const scrollToBenefits = refs.linkBenefits.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetBenefits.scrollIntoView({
        behavior: 'smooth'
    });
    closeMenu(e, refs.mobileMenu);
})

export const scrollToProjects = refs.linkProjects.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetProjects.scrollIntoView({
        behavior: 'smooth'
    });
    closeMenu(e, refs.mobileMenu);
})

export const scrollToFaq = refs.linkFaq.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetFaq.scrollIntoView({
        behavior: 'smooth'
    });
    closeMenu(e, refs.mobileMenu);
})

export const scrollToOrder = refs.btnOrder.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetOrder.scrollIntoView({
        behavior: 'smooth'
    });
    closeMenu(e, refs.mobileMenu);
})

export const openMenuBtnClick = refs.btnBurger.addEventListener('click', (e) => {
    openCloseMenu(e, refs.mobileMenu);
})

export const closeMenuBtnClick = refs.closeMenuBtn.addEventListener('click', (e) => {
    openCloseMenu(e, refs.mobileMenu);
})

function openCloseMenu(e, element) {
    e.preventDefault();
    if (element.classList.contains('hidden') == true) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function closeMenu(e, element) {
    e.preventDefault();
    if (element.classList.contains('hidden') == false) {
        element.classList.add('hidden');
    }
}