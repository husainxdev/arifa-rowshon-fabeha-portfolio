# Arifa Rowshon Fabeha — Portfolio

This React/Vite portfolio uses an editorial black-and-amber design for Arifa's confirmed details. It includes the opening animation, Fabiha guide, project cards, coding progress, and contact email draft.

## Run in Replit

Import this folder or the supplied ZIP into a Node.js Repl. Run `npm install`, then press Run or execute `npm run dev`. The app uses port 3000. Run `npm run build` to produce `dist/`.

## Update details

Edit `src/data/portfolioData.js` to add confirmed project technologies, screenshots, GitHub/live links, activity dates and certificates, and contact details. Empty fields show as pending or are omitted. The problem counter and progress calculation read the central `codingProgress` values. The contact form opens a prefilled draft in the visitor's email app; it does not send automatically or require a backend. To send messages directly from the site, configure an email service and replace the form submit handler.

Project and activity fields without confirmed content are kept in the data file for future updates and stay hidden on the website.

## Animation controls

The pause button in the navigation saves the visitor's motion preference. The site also respects the device's reduced-motion setting. Decorative scenes pause outside the viewport, and the canvas pauses when the browser tab is hidden.

`MotionContext.jsx` coordinates motion preferences. Reusable heading reveals, pointer spotlights, card tilt, and the reading-progress line live in `components/ui/MotionPrimitives.jsx`. Project artwork is in `ProjectVisual.jsx`; CSS keyframes are in `src/index.css`. Pointer tilt runs only with a mouse and a fine pointer.
