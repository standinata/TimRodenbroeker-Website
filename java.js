document.addEventListener("DOMContentLoaded", function () {
    // Create an Intersection Observer to trigger the animation
    const aboutSection = document.querySelector('.about');
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.8 // Trigger when 80% of the element is in view
    };

    // Create the intersection observer
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the Typed.js animation when the About section enters the viewport
                var typed1 = new Typed("#line1", {
                    strings: ["&lt;Tim Rodenbroeker is&gt;"], // First line
                    typeSpeed: 50, // Speed of typing
                    backSpeed: 30, // Speed of backspacing (not used)
                    showCursor: true, // Show cursor while typing
                    cursorChar: "|", // Custom cursor character
                    onComplete: function (self) {
                        self.cursor.remove(); // Remove cursor after typing
                        setTimeout(() => {
                            var typed2 = new Typed("#line2", {
                                strings: ["&lt;a design educator&gt;"], // Second line
                                typeSpeed: 50,
                                showCursor: true,
                                cursorChar: "|",
                                onComplete: function (self) {
                                    self.cursor.remove(); // Remove cursor after typing
                                    setTimeout(() => {
                                        var typed3 = new Typed("#line3", {
                                            strings: ["&lt;a/ freelance creative technologist&gt;"], // Third line
                                            typeSpeed: 50,
                                            showCursor: true,
                                            cursorChar: "|",
                                            onComplete: function (self) {
                                                self.cursor.remove(); // Remove cursor after typing
                                            }
                                        });
                                    }, 300); // Delay before the third line starts
                                }
                            });
                        }, 300); // Delay before the second line starts
                    }
                });
                // Stop observing after triggering the animation
                observer.unobserve(aboutSection);
            }
        });
    }, options);

    // Start observing the About section
    observer.observe(aboutSection);
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
