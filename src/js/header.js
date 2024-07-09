const refs = {
    menu: document.querySelector('.header-nav-menu'),
    menuItems: document.querySelector('.header-menu'),
    
    btnBurger: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.modal-close-btn'),
    mobileMenu: document.querySelector('.mobile-menu'),

    linkAboutMe: document.querySelector('#header-about-me'),
    linkBenefits: document.querySelector('#header-benefits'),
    linkProjects: document.querySelector('#header-projects'),
    linkFaq: document.querySelector('#header-faq'),
    btnOrder: document.querySelector('#orderProject'),

    linkAboutMe_: document.querySelector('#header-about-me_'),
    linkBenefits_: document.querySelector('#header-benefits_'),
    linkProjects_: document.querySelector('#header-projects_'),
    linkFaq_: document.querySelector('#header-faq_'),
    btnOrder_: document.querySelector('#orderProject_'),

    targetAboutMe: document.querySelector('#about_me'),
    targetBenefits: document.querySelector('#benefits'),
    targetProjects: document.querySelector('#projects'),
    targetFaq: document.querySelector('#faq-section'),
    targetOrder: document.querySelector('#work-together'),
}

export const menuAnim = refs.menu.addEventListener('click', (e) => {
    toggleMenu(e, refs.menuItems, false);
})

export const menuOnResize = window.onresize = () => {
    if (window.innerWidth >= 768) {
        if (refs.mobileMenu.classList.contains('fadeIn')) {
            refs.mobileMenu.classList.remove('fadeIn');
            refs.mobileMenu.classList.add('hidden');

            refs.menuItems.classList.remove('hidden');
            refs.menuItems.classList.remove('fadeOut');
            refs.menuItems.classList.add('fadeIn');
        }
    } else {
        if (refs.menuItems.classList.contains('fadeIn')) {
            refs.menuItems.classList.remove('fadeIn');
            refs.menuItems.classList.add('hidden');

            refs.mobileMenu.classList.remove('hidden');
            refs.mobileMenu.classList.remove('fadeOut');
            refs.mobileMenu.classList.add('fadeIn');
        }
    }

    if (window.innerWidth < 768) {
        refs.menuItems.classList.add('hidden');
    }
}

// Smooth scrolls
///////////////////

export const scrollToAboutMe = refs.linkAboutMe.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetAboutMe);
    closeMenu(e, refs.menuItems);
})

export const scrollToBenefits = refs.linkBenefits.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetBenefits);
    closeMenu(e, refs.menuItems);
})

export const scrollToProjects = refs.linkProjects.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetProjects);
    closeMenu(e, refs.menuItems);
})

export const scrollToFaq = refs.linkFaq.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetFaq);
    closeMenu(e, refs.menuItems);
})

export const scrollToOrder = refs.btnOrder.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetOrder);
    closeMenu(e, refs.menuItems);
})

///////

export const scrollToAboutMe_ = refs.linkAboutMe_.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetAboutMe);
    closeMenu(e, refs.mobileMenu);
})

export const scrollToBenefits_ = refs.linkBenefits_.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetBenefits);
    closeMenu(e, refs.mobileMenu);
})

export const scrollToProjects_ = refs.linkProjects_.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetProjects);
    closeMenu(e, refs.mobileMenu);
})

export const scrollToFaq_ = refs.linkFaq_.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetFaq);
    closeMenu(e, refs.mobileMenu);
})

export const scrollToOrder_ = refs.btnOrder_.addEventListener('click', (e) => {
    smoothScrollTo(e, refs.targetOrder);
    closeMenu(e, refs.mobileMenu);
})

///////////////////

export const openMenuBtnClick = refs.btnBurger.addEventListener('click', (e) => {
    toggleMenu(e, refs.mobileMenu);
})

export const closeMenuBtnClick = refs.closeMenuBtn.addEventListener('click', (e) => {
    toggleMenu(e, refs.mobileMenu);
})

// Help functions.
///////////////////

function toggleMenu(e, menu) {
    e.preventDefault();
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.toggle('fadeIn');
    } else {
        menu.classList.toggle('fadeIn');
        menu.classList.toggle('fadeOut');
    }
    document.documentElement.classList.toggle('noScroll');
    document.body.classList.toggle('noScroll');
}

function closeMenu(e, element) {
    e.preventDefault();
    element.classList.remove('fadeIn');
    element.classList.add('fadeOut');
    document.documentElement.classList.remove('noScroll');
    document.body.classList.remove('noScroll');
}

function smoothScrollTo(e, element) {
    e.preventDefault();
    element.scrollIntoView({
        behavior: 'smooth'
    });
}