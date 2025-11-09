# demo-grid-app

A simple React application that displays a full-screen grid of images. When you click on an image, it flips over to reveal a QR code.

## Features

- **Interactive Grid Layout**: Responsive grid that adapts to different screen sizes
- **Flip Animation**: Smooth 3D flip animation when clicking on images
- **QR Code Generation**: Each image flips to show a unique QR code
- **Modern Design**: Clean, colorful interface with gradient backgrounds

## Demo

The app is deployed at: [https://mm-productions.github.io/demo-grid-app/](https://mm-productions.github.io/demo-grid-app/)

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173/demo-grid-app/`

### Building

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions.

To deploy manually:

```bash
npm run deploy
```

## Customization

To customize the images and QR codes, edit the `gridItems` array in `src/App.jsx`. You can:

- Change the colors and content of placeholder images
- Update the QR code values (URLs or text)
- Modify titles for each grid item
- Add or remove items from the grid

## Technologies

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **qrcode.react**: QR code generation
- **CSS3**: Animations and styling
- **GitHub Pages**: Hosting
