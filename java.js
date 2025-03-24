document.addEventListener("DOMContentLoaded", function () {
    var typed1 = new Typed("#line1", {
        strings: ["Tim Rodenbroeker is"], // First line
        typeSpeed: 50, // Speed of typing
        backSpeed: 30, // Speed of backspacing (not used)
        showCursor: true, // Show cursor while typing
        cursorChar: "|", // Custom cursor character
        onComplete: function (self) {
            self.cursor.remove(); // Remove cursor after typing
            setTimeout(() => {
                var typed2 = new Typed("#line2", {
                    strings: ["a design educator"], // Second line
                    typeSpeed: 50,
                    showCursor: true,
                    cursorChar: "|",
                    onComplete: function (self) {
                        self.cursor.remove(); // Remove cursor after typing
                        setTimeout(() => {
                            var typed3 = new Typed("#line3", {
                                strings: ["a freelance creative technologist"], // Third line
                                typeSpeed: 50,
                                showCursor: true,
                                cursorChar: "|",
                                onComplete: function (self) {
                                    self.cursor.remove(); // Remove cursor after typing
                                }
                            });
                        }, 500); // Delay before the third line starts
                    }
                });
            }, 500); // Delay before the second line starts
        }
    });
});
