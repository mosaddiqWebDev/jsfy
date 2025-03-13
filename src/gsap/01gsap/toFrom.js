// toFrom.js
// =========
// A documentation of GSAP basics: `to` and `from` methods, properties, repeat, and yoyo
// This file is designed for easy revision of GSAP animations

// ----------------------------------------------------------------------------
// GENERAL NOTES
// ----------------------------------------------------------------------------
// - GSAP animations require two arguments: the target element(s) and an object with properties to animate
// - `gsap.to()`: Animates FROM the element's current state TO the specified properties
// - `gsap.from()`: Animates FROM the specified properties TO the element's current state
// - Common properties:
//   - x: Horizontal movement (pixels)
//   - y: Vertical movement (pixels)
//   - duration: Animation length (seconds)
//   - delay: Wait time before starting (seconds)
//   - rotate: Rotation (degrees)
//   - scale: Size multiplier (1 = original, 0.5 = half)
//   - opacity: Transparency (0 = invisible, 1 = fully visible)
//   - backgroundColor: Background color (e.g., "blue")
//   - borderRadius: Corner rounding (e.g., "50%" for circle)
//   - stagger: Delay between animations for multiple elements (seconds)
//   - repeat: Number of repeats after initial play (-1 for infinite)
//   - yoyo: Reverses animation on each repeat (true/false)

// ----------------------------------------------------------------------------
// EXAMPLE 1: Basic `gsap.to()` Animation
// ----------------------------------------------------------------------------
// Moves the element with id="box" downward by 150px
gsap.to("#box", {
  y: 150, // Target vertical position: 150px down
  duration: 2, // Takes 2 seconds to complete
  delay: 5.3, // Starts after a 5.3-second delay
});

// ----------------------------------------------------------------------------
// EXAMPLE 2: `gsap.to()` with Multiple Properties
// ----------------------------------------------------------------------------
// Animates the element with id="box2" with various transformations
gsap.to("#box2", {
  x: 250, // Moves 250px to the right
  duration: 5, // Takes 5 seconds
  delay: 0.3, // Starts after a 0.3-second delay
  rotate: 360, // Rotates a full 360 degrees
  backgroundColor: "blue", // Changes background to blue
  borderRadius: "50%", // Becomes circular
  scale: 0.5, // Shrinks to half its original size
});

// ----------------------------------------------------------------------------
// EXAMPLE 3: `gsap.from()` with Stagger
// ----------------------------------------------------------------------------
// Animates all <h2> elements FROM a hidden, offset state TO their current state
gsap.from("h2", {
  opacity: 0, // Starts invisible
  y: 20, // Starts 20px below current position
  duration: 1, // Takes 1 second per element
  delay: 0.5, // Starts after a 0.5-second delay
  stagger: 0.3, // Each <h2> starts 0.3 seconds after the previous one
  // Result: If you have 3 <h2>s, they fade in one-by-one with a 0.3s gap
});

// ----------------------------------------------------------------------------
// EXAMPLE 4: `gsap.to()` with Repeat and Yoyo
// ----------------------------------------------------------------------------
// Animates the element with id="box" with repeating back-and-forth motion
gsap.to("#box", {
  y: 400, // Moves 400px down
  x: 100, // Moves 100px right
  duration: 2, // Takes 2 seconds per cycle
  delay: 1, // Starts after a 1-second delay
  rotate: 360, // Rotates 360 degrees
  borderRadius: "50%", // Becomes circular
  repeat: 2, // Repeats 2 times after the initial play (total: 3 plays)
  yoyo: true, // Reverses direction on each repeat
  // How it works:
  // 1. Forward: Current state -> Target state (y=400, x=100, etc.)
  // 2. Backward: Target state -> Current state (first repeat)
  // 3. Forward: Current state -> Target state (second repeat)
  // Ends at the target state after 3 plays
});

// ----------------------------------------------------------------------------
// ADDITIONAL NOTES ON REPEAT AND YOYO
// ----------------------------------------------------------------------------
// - `repeat: x` means the animation plays once, then repeats x times (total = x + 1 plays)
//   - Example: repeat: 1 = 2 plays (initial + 1 repeat)
//   - Use repeat: -1 for infinite looping
// - Without `yoyo`, the animation resets to the start and replays forward each time
//   - Example (without yoyo, repeat: 2):
//     1. Current -> Target
//     2. Jumps back to Current -> Target
//     3. Jumps back to Current -> Target
//     Ends at Target after 3 forward plays
// - With `yoyo: true`, it alternates direction (forward, backward, forward, etc.)
//   - Example (with yoyo, repeat: 2):
//     1. Current -> Target (forward)
//     2. Target -> Current (backward)
//     3. Current -> Target (forward)
//     Ends at Target after 2 repeats
// - Why x-1 for repeat count without yoyo?
//   - The initial play counts as 1, so repeat: 1 adds 1 more play (total 2)
//   - With yoyo, it still repeats x times, but you see the back-and-forth effect
