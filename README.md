# Project Podcast
### Next Level Week 5

## Preparando o ambiente
Configuração do seu ambiente. 
- Node + NPM;
- Yarn;
- Visual Studio Code e configurações.

## Extensões

Você pode instalar as seguintes extensões a partir do menu de extensões do próprio VS Code:

- **[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)**: Essa extensão faz a correção ortográfica no nosso código, funcionando melhor com camelcase (por padrão, corrige apenas o inglês). Essa extensão é bastante útil mas é totalmente opcional;
- **[Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese)**: É um dicionário de português para que a extensão **Code Spell Checker** consiga fazer também a correção ortográfica em Português;
- **[Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)**: Essa extensão reconhece cores CSS escritas em qualquer lugar do nosso código. Por padrão reconhece apenas cores em hexadecimal mas você pode configurar para reconhecer cores no formato de palavras como `"red"` ou `"yellow"`. É uma extensão bastante útil, já que reconhece as cores diretamente no código;
- [**CSS Modules**](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules): Essa é uma extensão que fornece o autocomplete para CSS Modules. Recomendamos o uso dela já que vai te ajudar com o autocomplete;
- [**Tabnine**](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode): O Tabnine é uma extensão que usa de inteligência artificial para identificar o contexto do código e fornecer o autocomplete. Suporta diversas linguagens incluindo JavaScript e TypeScript. Existe uma versão paga mas também é possível usar a versão gratuita da extensão.
Seu uso é totalmente opcional;
- [**vscode-styled-components**](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components): Essa extensão fornece o syntax highlighting e intelliSense para a biblioteca [styled-components](https://styled-components.com/). Se você for utilizar essa biblioteca, o uso da extensão é bastante recomendado.

## Configurações do VS Code

As seguintes configurações podem ser acessadas no VS Code apertando `Ctrl + Shift + P` (ou `cmd +` , digitando `Preferences: Open Settings (JSON)` e entrando na opção encontrada:

```json
"terminal.integrated.fontSize": 14,

"editor.tabSize": 2,
"editor.fontSize": 16,
"editor.lineHeight": 26,
"editor.semanticHighlighting.enabled": false,

"editor.rulers": [80, 120],

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},

"files.exclude": {
  "**/.git": true,
  "**/.svn": true,
  "**/.hg": true,
  "**/CVS": true,
  "**/.DS_Store": true,
},

"files.associations": {
  ".sequelizerc": "javascript",
  ".stylelintrc": "json",
  ".prettierrc": "json",
  "*.tsx": "typescriptreact"
},

"typescript.tsserver.log": "verbose",
"material-icon-theme.activeIconPack": "nest",

"material-icon-theme.folders.associations": {
  "infra": "app",
  "entities": "class",
  "domain": "class",
  "schemas": "class",
  "typeorm": "database",
  "repositories": "mappings",
  "http": "container",
  "migrations": "tools",
  "modules": "components",
  "implementations": "core",
  "dtos": "typescript",
  "fakes": "mock",
  "websockets": "pipe",
  "protos": "pipe",
  "grpc": "pipe",
  "providers": "include",
  "subscribers": "messages",
  "useCases": "controller",
  "kafka": "scripts",
  "mappers": "meta",
  "_shared": "shared",
  "eslint-config": "tools",
  "kube": "kubernetes"
},

"material-icon-theme.files.associations": {
  "ormconfig.json": "database",
  "tsconfig.json": "tune",
  "*.proto": "3d",
  "*.webpack.js": "webpack"
},
"window.menuBarVisibility": "toggle",
"tabnine.experimentalAutoImports": true,
"cSpell.enableFiletypes": [
  "!asciidoc",
  "!c",
  "!cpp",
  "!csharp",
  "!go",
  "!handlebars",
  "!haskell",
  "!jade",
  "!java",
  "!latex",
  "!php",
  "!pug",
  "!python",
  "!restructuredtext",
  "!rust",
  "!scala",
  "!scss"
],
"cSpell.language": "en,pt",
"editor.suggestSelection": "first",
"cSpell.userWords": [
  "chakra",
  "middlewares",
  "prefetch",
  "rocketseat"
],
"workbench.productIconTheme": "fluent-icons",
"terminal.integrated.showExitAlert": false,

"splitHTMLAttributes.closingBracketOnNewLine": true,
"window.zoomLevel": 1
```

## Instalação

Baixar os pacotes

```sh
npm i
```

## Desenvolvimento

Executar server para poder ler JSON local

```sh
yarn server
```

Executar aplicação em dev:

```sh
yarn dev
```


#### Building

Para production release:

```sh
yarn build
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
