const generateComponent = {
  type: 'add',
  path: 'src/frontend/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: 'plop-templates/components/Component.tsx.hbs',
};
const generateComponentStyle = {
  type: 'add',
  path: 'src/frontend/{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.css',
  templateFile: 'plop-templates/components/Component.module.css.hbs',
};
const generateComponentTest = {
  type: 'add',
  path: 'src/frontend/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: 'plop-templates/components/Component.test.tsx.hbs',
};
const generateComponentIndex = {
  type: 'add',
  path: 'src/frontend/{{path}}/{{pascalCase name}}/index.ts',
  templateFile: 'plop-templates/components/index.ts.hbs',
};
const generatePage = {
  type: 'add',
  path: 'src/pages/{{path}}.tsx',
  templateFile: 'plop-templates/Page.tsx.hbs',
};
const generateColorFormatter = {
  type: 'add',
  path: 'src/service/color/formatters/{{camelCase format}}.ts',
  templateFile: 'plop-templates/colorFormatter/format.ts.hbs',
}
const generateColorFormatterTest = {
  type: 'add',
  path: 'src/service/color/formatters/{{camelCase format}}.test.ts',
  templateFile: 'plop-templates/colorFormatter/format.test.ts.hbs',
}

const questions = {
  componentName: {
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where should it be generated? (/src/frontend/{{path}})',
    default: 'components',
  },
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [questions.componentName, questions.path],
    actions: [generateComponent, generateComponentTest, generateComponentIndex],
  });
  plop.setGenerator('style', {
    description: 'Create a component style',
    prompts: [questions.componentName, questions.path],
    actions: [generateComponentStyle],
  });
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message:
          'If you want the url "/users/:userId", input "users/[userId]" (without quotes)\nWhat is the path?',
      },
      questions.componentName,
    ],
    actions: [generatePage],
  });
  plop.setGenerator('colorFormatter', {
    description: 'Create color formatter',
    prompts: [
      {
        type: 'input',
        name: 'format',
        message: 'What is the name of your formatter?'
      }
    ],
    actions: [generateColorFormatter, generateColorFormatterTest]
  })
};
