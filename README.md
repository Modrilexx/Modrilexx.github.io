# Mopik Automation — Career-Engineered Portfolio (IS117)

## Live Link
https://modrilexx.github.io/

## Repository
https://github.com/Modrilexx/Modrilexx.github.io

## Overview
This project is a Career-Engineered Portfolio site for **Mopik Automation**, focused on automation systems for **streamers** and **e-commerce brands** in **NYC/NJ**. The site includes a clear CTA and lead-gen forms that generate pre-filled email requests.

## Orchestration Log (AI Error + Fix)
During development, the deployed site displayed raw HTML code instead of rendering the page. The root cause was editing `index.html` using TextEdit in rich-text mode, which escaped HTML into `&lt;` and wrapped it in Apple `<span>` tags. The fix was rewriting `index.html` as plain HTML via Terminal and ensuring GitHub Pages served the correct root structure.

## Files Included (Rubric)
- `README.md` — human-facing project overview + live link + orchestration log
- `AGENTS.md` — AI-facing “master implementation letter”
- Codebase — `index.html`, `css/styles.css`, `js/main.js`, and assets

