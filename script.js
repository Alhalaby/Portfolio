
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    // Video preloading and error handling
    document.querySelectorAll('video source').forEach(source => {
        const video = source.parentElement;
        video.addEventListener('error', function() {
            const container = this.closest('.relative');
            container.innerHTML = `
                <div class="absolute inset-0 flex items-center justify-center bg-gray-300 p-6 text-center">
                    <div>
                        <i data-feather="alert-triangle" class="w-12 h-12 mx-auto text-gray-500 mb-4"></i>
                        <p class="text-gray-600">Video failed to load. Please check the file path.</p>
                    </div>
                </div>
            `;
            feather.replace();
        });
    });
// Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation classes when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Update navbar to include contact link
const navbarScript = document.createElement('script');
navbarScript.src = 'components/navbar.js';
document.body.appendChild(navbarScript);

