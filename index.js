const randomcolor = require('randomcolor'); //to use the randomcolor module
const chalk = require('chalk'); //to use the chalk module

const chooseColor = {
  hue: process.argv[2],
  luminosity: process.argv[3], //create a object to choose the color and give the option to use different colors
};
const colorinput = randomcolor(chooseColor);

const hexsquare = `
###############################
###############################
###############################
########               ########
########    ${colorinput}    ########
########               ########
###############################
###############################
###############################`; //Cube we need for the layout, inside the code for hex numbers(What about the size? Can I change that)

console.log(chalk.hex(`${colorinput}`).bold(`${hexsquare}`)); // to run it all, first part is the color second part is the form
