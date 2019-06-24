## [Done Design System](https://uilibrary.github.io/done-design-system/)

## Quick start

1. Clone the project with `git clone https://github.com/uilibrary/done-design-system.git`
2. Run `npm install` in the root design-system folder.
3. Run `npm start` to launch the Previewer.
4. Visit http://localhost:3000


## Documetation
Visit [documentation](https://uilibrary.github.io/done-design-system/docs) for detail instructions.

## Troubleshooting

### npm and Node.js

The Done Design System uses `npm` to manage dependencies. Please [install Node.js](https://nodejs.org), and try running `npm install` again.

If Node.js is already installed, make sure you’re running v8 or up.

### JavaScript and compilation issues

JavaScript dependencies sometimes get out of sync and inexplicable bugs start to happen. Follow these steps to give a fresh start to your development environment:

1. The installed `npm` version must be at least v6.9.0 You can update your npm with: `npm install npm -g` (`sudo` may be required).
2. Re-install dependencies: `rm -Rf node_modules && npm install`
3. `npm start`

If this did not work, try running `npm cache clean` and repeat the above steps.