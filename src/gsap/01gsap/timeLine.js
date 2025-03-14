// ============================================================================
// GSAP Timeline Basics
// ============================================================================
// Timeline allows sequencing animations without manually calculating delays
// Each animation starts after the previous one ends (unless specified otherwise)

// Basic Timeline Example 1
// -----------------------
const basicTimeline = gsap.timeline();

basicTimeline
  .to("#box0", {
    x: 330, // Moves 330px on x-axis
    duration: 3, // Takes 3 seconds
  })
  .to("#box1", {
    y: 330, // Moves 330px on y-axis
    duration: 3, // Takes 3 seconds
  })
  .to("#box2", {
    x: 330, // Moves 330px on x-axis
    y: -180, // Moves -180px on y-axis
    borderRadius: "50%", // Rounds corners to circle
    duration: 3, // Takes 3 seconds
  });

// ============================================================================
// Timeline with From Animations
// ============================================================================
// Using .from() to animate from specified values to element's natural state

const headerTimeline = gsap.timeline();

headerTimeline
  .from("h2", {
    y: -20, // Starts 20px above position
    opacity: 0, // Starts invisible
    duration: 1, // Takes 1 second
    delay: 0.3, // Initial delay of 0.3 seconds
  })
  .from("h4", {
    y: -20, // Starts 20px above
    opacity: 0, // Starts invisible
    duration: 1, // Takes 1 second
    stagger: 0.3, // 0.3s delay between multiple h4 elements
  })
  .from("h1", {
    y: 20, // Starts 20px below
    opacity: 0, // Starts invisible
    scale: 0.2, // Starts at 20% size
    duration: 1, // Takes 1 second
  });

// ============================================================================
// Key Differences from Individual Animations
// ============================================================================
/*
// Individual Animations (Manual Timing)
gsap.to("#box0", { x: 330, delay: 1, duration: 2 });
gsap.to("#box1", { y: -120, delay: 3, duration: 2 });
gsap.to("#box2", { x: 330, y: -180, borderRadius: "50%", delay: 5, duration: 2 });

// Timeline Advantages:
// 1. No manual delay calculations needed
// 2. Easier to reorder animations
// 3. Better organization
// 4. Chainable syntax
*/
