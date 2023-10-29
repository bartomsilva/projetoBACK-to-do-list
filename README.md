# projeto: to-do-list

API contendo um CRUD para gerenciar lista de tarefas

### O que será feito:
- [x] Adicionar tarefa
- [x] Obter lista de tarefas
- [x] Obter tarefa por Id
- [x] Editar tarefa
- [x] Deletar tarefa
- [x] POO - Divisão em camadas
- [x] POO Inject dependency
- [ ] Validação dos dados utiilzando o ZOD **falta**

### Quais tecnologias vão ser utilizadas:

- [x] Nodejs
- [x] Typescript
- [x] UUID
- [x] Express
- [x] Sequelize
- [ ] Zod (validação dos dados
 
### Em seguida:
- [ ] Login
- [ ] Signup
- [ ] Dotenv (variáveis de ambiente)
- [ ] Token ( JWT )
- [ ] Todo sistema de task ( precisará de token )

### Pastas do projeto:

![image](https://github.com/bartomsilva/projetoBACK-to-do-list/assets/106079184/ba3f6984-083d-495f-af28-fcbd34d46f14)

- src -> pasta principal
- controller -> contém os arquivos que lidam com as solicitações dos clientes (recebe solicitações e devolve resposta).
- business -> contém os arquivos que lidam com as regras de negócio: validações, formatação de saída e ligação com o banco dados.
- database -> contém o banco de dados e arquivos de configuração para o banco de dados.
- error -> contém os arquivos de tratamento de erro.
- model -> contém os modelos de classes e ENUMS.
- routes -> contém os arquivos de rotas (direcionamento das funcionidades)
- services => contém os arquivos de serviços auxiliares, exemplo: Gerador de Id.

### Se desejar dar uma olhada no seu pc:

Basta clonar este repostório.
```
git clone https://github.com/bartomsilva/projetoBACK-to-do-list.git
```

Dentro da pasta que será cridada após a clonagem, execute o camando abaixo para atualizar as dependências.:
```bash
npm install
```

Para Executar o projeto utilize o seguinte comando:
```
npm run dev
```

Para testar as funcionalidades veja a documentação:
<a href="https://documenter.getpostman.com/view/26149268/2s9YRGxUYT">documentação</v>





