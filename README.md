# OpenHood

A responsive landing page for **OpenHood**, shop management software for independent auto repair shop owners. Built with HTML, CSS, and JavaScript, with no dependencies or build step.

- **Meet OpenHood** expands and collapses the application overview.
- **Who it's for** expands and collapses information about the intended audience.
- **What we're building** describes six groups of planned capabilities from the supplied use cases.
- The existing Google Analytics tag is retained.

This is a product introduction, not a working shop management application. Feature descriptions are labeled as planned; the page does not perform scans, stream video, send messages, approve repairs, or redeem rewards.

## Content source

The feature copy is based on `Use Cases (Epics).pdf` (October 29, 2026), pages 3–5. All twelve substantive auto repair use cases are represented:

| Page section | Use case IDs | Source pages |
| --- | --- | --- |
| Show the problem | F26AUTO-UC-7, F26AUTO-UC-10 | 3 |
| Keep everyone in the loop | F26AUTO-UC-6 | 5 |
| Make the next step clear | F26AUTO-UC-5, F26AUTO-UC-15, F26AUTO-UC-16 | 4–5 |
| Talk it through | F26AUTO-UC-11, F26AUTO-UC-12 | 3 |
| Open a window into the bay | F26AUTO-UC-8, F26AUTO-UC-9 | 4 |
| Make the wait a little better | F26AUTO-UC-13, F26AUTO-UC-14 | 4 |

The home organization example (F26AUTO-UC-3) and blank template (F26AUTO-UC-4) are excluded. F26AUTO-UC-7 contains a copied home organization action; the page follows that entry's vehicle-damage title and stated outcome instead.

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

See [GitHub's publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for details. These changes do not automatically publish the site.

## Customize

- Edit `index.html` for the page title and content.
- Edit `styles.css` for colors, fonts, and layout.
- Edit `script.js` for button behavior.
