# GSAP Learning Documentation

This project documents my journey learning **GSAP (GreenSock Animation Platform)**, starting with the `to` and `from` methods. The goal is to create a reference I can revisit for revision and to build upon as I explore more GSAP features.

## File Overview

- **`toFrom.js`**: Contains examples and detailed comments explaining GSAP's `to` and `from` methods, including properties like `duration`, `delay`, `repeat`, `yoyo`, and `stagger`.

## Key Concepts Learned

1. **GSAP Basics**

   - `gsap.to()`: Animates an element _from_ its current state _to_ a specified state.
   - `gsap.from()`: Animates an element _from_ a specified state _to_ its current state.
   - Both methods take two arguments: the target (e.g., "#box") and an object with animation properties.

2. **Common Animation Properties**

   - `x`, `y`: Move horizontally or vertically (pixels).
   - `duration`: Animation length (seconds).
   - `delay`: Wait time before starting (seconds).
   - `rotate`: Rotation (degrees).
   - `scale`: Size multiplier (e.g., 0.5 = half size).
   - `opacity`: Transparency (0 to 1).
   - `backgroundColor`, `borderRadius`: Styling changes.

3. **Special Features**
   - `stagger`: Delays animation start for multiple elements (e.g., 0.3s between each).
   - `repeat`: Loops the animation (e.g., `2` = 3 total plays; `-1` = infinite).
   - `yoyo`: Reverses direction on each repeat when `true`.

## How to Use

- Open `toFrom.js` to see code examples with explanations.
- Test the animations in a browser by linking GSAP (e.g., via CDN) and your HTML/CSS setup.
- Example CDN: `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>`

## Next Steps

- Explore more GSAP methods (e.g., `fromTo`, timelines).
- Add more examples to `toFrom.js` as I learn.

Happy animating!
