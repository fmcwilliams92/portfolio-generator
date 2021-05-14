// allow you to bring in certain librabries 
const fs = require('fs');

// allows you to link the other js sheets and send info
const generatePage = require('./src/page-template.js');

// collects the user input
const profileDataArgs = process.argv.slice(2);

// sets the user input categories
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});