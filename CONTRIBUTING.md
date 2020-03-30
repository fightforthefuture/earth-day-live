# Contributing to Earth Day Live

Thanks for taking the time to contribute!

The following is a set of guidelines for contributing to Earth Day Live.

## Table Of Contents

[Our pipeline](#our-pipeline)

[How Can I Contribute?](#how-can-i-contribute)

[Git strategy](#git-strategy)

## Our pipeline

This repo is integrated with [TravisCI](https://travis-ci.com/github/fightforthefuture/earth-day-live) and the pipeline is composed of these steps:
* Linting, which is done by running eslint
* Testing, which is handled by running jest
* Building, which is done by nuxt

Every push to master triggers a build, and you can see the result of the build right next to the commit thanks to this GitHub/TravisCI integration.
You can always see the overall result of the build of the project in the badge right next to the title.

Deployment to a production environment is done manually. TravisCI handles the deployment to the staging env. Google Cloud Storage is being used to host the static assets.

## How Can I Contribute?

We have an official project board that you can see out [here](https://github.com/fightforthefuture/earth-day-live/projects/1)

## Git strategy

For this project, we use [Trunk Based Development](https://trunkbaseddevelopment.com/). Please refer to its documentation for more information.
