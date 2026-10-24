# Content to provide before every requested feature can be published

The site shows only confirmed information. Update `src/data/portfolioData.js` and rebuild after adding the following:

1. **Project evidence:** add real screenshots, repository URLs, actual contributions, technologies, and documents for Shastho Sahayak and CloudSphere when available. Empty details are clearly identified in the project overview.
2. **More projects:** add a third or fourth real project to `projects` with a one-line problem, your verified contribution, implemented features, technologies, screenshots, repository URL, and live demo URL when available. The current two projects stay clearly marked Built project and In Progress.
3. **CV upkeep:** `public/cv.pdf` is available. When verified details change, update `scripts/generate-cv.py`, regenerate the PDF, and rebuild the site.
4. **Verified metrics:** add a confirmed certification count only if applicable. The proof strip now shows the supplied 3.83 CGPA and 42 completed credits. The 321+ problems figure was supplied by Arifa and is not fetched live.
5. **LeetCode:** set `personalInfo.leetcode` only if Arifa has a real profile. No LeetCode card or count is shown now.
6. **Direct contact form:** create a Formspree form, copy `.env.example` to `.env`, set `VITE_FORMSPREE_ENDPOINT`, then rebuild. Until configured, submitting opens a prefilled email draft. The email address and social links already work.

The hero uses a compact status panel without a portrait.
