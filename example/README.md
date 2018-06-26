# ⚛ React + Express – SSR Setup

## Motivation
Nice base app which reflects a decently robust React app. 

If webpackery splits this, it should split anything. 

## Features

This project has out-of-the-box support for the following things:

*   General Setup
    *   🔥 Babel 7 (Beta)
    *   🔥 Webpack 4
    *   🔥 ESLint 4 (with a set of custom rules which may be mostly identical to AirBnB with some personal flavor added)
    *   🔥 Flow Type
    *   🔥 Prettier
    *   ✅ Server side rendering with Express
    *   ✅ Hot Module Reloading (HMR)
    *   ✅ Jest 22
    *   ✅ CSS Modules
    *   ✅ PostCSS
    *   ✅ Precommit hooks via lint-staged + Husky
    *   ✅ Optional static deployment without the need for Node.js on the server
    *   📕 Support for [Storybook](https://storybook.js.org/) (>= 4.0.0)

-   Libs and Dependencies
    *   ⚛ React 16.3
    *   ✅ Redux + Thunk middleware
    *   ✅ Reselect
    *   ✅ React Router 4
    *   ✅ React i18next for multi language support
    *   ✅ React Helmet

## Installation

Pretty obvious: run `yarn` or `npm install`.

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 8500 unless otherwise specified in `process.env.PORT`. You can use a `.env` file to specify env vars. If you want to use them in your client side code, don't forget to add them in [config/env.js](config/env.js#L37).

Noteworthy npm scripts:

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `yarn test`

Run all tests using jest.

#### `yarn test:update`

Update all Jest snapshots (if there are any)


## 📕 Storybook support

I've successfully tested Storybook and it integrates seamlessly and without any issues into this setup. If you want to add Storybook to your project, install the most recent version (which by the time of writing is `4.0.0-alpha.7` and can be done via `npm i -g @storybook/cli@4.0.0-alpha.7`) and run `getstorybook` to have the basic setup created for you. You must then replace all the content in `.storybook/webpack.config.js` with the following line:

```js
module.exports = require('../config/webpack.config.js/storybook');
```

Afterwards you should be able to run `yarn storybook` to start the Storybook Dev Server.

## Changelog

Moved to its own file: [CHANGELOG.md](CHANGELOG.md)

## License

MIT.
