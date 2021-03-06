



## Sobre o projeto

A plataforma nasceu com a missão de ser uma rede social para ambientes residenciais fechados. Hoje, os moradores acabam se organizando através de grupos de Whatsapp ou Facebook, que não são ideais para essa finalidade, porque todo  mundo pode postar tudo o que quiser. Então, as informações importantes se perdem e a interação entre os moradores não acontece de uma forma saudável.

Então, a UNIU é um ambiente virtual seguro que promove a integração e solidariedade desses moradores.
O sistema é fácil de usar e não precisa ter uma administração de condomínios por trás, porque os serviços que ele engloba são baseados na organização dos próprios moradores. Então, o síndico ou alguém eleito pelos moradores pode fazer a administração da plataforma.

## Funcionamento da plataforma

### Cadastro

Os moradores receberão um  link enviado pelo administrador para que se cadastrem diretamente na plataforma personalizada para o seu condomínio. E, depois de efetuado o cadastro, eles são direcionados para a home.

### Home

Na home o usuário pode inserir uma foto e o interfone para contato, além de alterar as suas informações de cadastro. Ele também tem acesso ao feed de mensagens, onde o usuário pode enviar mensagens instantâneas que aparecerão para todos, dividas em hashtags #procuro, #ofereco e #aviso. Ele pode apagar a sua mensagem caso mude de ideia ou tenha escrito errado e pode filtrar as mensagens por hashtag.

## Reservar

Nessa aba o usuário pode reservar áreas de lazer que o condomínio disponibiliza. Clicando no card de uma área, ele tem acesso à todas as informações sobre esse espaço, às fotos e pode efetuar a reserva daquele espaço. Depois de reservado,  ele é redirecionado para a página inicial de reservas e pode acessar a reserva que ele acabou de fazer e, se quiser, cancelar ela.

## Doar

A próxima aba é a que chamamos de Doar; é o coração desse projeto. Aqui, qualquer morador pode compartilhar e divulgar ações solidárias que acontecem na sua cidade e no seu bairro. Os botões levam ao site das organizações, quando existir um site, e assim todos podem saber como contribuir para determinada ação.
No botão de mais, o usuário pode inserir uma ação e deletar o seu card ou editar o que escreveu.

## Vender

Na aba “Vender”, os moradores têm um espaço para anunciar tudo o que eles quiserem vender, alugar ou trocar. Os cards têm o mesmo comportamento: o usuário que inserir um  anúncio pode editar ou deletar o próprio card.

## Eventos

A aba de eventos também é uma aba importante na visão do nosso grupo, porque são ocasiões nas quais os  membros daquela comunidade pode interagir de verdade, se divertir juntos e criar laços. O usuário tem acesso aos próximos eventos e clicando no botão, ele pode preencher rapidamente o formulário e confirmar a sua presença no evento. A galeria ainda não está implementada, porém, a ideia é o usuário selecionar um determinado evento. Então, as fotos desse evento são mostradas em miniaturas abaixo do botão. Ele poderá escolher a foto que deseja ver ampliada e fazer o download dessa. Somente o administrador pode inserir novos eventos e galerias de fotos.

## Avisos

Na aba de avisos é onde os moradores podem acessar informações importantes do condomínio onde ela mora. São informações sobre segurança, manutenção, normas e regulamentos e reuniões. Somente o administrador pode inserir e deletar avisos.


## Lado do administrador

### Home

O administrador pode excluir qualquer mensagem do feed que ele julgar imprópria, mas não pode postar nada. Toda a interação que ele fizer, ele deve fazer como usuário e membro da comunidade.

### Reservar

Aqui, ele pode inserir uma nova área de lazer para reservar. Na página de cada espaço, ele pode adicionar mais fotos a alguma área.

### Doar e Vender

Nas abas Doar e Vender, ele pode excluir qualquer card que seja inapropriado, repetido ou desatualizado.

### Eventos

Na página de eventos, ele pode editar as informações, excluir ou adicionar um próximo evento. Bem como adicionar uma galeria de fotos dos eventos passados.

### Avisos

Nos avisos, ele pode excluir ou adicionar um card. E o objetivo é que todo mundo receba um email quando um aviso for publicado.

## Interação

### Chat
Chat para os moradores estabelecerem conversas publicas ou privadas.

### Email
- Sistema de envio de e-mail para o cadastro e informando toda vez que houver um novo aviso inserido;
- Sistema de envio de email para alteração de senha quando um novo usuário for cadastrado.
- 
## Stack
### Frontend:
- Javascript
- Vuejs
- Vuex
- vuetify
- socket.io
- Spa
- VueRouter

### Backend:
- Nodejs
- Javascript
- Express
- Socket.io
- Node-fetch
- Mongodb
- Mongoose
- Joi
- jest
- dotenv

#### dev dependencies
- jest
- nodemon

## Organização de pastas e arquivos
```shell
/
  server/
    entrypoint/
      server.js
    src/
      controller/
      db/
        connection/
        schema/
      integrations/
      private/
      public/
      routes/
      sockets/
      utils/
      tests/
      app.js
  client/
    public/
      favicon
      index.html
    src/
      assets/
      components/
      methods/
      plugins/
      router/
      store/
      views/
      App.vue
      main.js
```
## Controle-Condomínio Database

### users

```shell
{
		_id: "",
		email: "",
		password: "",
		name: "",
		cpf: "",
		apt: "",
		torre: "",
		admin: bool,
		imgPath: ""
	}
```
### cards

```shell
{
		_id: "",
		type: "",
		title: "",
		description:"",
		body: "",
		_userId: "",
		imgPath: ""
	}
```
## Comandos de inicialização:
- Backend: npm run start:dev
- Frontend: npm run start:dev




