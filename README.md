# Photo Retoucher

A React + Vite frontend for a virtual photo editing studio — includes marketing pages, service listings, blog, portfolio, pricing calculator, and authentication UI.

## Tech Stack

- **React** 18.3
- **Vite** 5.4
- **React Router DOM** 6.26
- **Lucide React** (icons)
- **PropTypes** (runtime prop validation)
- **ESLint** (React + Hooks rules)

## Prerequisites

- **Node.js** 18 or higher
- **npm** 9 or higher

Check your versions:

```bash
node -v
npm -v
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd "Photo Retoucher"
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`      | Starts the Vite development server        |
| `npm run build`    | Builds the app for production to `dist/`  |
| `npm run preview`  | Serves the production build locally       |
| `npm run lint`     | Runs ESLint on the entire project         |

## Project Structure

```
src/
├── app/
│   ├── layouts/       # Route-level layout wrappers (MainLayout, AuthPageLayout)
│   ├── pages/          # Route-level page components
│   └── routes/         # Route definitions (AppRoutes.jsx)
├── constants/           # Static/mock data used across the app
├── features/            # Domain-specific components grouped by feature
├── services/             # API/service layer (currently mocked)
├── shared/               # Reusable, generic UI components
├── styles/                # Global stylesheets
├── App.jsx
└── main.jsx
public/
└── assets/               # Static images, icons, and logos
```

## Import Alias

The project uses `@` as an alias for `src/`, configured in `vite.config.js`:

```js
import Button from "@/shared/buttons/Button";
```

## Notes

- `src/services/authService.js` and `src/services/contactService.js` currently return mocked responses and are meant to be replaced with real API calls.
- Run `npm run lint` before committing to catch unused variables, unescaped entities, and React Hooks rule violations.

## License

This project is private and not licensed for public distribution.
