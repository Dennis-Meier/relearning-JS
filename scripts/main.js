const navbar = document.querySelector('.mobile');

// hiding nav for mobile 
let lastScrollY = window.scrollY || document.documentElement.scrollTop;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling DOWN - Hide the navbar
        navbar.style.top = "-200px";
    } else {
        // Scrolling UP - Show the navbar
        navbar.style.top = "8px";
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
});