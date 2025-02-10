module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component, with styles and tests",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../../src/client/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/client/Component.tsx.hbs"
      },
      {
        type: "add",
        path: "../../src/client/components/{{pascalCase name}}/{{name}}.module.css",
        templateFile: "templates/client/CSSModule.css.hbs"
      },
      {
        type: "add",
        path: "../../src/client/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/client/Test.tsx.hbs"
      },
      {
        path: "../../src/client/components/index.ts",
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template: "export { default as {{pascalCase name}} } from './{{pascalCase name}}/{{pascalCase name}}';\n$1",
        type: "modify"
      }
    ]
  }),
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
          templateFile: "templates/client/reduxSlice.tsx.hbs"
        },
        {
          path: "../../src/client/redux/store.ts",
          pattern: /(\/\/ IMPORT SLICE)/g,
          template: "import {{name}}Slice from './slices/{{name}}Slice';",
          type: "append"
        },
        {
          path: "../../src/client/redux/store.ts",
          pattern: /(\/\/ ADD SLICE)/g,
          template: "    {{name}} : {{name}}Slice,",
          type: "append"
        }
      ]
  }),
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
          templateFile: "templates/client/i18_en.ts.hbs"
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
  })
}
