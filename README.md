# 🧩 Sistema de Gestão Empresarial

Sistema desktop para gerenciamento de clientes, contratos, serviços e finanças, voltado para pequenas e médias empresas. Desenvolvido com Electron e Node.js.

---

## 🚀 Tecnologias Utilizadas

- [Electron](https://www.electronjs.org/) - Interface desktop
- [Node.js](https://nodejs.org/) - Ambiente backend
- [Express](https://expressjs.com/) - Framework para APIs RESTful
- [Sequelize](https://sequelize.org/) - ORM para banco de dados
- [MySQL](https://www.mysql.com/) - Banco de dados relacional
- [mysql2](https://www.npmjs.com/package/mysql2) - Driver MySQL
- [JWT](https://jwt.io/) - Autenticação
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Criptografia de senhas
- [Chart.js](https://www.chartjs.org/) - Gráficos para dashboard
- [pdfkit](https://pdfkit.org/) - Geração de faturas PDF
- [Jest](https://jestjs.io/) - Testes automatizados
- [Nodemon](https://www.npmjs.com/package/nodemon) - Dev server auto-reload
- [Helmet](https://helmetjs.github.io/) - Segurança HTTP
- [express-validator](https://express-validator.github.io/) - Validação de dados

---

## 🏗️ Estrutura do Projeto

```bash
├── backend/              # Código do backend
│   ├── src/              # Código fonte
│   │   ├── config/       # Configurações do banco de dados e JWT
│   │   ├── controllers/  # Controladores para rotas
│   │   ├── middlewares/  # Middlewares de autenticação e validação
│   │   ├── models/       # Modelos do banco de dados
│   │   ├── routes/       # Rotas da API
│   │   ├── services/     # Lógica de negócios
│   │   ├── utils/        # Funções utilitárias
│   │   ├── app.js        # Configuração do Express
│       └── server.js         # Ponto de entrada do backend
│   ├── tests/            # Testes automatizados
│   ├── .env              # Variáveis de ambiente
│   ├── .gitignore        # Ignorar arquivos no Git
│   ├── package.json      # Dependências do backend
│   ├── package-lock.json # Lockfile do npm

