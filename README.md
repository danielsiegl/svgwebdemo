[![Publish](https://github.com/danielsiegl/svgwebdemo/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/danielsiegl/svgwebdemo/actions/workflows/pages/pages-build-deploymentl)
# svgwebdemo
Sample repo to showcase linters, unittests and automatic publishing

SVG load via fetch is not working if you open it from the file system!

if you have phyton installed it is easy to start a webserver in the repo:

`python -m http.server 8000`

Allowing you to test via [http://localhost:8000/](http://localhost:8000/)

The published version can be found here:
[https://danielsiegl.github.io/svgwebdemo/](https://danielsiegl.github.io/svgwebdemo/)

## prepare to execute playwright
`winget install -e --id OpenJS.NodeJS`
==`npm install --save-dev test`==
`npm install --save-dev @playwright/test`
`npx playwright test`
