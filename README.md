# recipe-finder

### Table of Contests
-  [Author](#author)
-  [General info](#general-info)
-  [Features](#features)
-  [Technologies & Tools](#technologies--tools)
-  [Project setup](#project-setup)

## Author
[Weronika Brzeczkowska-Kuzianik](https://github.com/brzeczkowskaw) 

## General info
This project was created as a part of recruitment test to join DTT company. 
You can see demo of app [here](https://brzeczkowskaw.github.io/DTT-test/#/).

## Features
Application is a website to search ideas for meals with recipes. It uses TheMealDB API. 
Home page shows random 10 recipes. 
After clicking on choosen meal, user is moved to Meal page, when the recipe ingredients and preparation method is shown. It shows also category of this meal and random three meals of the same category as other suggestions for user. 
Random Meal page shows just random recipe, as a draw what to cook today. There is button which shows next random recipe. User can be moved to a Meal page from here as well. 
Category button in navbar is a dropdown button showing again possibilities to move to Home, Random Meal page and author's portfolio. 

## Technologies & Tools
Application was created using: 
- Vue.js framework, 
- TypeScript,
- HTML,
- CSS,
- TheMealDB API

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
