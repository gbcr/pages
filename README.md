# Wave

## Setup
To setup the project, you need `bower`, `ruby`, `gulp` and `node.js` installed.
npm install
bower install

## Build
Run `gulp` to building the project into folder dist.

## Dev environment
Watch live reload : Run `gulp watch` for preview the project.
Then your browser will be opened automatically with the address http://localhost:3000
You can change the port 3000 in gulpfile.js.


## Folder Structure
    .
    |-- dist                         ;; contains static website after `gulp`
    |-- node_modules                 ;; contains node_modules for gulp
    |-- app                          ;; development folder 
        |-- bower_components         ;; contains 3rd party libraries by bower
        |-- images                   ;; contains images
        |-- scripts                  ;; contains our js
            |--vendor                ;; contains 3rd party libraries
        |-- styles                   ;; contains our stylesheets
            | site.scss              ;; the whole site style file
            | ie.scss                ;; contians styles for ie
            |--templates             ;; styles for independent pages
