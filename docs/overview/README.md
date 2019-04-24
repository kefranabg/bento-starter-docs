---
sidebarDepth: 0
---

# Welcome to bento-starter :wave:

[![CircleCI](https://circleci.com/gh/kefranabg/bento-starter/tree/master.svg?style=svg&circle-token=f311e2320782a12321a769faa2ef1d3cdf5e1a10)](https://circleci.com/gh/kefranabg/bento-starter/tree/master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/vuesion/vuesion/graphs/commit-activity)
[![Dependencies](https://img.shields.io/david/kefranabg/bento-starter.svg)](https://david-dm.org/kefranabg/bento-starter)
[![DevDependencies](https://img.shields.io/david/dev/kefranabg/bento-starter.svg)](https://david-dm.org/kefranabg/bento-starter?type=dev)
<br />

:bento: **bento-starter** is an Open-Source Full-Stack solution that helps you to build fast and maintainable web applications using tools like Vue.js, Firebase, Progressive Web Apps support, dynamic offline support... The goal of this project is to provide a powerfull and well configured stack (with CI/CD, hosting...) so you can focus on writing your web application very quickly.

As this project is a template project and not a CLI, you have access to the entire app configuration so you can change it according to your needs.

## Demo

:point_right: [https://bento-starter.firebaseapp.com](https://bento-starter.firebaseapp.com)

![Bento starter demo](/assets/img/demo.gif)

**bento-starter** comes with a small example of "products management" in the [products page](https://bento-starter.firebaseapp.com/login?redirectUrl=%2Fproducts)**(Authentication required)** to demonstrate how to manage your data with this stack.

**Lighthouse score :**

![Lighthouse score](/assets/img/lighthouse-score-report.jpg)

**Optional preconfigured CircleCI workflow :**

![CircleCI workflow](/assets/img/ci-workflow.jpg)

**The stack is made up of :**

- :metal: [Vue.js](https://vuejs.org/) : front-end framework
- :wrench: [Vue-cli](https://cli.vuejs.org/) : standard tooling for vue.js development
- :repeat: [Vuex](https://vuex.vuejs.org/) : state management
- :floppy_disk: [Firestore](https://firebase.google.com/products/firestore/) : cloud NoSQL Database
- :house: [Firebase hosting](https://firebase.google.com/products/hosting/) : fast and secure web hosting
- :bust_in_silhouette: [Firebase authentication](https://firebase.google.com/products/firestore/) : for easy authentication
- :iphone: [PWA](https://www.npmjs.com/package/@vue/cli-plugin-pwa) : progressive web app support
- :lipstick: [Prettier](https://prettier.io/) : code formating rules
- :rotating_light: [Eslint](https://eslint.org/) : control code quality
- :white_check_mark: [Jest](https://jestjs.io/) : unit testing
- :white_check_mark: [Cypress](https://www.cypress.io/) : e2e testing
- :mag: [Vue head](https://github.com/ktquez/vue-head) : meta description per page
- :page_facing_up: **[Optional]** [prerender spa plugin](https://github.com/chrisvfritz/prerender-spa-plugin) : pages prerendering
- :green_heart: **[Optional]** [circleci](https://circleci.com/) : continuous integration/deployment
- :package: **[Optional]** [bundlesize](https://github.com/siddharthkp/bundlesize) : control your javascript bundles sizes

**App embedded features :**

- 👤 Google authentication
- 📴 Offline support (dynamic & static caching)
- 🆕 New version available prompt on new app deployments
- ➕ Add to home screen prompt for ios & android
- ↩️ Smart redirection for auth protected routes
- ✨ Products page example to demonstrate app data management with firestore and vuex
- 💪 Better PWA support for all browsers with [PWACompat](https://github.com/GoogleChromeLabs/pwacompat)

<br />
