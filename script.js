
        // Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOptions = {
            threshold: 0.3
        };
        
        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                
                entry.target.classList.add('animate');
                
                // Animate progress bars when skills section is in view
                if (entry.target.closest('#skills') || entry.target.closest('#languages')) {
                    setTimeout(animateProgressBars, 300);
                }
                
                observer.unobserve(entry.target);
            });
        }, fadeInOptions);
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });
        
        // Animate progress bars
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
        
        // Form submission
        const contactForm = document.querySelector('.contact-form form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
        let link = document.querySelector("#project-1");

        link.addEventListener("click",()=>{
            window.location.href="https://major-project-mern.onrender.com/listings";
        })
        let link2 = document.querySelector("#project-2");

        link2.addEventListener("click",()=>{
            window.location.href="https://spotifycloneid.netlify.app/";
        })

        let link3 = document.querySelector("#project-3");

        link3.addEventListener("click",()=>{
            window.location.href="https://weather-app-1-e1mi.onrender.com/";
        })