# Dev Notes
Since the scope of work is injectable and also very small, I've elected to omit external JS libraries like jquery, vue; all code is native js.

### Video Demo
- Debated a while on whether to use SVG or webfonts to render the animation + resizing.
- Settled on webfonts as it can handle linebreaks much more elegantly, means text can be as close as 20% margins as possible.

### API Demo
- Analyzed the page for any existing JSON sources, through both JS debugging and Network console of devtools. No JSON sources found.
- Scraped some `.js` files to see how they render results, looks like it's server rendered html results.
- They have a specific way to build image urls for results, through `window.imageConfig`.
- Found RSS source for page, but output deemed not optimal.
- Built basic DOM parser to parse current page results.
- Built page fetch code, initially playing with iframes to load in pages, but settled on DOMParser as it was much cleaner.
- Refactored all dev code into discrete sub functions, for separation of concerns and easy maintenance.
- Ensured JSON results excluded empty property values, as per pdf example.
