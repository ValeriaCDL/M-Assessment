# Meztal App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Decisions 

I decided to create one component for each page requested, Login.js, ProfileList.js and ProfileDetail.js,
then use the routing system from `react-router-dom` to navigate to those pages.

I had trouble implementing the clickable list items with the router, so I decided a different
approach with saving a selected user state, it is not the cleanest code, I know, but it works as expected within the time limit.

The Login.js uses `react-hook-form` to validate the form inputs and then submit them on a callback. It automatically prevents the user from submitting the form if there are validation errors.

I decided to use the Pokemon API and get the resources with Fetch API.

I decided not to handle errors from fetching resources since they automatically pop on the console if there is any.
But I did handle the case in which there is no data to be shown within react.

I decided to use App.css for the custom style classes because it is a small proyect and it has a few custom styles that can be worked within one file.

More information on the packages used on the project:

### `bootstrap and react-bootstrap`

These packages are used to style the application. Although react can be used only with bootstrap, some style classes that work with scripts will not work, in that case react-bootstrap is needed. Regarding style, they can be used interchangebily as react-bootstrap wraps bootstrap clases within react components.
Package links: [bootstrap](https://getbootstrap.com/) , [react-bootstrap](https://react-bootstrap.github.io/)

### `react-router-dom`

This package is used to add navigation and routing to the app.
Package link: [react-router-dom](https://reactrouter.com/en/main) 

### `react-hook-form`

The best form hook ever for react, Literally. It was the winner of 2020 GitNation React OS Award for the category of Productivity Booster. I'm still no expert but is very lightweight and easy to use.
More information at [react-hook-form](https://react-hook-form.com/) 

## Project Structure

Based on `Create React App` structure. With the additional files for the project:
`Login.js`, `ProfileList.js`, `ProfileDetail.js` under `components` folder and an `assets` folder for pictures.

```
meztal-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── components
        ├── Login.js
        ├── ProfileList.js
        ├── ProfileDetail.js
    ├── assets
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── setupTests.js
``` 
**Note: I'm not using anything related to PWA, like service worker and manifest files, nor tests ...yet**

## Deploy Steps

1. Run `npm run build` to build your app and make a deployable package
2. Choose your server, for example Node [serve](https://github.com/vercel/serve) 
    - To install and build the Node server run: `npm install -g serve` then `serve -s build` within the project folder
    - You can also use the following comand to serve a specific proyect folder `serve project-name/` 

