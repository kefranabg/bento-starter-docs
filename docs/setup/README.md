# Setup

::: warning Pre-requisites

- node@9.3.0+
- npm@5.5.0+
  :::

::: tip
We highly recommand to use [VSCode](https://code.visualstudio.com/) with the following plugins to get a better development experience :

- Prettier
- Eslint
- Vetur

**bento-starter** comes with a default code editor config that will automatically be used by vscode. This config is available in `.vscode/settings.json`.
:::

## Step 1 - Installation

🕙Estimated time → **20 seconds**
<br />

```
git clone https://github.com/kefranabg/bento-starter.git
cd bento-starter
cp .env.example .env.local
npm i
```

## Step 2 - Firebase configuration

🕙Estimated time → **5 minutes**
<br />

- Create a new firebase project with the [firebase console](https://console.firebase.google.com)
- Once your firebase project is created, add an application by clicking the web button 👉 ![Firebase web app button](/assets/img/firebase-web-btn.jpg) and copy the config object and replace the config variable in `/src/firebase/init.js` in bento-starter project.
- Go to `Side menu → Database → Create database` and select `Start in test mode`. Now your firestore database is up.
- Go to `Side menu → Authentication` click `Set up sign-in method`.
- Click on Google provider, enable it by clicking the switch button, select a project support email and click `save` button. **You will be able to change or add new auth providers later if you need to.**
- Back to your bento-starter project, open a console and run :

```
npm i -g npx

# login with the with the account you used to create the firebase project
npx firebase login

# select the project you've just created and use "default" as alias
npx firebase use --add

# Build the app and deploy
npm run build
npx firebase deploy
```

**You're done ! :tada:**<br />
**Your project is now available on firebase hosting**.<br />
**You can also run `npm run serve` and start your app development !**

However we recommand you to go through optionnal steps to get a better developer experience :sunglasses:

## Step 3 (Optionnal) - Continuous integration/deployment

🕙Estimated time → **5 minutes**
<br />

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

**For this step, it is asumed that you already have a github repository for your bento-starter project.**

Steps :

- Go to [https://circleci.com](https://circleci.com)
- Login with your github account
- Authorize CircleCI to look into your github projects
- Add a new project
- Select your github repository you are using to host bento-starter project
- Choose `Linux` for operating system and `Node` for the language
- You can directly start your first CircleCI build by clicking `Start building` button.

Now your build will fail and this is normal :sweat_smile: It's because of the deployment step (`npm run firebase:deploy:ci`). We need to authorize circle ci to deploy on our firebase hosting project. For this we just need to add a firebase token to circle ci :

- Back to a terminal run the following command :

```
npx firebase login:ci
```

- Login with you google account and authorize firebase-cli. The command will print out a token that looks like this :

```
1/PXcLCJ5BXAZ7ciFwkrrpikUbnMAMX8xRFmt16pLYudg9
```

- Copy this token and in your CircleCI project interface, go to => Settings => Environment Variables and click `Add Variable` button. Fot the env variable name, use `FIREBASE_TOKEN` and for the value, use the token you got from the `firebase login:ci` command.

Now if you manually trigger a build, the workflow should execute without error :tada:
