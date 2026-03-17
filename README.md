# Ticket to Riot

Front page for **Ticket to Riot** — RVA's Own Punk Rock Beatles Tribute Band.

## Tech Stack

- **Angular 21** (standalone components, signal-based)
- **Bootstrap 5** for responsive layout
- **Font Awesome (free)** for icons
- **Vitest** for unit testing

## Pages

| Route | Description |
|-------|-------------|
| `/home` | Band intro, about, and offerings |
| `/book` | Booking information and contact |
| `/merch` | Merchandise shop |
| `/live` | Upcoming shows |

## Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

## Build

```bash
ng build
```

Output is in the `dist/ticket-to-riot-app` directory.

## Tests

```bash
ng test
```

Runs unit tests with Vitest.

## Deploy to GitHub Pages

``` bash
ng deploy --base-href=/ticket-to-riot/
```
