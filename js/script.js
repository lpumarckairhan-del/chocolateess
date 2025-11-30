document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Interactive Navigation Menu (Mobile) ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation toggle
            burger.classList.toggle('toggle');
        });
    }

    // --- 2. Dynamic Content: Greeting based on Time (Home Page) ---
    const greetingElement = document.getElementById('greetingText');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good Morning, Shopper!";
        } else if (hour < 18) {
            greeting = "Good Afternoon, Shopper!";
        } else {
            greeting = "Good Evening, Shopper!";
        }
        greetingElement.innerText = greeting + " Welcome to Chocolattees.";
    }

    // --- 3. Image Slideshow (Home Page) ---
    let slideIndex = 1;
    // Check if slides exist before running
    if(document.getElementsByClassName("slide").length > 0) {
        showSlides(slideIndex);
        
        // Auto cycle every 5 seconds
        setInterval(() => {
            plusSlides(1);
        }, 5000);
    }

    // Expose these functions to the window so HTML onclick works
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }

    // --- 4. Form Validation (Contact Page) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            let isValid = true;
            
            // Get inputs
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Reset errors
            document.getElementById('nameError').innerText = "";
            document.getElementById('emailError').innerText = "";
            document.getElementById('messageError').innerText = "";

            // Validate Name
            if (name.value.trim() === "") {
                document.getElementById('nameError').innerText = "Name is required.";
                isValid = false;
            }

            // Validate Email
            if (email.value.trim() === "" || !email.value.includes('@')) {
                document.getElementById('emailError').innerText = "Please enter a valid email.";
                isValid = false;
            }

            // Validate Message
            if (message.value.trim() === "") {
                document.getElementById('messageError').innerText = "Message cannot be empty.";
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault(); // Stop form submission
            } else {
                alert("Thank you! Your message has been sent.");
            }
        });
    }

    // --- 5. Toggle Effect (Collection Page) ---
    const filterBtn = document.getElementById('filterToggle');
    const filterPanel = document.getElementById('filterPanel');

    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', () => {
            filterPanel.classList.toggle('hidden');
            // Update button text logic
            if(filterPanel.classList.contains('hidden')){
                filterBtn.innerText = "Show Filters";
            } else {
                filterBtn.innerText = "Hide Filters";
            }
        });
    }
});