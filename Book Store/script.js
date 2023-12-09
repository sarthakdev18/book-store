const searchButton = document.getElementById('search_button');
const searchClose = document.getElementById('searchClose');
const searchContent = document.getElementById('search_content');

if(searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show_search');
    })
}

if(searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show_search');
    })
}

const loginButton = document.getElementById('login_button');
const loginClose = document.getElementById('loginClose');
const loginContent = document.getElementById('login_content');

if(loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show_login');
    })
}

if(loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show_login');
    })
}

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow_header')
                       : header.classList.remove('shadow_header')
}
window.addEventListener('scroll', shadowHeader);

const joinButton = document.getElementById('join-button');

if(joinButton) {
    joinButton.addEventListener('click', () => {
        loginContent.classList.add('show_login');
    })
}

let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});

let swiperFeatured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

let swiperNew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});

let swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active_link')
        } else {
            sectionsClass.classList.remove('active_link')
        }      
    })
}
window.addEventListener('scroll', scrollActive);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll_up');

    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll')
                        : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp);

const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark_theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home_data, .featured_container, .new_container, .join_data, .testimonial_container, .footer')
sr.reveal('.home_images', {delay: 600})
sr.reveal('.services_card', {interval: 100})
sr.reveal('.discount_data', {origin: 'left'})
sr.reveal('.discount_images', {origin: 'right'})