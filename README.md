# Minesweeper Documentation

This repository hosts documentation for the **Minesweeper** project. The site uses the custom domain `minesweeper.w3cub.com`.

## App Store

- **App Store ID**: `6793471840`
- **Public App Store link**: https://apps.apple.com/app/id6793471840
- **App Store Connect (developer)**: https://appstoreconnect.apple.com/apps/6793471840/distribution/info
- **Platforms**: iPhone, iPad, Mac (universal app)

## Documentation

This site is built with [VitePress](https://vitepress.dev/) and contains guides for the Minesweeper project.

### Getting Help

- **Submit Issues**: Report bugs or request features at https://github.com/minesweeper-app/minesweeper-site/issues
- **Documentation**: Browse the full documentation at https://minesweeper.w3cub.com

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm docs:dev
```

This will start a local development server at `http://localhost:5173`.

### Build

```bash
pnpm docs:build
```

### Preview

```bash
pnpm docs:preview
```

## Deployment

This documentation site can be deployed to GitHub Pages; the workflow includes a step to add a `CNAME` for the custom domain `minesweeper.w3cub.com`.

### Manual Deployment

To deploy manually:

1. Build the site: `pnpm docs:build`
2. The built files will be in `docs/.vitepress/dist`
3. Deploy to your hosting platform or push to `gh-pages`

## Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Documentation may be redistributed according to the repository LICENSE.
