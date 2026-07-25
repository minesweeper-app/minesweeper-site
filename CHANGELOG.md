# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.32] - 2026-04-16

### Added
### Added
- Improved local network matchmaking and LAN play stability
- Better compatibility and portability for game saves
- Faster game load times and improved UI responsiveness
- Improved overall interaction and gameplay experience
- Enhanced macOS compatibility and stability
- General bug fixes and performance improvements

## [1.0.0] - 2025-12-11

-### Added
- Initial release of Minesweeper documentation
- Complete VitePress setup with TypeScript configuration
- Comprehensive user guides:
  - Introduction to Minesweeper
  - Installation instructions for macOS
  - Usage guide with keyboard shortcuts
  - Troubleshooting section
  - Frequently Asked Questions
- Automatic CI/CD deployment to GitHub Pages
- Project structure with essential files (.gitignore, LICENSE, CONTRIBUTING.md, CODE_OF_CONDUCT.md)
- Local search functionality
- Social links and footer
- Last updated timestamps on pages

### Technical Details
- Built with VitePress 1.6.4
- Uses pnpm for package management
- GitHub Actions workflow for automated deployment
- Responsive design with modern UI
- SEO optimized with proper meta descriptions

---

## Contributing to the Changelog

When making changes to the documentation:

- Add entries to the "Unreleased" section above
- Use the following types: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`
- Keep descriptions clear and concise
- Reference issue numbers when applicable

## Release Process

1. Update version in `package.json`
2. Move items from "Unreleased" to a new version section
3. Commit with message "Release vX.X.X"
4. Push to trigger deployment