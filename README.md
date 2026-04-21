# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Research_site

# Farmer Smart Site

A web application for AI-driven rice farming management.

## Heroku Deployment

To deploy this application to Heroku, follow these steps:

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Login to Heroku:
   ```
   heroku login
   ```
3. Create a new Heroku app:
   ```
   heroku create farmer-smart-app
   ```
4. Deploy to Heroku:
   ```
   git push heroku main
   ```
5. Open the deployed app:
   ```
   heroku open
   ```

## Local Development

To run the application locally:

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Build for production:
   ```
   npm run build
   ```
4. Preview the production build:
   ```
   npm run preview
   ```
