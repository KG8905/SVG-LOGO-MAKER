const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
run() {
    console.log("Starting CLI...");

    inquirer
    .prompt([
        {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (max 3 characters):',
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
        },
        {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
        },
    ])
    .then((answers) => {
        console.log("Received answers:", answers);

        let shape;
        switch (answers.shapeType) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        }

        console.log("Created shape:", shape);

        shape.setColor(answers.shapeColor);

        const svg = new SVG();
        svg.setText(answers.text, answers.textColor);
        svg.setShape(shape);

        console.log("Generated SVG content:", svg.render());

        return writeFile('logo.svg', svg.render());
    })
    .then(() => {
        console.log("SVG file written successfully!");
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });
}
}

module.exports = CLI;

if (require.main === module) {
new CLI().run();
}
