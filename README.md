# Next.js Template App

## Table Of Contents

# About the project

- This is my [Next.js](https://nextjs.org/) project which has **React Components**, **Bootstrap 5**, `css`, `JavaScript`, **Docker**, **MongoDB** and **PostgreSQL**.

# Setup

- Check my [github.com/nyangweso-rodgers - Setting Next.js App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/blob/main/02-JavaScript-Libraries/01-React/03-React-Frameworks/01-Next.js/01-Setting-Next.js-App/Readme.md) github repo on how to configure and run `Next.js`

# Setup CI/CD with Github Action

- There are several means of setting up CI/CD. **GitHub action** workflow is one of them.
- Step #1:
  - Create a `.github/` directory which will contain the setup for CI/CD.
  - For GitHub to identify the setup, the folder name must be written as **workflows**, if not, the GitHub action will not run a pipeline for the setup.
  - Create a `workflows/` folder inside the `.github/` folder.
- Step #2:

  - Code content:

    - we use a `.yml` file as the file extension for setting up our GitHub workflow actions.
    - Create a `main.yml` file inside the `.github/workflows/` with the following contents:

      ```yml
      #main.yml
      name: Build

      on:
        push:
          branches:
            - main
        workflow_dispatch:

      jobs:
        # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
        - uses: actions/checkout@v3

        - name: Setup Node
          uses: actions/setup-node@v2
          with:
            node-version: 16.x

        - name: Install dependencies
          run: npm install
      ```

- Remarks:
  - Benefits of CI/CD:
    - With a CI/CD pipeline, you can test and deploy code more frequently, giving testers the ability to detect issues as soon as they occur and to fix them immediately. You are essentially mitigating risks in real-time.
    - With a CI/CD pipeline, extensive logging information is generated at each stage of the development process. There are various tools available to analyse these logs effectively and get immediate feedback about the system.
    - If any new code changes break the production application, you can immediately return the application to its previous state. Usually, the last successful build gets immediately deployed to prevent production outages.
    - It provides extensive logs for every build as a report.

# Dockerize the application

- We can use **Docker** to run our application with PostgreSQL.
- Step #1: Create a `docker-compose.yml` file with the following configurations:

  ```yml
  services:
    db:
      container_name: db
      image: postgres:13
      environment:
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: postgres
        POSTGRES_DB: postgres
      ports:
        - 5432:5432
      volumes:
        - pgdata:/var/lib/postgresql/data

  volumes:
    pgdata: {}
  ```

- Step #2: Run `docker compose up -d`
- Check if the container is running by: `docker ps -a`
- Step into the db container by:
  ```sh
    docker exec -it db psql -U postgres
  ```
- Now that you are in the Postgres container, you can type: `\l` or `\dt` And you should see no relations.

# Resources and Further Reading

1. [github.com/nyangweso-rodgers - Setting Next.js App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/blob/main/02-JavaScript-Libraries/01-React/03-React-Frameworks/01-Next.js/01-Setting-Next.js-App/Readme.md)
2. [Setup CI/CD with Github Action in Nextjs](https://blog.curtisdev.com/setup-cicd-with-github-action-in-nextjs)
