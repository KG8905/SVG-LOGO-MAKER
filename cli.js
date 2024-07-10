const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
async run() {
    console.log("Running the CLI...");

    const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose the shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:'
    }
    ];

    try {
    console.log("Prompting user for input...");
    const answers = await inquirer.prompt(questions);
    console.log("User input received:", answers);

    let shape;
    if (answers.shapeType === 'Circle') {
        shape = new Circle();
        console.log("Created Circle shape");
    } else if (answers.shapeType === 'Triangle') {
        shape = new Triangle();
        console.log("Created Triangle shape");
    } else if (answers.shapeType === 'Square') {
        shape = new Square();
        console.log("Created Square shape");
    }
    shape.setColor(answers.shapeColor);
    
    console.log("Set shape color:", answers.shapeColor);

    const svg = new SVG();
    console.log("Created SVG object");
    svg.setText(answers.text, answers.textColor);
    console.log("Set SVG text and text color:", answers.text, answers.textColor);
    svg.setShape(shape);
    console.log("Set SVG shape");

    const svgString = svg.render();
    console.log("Generated SVG string:", svgString);

    await writeFile('logo.svg', svgString);
    console.log('Success! Your logo.svg file has been generated');
    } catch (error) {
    console.error("Error running CLI:", error);
    }
}
}

module.exports = CLI;
