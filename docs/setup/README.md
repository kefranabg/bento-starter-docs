# Setup

::: warning Pre-requisites

- node9.3.0+
- npm@5.5.0+

We recommand to use the node LTS version

:::

::: tip
We highly recommend to use [VSCode](https://code.visualstudio.com/) with the following plugins to get a better development experience :

- Prettier
- Eslint
- Vetur

**bento-starter** comes with a default code editor config that will automatically be used by vscode. This config is available in `.vscode/settings.json`.
:::

## Step 1 - Installation

🕙Estimated time → **20 seconds**
<br />

```
git clone https://github.com/kefranabg/bento-starter.git my-bento-project
cd my-bento-project

# Install dependencies and clean git repository
npm run setup
```

## Step 2 - Firebase configuration

🕙Estimated time → **3 minutes**
<br />

- Create a new firebase project with the [firebase console](https://console.firebase.google.com)
- Once your firebase project is created, add an application by clicking the web button 👉 ![Firebase web app button](/assets/img/firebase-web-btn.jpg). Enter an app nickname but do not check "Also set up Firebase Hosting" and click `next`. Copy the `firebaseConfig` object and replace the config variable in `/src/firebase/init.js` in bento-starter project.
- Go to `Side menu → Database → Create database` and select `Start in test mode`. Now your firestore database is up.
- Go to `Side menu → Authentication` click `Set up sign-in method`.
- Click on Google provider, enable it by clicking the switch button, select a project support email and click `save` button. **You will be able to change or add new auth providers later if you need to.**
- Back to your bento-starter project, open a console and run :

```
npm i -g npx

# Login with the account you used to create the firebase project
npx firebase login

# Select the project you've just created and use "default" as alias
npx firebase use --add

# Commit your changes
git add .firebaserc src/firebase/init.js
git commit -m ':wrench: Add firebase config'

# Build the app and deploy
npm run build
npx firebase deploy
```

**You're done ! :tada:**<br />
**Your project is now available on firebase hosting**.<br />
**You can also run `npm run serve` and start your app development !**

However we recommend you to go through optional steps to get a better developer experience :sunglasses:

If you really don't want to us CI, you can disable it. Go to `Your project page → Settings → Actions` and select ̀`Disable Actions for this repository`.

## Step 3 (optional) - Continuous integration/deployment

🕙Estimated time → **3 minutes**
<br />

We've built a Github Actions configuration that will trigger the following actions when you're pushing on master or make a pull-request.

The process is the following :

- Check that all project files matches the prettier format : `npm run prettier:check`
- Run the linter : `npm run lint`
- Run unit tests : `npm run test:unit`
- Run e2e tests : `npm run test:e2e:headless`
- Build the project : `npm run build`
- Check your js bundles sizes : `npm run bundlesize`
- **Eventually** deploy the built project to firebase hosting only when you push commits to **master** : `npm run firebase:deploy:ci`

You should also know that each time a commit is pushed on a pull-request branch, it will trigger the CI workflow.

⚠️ **For this step, we assume that you already have created a github repository that will host your bento-starter project** ⚠️

You need to configure Github Actions with your firebase credentials in order it can deploy your project. First of all you need to get a firebase token from your credentials :

```
npx firebase login:ci
```

- Login with you google account and authorize firebase-cli. The command will print out a token that looks like this :

```
1/PXcLCJ5BXAZ7ciFwkrrpikUbnMAMX8xRFmt16pLYudg9
```

Once you did that, you need to add this token in your Github project.

- Go to `Your project page → Settings → Secrets`
- Click on `Add a new secret`
- Fill `Name` input with `x`
- Copy the printed firebase token and paste into `Value` input
- Click on `Add secret button`

![Bento starter demo](/assets/img/secret-firebase.png)

All you need to do is to push your project code into `master` with git.

- Back to a terminal run the following command :

```
git push -u origin master
```

This will trigger Github actions workflow, check your code and deploy your project into Firebase. Go to `Your project page → Actions` to follow the Github actions workflow execution.

- Wait again for all the jobs to finish.
- Now the deploy step has completed with success and your project has automatically been deployed to firebase hosting :tada:

![Bento starter demo](/assets/img/github-actions-workflow.png)
