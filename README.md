# Harvest Bridge Ventures — Website

A responsive, static business website for Harvest Bridge Ventures, built with HTML, CSS and vanilla JavaScript. It is ready to upload as a GitHub repository and deploy with GitHub Pages.

## Preview locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Open `index.html` in a browser, or run a local static server from this folder:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## Publish using GitHub Pages

1. Create a new GitHub repository, for example `harvest-bridge-ventures`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. GitHub will provide the published website URL after deployment.

## Inquiry form

The inquiry form validates the required fields and opens the visitor's default email application with the inquiry pre-filled and addressed to both company email addresses:

- abhishekharvestbridgeventures@gmail.com
- anantharvestbridgeventures@gmail.com

This is a static-site implementation, so it does not store or transmit form submissions by itself. The visitor must send the pre-filled email. To collect inquiries directly on the website without opening an email app, connect a form backend such as Formspree or a custom API and update `script.js`.

## Contact details shown

- abhishekharvestbridgeventures@gmail.com
- anantharvestbridgeventures@gmail.com
- +91 81154 06560
- +91 72688 61477

## Customisation

- Main page content: `index.html`
- Styling and responsive layout: `styles.css`
- Mobile navigation and inquiry form: `script.js`

The page uses Google Fonts and remote Unsplash image URLs, so those assets require an internet connection. Replace them with locally hosted images if you want a fully self-contained site.
