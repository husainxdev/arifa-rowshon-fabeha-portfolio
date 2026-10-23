# Content to provide before every requested feature can be published

The site shows only confirmed information. Update `src/data/portfolioData.js` and rebuild after adding the following:

1. **CV PDF:** put the real file at `public/cv.pdf` and set `personalInfo.cvUrl` to `"./cv.pdf"`. The Download CV button stays disabled until then.
2. **More projects:** add a third or fourth real project to `projects` with a one-line problem, your verified contribution, implemented features, technologies, screenshots, repository URL, and live demo URL when available. The current two projects stay clearly marked Built project and In Progress.
3. **Current project details:** fill the empty `features`, `technologies`, `screenshots`, `github`, `demo`, and `contribution` fields for Shastho Sahayak and CloudSphere only where accurate.
4. **Verified metrics:** add confirmed certifications and CGPA or a platform rating to `portfolioMetrics`. The proof strip currently uses four confirmed facts instead. The 321+ problems figure was supplied by Arifa and is not fetched live.
5. **LeetCode:** set `personalInfo.leetcode` only if Arifa has a real profile. No LeetCode card or count is shown now.
6. **Direct contact form:** create a Formspree form, copy `.env.example` to `.env`, set `VITE_FORMSPREE_ENDPOINT`, then rebuild. Until configured, submitting opens a prefilled email draft. The email address and social links already work.

The right side of the hero is a lightweight terminal illustration, so a personal photo is optional. If you want a photo later, supply an approved portrait with alt text; do not use a placeholder portrait of another person.
