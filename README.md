# DeepSea Guardian — Hero Background

Built for the **DeepSea Guardian** hackathon submission (PS03 — AI-Powered
Deep Ocean Pollution & Biodiversity Monitoring Platform). The brief pitches
the product as *"NASA Mission Control meets a modern AI SaaS"* — so the hero
isn't just an ocean scene, it's an ocean scene that reads as **instrumented
and actively monitored**: real-time coordinates, a live Global Marine Risk
Index, a UTC clock, and a sonar sweep sit on top of the same underwater
world the rest of the dashboard (World Map, Alert Center, Species Tracker)
will live in.

Stack matches the deck's tech slide: React 18 + Vite, Tailwind, GSAP, Three.js
/ React Three Fiber + Drei.

## Setup

\`\`\`bash
npm install
npm run dev
\`\`\`

## What's new vs. a generic underwater background

- **\`HudOverlay.jsx\`** — sector coordinates, a live UTC clock, and two
  count-up stat readouts (Risk Index, species tracked) styled like real
  telemetry, in a monospace face reserved just for data.
- **\`SonarSweep.jsx\`** — the hero's signature element: a slow-rotating radar
  sweep behind the headline, tying the organic 3D ocean to the product's
  "we are watching this in real time" pitch. Freezes to a static ring under
  reduced motion.
- **Brand palette discipline**: signal-cyan is the one "this is live data"
  color, amber is reserved *only* for risk/alert readouts, violet is
  reserved *only* for AI-associated accents (one jellyfish carries it, as a
  quiet nod to the AI Risk Prediction Engine living in the same reef).
- **Type system**: Sora (display headlines), Inter (body copy), IBM Plex
  Mono (every HUD/data readout) — mirrors the "mission control" concept
  instead of a generic marketing sans.

## Architecture

\`\`\`
src/
  components/underwater/   the 3D ocean itself (unchanged core: boids fish,
                            shader caustics/god rays, jellyfish, coral,
                            seaweed, bubbles, marine snow, megafauna pass)
  components/ui/
    HeroSection.jsx         headline + CTAs + wires HUD/sonar together
    HudOverlay.jsx          coordinate/clock/stat readouts
    SonarSweep.jsx          rotating radar-sweep signature element
  hooks/
    useBoids.js              flocking simulation
    useCountUp.js             eased count-up for stat readouts
    useReducedMotion.js       live prefers-reduced-motion listener
  shaders/                   caustics, god rays, sway + glow materials
\`\`\`

Everything from the original build notes on performance (instancing,
capped DPR, lazy-loaded scene layers, tab-visibility pause,
\`PerformanceMonitor\`) still applies — see inline comments in
\`UnderwaterScene.jsx\`. The HUD and sonar sweep are plain DOM/CSS, not
WebGL, so they cost nothing on the render budget.

## Reduced motion

Same live \`matchMedia\` listener drives everything: boids stop, particles
stop, camera holds still, the sonar sweep freezes to a static ring, and the
UTC clock keeps ticking (it's data, not decoration) while count-up numbers
jump straight to their target instead of animating up.
