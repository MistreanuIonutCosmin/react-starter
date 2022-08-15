# React Started

TODO:
[] https://github.com/vercel/swr/pull/1263 try to use with Hasura https://cloud.hasura.io/project/d7bd61fd-f658-4ebd-b6d3-175ee9d803f8/console subscriptions /  streaming subscription?
[] Load more data as you go left and right in the timeline
[] Updates in the database are automatically available in the frontend
[] Write tests 
[] Use typescrips 
[] Make a CI/CD pipeline


Questions:
* Will SWR scale for a big app? What alternatives are there?
* Should we use Hasura streaming subscription or subscription?
* How do we manage conflicts between local updates and updates from the sochets?
* Is the app well memoized?

## Features

This template comes with several essential features:

- Server side rendering setup for Mantine
- Color scheme is stored in cookie to avoid color scheme mismatch after hydration
- Storybook with color scheme toggle
- Jest with react testing library
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
