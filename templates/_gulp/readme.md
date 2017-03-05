# Basic Gulp Setup

## How to use

1. In the root folder, run `npm install` (you may need sudo)
2. Do magic


## Gulp Tasks

### Default Task

    gulp

Running the default task automatically watches your project folders for any changes and runs the accompanying task. For example, if you've elected to run tasks on your JavaScript, anytime you change a JavaScript file gulp will automatically run those tasks, including a browser refresh if you've included BrowserSync.

The default task watches the project folder for changes and will run the correct tasks based on said changes. (You will basically use this for everything)

### CSS

    gulp styles

Running the gulp styles task will run CSS tasks once.

### Javascript

    gulp scripts

Running the gulp scripts task will run JavaScript tasks once.

### Images

    gulp images

Running the gulp images task will run image tasks once.
