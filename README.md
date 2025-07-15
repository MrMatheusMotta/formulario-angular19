Com certeza! Vamos criar um arquivo README.md bem completo para o seu projeto Angular. Ele ajudará a documentar seu trabalho e facilitar a vida de quem for usá-lo ou contribuir.

Formulários Angular Simples
Descrição do Projeto
Este projeto Angular demonstra a implementação e estilização de dois formulários reativos: um Formulário de Contato e um Formulário de Cadastro. Utiliza os Reactive Forms do Angular para gerenciamento de estado e validação de campos, e CSS puro para um design moderno e responsivo.

Estrutura do Projeto
O projeto está organizado em componentes dedicados a cada formulário, seguindo as boas práticas do Angular.

src/
├── app/
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts                <-- Definição das rotas
│   ├── cadastro/
│   │   ├── cadastro/                 <-- Componente de Cadastro
│   │   │   ├── cadastro.component.html
│   │   │   ├── cadastro.component.css
│   │   │   └── cadastro.component.ts
│   └── formcontato/
│       ├── formcontato/              <-- Componente de Contato
│       │   ├── formcontato.component.html
│       │   ├── formcontato.component.css
│       │   └── formcontato.component.ts
└── main.ts
Funcionalidades
1. Formulário de Contato (FormcontatoComponent)
Campos: Nome, E-mail, Assunto (com textarea).

Validação:

Nome: Obrigatório.

E-mail: Obrigatório e formato de e-mail válido.

Assunto: Obrigatório e com no mínimo 5 caracteres.

Comportamento: Exibe um alerta de sucesso e limpa o formulário após o envio válido. Alerta em caso de campos inválidos.

2. Formulário de Cadastro (CadastroComponent)
Campos: Nome, E-mail, Senha, Data de Nascimento, Telefone.

Validação:

Nome: Obrigatório.

E-mail: Obrigatório e formato de e-mail válido.

Senha: Obrigatória e com no mínimo 6 caracteres.

Data de Nascimento: Obrigatória.

Telefone: Obrigatório.

Comportamento: Exibe um alerta de sucesso e limpa o formulário após o envio válido. Alerta em caso de campos inválidos.

Tecnologias Utilizadas
Angular CLI: Ferramenta para iniciar, desenvolver e manter aplicativos Angular.

Angular (v17+): Framework JavaScript para construção de aplicações web.

Reactive Forms: Módulo do Angular para gerenciamento de formulários.

HTML5: Estrutura dos formulários.

CSS3: Estilização e responsividade dos formulários.

Google Fonts (Poppins): Utilizado para uma tipografia moderna.

Como Rodar o Projeto
Siga os passos abaixo para clonar o repositório e executar o projeto em sua máquina local.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 18.x ou superior)

npm (gerenciador de pacotes do Node.js)

Angular CLI (instale globalmente com npm install -g @angular/cli)

Instalação
Clone o repositório:
```
git clone https://github.com/MrMatheusMotta/formulario-angular19.git
cd forms # ou o nome da pasta principal do seu projeto

```


Instale as dependências:

```
npm install

```
Executando a Aplicação

Inicie o servidor de desenvolvimento:

```
ng serve

```
Acesse no navegador:
Abra seu navegador e navegue para http://localhost:4200/.

Para ver o Formulário de Contato, acesse: http://localhost:4200/ (rota padrão).

Para ver o Formulário de Cadastro, acesse: http://localhost:4200/cadastro.

Contribuição
Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

