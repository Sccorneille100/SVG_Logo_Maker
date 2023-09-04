const inquirer = require ("inquirer")
const {Triangle, Circle, Square}= require ('./lib/shape.js');
const fs = require ("fs")
const SVG = require ('./lib/svg.js')

var svg = new SVG();
class Logo {
    constructor(charInLogo, textColor, shapes, colorOfLogo, ) {
        this.charInLogo = charInLogo;        
        this.textColor = textColor;       
        this.shapes = shapes;
        this.colorOfLogo = colorOfLogo;
    };
    circle (){
        return  `<circle cx="150" cy="115" r="80" fill="${this.colorOfLogo}"/>`;
    }

};

function logoBuilder (){
 inquirer   
        .prompt([
            {
                type: "input",
                name: "charInLogo",
                message: "Enter up to three characters",
            
            },
            {
                type :'input',
                name : 'textColor',
                message: 'Enter a color for the message inside the logo'
            },
            {
                type: 'list',
                message: 'What shape would you like your logo to be?',
                name: 'shapes',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'colorOfLogo',
                message: "Enter a color of the shape logo"

            },

        ])

        .then ((response)=>{
            const createdLogo= new Logo (response.charInLogo, response.textColor, response.shapes, response.colorOfLogo);
            console.log(createdLogo)
            console.log(createdLogo)
            var figure;
            switch(createdLogo.shapes){
                case "Circle":
                    figure =new Circle();
                    break;
                
                case "Triangle":
                    figure= new Triangle();
                    break;
                
                case "Square":
                    figure = new Square();
                    break;
            
            }
            figure.setColor(createdLogo.colorOfLogo);
            const svg = new SVG();
            svg.setText(createdLogo.charInLogo, createdLogo.textColor);
            svg.setShape(figure)
            const svgMarkup = svg.render();
            return fs.writeFile("logo.svg", svgMarkup, (err)=> 
               err ? console.log(err): console.log ( "The logo has been successfully created"));
        })

        }
        
        logoBuilder();