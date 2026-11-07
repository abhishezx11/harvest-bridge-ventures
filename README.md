# Harvest Bridge Ventures — Website

A responsive static website for Harvest Bridge Ventures. It includes the supplied navy-and-gold company logo, services, product categories, FAQs, contact details and an inquiry form.

## Files in this package

- `index.html` — website content and page structure
- `styles.css` — responsive design and layout
- `script.js` — mobile navigation and inquiry-form behavior
- `assets/harvest-bridge-logo.png` — supplied company logo (used in the header, footer and browser tab icon)
- `.gitignore` — common generated files to ignore

## Upload to the existing GitHub repository

1. Extract this ZIP on your computer.
2. Open the extracted folder.
3. Open your existing GitHub repository and choose **Add file → Upload files**.
4. Upload the contents of the extracted folder, including the `assets` folder. Do not upload the ZIP file itself or the containing folder.
5. Confirm that `index.html` is visible directly on the repository homepage, alongside `styles.css`, `script.js`, `README.md`, `.gitignore`, and the `assets` folder.
6. Commit the changes to the `main` branch.

If the repository already contains files with the same names, GitHub will update them when you upload and commit the new versions.

## Deploy with Vercel

If the existing Vercel project is connected to this GitHub repository, committing the files to `main` should trigger a new deployment automatically. In Vercel, open the project and check **Deployments**. Wait for the newest deployment to show **Ready**, then use its Visit link.

For this plain HTML/CSS/JavaScript site, use the **Other** framework preset, root directory `./`, and leave build command and output directory blank. The `index.html` file must be in the repository root.

## Inquiry form behavior

The form validates the required fields and opens the visitor's default email application with the inquiry pre-filled and addressed to both company email addresses. The visitor must send the email; this static website does not store submissions on a server. For automatic inquiry collection, connect a form service or backend later.

## Contact details

- abhishekharvestbridgeventures@gmail.com
- anantharvestbridgeventures@gmail.com
- +91 81154 06560
- +91 72688 61477

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.
