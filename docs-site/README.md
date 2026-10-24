# Documentation site

Astro Starlight serves the eight approved guides. Gameplay information is checked for **1.1.0 Beta**; check a newer release before updating those claims. The original drafts remain in the owner's workspace under `reports/wiki-draft-20261024/`.

## Local work

Use Node 24.21 or newer. From `docs-site/`:

```sh
npm ci
npm run build
npm run check:build
npm run preview
```

Open the printed local URL with `/Dimensional-Chaos-Issues/` at the end. Search uses the production Pagefind index, so check it with `preview` after building. `npm run dev` is useful for writing, but isn't the search test.

Guides live in `src/content/docs/`. Keep their titles and descriptions useful, and use relative links between guides so both the project path and a future custom domain work. Starlight supplies the sidebar, mobile navigation, search and sitemap. Styling is in `src/styles/custom.css`.

The default public URL will be:

`https://shyzoscorp.github.io/Dimensional-Chaos-Issues/`

`site.config.mjs` uses that origin and repository path for canonical URLs, sitemap URLs and robots.txt. `DOCS_SITE` and `DOCS_BASE` can override them for an approved domain change. No custom domain is active in this configuration.

## First publication — after approval

1. Review and merge the site PR. PR and main pushes build and check the site; they **do not deploy**.
2. In repository Settings → Pages, select **GitHub Actions** as the source. Do not change the repository's visibility.
3. In Actions → Documentation, run the workflow on `main` with **publish** checked. Only this manual action can upload a Pages artifact and run the deployment job. Use the `github-pages` environment's reviewer protection if it is available for this repository.
4. Open the project URL. Check a guide, sidebar, mobile menu, search, canonical URL, `/sitemap-index.xml` and `/robots.txt` beneath the repository path before adding the documentation link to CurseForge.

Use the documentation URL on both CurseForge projects. Keep `https://github.com/ShyzosCorp/Dimensional-Chaos-Issues/issues` as their External Issue Tracker URL. Do not publish the old Wiki drafts to GitHub Wiki.

On a project site, crawlers look for the host's root `/robots.txt`, which this repository doesn't control. The generated project-path robots.txt lists our sitemap and blocks nothing; guides are also discoverable through their links and sitemap. Check any existing organization-site root robots rules before launch. On a custom domain at `/`, our generated robots.txt becomes the root file.

## Future domain: wiki-dc.shyzos.xyz

These are manual steps for later approval. Do not assume this subdomain is unused.

1. Confirm ownership and inspect existing DNS records, redirects and services for `wiki-dc.shyzos.xyz`. Keep any existing service intact until a switch is approved.
2. Verify the domain for the ShyzosCorp organization in GitHub's Pages settings using GitHub's supplied TXT record. Keep that verification record. This needs separate DNS authorization.
3. Set the repository Pages custom domain to `wiki-dc.shyzos.xyz`. In Cloudflare DNS, add the approved **CNAME** `wiki-dc` → `shyzoscorp.github.io`, initially **DNS only**. The target has no `https://` and no repository path. Do not create a wildcard record or overwrite an existing record without review.
4. Set repository Actions variables `DOCS_SITE=https://wiki-dc.shyzos.xyz` and `DOCS_BASE=/`. Rebuild, check and manually deploy the approved site. Relative guide links will now resolve from `/`; canonical URLs, sitemap and robots.txt will use the new domain. With the Actions publishing source, GitHub manages the custom domain in settings; a committed CNAME file is not required.
5. Wait for GitHub's DNS and certificate checks, then enable **Enforce HTTPS**. Check the custom domain, assets, search, sitemap, canonicals and redirects from the old project URL. Update both CurseForge documentation links only when this works.

Don't leave DNS pointing at a removed or unclaimed Pages site. No DNS or Pages settings are changed by this PR.

## Google Search Console — after the site is live

For the default Pages URL, add a **URL-prefix** property for `https://shyzoscorp.github.io/Dimensional-Chaos-Issues/`. If Google offers HTML-tag verification, add its exact `google-site-verification` meta tag to Starlight's `head` configuration in a reviewed change, then deploy and verify. Keep the tag afterwards. Don't guess a verification token.

Submit `https://shyzoscorp.github.io/Dimensional-Chaos-Issues/sitemap-index.xml` in Sitemaps. Inspect the homepage and a guide with URL Inspection, check that indexing is allowed and request indexing. Submission doesn't guarantee indexing.

After the custom-domain switch, add a URL-prefix property for `https://wiki-dc.shyzos.xyz/`, verify it and submit `https://wiki-dc.shyzos.xyz/sitemap-index.xml`. Alternatively, an authorized owner can verify the **Domain** property `shyzos.xyz` with Google's TXT record at the zone apex. Don't add a competing TXT record at the `wiki-dc` CNAME itself. Keep the old property for checking redirects and indexing changes.

References: [Astro on Pages](https://docs.astro.build/en/guides/deploy/github/), [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Cloudflare DNS records](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/), [Search Console verification](https://support.google.com/webmasters/answer/9008080).
