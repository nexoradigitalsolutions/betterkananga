# Better Kananga

A modern, comprehensive barangay information and government services portal built with Vue 3, TypeScript, and Vite. This application provides residents with easy access to government information, services, news, and administrative details.

## Features

- **Interactive Map** - Leaflet-based map for location visualization
- **Weather Widget** - Real-time weather information
- **Government Directory** - Browse barangay officials and their information
- **Services Directory** - Discover available barangay services
- **Legislative Information** - View ordinances and resolutions
- **News & Updates** - Latest news and announcements
- **Budget & Statistics** - Financial and demographic information
- **Responsive Design** - Built with Tailwind CSS for all devices

## Tech Stack

- **Framework**: Vue 3 with `<script setup>` SFCs
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router
- **Mapping**: Leaflet
- **HTTP Client**: Axios
- **Icons**: PostCSS with Autoprefixer

## Project Setup

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Type Check

```bash
npm run type-check
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable Vue components
├── pages/          # Page components for routing
├── composables/    # Vue composition utilities
├── router/         # Vue Router configuration
├── stores/         # Pinia state management
├── assets/         # Static assets
└── App.vue         # Root component
```

## Contributing

This is an open-source project for the people of Kananga! Contributions are welcome from anyone in the community. You can:

- Report bugs and suggest features through issues
- Fork the repository and submit pull requests
- Update and modify the code freely
- Deploy your own version for your community

We encourage community members to contribute improvements, translations, new features, and bug fixes.

## License

This project is open source and freely available for the people of Kananga to use, modify, fork, and distribute. It is released under the MIT License.

For more information, see the LICENSE file in the repository.
