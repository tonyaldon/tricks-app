# About

`tricks-app` is a web format (web page) of my
[https://github.com/tonyaldon/tricks](tricks) on computing.

# Motivation

Although I enjoyed taking my notes whith
[https://orgmode.org/](org-mode) inside `emacs`, I sometime want to
read/scroll them (as a twitter or facebook feed) as any other
apps. This is why comes this web application.

# Programming details

1. As I don't want to modify my notes without `emacs`, this application
   doesn't aim to implement the features provide by `org-mode` along
   with `emacs`. Therefore, I don't need a `backend` and the
   `frontend` would be light.

2. I'm using [https://github.com/orgapp/orgajs](orgajs) to parse my
   `org` files.

3. This project was bootstrapped with [Create React
   App](https://github.com/facebook/create-react-app). See more
   details in the section below.

# Ceate React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
