// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Responsive Navigation Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        document.querySelector('.nav-right').classList.toggle('active');
    });
}

// Modal for Projects
const modal = document.querySelector('#project-modal');
const modalClose = document.querySelector('#modal-close');

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        if (modal) {
            modal.classList.add('active');
            // Optional: Load project details dynamically here
        }
    });
});

if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Image Slider/Carousel (for portfolio items)
let slideIndex = 0;
const slides = document.querySelectorAll('.portfolio-item img');

function showSlides() {
    if (slides.length === 0) return;
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

// Highlight Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const id = section.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Optional: Manual Slide Controls
const nextBtn = document.querySelector('#next-slide');
const prevBtn = document.querySelector('#prev-slide');

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    });

    prevBtn.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlides();
    });
}
 