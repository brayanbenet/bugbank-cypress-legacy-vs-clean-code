# 🧪 BugBank: Cypress Legacy vs Clean Code

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> Uma análise comparativa entre testes end-to-end (E2E) legados e uma arquitetura refatorada utilizando **Clean Code**, **Design Patterns** e **Governança com ESLint**.

Este repositório é parte integrante do Trabalho de Conclusão de Curso (TCC II) em Sistemas de Informação pela **UNISINOS**, elaborado por **Brayan Gabriel Pedrozo Benet** sob orientação da **Prof.ª Josiane Brietzke Porto**.

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [O Problema: Código Legado vs. Débito Técnico](#-o-problema-código-legado-vs-débito-técnico)
- [Arquitetura e Design Patterns Aplicados](#-arquitetura-e-design-patterns-aplicados)
- [Governança de Código com ESLint](#-governança-de-código-com-eslint)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Referências](#-referências)

---

## 🎯 Sobre o Projeto

A automação de testes é vital para garantir a entrega contínua com qualidade em ambientes ágeis. Contudo, quando desenvolvida de forma reativa e sem planejamento arquitetural, a suíte de testes acumula **débito técnico**, resultando em scripts frágeis, acoplados e propensos a falhas intermitentes conhecidas como *flaky tests*.

Este projeto realiza um **estudo comparativo prático e experimental** utilizando a aplicação web **BugBank** como objeto de estudo. Ele demonstra a evolução de uma suíte de testes e2e escrita de forma legada para uma arquitetura profissional, robusta e modular no ecossistema **Cypress + JavaScript**.

---

## ⚠️ O Problema: Código Legado vs. Débito Técnico

Em cenários de alta cadência de entrega, a falta de padronização na escrita de automação gera diversos *Code Smells*:

| Code Smell / Prática Legada | Impacto no Projeto | Solução Aplicada (Clean Code) |
| :--- | :--- | :--- |
| **Valores Fixos (*Hardcoding*)** | Engessa os testes e impede execução em múltiplos ambientes sem alterar código. | Uso de massa de dados dinâmica gerada via **Factory** (`@faker-js/faker`). |
| **Localizadores Frágeis** | XPaths longos ou classes CSS estritas que quebram a cada mudança visual. | Atributos de teste dedicados (`data-cy`, `data-test-id`) e abstração em Page Objects. |
| **Lógica Condicional / Repetição** | Aumenta a complexidade ciclomática e dificulta a leitura do fluxo de teste. | Ações lineares (Arrange, Act, Assert) e isolamento pelo Princípio da Responsabilidade Única (SRP). |
| **Esperas Estáticas (`cy.wait`)** | Gera desperdício de tempo na esteira de CI ou falhas falsas por assincronismo. | Sincronismo inteligente e **esperas dinâmicas** do próprio Cypress. |

---

## 🏗️ Arquitetura e Design Patterns Aplicados

A versão refatorada adota padrões de projeto amplamente reconhecidos na literatura de Engenharia de Software:

### 1. Page Object Model (POM)
Encapsula a estrutura de elementos do DOM e ações da tela em classes dedicadas. O script de teste foca estritamente na **regra de negócio**, enquanto a classe Page cuida de *como* interagir com a interface.

### 2. Factory Pattern
Centraliza a geração e criação de dados dinâmicos e instâncias de entidades para os testes (como utilizadores válidos ou cenários com dados inválidos), eliminando dados estáticos, reduzindo redundâncias e mantendo a massa de testes independente.

---

## 🛡️ Governança de Código com ESLint

A aplicação de boas práticas foi acompanhada pela configuração do **ESLint** como ferramenta de análise estática. O linter atua como um supervisor automatizado na pipeline:

- Previne o surgimento de `code smells` antes da execução dos testes.
- Garante a aderência contínua aos padrões de estilo e formatação JavaScript estabelecidos.
- Reduz a carga cognitiva em revisões de código (Code Reviews).

---

## 🛠️ Tecnologias Utilizadas

- **Framework de Testes:** [Cypress](https://www.cypress.io/)
- **Linguagem:** JavaScript
- **Massa de Dados Dinâmica:** [@faker-js/faker](https://fakerjs.dev/)
- **Análise Estática / Linting:** [ESLint](https://eslint.org/)
- **Aplicação Alvo:** BugBank (Aplicação Web Bancária Simulada)
- **IDE / Ferramentas:** Cursor

---

## 📁 Estrutura do Repositório

```text
.
├── cypress/
│   ├── e2e/
│   │   ├── legacy/        # Testes em formato legado (sem padrões/acoplados)
│   │   └── clean-code/    # Testes refatorados com POM e Factory
│   ├── support/
│   │   ├── factories/     # Implementação do padrão Factory (geração de dados)
│   │   └── pages/         # Implementação do Page Object Model (POM)
├── eslint.config.js       # Regras de governança estática
├── cypress.config.js      # Configurações do Cypress
└── package.json