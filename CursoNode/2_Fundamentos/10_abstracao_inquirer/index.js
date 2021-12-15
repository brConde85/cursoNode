const inquirer = require('inquirer');

inquirer.prompt([
  {
    name: 'question1',
    message: 'What is the first grade?'
  },
  {
    name: 'question2',
    message: 'What is the seccond grade?'
  }
]).then(
  (answers) => {
    console.log(answers);
    const divisionFactor = 2;
    const mean = (Number(answers.question1)+Number(answers.question2))/divisionFactor;
    !Number.isNaN(mean) ? 
      console.log('Your mean is: '+ mean) :
      console.log("Error, One or more answers aren't a number\nGrade 1: %s <-\nGrade 2: %s <-",answers.question1,answers.question2)
  }
)
.catch(
  error => console.log(error)
); 