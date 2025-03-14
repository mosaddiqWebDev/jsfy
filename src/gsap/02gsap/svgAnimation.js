/* ============================================================================
   GSAP SVG Path Animation with Mouse Interaction
   ============================================================================
   - This script animates an SVG path dynamically using GSAP, responding to mouse movements.
   - The SVG path's midpoint (control point) updates based on the mouse position, and it resets to its original shape when the mouse leaves the SVG container.
*/

// ============================================================================
// Initial and Final Path Definitions
// ============================================================================
// initialPath: Defines the starting SVG path, a quadratic Bézier curve
// finalPath: Defines the path to reset to when the mouse leaves
let initialPath = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;

// SVG Path Syntax Explained:
// - M x1 y1: Move to (x1, y1) - starting point of the path (10, 100)
// - Q x2 y2 x3 y3: Quadratic Bézier curve to endpoint (x3, y3) with control point (x2, y2)
//   - Here: (x2, y2) = (500, 100), (x3, y3) = (990, 100)

// Note: initialPath and finalPath are identical here, meaning the path resets to its original shape.

// ============================================================================
// Select the SVG Container
// ============================================================================
// Targets the div with id="string" that contains the SVG
const string = document.querySelector("#string");

// ============================================================================
// Mouse Move Event Listener
// ============================================================================
// Updates the SVG path's control point (midpoint) to the mouse's current position
string.addEventListener("mousemove", (e) => {
  // Define a new path with the control point at the mouse's (x, y) coordinates
  let initialPath = `M 10 100 Q ${e.clientX} ${e.clientY} 990 100`;

  // Log the mouse's Y-coordinate for debugging purposes
  console.log(e.clientY);

  // Animate the SVG path to the new shape using GSAP
  gsap.to("svg path", {
    attr: { d: initialPath }, // Updates the 'd' attribute of the path
    duration: 0.2, // Short duration for responsive animation
    ease: "power3.out", // Smooth easing for natural movement
  });
});

// ============================================================================
// Mouse Leave Event Listener
// ============================================================================
// Resets the SVG path to its original shape when the mouse leaves the container
string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath }, // Reverts to the predefined finalPath
    duration: 1.5, // Longer duration for a noticeable reset
    ease: "elastic.out(1,0.2)", // Elastic easing for a bouncy, playful effect
  });
});

/* ============================================================================
   HTML Structure for Reference
   ============================================================================
   <body class="bg-gradient-to-b from-slate-950 to-black overflow-x-hidden flex justify-center">
     <div id="string" class="w-full h-50 flex justify-center items-center">
       <svg width="1000" height="200">
         <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
       </svg>
     </div>
     <!-- GSAP & ScrollTrigger Scripts -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
     <!-- Main JavaScript -->
     <script type="module" src="/src/main.js"></script>
   </body>
*/

// ============================================================================
// Key Concepts Explained
// ============================================================================
/*
   - **SVG Path Animation**: GSAP animates the 'd' attribute of the SVG path, allowing dynamic shape changes.
   - **attr**: GSAP property to target and modify HTML/SVG attributes (here, the 'd' path definition).
   - **Mouse Events**:
     - 'mousemove': Updates the path's control point to the mouse position in real-time.
     - 'mouseleave': Triggers the reset animation to the finalPath.
   - **Easing**:
     - 'power3.out': Provides smooth, decelerating motion during mouse movement.
     - 'elastic.out(1,0.2)': Adds a bouncy, elastic reset effect.
   - **Client Coordinates**:
     - e.clientX: Mouse X-position relative to the viewport.
     - e.clientY: Mouse Y-position relative to the viewport.

   Notes:
   - The SVG container (#string) must fully enclose the SVG for mouse events to register correctly.
   - Adjust SVG width/height or path coordinates if the layout changes.
   - finalPath can differ from initialPath if a different reset shape is desired.
*/
