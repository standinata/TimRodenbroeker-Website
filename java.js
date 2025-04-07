// --- NAVIGATION LOADER TRANSITION ---
function activateLoaderAndNavigate(event, link) {
    event.preventDefault();
    document.body.classList.add("loading");

    setTimeout(function () {
        document.body.classList.add("loaded");

        setTimeout(function () {
            window.location.href = link;
        }, 1000); // Matches CSS transition time
    }, 100); // Short delay to display the loader
}

// Add loader effect on nav link click
document.querySelectorAll('.sticky-nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetLink = this.getAttribute('href');
        activateLoaderAndNavigate(event, targetLink);
    });
});


// --- PAGE LOAD: Loader + Start Typed.js when visible ---
window.addEventListener("load", function () {
    setTimeout(function () {
        document.body.classList.add("loaded");

        // Delay Typed.js init slightly to ensure visibility
        setTimeout(() => {
            const typedTarget = document.querySelector("#typed-tim");
            if (typedTarget) {
                new Typed("#typed-tim", {
                    strings: ["TIM"],
                    typeSpeed: 110,
                    startDelay: 240, // Extra buffer after load
                    showCursor: true,
                    cursorChar: "|",
                    onComplete: function (self) {
                        self.cursor.remove(); // Removes the cursor after animation completes
                    }
                });
            }
        }, 500); // wait for loader + CSS transition to complete
    }, 500); // loader delay
});

// --- PAGE LOAD: Loader + Start Typed.js when visible ---
window.addEventListener("load", function () {
    setTimeout(function () {
        document.body.classList.add("loaded");

        // Delay Typed.js init slightly to ensure visibility
        setTimeout(() => {
            const typedTarget = document.querySelector("#typed-courses");
            if (typedTarget) {
                new Typed("#typed-courses", {
                    strings: ["COURSES"],
                    typeSpeed: 90,
                    startDelay: 240, // Extra buffer after load
                    showCursor: true,
                    cursorChar: "|",
                    onComplete: function (self) {
                        self.cursor.remove(); // Removes the cursor after animation completes
                    }
                });
            }
        }, 500); // wait for loader + CSS transition to complete
    }, 500); // loader delay
});




// --- INTERSECTION OBSERVER (INDEX PAGE ONLY) ---
const aboutSection = document.querySelector(".about-about");
if (aboutSection) {
    const options = { root: null, threshold: 0.8 };

    const observer = new IntersectionObserver(function (entries, observer) {
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

                observer.unobserve(aboutSection); // Only run once
            }
        });
    }, options);

    observer.observe(aboutSection);
}


let swiper;

function initializeSwiper() {
  if (window.innerWidth > 960) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (swiper) {
    swiper.destroy(true, true); // Disable Swiper but keep the markup intact
  }
}


// Run the function on page load
initializeSwiper();

// Re-run the function on window resize to handle dynamic screen size changes
window.addEventListener("resize", initializeSwiper);

// Create the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Throttling function to ensure smooth cursor movement
let isMouseMoving = false;

function updateCursorPosition(e) {
    if (isMouseMoving) return; // Avoid frequent updates within the same frame
    isMouseMoving = true;

    // Update the cursor's position to follow the mouse
    cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;

    // Reset the flag after the next frame
    requestAnimationFrame(() => {
        isMouseMoving = false;
    });
}

// Add mousemove event listener for smoother transition
document.addEventListener('mousemove', updateCursorPosition);

// Hover effect to expand cursor when hovering over interactable elements
const hoverElements = document.querySelectorAll('a, button, input, textarea');
hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';  // Adjust size when hovering
        cursor.style.height = '40px';
        cursor.style.opacity = '1';    // Full opacity
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.width = '15px';  // Default size when leaving
        cursor.style.height = '15px';
        cursor.style.opacity = '0.8'; // Default opacity
    });
});



