const refs = {
    menu: document.querySelector('.header-nav-menu'),
    menuItems: document.querySelector('.header-menu'),
    btnOrder: document.querySelector('.header-btn'),
    targetOrder: document.querySelector('#work-together'),
    btnBurger: document.querySelector('.open-menu-btn'),
    linkAboutMe: document.querySelector('#header-about-me'),
    targetAboutMe: document.querySelector('#about_me'),
    linkBenefits: document.querySelector('#header-benefits'),
    targetBenefits: document.querySelector('#benefits'),
    linkProjects: document.querySelector('#header-projects'),
    targetProjects: document.querySelector('#projects'),
    linkFaq: document.querySelector('#header-faq'),
    targetFaq: document.querySelector('#faq-section'),
}

export const menuAnim = refs.menu.addEventListener('click', (e) => {
    e.preventDefault();
    if (refs.menuItems.classList.contains('hidden') == true){
        refs.menuItems.classList.remove('hidden');
    } else {
        refs.menuItems.classList.add('hidden');
    }
})

export const scrollToAboutMe = refs.linkAboutMe.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetAboutMe.scrollIntoView({
        behavior: 'smooth'
    });
})

export const scrollToBenefits = refs.linkBenefits.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetBenefits.scrollIntoView({
        behavior: 'smooth'
    });
})

export const scrollToProjects = refs.linkProjects.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetProjects.scrollIntoView({
        behavior: 'smooth'
    });
})

export const scrollToFaq = refs.linkFaq.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetFaq.scrollIntoView({
        behavior: 'smooth'
    });
})

export const scrollToOrder = refs.btnOrder.addEventListener('click', (e) => {
    e.preventDefault();
    refs.targetOrder.scrollIntoView({
        behavior: 'smooth'
    });
})