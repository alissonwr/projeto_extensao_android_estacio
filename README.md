# Aplicativo de Gerenciamento de Tarefas

Este é um aplicativo móvel de gerenciamento de tarefas desenvolvido em React Native, que permite aos usuários fazer login, visualizar tarefas, criar novas tarefas e ver os detalhes de cada tarefa.

## Índice
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

### Visão Geral
O objetivo deste aplicativo é oferecer uma solução prática para organizar tarefas diárias. Ele fornece uma interface intuitiva para que o usuário possa gerenciar suas atividades com facilidade e manter o controle sobre prazos e prioridades.

### Funcionalidades
- Tela de login inicial.
- Tela de visualização de tarefas, onde o usuário pode ver uma lista das tarefas cadastradas.
- Tela de criação de nova tarefa.
- Tela de detalhes, permitindo visualizar e editar as informações de cada tarefa.

### Pré-requisitos
- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Expo CLI** (para facilitar o desenvolvimento no React Native)
  
  ```bash
  npm install -g expo-cli
  ```

### Instalação
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
```

### Configuração
Certifique-se de ter o ambiente de desenvolvimento configurado para React Native e Expo. Consulte a [documentação oficial](https://reactnative.dev/docs/environment-setup) para configurar corretamente.

### Como Usar
Inicie o projeto com o comando abaixo:

```bash
npx expo start
```

Isso abrirá o Expo Developer Tools, permitindo que você teste o aplicativo em um dispositivo físico ou emulador.

### Estrutura do Projeto
A estrutura básica do projeto é organizada da seguinte forma:

```plaintext
├── App.js                   # Arquivo principal que inicializa a navegação
├── src
│   ├── pages                # Páginas do aplicativo
│   │   ├── Login            # Tela de login do usuário
│   │   ├── Task             # Tela de visualização das tarefas
│   │   ├── NewTask          # Tela de criação de nova tarefa
│   │   └── Details          # Tela de detalhes da tarefa
└── ...
```

### Contribuição
Para contribuir com o projeto:
1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/MinhaFeature`).
3. Commit suas alterações (`git commit -m 'Minha nova feature'`).
4. Envie para a branch (`git push origin feature/MinhaFeature`).
5. Abra um Pull Request.

### Licença
Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.



