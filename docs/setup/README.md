# Setup

::: warning Pre-requisites

- node >=9.3.0 & <= 13.0.0
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

If you want to disable the CI, go to `Your project page → Settings → Actions` and select ̀Disable Actions for this repository`.

## Step 3 (optional) - Continuous integration/deployment

🕙Estimated time → **3 minutes**
<br />

We've build a Github Actions and a CircleCI configuration. Github Actions will be great in order to start fast, however the project repository needs to be hosted by Github and be public (Github Actions with private repository needs to subscribe to a paid plan). CircleCI is a little bit complex to be set but will be less restrictive.

#### Github Actions

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
- Fill `Name` input with `FIREBASE_TOKEN`
- Copy the printed firebase token and paste into `Value` input
- Click on `Add secret button`

![Bento starter demo](/assets/img/secret-firebase.png)

All you need to do is to push your project code into `master` with git.

Back to a terminal, run the following command :

```
git push -u origin master
```

This will trigger Github actions workflow, check your code and deploy your project into Firebase. Go to `Your project page → Actions` to follow the Github actions workflow execution.

- Wait again for all the jobs to finish.
- Now the deploy step has completed with success and your project has automatically been deployed to firebase hosting :tada:

![Bento starter demo](/assets/img/github-actions-workflow.png)

#### CircleCI

We've built a CircleCI configuration that will trigger the following actions when you're pushing to your github repository.

The process is the following :

- Check that all project files matches the prettier format : `npm run prettier:check`
- Run the linter : `npm run lint`
- Run unit tests : `npm run test:unit`
- Run e2e tests : `npm run test:e2e:headless`
- Build the project : `npm run build`
- Check your js bundles sizes : `npm run bundlesize`
- **Eventually** deploy the built project to firebase hosting if the targeted branch is **master** : `npm run firebase:deploy:ci`

![CircleCI workflow](/assets/img/ci-workflow.jpg)

⚠️ **For this step, we assume that you already have a github repository that hosts your bento-starter project with your source code pushed on the master branch** ⚠️

Steps :

- Go to [https://circleci.com](https://circleci.com)
- Login with your github account
- Authorize CircleCI to look into your github projects
- Go to `Side menu → Add projects` and click the `Set Up Project` button corresponding to your **bento-starter** project
- You might be asked for choosing an OS and a language. If so, choose `Linux` and `Node`.
- You can directly start your first CircleCI build by clicking `Start building` button.
- Go to `Side menu → Jobs` and you should see your first CircleCI job running
- Now wait for all the jobs to finish

The last job (`deploy`) will fail and this is normal :sweat_smile: It's because of the deployment step (`npm run firebase:deploy:ci`). We need to authorize circle ci to deploy on our firebase hosting project. For this we just need to add a firebase token to circle ci :

- Back to a terminal run the following command :

```
npx firebase login:ci
```

- Login with you google account and authorize firebase-cli. The command will print out a token that looks like this :

```
1/PXcLCJ5BXAZ7ciFwkrrpikUbnMAMX8xRFmt16pLYudg9
```

- Copy this token and in your CircleCI project interface, go to `Your CircleCI project settings → Environment Variables` and click `Add Variable` button.
- For the env variable name, use `FIREBASE_TOKEN` and for the value, use the token you got from the `firebase login:ci` command.
- Go to `Side menu → Jobs` click the job that fails and click the `Rerun workflow` button.
- Wait again for all the jobs to finish.
- Now the deploy step has completed with success and your project has automatically been deployed to firebase hosting :tada:
