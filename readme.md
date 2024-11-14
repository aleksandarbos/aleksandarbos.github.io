# Personal Portfolio Website

A modern, minimalist portfolio website built with Pelican static site generator. Features a custom-developed theme with a glass-morphic design, dynamic technology stack presentation, and animated backgrounds.

## Prerequisites

- Python 3.8+
- pip (Python package manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/aleksandarbos/portfolio.git
cd portfolio
```

2. Install required packages:
```bash
pip install pelican
pip install ghp-import  # For GitHub Pages deployment
```

## Local Development

Start the development server with auto-reload:
```bash
pelican -l -r --bind 0.0.0.0
```

The site will be available at `http://localhost:8000`

## Project Structure

```
portfolio/
├── content/                  # Website content
│   ├── pages/               # Static pages (About, Projects)
│   ├── articles/            # Blog posts
│   └── extra/               # Static files (CV, etc.)
├── theme/                   # Custom theme
│   ├── static/
│   │   ├── css/            # Stylesheets
│   │   └── js/             # JavaScript files
│   └── templates/          # Jinja2 templates
├── output/                 # Generated site
├── pelicanconf.py         # Pelican configuration
└── publishconf.py         # Production settings
```

## Theme Features

- Responsive design optimized for all devices
- Glass-morphic UI elements
- Animated background effects
- Dynamic technology stack showcase
- Dark mode optimized
- Social media integration
- Expandable sections for detailed content

## Customization

The site can be customized through:
- `pelicanconf.py` for basic settings
- Theme templates in `theme/templates/`
- Styles in `theme/static/css/custom.css`

## Deployment

For GitHub Pages deployment:
```bash
# Build the site
pelican content -s publishconf.py

# Deploy to GitHub Pages
ghp-import output -b gh-pages
git push origin gh-pages
```

## License

This project is proprietary and intended for personal use only. All rights reserved.

Copyright © 2024 Aleksandar Bošnjak

### Terms of Use

1. **Personal Use**: You may view and fork this repository for personal reference.
2. **Redistribution**: Any redistribution or use of this code, with or without modification, requires explicit written permission from the author.
3. **Attribution**: If permission is granted, proper attribution must be given to the original author.

## Contact

- LinkedIn: [aleksandar-bosnjak](https://linkedin.com/in/aleksandar-bosnjak)
- GitHub: [aleksandarbos](https://github.com/aleksandarbos)
- Email: aleksandarbos.ns@gmail.com

## Acknowledgments

- Background animation inspired by [@yuruyurau](https://x.com/yuruyurau/status/1855984865080234183)
- Icons provided by [Lucide](https://lucide.dev/)
- Tech stack icons from [Simple Icons](https://simpleicons.org/)
