Built with

- https://sveltekit.org
- https://picocss.com/
- https://fontsource.org/
- https://github.com/janosh/svelte-toc

Deployed with adapter-static, ploi.io and Hetzner Cloud:

- https://aktuelle-erderhitzung.de

## TODOs / ideas

- [ ] Direct visit to /impressum does not work with nginx?
- [ ] Add carton in the end https://www.slanecartoon.com/-/galleries/climate-quest-cartoons/-/medias/c368ca68-0ef0-44bf-8275-3d2475b09e70-choosing-our-degrees
- [ ] Implement accessible modal to accept all social media embed providers at one (cookie banner), e.g. https://github.com/AgnosticUI/svelte-a11y-dialog?
- [ ] Add Theme switcher dark/light mode
- [ ] Style simple-toc, improve mobile styles, link title to first section?
- [ ] a11y check
- [ ] Link to my insta profile?

## How was it created?

```bash
npm create svelte@latest .
npm i @picocss/pico
npm i -D sass

npm install -D svelte-preprocess
npm i svelte-local-storage-store
```

Resources used:

- https://joyofcode.xyz/using-pico-css-with-svelte

<hr>

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
