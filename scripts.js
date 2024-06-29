document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    window.onscroll = function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    document.querySelector('.nav-toggle').addEventListener('click', function() {
        document.querySelector('.nav-list').classList.toggle('show');
    });

    // Highlight the current section in the nav
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightCurrentSection() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightCurrentSection);
    window.addEventListener('resize', highlightCurrentSection);
    highlightCurrentSection(); // Initialize highlighting
});
