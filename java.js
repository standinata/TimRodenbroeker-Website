// Function to trigger the loader on nav link click
function activateLoaderAndNavigate(event, link) {
    event.preventDefault(); // Prevent default behavior (immediate navigation)
    
    // Show the loader by adding a "loading" class to the body
    document.body.classList.add("loading");
    
    // Start the transition to hide the loader after a slight delay
    setTimeout(function() {
        // Apply the loaded state to trigger the transition (hide loader)
        document.body.classList.add("loaded");
        
        // Wait for the transition before navigating
        setTimeout(function() {
            // After the loader animation finishes, navigate to the link
            window.location.href = link;
        }, 1000); // This matches the loader transition time, adjust if needed
    }, 100); // Short delay to ensure the loader shows before the transition
}

// Attach event listeners to the navigation links
document.querySelectorAll('.sticky-nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Get the href attribute for the target link
        const targetLink = this.getAttribute('href');
        activateLoaderAndNavigate(event, targetLink);
    });
});

// Loader when the page is fully loaded (for first-time load)
window.addEventListener("load", function () {
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 500);
});

// Observer for INDEX PAGE Typed.js animation
const aboutSection = document.querySelector(".about-about");
if (aboutSection) {
    const options = { root: null, threshold: 0.8 };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var typed1 = new Typed("#line1", {
                    strings: ["&lt;Tim Rodenbroeker is&gt;"],
                    typeSpeed: 40, 
                    showCursor: true,
                    cursorChar: "|",
                    onComplete: function (self) {
                        self.cursor.remove();
                        setTimeout(() => {
                            var typed2 = new Typed("#line2", {
                                strings: ["&lt;a design educator&gt;"],
                                typeSpeed: 40,
                                showCursor: true,
                                cursorChar: "|",
                                onComplete: function (self) {
                                    self.cursor.remove();
                                    setTimeout(() => {
                                        var typed3 = new Typed("#line3", {
                                            strings: ["&lt;a/ freelance creative technologist&gt;"],
                                            typeSpeed: 40,
                                            showCursor: true,
                                            cursorChar: "|",
                                            onComplete: function (self) {
                                                self.cursor.remove();
                                            }
                                        });
                                    }, 300);
                                }
                            });
                        }, 300);
                    }
                });
                observer.unobserve(aboutSection);
            }
        });
    }, options);

    observer.observe(aboutSection);
}

// Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
