# Arifa Rowshon Fabeha — Portfolio

This React/Vite portfolio uses an editorial black-and-amber design for Arifa's confirmed details. It opens directly on the hero section and includes the Fabeha guide, project cards, an interactive coding quiz, and contact email draft.

## Run in Replit

Import this folder or the supplied ZIP into a Node.js Repl. Run `npm install`, then press Run or execute `npm run dev`. The app uses port 3000. Run `npm run build` to produce `dist/`.

## Publish on GitHub Pages

This repository's Pages site serves the `main` branch root. After changing the website, run `npm run build` and commit the generated root `index.html`, `assets/`, `favicon.svg`, and `logos/` along with the source changes. The source HTML is `index.dev.html`; Vite serves it at `/` during development. The build uses relative URLs so the site also works at `https://husainxdev.github.io/arifa-rowshon-fabeha-portfolio/`.

## Update details

Edit `src/data/portfolioData.js` to add confirmed project technologies, screenshots, GitHub/live links, activity dates and certificates, and contact details. Empty fields show as pending or are omitted. Quiz questions and explanations live in `src/data/quizQuestions.js`. The contact form opens a prefilled draft in the visitor's email app; it does not send automatically or require a backend. To send messages directly from the site, configure an email service and replace the form submit handler.

Project and activity fields without confirmed content are kept in the data file for future updates and stay hidden on the website.

## Animation controls

The pause button in the navigation saves the visitor's motion preference. The site also respects the device's reduced-motion setting. Decorative scenes pause outside the viewport, and the canvas pauses when the browser tab is hidden.

`MotionContext.jsx` coordinates motion preferences. Reusable heading reveals, pointer spotlights, card tilt, and the reading-progress line live in `components/ui/MotionPrimitives.jsx`. Project artwork is in `ProjectVisual.jsx`; CSS keyframes are in `src/index.css`. Pointer tilt runs only with a mouse and a fine pointer.

## Project stories, learning, and feedback

- `ProjectShowcase.jsx` features Shastho Sahayak and opens keyboard-accessible project overviews. Screenshots replace the conceptual artwork when supplied; add each screenshot as `{ src, alt, caption }` in `portfolioData.js`. Project documents and references use `{ label, url }`; diagrams use `{ src, alt, caption }`.
- Each project's `contribution` has `role`, `work`, `decisions`, and `lessons`. Fill these with Arifa's actual role and experience. Empty contribution fields stay hidden. List only confirmed implemented work under `features`.
- `portfolioExtras.js` holds the dated current-focus panel and educational concept notes. `updatedAt` is the date the portfolio content was updated, not a live activity timestamp. The algorithm lab uses illustrative examples and does not imply that these are Arifa's contest submissions.
- Add verbatim, approved feedback to `testimonials` as `{ id, quote, name, role, permissionToPublish: true }`. The section stays hidden until a complete entry has publication permission. No testimonials or project-specific personal contributions have been fabricated.
- `LearningCorner.jsx` includes readable concept notes with copyable C++ examples and step-by-step binary-search and two-pointer demonstrations. The pure algorithms live in `src/lib/algorithmSteps.js`.
