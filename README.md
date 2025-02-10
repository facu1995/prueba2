# prueba2

This project was created from the Infosis Frontend Template. It ships with React 18, TypeScript, Express, ReduxToolkit, ReactRouterDom and Vitest + RTL. Bundled with Vite+Rollup in the front and Webpack for the backend. <br> You may add or remove these packages as needed.

<br>

## How to use this project


### Install dependencies

<br>

```bash
 npm i
```

### Run Project

<br>

```bash
npm run dev
```

App will be exposed on port 5173, Express API will be accesible through the '/api' route on port 8080. You can also access the frontend via :8080/, since the Express app serves the frontend as a static file.
<br>
<br>

## Templating

#### Frontend

The template has PLOP installed and configured to create new components and Redux Slices.

```bash
npm run plop:client
```

You may edit or expand this from `./provision/plop/plopfile.client.cjs`
<br>

#### Backend

The template has PLOP installed and configured to create new endpoints with a controller and a service file. 

```bash
npm run plop:server
```

You may edit or expand this from `./provision/plop/plopfile.server.cjs`
<br>
<br>

## Static code analysis


The project is configured with ESLint and Prettier, config files are in ./.ci/linters. Both commands can be used with the :fix flag to automatically solve issues. <br>

```bash
npm run lint
```

<br>

```bash
npm run prettier
```
<br>
<br>

## Husky 

This project coomes with Husky setted up and a pre-push hook to lint the code whenever you push to the remote. You may modify this hook `./.husky/pre-push` or add any other git hook you need.

Whenever you run `npm run install`, npm runs the `prepare` script afterwards. It checks for a git repo, if it doesn't exist its created, and the inits the husky dependency.

When pushing, the hook will run `npm run lint:fix` and add all modified files to a new commit that won't be pushed. Also it reads the last commit message, to avoid running the linter if the last commit includes the 'lint' word.

## Add ESlint custom rule

To add a new rule to ESLint within the project, follow these steps:

**Create the Rule:** Create a new file with the name of the rule (for example, my-new-rule.js) inside the .ci/linters/eslint-plugin-custom/rules folder. This file should contain the rule definition, following the standard ESLint rules structure.

**Import Rule in index.js:** Once you have created the rule file, you need to import it in the index.js file located in the .ci/linters/eslint-plugin-custom folder. This can be done by adding an import line to the beginning of the file and then adding the rule to the rules object exported by index.js. For example:

```js
const myNewRule = require('./rules/my-new-rule');

module.exports = {
  rules: {
    'my-new-rule': myNewRule,
  },
};
```

**Using the New Rule:** After you import the new rule into index.js, it will automatically be added to the set of rules available for ESLint in the project. To activate the rule, you must add it to the ESLint configuration file .eslintrc.cjs in the rules section, specifying the desired error level ('error', 'warn', or 'off' ). For example:

```js
rules: {
  'custom/my-new-rule': 'error',
} 
```

## Unit Testing

### Run all tests

```bash
npm run test:client
```

### Run tests and get coverage report

```bash
npm run coverage
```


### Debug

You may run the Express API in debug mode, for doing so, run the front with 

```bash
npm run client
```

and run the express on a different terminal with VSCode debug mode (you can see the config on `./.vscode/launch.json`)


### cURL

If you need to share or debug a call to a service from the backend, we encourage the usage of the package `axios-curlirize` already installed in the project. It will log the call as a cURL on the terminal.

```js
import {curlirize} from 'axios-curlirize'

const someService = async() => {
  curlirze(axios) ///pass the axios instance
  try{
    const response = axios.request()
  }catch(e){
    console.error(e)
  }
}
```

## Monitoring

The project has the configuration to connect to Sentry as a monitor service for both the back and frontend. In order of the connections to work, you'll have to add a Sentry DSN on the enviroment variables. In order to properly trace errors on the frontend, run the command ```npx @sentry/wizard@latest -i sourcemaps``` and follow instructions.


## Versioning

### Production

For production, follow the [SemVer connvention](https://semver.org/lang/es), you can upload the version number with the command `npm run version` followed by a flag indicating wich part should be updated, either major, minor or path.

### Testing 

For testing, run `npm run version:test`, wich will add a sufix to the version, to indicate it's in testing enviroment. 