# Jieren Deng Personal Site

Personal academic and professional website for Jieren Deng, built with Jekyll on top of a customized `al-folio` setup.

Live site:
- `https://www.jieren-deng.com/`
- `https://jrdeng93.github.io/`

## Project Structure

- `_pages/`: main site pages such as the home page
- `_news/`: timeline/news entries shown on the homepage
- `_bibliography/`: publication data
- `_includes/`, `_layouts/`, `_sass/`: theme customizations
- `assets/`: images, styles, and other static assets
- `_site/`: generated site output used for deployment

## Local Development

This repository currently expects an older Jekyll workflow and a Ruby/Bundler setup that matches `Gemfile.lock`.

Typical local commands:

```bash
bundle install
bundle exec jekyll serve
```

If your local Ruby version does not match the locked Bundler/Jekyll versions, local build commands may fail until Ruby is aligned.

## Deployment

This project uses a manual deployment flow.

The helper script is:

```bash
./bin/deploy
```

The intended flow in `site_update.sh` is:

```bash
git add .
git commit -m "your message"
./bin/deploy
git push
```

In practice, `./bin/deploy`:

- checks for a clean working tree
- builds the site
- publishes the generated output to `gh-pages`

## Content Notes

- Homepage content lives primarily in `_pages/about.md`
- News icon/type mapping is handled in `_includes/news.html`
- Homepage styling customizations are mainly in `_sass/_layout.scss`

## Credits

- Theme base: `al-folio`
- Customized for Jieren Deng's personal website
