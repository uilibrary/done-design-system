## [Done Design System](https://uilibrary.github.io/done-design-system/)
Design system for bootstrap 4. While bilding new products we were doing same thing over and over again.
So we decided to build a design system for our upcoming products. Done is like an inventory. 

Done is `MIT` licensed, so you can use for your personal/commercial projects.

Files & [SASS variables](https://uilibrary.github.io/done-design-system/docs/sass/variable.html) are organized very carefully as these gets messy very easily.

## Quick start

1. Clone the project with `git clone https://github.com/uilibrary/done-design-system.git`
2. Run `npm install` in the root design-system folder.
3. Run `npm start` to launch the Previewer.
4. Visit http://localhost:3000


## Documetation
Visit [documentation](https://uilibrary.github.io/done-design-system/docs) for detail instructions.

## Folder Structure

<pre class="highlight"><code>done/
├── LICENSE.md
├── README.md
├── assets/
  ├── styles/
  │   ├── css
  │   │    ├── done/done.css
  │   │    ├── done/done.min.css
  │   ├── sass
  │       ├── done
  │           ├── components
  │           ├── functions
  │           ├── mixins
  │           ├── sections
  │           ├── utilities
  │           ├── variables
  │   
  └── imgages/
  │   ├── cities/
  │   ├── faces/
  │   ├── illustrations/
  │   ├── logos/
  │   ├── products/
  └── js/
  │   ├── es5/done.min.js
  │   ├── es5/done.js
  │   └── main/done.js
  │   
  └── vendor/
      ├── bootstrap/
      ├── bootstrap-select/
      ├── bootstrap-slider/

</code></pre>


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