# Pharma Max Dashboard

## Overview
Pharma Max is a modern web application for pharmacy inventory management. The dashboard provides a professional interface for visualizing pharmaceutical inventory status, tracking stock trends, managing suppliers, locations, and generating reports.

**Project Status**: Fully configured and running in Replit environment  
**Last Updated**: October 27, 2025

## Recent Changes
- **October 27, 2025**: Initial GitHub import configured for Replit
  - Installed all frontend dependencies (React, Vite, Tailwind CSS, Recharts, React Router, Lucide React)
  - Configured Vite to serve on port 5000 with host 0.0.0.0 for Replit proxy support
  - **Disabled HMR** (Hot Module Replacement) to prevent infinite refresh loops in Replit environment
  - Updated Express backend to use port 3001 (localhost) to avoid conflicts
  - Created workflow for Vite frontend development server
  - Configured deployment settings for production (autoscale with Vite preview)

## Technologies

### Frontend
- **React 18** - UI framework
- **Vite 5** - Build tool and development server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Recharts 2** - Charting library for stock trends visualization
- **React Router DOM 6** - Client-side routing
- **Lucide React** - Icon library

### Backend (Optional)
- **Express 4** - Node.js web framework
- **EJS** - Template engine for server-rendered views
- **Port**: 3001 (localhost only)

## Project Architecture

### File Structure
```
├── src/                    # React application source
│   ├── components/         # Reusable UI components
│   │   ├── CardStat.jsx   # Statistics card component
│   │   ├── Navbar.jsx     # Top navigation bar
│   │   ├── Sidebar.jsx    # Side navigation menu
│   │   └── StockAlert.jsx # Stock alert component
│   ├── pages/             # Route pages
│   │   ├── Dashboard.jsx  # Main dashboard view
│   │   ├── Articles.jsx   # Articles management
│   │   ├── Fournisseurs.jsx # Suppliers management
│   │   ├── Emplacements.jsx # Locations management
│   │   └── Rapports.jsx   # Reports view
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── views/                 # EJS templates (backend)
├── index.js               # Express server (optional)
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

### Key Features
1. **Dashboard**: Overview with statistical cards, stock trend charts, and alerts
2. **Multi-page Navigation**: React Router for client-side routing
3. **Dark/Light Theme**: Toggle between color schemes
4. **Responsive Design**: Mobile-friendly interface with Tailwind CSS
5. **Stock Visualization**: Charts and graphs using Recharts
6. **Icon System**: Professional icons from Lucide React

## Development

### Running the Application
The Vite development server runs automatically via the "Frontend" workflow on port 5000.

**Manual Start**:
```bash
npm run dev
```

### Available Scripts
- `npm run dev` - Start Vite development server (0.0.0.0:5000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run backend` - Start Express backend server (localhost:3001)

### Port Configuration
- **Frontend (Vite)**: Port 5000, Host 0.0.0.0 (required for Replit preview)
- **Backend (Express)**: Port 3001, Host localhost (optional, not used by default)

## Deployment
The application is configured for Replit's autoscale deployment:
- **Build Command**: `npm run build`
- **Run Command**: `npx vite preview --host 0.0.0.0 --port`
- **Deployment Type**: Autoscale (stateless web application)

## Environment Configuration

### Vite Configuration (`vite.config.js`)
- Server host: `0.0.0.0` (allows Replit proxy)
- Server port: `5000` (strict)
- **HMR disabled**: Hot Module Replacement is turned off to prevent connection issues in Replit's iframe environment
- **Important**: You must manually refresh the browser to see code changes

### Tailwind Configuration
- Dark mode: `class` based
- Content sources: `./index.html`, `./src/**/*.{js,jsx,ts,tsx}`
- Custom theme colors and fonts configured

## User Preferences
None documented yet.

## Notes
- The Express backend (`index.js`) is present but not actively used by the React frontend
- The React app is a standalone SPA that doesn't require the Express server
- All frontend routing is handled client-side by React Router
- The application uses mock data for demonstration purposes
