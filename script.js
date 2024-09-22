document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetSection = link.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.remove('hidden-section');
                    section.classList.add('active-section');
                } else {
                    section.classList.remove('active-section');
                    section.classList.add('hidden-section');
                    
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default submission

        // Optionally, you could log the input values or handle them here
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`); // For testing

        // Reset the form
        contactForm.reset();

        // Refresh the page
        window.location.reload();
    });
});
