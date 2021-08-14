# OIDC Client for DfE
Sample OIDC client for DfE

## Getting Started
1. First, clone the repository to your local machine and navigate into the folder. For example:

```bash
git clone https://github.com/mesen10/oidc-client-dfe
cd oidc-dfe-client
```
2. Second, install all the dependencies:

```bash
yarn
```

3. Edit your environment variables

- Open the `sample.config.env` file located inside the config folder of the project
- Add the right values for your `CLIENT_ID`, `CLIENT_SECRET` and `PUBLIC_API.TOKEN`
- Replace the "sample" with your environment name. Like `sample.config.js` -> `development.config.js`

4. Then run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the code by modifying the files. The server auto-updates the changes as you edit the file.

5. Create a new logically-named branch. For example:

```bash
git checkout -b user-role-enhancements
```

6. Push your changes to GitHub and create a PR against the master branch, linking the PR to any relevant issues.
