document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Solid Navbar on Scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Buttery Smooth Parallax Effect for Hero Background
    const heroBg = document.getElementById("hero-bg");
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        // Moves the background down slightly as you scroll down
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

    // 3. High-End Entrance Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Runs only once for premium feel
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => {
        observer.observe(el);
    });

});
