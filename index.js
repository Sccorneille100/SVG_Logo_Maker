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
            let logosvg = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
                    
                              <  ${figure.value} fill="${createdLogo.colorOfLogo}"/>
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
                                font-size="40px" font-family="Georgia" 
                                fill="${createdLogo.textColor}">${createdLogo.charInLogo}</text>
                        </svg>`;

            fs.writeFile("logo.svg",logosvg, (err)=> 
               err ? console.log(err): console.log ( "The logo has been successfully created"));
        })

        }
        
        logoBuilder();