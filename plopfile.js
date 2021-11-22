const generateComponent = {
  type: 'add',
  path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: 'plop-templates/components/Component.tsx.hbs',
};
const generateStyle = {
  type: 'add',
  path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.css',
  templateFile: 'plop-templates/components/Component.module.css.hbs',
};
const generateTest = {
  type: 'add',
  path: 'src/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: 'plop-templates/components/Component.test.tsx.hbs',
};
const generateIndex = {
  type: 'add',
  path: 'src/{{path}}/{{pascalCase name}}/index.ts',
  templateFile: 'plop-templates/components/index.ts.hbs',
};
const generateProvider = {
  type: 'add',
  path: 'src/{{path}}/{{pascalCase name}}Provider.tsx',
  templateFile: 'plop-templates/Provider.tsx.hbs',
};
const generatePage = {
  type: 'add',
  path: 'src/pages/{{path}}.tsx',
  templateFile: 'plop-templates/Page.tsx.hbs',
};

const questions = {
  componentName: {
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where should it be generated? (/src/{{YOUR_PATH}})',
    default: 'components',
  },
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [questions.componentName, questions.path],
    actions: [generateComponent, generateTest, generateIndex],
  });
  plop.setGenerator('style', {
    description: 'Create a component style',
    prompts: [questions.componentName, questions.path],
    actions: [generateStyle],
  });
  plop.setGenerator('provider', {
    description: 'Create a context provider',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your provider name?',
      },
      { ...questions.path, default: 'providers' },
    ],
    actions: [generateProvider],
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
};
