import { createRequire } from "module";
const require = createRequire(import.meta.url);
const planets = require("./data.json");

const transformedPlanets = planets.map(planet => {
    planet.images = JSON.parse(JSON.stringify(planet.images))
    planet.overview = JSON.parse(JSON.stringify(planet.overview))
    planet.structure = JSON.parse(JSON.stringify(planet.structure))
    planet.geology = JSON.parse(JSON.stringify(planet.geology))

    return planet
})
// const fs = require('fs');

// const planetName = planets.map(planet => {
//     return {
//         "name": planet.name,
//         "url": planet.url,
//         "color": planet.color,
//         "textColor": `text-[${planet.color}]`,
//         "borderColor": `border-[${planet.color}]`,
//         "hoverColor": `hover:border-[${planet.color}]`
//     }
// })

// const text = planets.map((planet) => `text-[${planet.color}]`)
// const border = planets.map((planet) => `border-[${planet.color}]`)
// const hover = planets.map((planet) => `hover:text-[${planet.color}]`)
// const bg = planets.map((planet) => `bg:border-[${planet.color}]`)

// let style = hover.join(" ")

// const myJSON = JSON.stringify(planetName);

// fs.writeFile("output.json", myJSON, 'utf8', function (err) {
//     if (err) {
//         console.log("An error occured while writing JSON Object to File.");
//         return console.log(err);
//     }
 
//     console.log("JSON file has been saved.");
// });
