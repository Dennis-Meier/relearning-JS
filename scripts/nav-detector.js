const header = document.querySelector("header");

// detect screensize for nav 
if (window.innerWidth <= 700) {
    header.classList.remove("desktop");
    header.classList.add("mobile");
} else {
    header.classList.remove("mobile");
    header.classList.add("desktop");
}
