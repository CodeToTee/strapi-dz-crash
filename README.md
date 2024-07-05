# This repo is to demonstrate a bug with Strapi v5

To see the issue:
* Clone this repo: `git clone https://github.com/CodeTotee/strapi-dz-crash`
* Install: `yarn install`
* start strapi: `yarn develop`
* Navigate to: `http://localhost:1337/admin/content-manager/single-types/api::home.home`

Crash.

Here are the steps I used to create this crash:
* Install and intialize a fresh Strapi v5 project
```
npx create-strapi-app@beta --use-yarn
cd strapi-dz-crash
yarn
yarn develop
```
* Open admin at `http://localhost:1337` and configure admin email
* Navigate to Content-Type Builder
* Create a component called 'comp' with a single text field 'text'
* Create a Single Type called 'home' with a single Dynamic Zone that includes the 'comp' created above
* Save
  * Note: At this point, things still work.  If you then navigate to Content Manager and select 'home', it will display an empty DZ.
* Navigate back to the Content-Type Builder
* Navigate to the 'home' Single Type
* Add a single Text type called 'text'
* Navigate to Content Manager
* It will crash with an error saying `Cannot read properties of undefined (reading 'push')`





# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
