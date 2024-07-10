# SVG Logo Maker
Description
SVG Logo Maker is a command-line tool that allows users to generate custom SVG logos. Users can specify the text, text color, shape, and shape color of the logo. The generated SVG file is saved to the local filesystem.

Table of Contents:

Installation
Usage
Features
Example
Contributing
License
Questions
Installation

To install and run the SVG Logo Maker, follow these steps:

Clone the repository:
git clone https://github.com/your-username/svg-logo-maker.git
cd svg-logo-maker

Install the dependencies:
npm install
Run the application:
npm start

Usage
When you run the application, you will be prompted to enter the following information:

Text: The text to be displayed on the logo (maximum 3 characters).
Text Color: The color of the text.
Shape Type: The shape of the logo (options are Circle, Triangle, Square).
Shape Color: The color of the shape.
After entering the required information, the tool will generate an SVG file named logo.svg in the current directory.

Features
Custom Text: Users can specify any text (up to 3 characters) to be displayed on the logo.
Custom Text Color: Users can choose any color for the text.
Custom Shapes: Users can choose from three shapes: Circle, Triangle, and Square.
Custom Shape Color: Users can choose any color for the shape.
SVG Output: The tool generates a scalable vector graphic (SVG) file.

Example
Here's an example of running the SVG Logo Maker:

$ npm start

 Enter the text for the logo (max 3 characters): ABC
 Enter the text color: #FFFFFF
 Choose a shape for the logo: Circle
 Enter the shape color: #0000FF

Generated SVG content:
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#0000FF" />
  <text x="50%" y="50%" fill="#FFFFFF" font-size="20" text-anchor="middle" dy=".3em">ABC</text>
</svg>

SVG file written successfully!


Contributing
Contributions are welcome! If you would like to contribute, please follow these steps:

Fork the repository.

Create a new branch.

git checkout -b feature/your-feature-name
Make your changes.

Commit your changes.


git commit -m "Add your message here"
Push to the branch.


git push origin feature/your-feature-name
Create a pull request.

License
This project is licensed under the MIT License.

Questions
If you have any questions or need further assistance, feel free to reach out:

GitHub: KG8905
Email: ketaharris32@gmai.com
