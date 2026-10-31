# OpenHood

A responsive landing page for **OpenHood**, a concept for web and mobile repair communication software for independent auto repair shops. Built with HTML, CSS, and JavaScript, with no runtime dependencies or build step.

- The audience, benefit, offering and pricing status appear in the hero.
- **Notify me at launch** is the single bright CTA. A hero text link leads to the signup form, with the before/after video available as a secondary link.
- A local SVG illustrates a customer estimate in a service bay. The repair and dollar amounts are sample data, not a quote or software subscription price.
- A responsive, lazy-loaded YouTube iframe embeds the before/after video using YouTube's privacy-enhanced domain. A text link below the player opens the video on YouTube.
- There are no navigation menus. The launch form asks for a name and valid email address, then displays a local confirmation. It is a preview only: nothing is stored or sent, no notification subscription is created, and form details are never included in analytics. Connect a real signup service before promising launch emails.
- The existing Google Analytics tag is retained. The CTA click event is emitted through that property. Dashboard delivery/access must be verified separately.

This is a product concept, not a working repair application. Customer approvals shown in the illustration are fictional demonstrations. Pricing is explicitly **to be announced** because the project has not defined a commercial price.


## Preview

Serve the project directory over HTTP:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then visit <http://localhost:8000>. Press Ctrl+C to stop the server.

Use the HTTP preview URL rather than opening `index.html` directly. YouTube requires an HTTP referrer for embedded playback; a `file://` preview cannot provide one and produces player error 153. Direct-file previews therefore show a link to watch on YouTube instead. The embedded player remains available when served over HTTP or HTTPS.

## Customize

- Edit `index.html` for the page title and content.
- Edit `styles.css` for colors, fonts, and layout.
- Edit `script.js` for the video link analytics event and local signup preview behavior.
- Edit `assets/repair-preview.svg` for the editable product illustration.
- Pricing text is in the `.pricing` paragraph. Replace it only when an actual price has been decided.
