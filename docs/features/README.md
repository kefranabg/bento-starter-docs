# Configuration

## Tooling

<br />

[Vue CLI](https://cli.vuejs.org/) is a full system for rapid Vue.js development.

Refer to [the official documentation](https://cli.vuejs.org/) for more details.

## Prerendering

<br />

**Bento-starter** uses [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) for prerendering.
If you don't know what prerendering is, you should read [this](https://github.com/chrisvfritz/prerender-spa-plugin#what-is-prerendering).

The prerendering configuration is available in `vue-config/config.default.js` :

```
new PrerenderSPAPlugin({
  // Required - The path to the webpack-outputted app to prerender.
  staticDir: path.join(__rootDirname),
  // Required - Routes to prerender.
  routes: prerenderedRoutesList // => prerenderedRoutesList is the array of routes to prerender
})
```

If you want to configure the list of routes to prerender, you need to update the `prerenderedRoutesList` variable in `vue-config/config.default.js` :

```
const prerenderedRoutesList = ['/login', '/home', '/']
```

Refer to [the official documentation](https://github.com/chrisvfritz/prerender-spa-plugin) for more details.

## PWA / Service worker

<br />

**Bento-starter** uses [vue-cli-plugin-pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa) to configure **service worker** and PWA stuff.

The **service worker** configuration is available in `public/service-worker.js`.

**Service worker registration** is done from this file `src/misc/register-service-worker.js`.

Refere to [the official documentation](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa) for more details.

## Cloud database

<br />

**Bento-starter** uses [firestore](https://firebase.google.com/docs/firestore/) to store and sync data.
You can find firestore related code in `src/firebase` folder.

**Bento-starter** provides a "CRUD" feature that might help you to manage firestore entities in `src/firebase/generic-db.js`.
You can extend this behavior for your different firestore entities as it is done in `src/firebase/users-db.js` and `src/firebase/user-products-db.js`.

With firestore, you need to secure your data with [security rules](https://firebase.google.com/docs/firestore/security/overview).
You can find find these rules in `src/firebase/firestore.rules`.

To manually deploy firestore rules, run :

```
npx firebase deploy --only rules
```

## User authentication

<br />

## Data management

<br />

Front-end data management is done with [vuex](https://vuex.vuejs.org/).

You can find **vuex** related code in `src/store` folder.

## Hosting

<br />

**Bento-starter** uses [firebase-hosting](https://firebase.google.com/docs/hosting/) for app deployment.

To manually deploy your app, run :

```
npx firebase deploy --only hosting
```

:warning: To deploy, you must have build your app before :

```
npm run build
```

Deployment configuration can be found in `/firebase.json`.

## Continuous integration/deployment

<br />

Continuous integration/deployment is handled by [CircleCI](https://circleci.com/) (**[If you've enabled it](/setup/#step-3-optionnal-circleci-configuration-for-continuous-integration-deployment)**)

CircleCI will process the following :

- Check that all project files matches the prettier format : `npm run prettier:check`
- Run the linter : `npm run lint`
- Run unit tests : `npm run test:unit`
- Run e2e tests : `npm run test:e2e:headless`
- Build the project : `npm run build`
- Check your js bundles sizes : `npm run bundlesize`
- **Eventually** deploy the built project to firebase hosting if the targeted branch is **master** `npm run firebase:deploy`

**CircleCI** configuration is available in `.circleci/config.yml`.

## Tests

<br />

All tests and related configuration can be found in `tests` folder.<br />
[Cypress](https://www.cypress.io/) is use for E2E tests and [Jest](https://jestjs.io/) for unit tests.

You can easily change these testing frameworks with [vue-cli](https://cli.vuejs.org/) if you want.

## Bundle size

<br />

Refer to [the official documentation](https://github.com/siddharthkp/bundlesize) for more details.

## Code format

<br />

**Bento-starter** uses [prettier](https://prettier.io/) to keep you code formatted.

## Code quality

<br />

**Bento-starter** uses [eslint](https://eslint.org/) to control the quality of your code.

## Pages meta infos

<br />

Manipulating the meta information of the head tag is done with [vue-head](https://github.com/ktquez/vue-head).
