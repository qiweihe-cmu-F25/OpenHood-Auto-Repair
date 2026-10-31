# OpenHood

A responsive landing page for **OpenHood**, a concept for web and mobile repair communication software for independent auto repair shops. Built with HTML, CSS, and JavaScript, with no runtime dependencies or build step.

- The audience, benefit, offering and pricing status appear in the hero.
- **Before & after video** is the single bright CTA and scrolls to the embedded YouTube video.
- A local SVG illustrates a customer estimate in a service bay. The repair and dollar amounts are sample data, not a quote or software subscription price.
- A responsive, lazy-loaded YouTube iframe embeds the before/after video using YouTube's privacy-enhanced domain. A text link below the player opens the video on YouTube.
- There are no navigation menus or competing CTA buttons.
- The existing Google Analytics tag is retained. The CTA click event is emitted through that property. Dashboard delivery/access must be verified separately.

This is a product concept, not a working repair application. Customer approvals shown in the illustration are fictional demonstrations. Pricing is explicitly **to be announced** because the project has not defined a commercial price.

## Content source

The copy follows the Jama project vision, Priya's persona, the core repair evidence/estimate/approval epics, and the walkthrough findings read on October 30, 2026. The landing page focuses on one benefit and one repair story instead of listing all twelve epics.

| Landing page idea | Jama basis |
| --- | --- |
| Evidence customers can understand | F26AUTO-UC-7, F26AUTO-UC-10, F26AUTO-UC-15 |
| Itemized costs and individual repair decisions | F26AUTO-UC-5 |
| A shared record of pending and completed decisions | F26AUTO-UC-6 |
| Fewer repeated explanations and missed-call follow-ups | Vision Statements, Priya Shah, Walkthrough Findings |

The home organization example (F26AUTO-UC-3) and blank template (F26AUTO-UC-4) are excluded. F26AUTO-UC-7 contains a copied home organization action; the page follows that entry's vehicle-damage title and stated outcome instead.

## Preview

Serve the project directory over HTTP:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://localhost:8000>. Press Ctrl+C to stop the server.

Use the HTTP preview URL rather than opening `index.html` directly. YouTube requires an HTTP referrer for embedded playback; a `file://` preview cannot provide one and produces player error 153. Direct-file previews therefore show a link to watch on YouTube instead. The embedded player remains available when served over HTTP or HTTPS.

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
- Edit `script.js` for the CTA analytics event.
- Edit `assets/repair-preview.svg` for the editable product illustration.
- Pricing text is in the `.pricing` paragraph. Replace it only when an actual price has been decided.

### Update the YouTube video

The current video is [OpenHood before & after](https://www.youtube.com/watch?v=nXgUkENXta4). In `index.html`, find the iframe with `id="before-after-video"` and replace the video ID in its `src` to change the video. Also update the **Watch on YouTube** link below the player and its title as needed. Keep the responsive styling and fullscreen attributes.

Provide captions on YouTube and add the actual transcript if needed. Video playback analytics would require a separate YouTube player integration; the current script only measures clicks on the landing page CTA.
