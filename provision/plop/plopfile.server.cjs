module.exports = function (plop) {
    plop.setGenerator("endpoint + controller + serivce", {
      description: "Create an Express endpoint, with its controller and service.",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is this endpoint's name?"
        },
        {
          type: 'confirm',
          name: 'needsDecrypt',
          message: 'Do you want to add authorizationDecrypter to this endpoint?',
          default: false,
        }
      ],
      actions: function (data) {
        const actions = [
          {
            type: "add",
            path: "../../src/server/routes/api/{{name}}/index.ts",
            templateFile: "templates/server/Route.ts.hbs"
          },
          {
            type: "add",
            path: "../../src/server/controllers/{{name}}Controller.ts",
            templateFile: "templates/server/Controller.ts.hbs"
          },
          {
            type: "add",
            path: "../../src/server/services/{{name}}Service.ts",
            templateFile: "templates/server/Service.ts.hbs"
          },
          {
            path: "../../src/server/routes/api/index.ts",
            pattern: /(\/\/ROUTES IMPORTS)/g,
            template: 'import {{name}}Router from "./{{name}}"',
            type: "append"
          }
        ]

        if(data.needsDecrypt){
          actions.push(
            {
              path: "../../src/server/routes/api/index.ts",
              pattern: /(\/\/ADD ROUTES)/g,
              template: "apiRouter.use('/{{name}}', authorizationDecrypter, {{name}}Router)",
              type: "append"
            }
          )
        }else{
          actions.push(
            {
              path: "../../src/server/routes/api/index.ts",
              pattern: /(\/\/ADD ROUTES)/g,
              template: "apiRouter.use('/{{name}}', {{name}}Router)",
              type: "append"
            }
          )
        }

        return actions

      }
    })}