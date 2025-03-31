module.exports = function (plop) {

  plop.setHelper("eq", (a, b) => a === b);

  plop.setGenerator("component", {
    description: "Create a component, with styles and tests",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?"
      },
      {
        type: "list",
        name: "type",
        message: "Is this a base or custom component?",
        choices: ["base", "custom"]
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/client/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/client/components/Component.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/client/components/{{type}}/{{pascalCase name}}/{{name}}.module.css",
        templateFile: "templates/client/components/CSSModule.css.hbs"
      },
      {
        type: "add",
        path: "../../src/client/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/client/components/Test.tsx.hbs"
      },
      {
        path: "../../src/client/components/index.ts",
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template: "export { default as {{pascalCase name}} } from './{{type}}/{{pascalCase name}}/{{pascalCase name}}';\n$1",
        type: "modify"
      }
    ]
  });

  plop.setGenerator("slice", {
    description: "Create a new state style for redux toolkit",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this slice's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/client/redux/slices/{{name}}Slice.tsx",
        templateFile: "templates/client/redux/reduxSlice.tsx.hbs"
      },
      {
        path: "../../src/client/redux/store.ts",
        pattern: /(\/\/ IMPORT SLICE)/g,
        template: "import {{name}}Slice from './slices/{{name}}Slice';\n$1",
        type: "modify"
      },
      {
        path: "../../src/client/redux/store.ts",
        pattern: /(\/\/ ADD SLICE)/g,
        template: "{{name}}: {{name}}Slice,\n$1",
        type: "modify"
      }
    ]
  });

  plop.setGenerator("i18n", {
    description: "Create a i18n namespace",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this namespace's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/client/i18n/en/{{camelCase name}}.ts",
        templateFile: "templates/client/i18/i18_en.ts.hbs"
      },
      {
        type: "add",
        path: "../../src/client/i18n/es/{{camelCase name}}.ts",
        templateFile: "templates/client/i18_es.ts.hbs"
      },
      {
        path: "../../src/client/i18n/i18n.ts",
        pattern: /(\/\/ ADD ES NAMESPACES)/g,
        template: "          {{name}}: es.{{name}},",
        type: "append"
      },
      {
        path: "../../src/client/i18n/i18n.ts",
        pattern: /(\/\/ ADD EN NAMESPACES)/g,
        template: "          {{name}}: en.{{name}},",
        type: "append"
      },
      {
        path: "../../src/client/i18n/es/index.ts",
        pattern: /(\/\/ EXPORT ES NAMESPACES)/g,
        template: 'export { default as {{name}} } from "./{{name}}"',
        type: "append"
      },
      {
        path: "../../src/client/i18n/en/index.ts",
        pattern: /(\/\/ EXPORT EN NAMESPACES)/g,
        template: 'export { default as {{name}} } from "./{{name}}"',
        type: "append"
      }
    ]
  });

  plop.setGenerator("page", {
    description: "Create a page, with styles and tests",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of this page?"
      },
      {
        type: "list",
        name: "type",
        message: "Is the route protected?",
        choices: ["yes", "no"]
      }
    ],
    actions: function (data) {
    const actions= [
      {
        type: "add",
        path: "../../src/client/pages/{{pascalCase name}}Page/{{pascalCase name}}Page.tsx",
        templateFile: "templates/client/pages/Page.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/client/pages/{{pascalCase name}}Page/{{name}}Page.module.css",
        templateFile: "templates/client/pages/CSSModule.css.hbs"
      },
      {
        type: "add",
        path: "../../src/client/pages/{{pascalCase name}}Page/{{pascalCase name}}Page.test.tsx",
        templateFile: "templates/client/pages/Test.tsx.hbs"
      },
      {
        path: "../../src/client/pages/index.ts",
        pattern: /(\/\/ PAGE IMPORTS)/g,
        template: "export { default as {{pascalCase name}}Page } from './{{pascalCase name}}Page/{{pascalCase name}}Page';\n$1",
        type: "modify"
      },
      {
        path: "../../src/client/routes/routes.tsx",
        pattern: /(\/\/ ROUTE IMPORTS)/g,
        template: "  {{pascalCase name}}Page, \n$1",
        type: "modify"
      },
      {
        path: "../../src/client/routes/utils/constantes.ts",
        pattern: /(\/\/ ADD ROUTER)/g,
        template: "  {{camelCase name}}: '/{{name}}',\n$1",
        type: "modify"
      }
    ]

    if (data.type === "yes") {
      actions.push({
        path: "../../src/client/routes/routes.tsx",
        pattern: /(\/\/ ADD GUARD)/g,
        templateFile: "templates/client/pages/PageAddRouter.ts.hbs",
        type: "modify"
      })}
      else{
        actions.push({
          path: "../../src/client/routes/routes.tsx",
          pattern: /(\/\/ ADD ROUTER)/g,
          templateFile: "templates/client/pages/PageAddRouter.ts.hbs",
          type: "modify"
        })
      }
      return actions
  }
  });

  plop.setGenerator("service", {
    description: "Create a service, with interface",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this service's name?"
      },
      {
        type: "list",
        name: "type",
        message: "Is this a base or basic service?",
        choices: ["base", "basic"]
      },
      {
        type: "input",
        name: "endpoint",
        message: "What is this service's endpoint?"
      },

    ],

    actions: function (data) {
      const actions = [{
        type: "add",
        path: "../../src/client/interface/services/{{name}}.model.ts",
        templateFile: "templates/client/services/ServiceInterface.ts.hbs"
      },
      {
        path: "../../src/client/services/index.ts",
        pattern: /(\/\/ SERVICE IMPORTS)/g,
        template: "export { default as {{name}}Service } from './{{type}}/{{name}}.service';\n$1",
        type: "modify"
      },
      {
        path: "../../src/client/interface/index.ts",
        pattern: /(\/\/ MODEL IMPORTS)/g,
        template: "export * from './services/{{name}}.model';\n$1",
        type: "modify"
      },
      {
        path: "../../src/client/config/constants.ts",
        pattern: /(\/\/ ADD CONSTANTS)/g,
        template: "{{camelCase name}}: import.meta.env.VITE_ENDPOINT_{{constantCase name}} || '{{endpoint}}',\n$1",
        type: "modify"
      }
      ]

      if (data.type === "base") {
        actions.push(
          {
            type: "add",
            path: "../../src/client/services/{{type}}/{{name}}.service.ts",
            templateFile: "templates/client/services/ServiceBase.ts.hbs"
          },
        )
      } else {
        actions.push(
          {
            type: "add",
            path: "../../src/client/services/{{type}}/{{name}}.service.ts",
            templateFile: "templates/client/services/ServiceBasic.ts.hbs"
          }
        )
      }

      return actions
    }

  })
}
