This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project - Build.io Challenge

This project contains a demo project built as a coding challenge for build.io. Provides a basic functionality to search a 5 day weather forecast for any given USA zip code. 

The demo project only contains 2 valid routes. 

``https://localhost:3000``
``https://localhost:3000/weather/{zipcode}``

First route should render a simple search input for your zip code. If successful you should be redirected to the second route and have the forecast information displayed. This route is rendered as SSR as per project requirements so it might take a while to become interactive.

### Observations



## Getting Started

### Installation
Development was made using node version ``v14.19.1``

Run the command ```npm i```

### Storybook
A storybook configuration was made to work on the React components in an isolated manner.
You should be able to run the storybook by running the command ``npm run storybook``. 

### Styles
CSS modules with SASS were configured as the preferred CSS framework.

### Typescript
The project was configured with Typescript as the preferred development language. 

### Starting the developer server 
First, run the development server:
```bash
npm run dev
# or
yarn dev
```
