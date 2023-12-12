# Introduction

Express.js API for a library management system.
The API allows users to perform CRUD operations on books, authors, genres and user domains.

[![Node.js Lint & Build](https://github.com/arf1e/team-5-backend/actions/workflows/node.yml/badge.svg)](https://github.com/arf1e/team-5-backend/actions/workflows/node.yml)
[![Deployment](https://github.com/arf1e/team-5-backend/actions/workflows/deploy-api.yml/badge.svg)](https://github.com/arf1e/team-5-backend/actions/workflows/deploy-api.yml)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

---

## Table of content

- [Team 5](#team-5)
- [Getting started](#getting-started)
- [Running tests](#running-tests)
- [Project structure](#project-structure)
- [Deployment](#deployment)

## Team 5

- [Quang Tri Cao](https://github.com/quangtricao) - Genres
- [Elizaveta Pashkovskaya](https://github.com/elis1386) - Authors
- [Thuy Hien Tran Nguyen](https://github.com/JuliaThTranNguyen) - Users
- [Egor Bulgakov](https://github.com/arf1e) - Books

## Technologies

- Typescript
- Node.js
- Express.js
- MongoDB (Mongoose)
- Jest

## Getting started

- Clone this project using `git clone git@github.com:arf1e/team-5-backend.git` command;
- Create your `.env` from `.env.example` either by hand or with `cp .env.example .env` (macOS/Linux/WSL);
- Fill the `.env` file with your MongoDB cluster credentials and JWT encoding secret;
- Install the project dependencies with `pnpm install`;
- Run the project in dev mode with `pnpm dev`.

## Running tests

- Use `pnpm test` command to run test cases;
- Use `pnpm test-coverage` to generate coverage report.

## Project structure

```
.
├── common
├── config
├── controllers
├── errors
├── middlewares
├── models
│   └── helpers
├── routes
├── schemas
├── services
├── test
│   ├── __fixtures__
│   ├── controllers
│   └── services
├── types
└── utils
```

## Deployment

Access this project live [here](https://nodejs-server-thjulia.vercel.app/api/v1/books).
