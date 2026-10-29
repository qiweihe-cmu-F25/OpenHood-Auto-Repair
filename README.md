# Placeholder website

A responsive, static placeholder page built with HTML, CSS, and JavaScript. No dependencies or build step.

- **Say hello** displays a greeting.
- **Learn more** expands and collapses a short description.

## Preview

Open `index.html` in your browser, or run this command from the project directory:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Press Ctrl+C to stop the server.

## Deploy to GitHub Pages

1. Commit these files and push them to the `main` branch of your GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/ (root)**, then click **Save**.
5. Once GitHub finishes deploying, open the website URL shown in the Pages settings.

For a project repository, the URL is normally `https://<username>.github.io/<repository>/`. Relative asset paths let this page work under a repository subpath as well as on a custom domain. The `.nojekyll` file disables Jekyll processing.

See [GitHub's publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for details. This project has not been published automatically.

## Customize

- Edit `index.html` for the page title and content.
- Edit `styles.css` for colors, fonts, and layout.
- Edit `script.js` for button behavior.
