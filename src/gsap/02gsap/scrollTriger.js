/* ============================================================================
   GSAP ScrollTrigger Basics
   ============================================================================
   - ScrollTrigger is a GSAP plugin that triggers animations based on scroll position.
   - It’s great for creating engaging scroll-based effects.
*/

// ============================================================================
// Animation for #page1 box (loads on page load, no scroll trigger)
// ============================================================================
gsap.from("#page1 .box", {
  scale: 0, // Starts at 0 scale (tiny)
  delay: 1, // Waits 1 second before starting
  duration: 2, // Animation lasts 2 seconds
  borderRadius: "50%", // Rounds corners to make it a circle
  rotate: 360, // Rotates a full 360 degrees
});

// ============================================================================
// Animation for #page2 box (triggered on scroll)
// ============================================================================
gsap.from("#page2 .box", {
  scale: 0, // Starts at 0 scale
  duration: 2, // Takes 2 seconds to complete
  borderRadius: "50%", // Becomes a circle
  rotate: 360, // Rotates 360 degrees
  scrollTrigger: {
    trigger: "#page2 .box", // The element to watch for scroll triggering
    scroller: "body", // The scrolling container (usually "body")
    markers: true, // Shows start/end markers for debugging
    start: "top 60%", // Starts when the top of the box hits 60% from the top of the viewport
  },
});

// ============================================================================
// Multiple Elements with ScrollTrigger
// ============================================================================
// Animation for #page2 h1
gsap.from("#page2 h1", {
  opacity: 0, // Starts fully transparent
  duration: 2, // Takes 2 seconds
  x: 500, // Starts 500px to the right
  scrollTrigger: {
    trigger: "#page2 h1", // Targets this h1 element
    scroller: "body", // The scrolling element
    markers: true, // Displays markers
    start: "top 50%", // Starts when top of h1 hits 50% from the top of the viewport
  },
});

// Animation for #page2 h2
gsap.from("#page2 h2", {
  opacity: 0, // Starts invisible
  duration: 2, // Takes 2 seconds
  x: -500, // Starts 500px to the left
  scrollTrigger: {
    trigger: "#page2 h2", // Targets this h2 element
    scroller: "body", // Scrolling container
    markers: true, // Shows markers
    start: "top 50%", // Starts at 50% from the top of the viewport
  },
});

// ============================================================================
// ScrollTrigger with Scrub
// ============================================================================
// Scrub links animation progress directly to scroll position
gsap.from("#page2 .box", {
  scale: 0, // Starts at 0 scale
  opacity: 0, // Starts invisible
  rotate: 720, // Rotates 720 degrees (two full spins)
  duration: 1, // Base duration (overridden by scrub)
  scrollTrigger: {
    trigger: "#page2 .box", // Element to watch
    scroller: "body", // Scrolling container
    markers: true, // Shows markers
    start: "top 60%", // Starts when top hits 60% from viewport top
    end: "top 30%", // Ends when top hits 30% from viewport top
    scrub: 2, // Smoothness of animation tied to scroll (2 = moderate smoothing)
    // scrub: true,          // Use true for linear scrub
    // scrub: 1,             // Use a number for smoother scrub
  },
});

// ============================================================================
// ScrollTrigger with Pin
// ============================================================================
// Pin keeps an element fixed in place during scroll
gsap.to("#page2 h1", {
  transform: "translateX(-160%)", // Moves left by 160% of its width
  scrollTrigger: {
    trigger: "#page2", // Parent element to watch (common when using pin)
    scroller: "body", // Scrolling container
    markers: true, // Shows markers
    start: "top 0%", // Starts when top of #page2 hits the top of the viewport
    end: "top -150%", // Ends after scrolling 150% of viewport height
    scrub: 2, // Smooth scroll-linked animation
    pin: true, // Pins the trigger element in place during the animation
  },
});

/* ============================================================================
   Key ScrollTrigger Properties Explained
   ============================================================================
   - trigger: The element that ScrollTrigger watches to start/end the animation.
   - scroller: The element that scrolls (usually "body" unless using a custom container).
   - markers: Boolean (true/false) to show start and end points for debugging.
   - start: Defines when the animation begins (e.g., "top 60%" = top of element at 60% from viewport top).
   - end: Defines when the animation ends (e.g., "top 30%").
   - scrub: Links animation progress to scroll position (true = linear, number = smoothness level).
   - pin: Keeps the trigger element fixed in place during the scroll animation.

   Notes:
   - When using `pin`, target the parent element as the trigger for better control.
   - Adjust `start` and `end` to fine-tune the scroll range.
*/
