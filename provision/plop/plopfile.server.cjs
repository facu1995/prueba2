module.exports = function (plop) {
  plop.setGenerator("endpoint + controller + service", {
    description: "Create an Express endpoint, with its controller and service.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this endpoint's name?"
      },
      {
        type: 'input',
        name: 'url',
        message: 'What is the endpoint url?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'needsDecrypt',
        message: 'Do you want to add authorizationDecrypter to this endpoint?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'base',
        message: 'Use the frameworkcore utilities?',
        default: false,
      }
    ],
    actions: function (data) {
      const actions = [
        {
          path: "../../src/server/routes/api/index.ts",
          pattern: /(\/\/ROUTES IMPORTS)/g,
          template: 'import {{name}}Router from "./{{name}}"',
          type: "append"
        },
        {
          path: "../../src/server/config/constants.ts",
          pattern: /(\/\/ADD ENDPOINT)/g,
          template: '    endpoint{{camelCase name}}: ENDPOINT_{{constantCase name}},',
          type: "append"
        },
        {
          path: "../../.env.example",
          pattern: /(#ADD PROPERTY)/g,
          template: 'VITE_ENDPOINT{{constantCase name}}= {{url}}',
          type: "append"
        },
        {
          path: "../../src/server/config/constants.ts",
          pattern: /(\/\/ADD CONST)/g,
          template: 'const ENDPOINT_{{constantCase name}} = process.env.VITE_API_URL && process.env.VITE_ENDPOINT{{constantCase name}} ? `${process.env.VITE_API_URL}${process.env.VITE_ENDPOINT{{constantCase name}} }` : "{{url}}"',
          type: "append"
        }
      ]

      if (data.needsDecrypt) {
        actions.push(
          {
            path: "../../src/server/routes/api/index.ts",
            pattern: /(\/\/ADD ROUTES)/g,
            template: "apiRouter.use('/{{name}}', authorizationDecrypter, {{name}}Router)",
            type: "append"
          }
        )
      } else {
        actions.push(
          {
            path: "../../src/server/routes/api/index.ts",
            pattern: /(\/\/ADD ROUTES)/g,
            template: "apiRouter.use('/{{name}}', {{name}}Router)",
            type: "append"
          }
        )
      }
      if (data.base) {
        actions.push({
          type: "add",
          path: "../../src/server/routes/api/{{name}}/index.ts",
          templateFile: "templates/server/RouteBase.ts.hbs"
        })
      }
      else {
        actions.push({
          type: "add",
          path: "../../src/server/routes/api/{{name}}/index.ts",
          templateFile: "templates/server/Route.ts.hbs"
        })

        actions.push(
          {
            type: "add",
            path: "../../src/server/controllers/{{name}}Controller.ts",
            templateFile: "templates/server/Controller.ts.hbs"
          }
        )
        actions.push(
          {
            type: "add",
            path: "../../src/server/services/{{name}}Service.ts",
            templateFile: "templates/server/Service.ts.hbs"
          })
      }

      return actions

    }
  })
}