# Single Page App (SPA) Investment Plan 
An internship take-home assignment from Endowus.

## Technologies
- React & react-dom (v17)
- Mdbreact (MDBootstrap for react) (v5)
- React-redux, redux, redux-thunk
- React-router-dom (v5.1.2)
- Rechart (v2.1.9) for graph
- @emotion/react, @emotion/styled, @mui/material for Loading UI

## What does it do
Takes two inputs (initial Investment & monthly recurring investment) and sends it to a mocky.io mocked Monte Carlo simulation API via HTTP POST method. During fetch, it loads a loading UI. Upon successfully fetching data, API returns an array of time-series data, which is then plotted on a chart with 5 different lines series (top 25%, median, bottom 10%, benchmark, total deposit).

## How to start
To test, contribute or just see what we did follow few easy steps:
- clone the repository
- cd to the directory with the repository
- run `yarn install` (or `npm install` if you don't use yarn)
- run the app using `yarn start` (or `npm start`)
- to build project use `yarn run build` (od `npm run build`)

## Bugs
If you want to report a bug or submit your idea feel free to open an issue

Before you report a bug, please take your time to find if an issue hasn't been reported yet

We're also open to pull requests

