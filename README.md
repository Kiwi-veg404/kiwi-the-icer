#  Kiwi the Icer - Hockey Team Network

A comprehensive hockey team network application built with Web Components, Lit, and the DDD (HAX) Design System.

##  Project Overview

Kiwi the Icer is a multi-page hockey team website featuring:
- Client-side routing
- Team roster management
- Game schedules
- Statistics tracking
- League standings

##  Naming Convention

**Pattern**: `kiwi-{component-purpose}`

All components follow a consistent naming pattern using the "kiwi" prefix to identify them as part of the Kiwi the Icer ecosystem.

##  Components (10 Total)

### 1. **kiwi-app** - Main Application Container
- Purpose: Root component with routing logic
- Properties: `route` (String)
- Features: Handles navigation, browser history, route rendering

### 2. **kiwi-header** - Navigation Header
- Purpose: Top navigation bar
- Properties: `currentRoute` (String), `navItems` (Array)
- DDD Colors: Navy80 background, SkyBlue accents, White text

### 3. **kiwi-home** - Home Page
- Purpose: Landing page with welcome content
- Properties: `teamName` (String), `season` (String)
- DDD Colors: Navy80 to SkyBlue gradient, LimestoneLight sections

### 4. **kiwi-schedule** - Schedule Page
- Purpose: Displays all games
- Properties: `games` (Array)
- Features: Uses kiwi-game-card components

### 5. **kiwi-roster** - Team Roster Page
- Purpose: Shows all team players
- Properties: `players` (Array)
- Features: Grid layout with kiwi-player-card components

### 6. **kiwi-stats** - Statistics Dashboard
- Purpose: Team performance metrics
- Properties: `wins`, `losses`, `ties`, `goalsFor`, `goalsAgainst` (Numbers)
- DDD Colors: SkyBlue stat cards with Navy80 text

### 7. **kiwi-game-card** - Game Card Component
- Purpose: Displays individual game information
- Properties: `date`, `opponent`, `location`, `time` (Strings)
- DDD Colors: White background, Navy80 border, SkyBlue badges

### 8. **kiwi-player-card** - Player Card Component
- Purpose: Shows player profile information
- Properties: `name`, `number`, `position` (Strings)
- DDD Colors: Navy80 to SkyBlue gradient with White text

### 9. **kiwi-standings** - League Standings Table
- Purpose: Displays league standings
- Properties: `teams` (Array)
- DDD Colors: Navy80 header, SkyBlue highlight for first place

### 10. **kiwi-footer** - Footer Component
- Purpose: Site footer with links and copyright
- Properties: `year` (Number)
- DDD Colors: Navy80 background, SkyBlue links

##  DDD Color Palette

The project uses a professional ice hockey theme:
- **Primary**: `--ddd-theme-default-navy80` (Dark blue)
- **Accent**: `--ddd-theme-default-skyBlue` (Light blue)
- **Text**: `--ddd-theme-default-white`, `--ddd-theme-default-coalyGray`
- **Background**: `--ddd-theme-default-white`, `--ddd-theme-default-limestoneLight`

##  Routing

The application implements client-side routing:
- `/` - Home page
- `/schedule` - Game schedule
- `/roster` - Team roster
- `/stats` - Team statistics
- `/standings` - League standings

Routing is handled by:
1. History API (`pushState`, `popstate`)
2. Custom navigation events
3. Route-based component rendering

##  Installation

```bash
npm install
```

##  Development

Start the development server:
```bash
npm start
```

##  Build for Production

Create an optimized production build:
```bash
npm run build
```

This will generate the `public/` directory with all assets and bundled code ready for deployment.

##  Project Structure

```
kiwi-the-icer/
├── src/                      # All component source files
│   ├── kiwi-app.js          # Main app component
│   ├── kiwi-header.js       # Navigation header
│   ├── kiwi-footer.js       # Footer component
│   ├── kiwi-home.js         # Home page
│   ├── kiwi-schedule.js     # Schedule page
│   ├── kiwi-roster.js       # Roster page
│   ├── kiwi-stats.js        # Stats page
│   ├── kiwi-standings.js    # Standings page
│   ├── kiwi-game-card.js    # Game card component
│   └── kiwi-player-card.js  # Player card component
├── assets/                   # Static assets (images, icons)
├── elements/                 # Test files
├── lib/                      # HAX properties
├── locales/                  # Internationalization
├── index.html                # Entry point
├── package.json              # Dependencies
└── rollup.config.js          # Build configuration
```

##  License

Apache-2.0

##  Acknowledgments

Generated using [@haxtheweb/cli-tools](https://github.com/haxtheweb/hax-tools/tree/main/packages/cli-tools) using the [HAX Design System](https://haxtheweb.org/), a [Penn State](https://psu.edu) project.
