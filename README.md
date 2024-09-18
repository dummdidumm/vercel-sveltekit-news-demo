# SvelteKit + Vercel News-Style Demo

A SvelteKit app running on Vercel, showcasing a news site. Articles are ISR'd, with the possibility to refresh their "Last updated" timestamp (i.e. regenerate the articles) using the `api/cms/refresh` endpoint.

Also showcases the toolbar: Visible during local development and on preview deployments. Contains a flag for making the the headlines on the home page bigger.

Deployed to production at https://vercel-sveltekit-news-demo.vercel.app/

## Setting it up

- `pnpm install`
- `vercel` to deploy somewhere
- `node -e "console.log(crypto.randomBytes(32).toString('base64url'))"`
- `vc env add FLAGS_SECRET` and copy just created string into the prompt
- `vc env pull` to get all values into a local `.env` file
- `pnpm dev` to run locally
