/*
// Get a reference to the body element
var body = document.querySelector('body');

// Set the display property to none
body.style.display = 'none';
*/
/* Smooth Scroll */
const lenis = new Lenis({
    duration: 1.6, // Time in seconds for the scroll animation
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Easing function for the animation
    direction: "vertical", // Scrolling direction (vertical or horizontal)
    gestureDirection: "vertical", // Direction for touch gestures
    smooth: true, // Enable smooth scrolling
    smoothTouch: false, // Disable smooth touch scrolling by default
    touchMultiplier: 2, // Adjust touch scroll sensitivity
});

 function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
/* back to top */

/*
document.getElementById("scrollToTopBtn").onclick = function() {
  scrollToTop();
};

function scrollToTop() {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 15);
  }
}
*/
document.getElementById("scrollToTopBtn").onclick = function() {
      lenis.scrollTo(0); // Scroll to the top
    };

const revealTypeElements = document.querySelectorAll('.reveal-type');
revealTypeElements.forEach(element => {
    if (!element.getAttribute('data-bg-color')) {
        element.setAttribute('data-bg-color', 'rgba(255, 255, 255, 0.30)');
    }
    if (!element.getAttribute('data-fg-color')) {
        element.setAttribute('data-fg-color', '#FFFFFF');
    }
});

if (window.innerWidth >= 991) {
    gsap.registerPlugin(ScrollTrigger)

    const splitTypes = document.querySelectorAll('.reveal-type')
    splitTypes.forEach((char,i) => {
                const bg = char.dataset.bgColor
                const fg = char.dataset.fgColor
                const text = new SplitType(char, { types: 'chars'})
                gsap.fromTo(text.chars, 
                    {
                        color: bg,
                    },
                    {
                        color: fg,
                        duration: 1,
                        stagger: 0.02,
                        scrollTrigger: {
                            trigger: char,
                            start: 'top 80%',
                            end: 'top 20%',
                            scrub: true,
                            markers: false,
                            toggleActions: 'play play reverse reverse'
                        }
                })
            })
     }

  gsap.to(".cl", {
    marginLeft: '-200%', 
    ease: "none",
    scrollTrigger: {
      trigger: ".section-5",
      start: "top top",
      end: "bottom bottom", 
      scrub: true, 
      markers: false
    }
  });
