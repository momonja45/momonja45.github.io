# Mon Vincent Vi&ntilde;as - Portfolio

A responsive personal portfolio built with React and Vite. It presents my professional experience, technical skills, selected projects, recent public GitHub repositories, downloadable resume, and contact information.

This project also serves as a practical React learning project, covering component design, state, Effects, Context, custom Hooks, forms, API requests, accessibility, and responsive styling.

## Features

- Responsive single-page layout
- Resume-based professional experience and skills
- Downloadable PDF resume
- Light and dark themes with saved user preference
- Mobile navigation menu with Escape-key support
- Searchable and filterable project list
- Reusable project cards and section headings
- Project details modal rendered with a React portal
- Keyboard focus trapping and restoration for the project modal
- Recent repositories loaded from the GitHub API
- Loading, empty, and error states for API data
- Contact form that opens the visitor's email application
- Accessible labels, focus indicators, and semantic HTML

## Built With

- React 19
- Vite
- JavaScript
- HTML
- CSS
- GitHub REST API

No CSS framework or component library is used.

## React Concepts Practiced

- JSX and functional components
- Props and callback props
- State with `useState`
- Effects and cleanup with `useEffect`
- DOM references with `useRef`
- Stable callbacks with `useCallback`
- Shared state with Context and `useContext`
- Custom Hooks
- Controlled form fields
- Conditional rendering
- Rendering lists with `.map()` and keys
- Derived data with `.filter()`
- Portals with `createPortal`
- Asynchronous requests with `fetch`

## Project Structure

```text
src/
|-- assets/          Images used by the portfolio
|-- components/      React UI components
|-- context/         Theme Context definition
|-- data/            Projects, experience, and skills data
|-- hooks/           Custom React Hooks
|-- App.jsx          Main page composition
|-- index.css        Global and responsive styles
`-- main.jsx         Application entry point

public/
`-- resume/          Downloadable PDF resume
```

## Getting Started

### Requirements

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL displayed by Vite.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Customization

Portfolio content is stored in:

```text
src/data/
|-- experience.js    Professional experience
|-- projects.js      Professional and learning projects
`-- skills.js        Skills grouped by category
```

The GitHub username used to load public repositories is defined in:

```text
src/components/GitHubRepos.jsx
```

Theme state and persistence are handled by `ThemeProvider`, while theme access is exposed through the `useTheme` custom Hook.

The downloadable resume is stored at:

```text
public/resume/mon-vincent-vinas-resume.pdf
```

## Contact Form

The contact form uses a `mailto:` link. It opens the visitor's configured email application with the subject and message filled in; it does not send email directly from the website.

## Deployment

The portfolio is not deployed yet. A production build can be created with:

```bash
npm run build
```

The generated `dist` directory can be deployed to a static hosting provider such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Author

Mon Vincent Vi&ntilde;as

- GitHub: [momonja45](https://github.com/momonja45)
- Email: [v.mon.vincent@gmail.com](mailto:v.mon.vincent@gmail.com)
