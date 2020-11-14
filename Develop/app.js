const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
let Team = []
const promptUser = () => {
     inquirer.prompt([
     
      {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Intern', 'Engineer']
      },
    ])

    .then(answers => {
      console.log(answers)
      // promptUser2(answers)
      if(answers.role === 'Intern'){
        promptIntern()
      } else if(answers.role === 'Manager') {
        promptManager()
      }  else 
        promptEngineer( )
      {
      }
  })
      
  }
  const promptManager = () => {
    // console.log(role)
    inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
 
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?'
  }
    ])
  .then(answers => {
    console.log(answers.role)
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    // Pushing manager object to teams array
    Team.push(manager)
    console.log(answers)
    moreEmp()
  })
    
}
const promptIntern = () => {
  // console.log(role)
  inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: 'What is your name?'
},
{
  type: 'input',
  name: 'id',
  message: 'What is your id?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email?'
},

{
  type: 'input',
  name: 'school',
  message: 'What is your School?'
}
  ])
.then(answers => {
  console.log(answers.role)
  let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
  // Pushing manager object to teams array
  Team.push(intern)
  console.log(answers)
  moreEmp()
})
  
}
const promptEngineer = () => {
  // console.log(role)
  inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: 'What is your name?'
},
{
  type: 'input',
  name: 'id',
  message: 'What is your id?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email?'
},

{
  type: 'input',
  name: 'github',
  message: 'What is your github profile?'
}
  ])
.then(answers => {
  console.log(answers.role)
let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
  // Pushing manager object to teams array
  Team.push(engineer)
  console.log(answers)
moreEmp()
})
  
}
  const generateHTML = answers => {
    console.log("promptUser", promptUser, generateHTML, answers)
  }


  promptUser()

// ask user if they want to add another employee

// call make team after all info has been input
const moreEmp = () => {
  inquirer.prompt([
   
    
    {
      type: 'list',
      name: 'moreEmployees',
      message: 'Do you want to add another employee',
      choices: ["yes", "no"]
    }
      ])
    .then(answers => {
      if(answers.moreEmployees === "yes") {
      promptUser()
      }
      else {
      makeTeam()
    }
    })
}
  const makeTeam = () => {
    fs.writeFileSync(outputPath, render(Team), "utf-8")

  }
  // .then(answers => {
    // const html = generateHTML(answers);
    // return writeFileAsync('index.html', html);
  // })
  // .then(() => {
    // console.log('Successfully wrote to index.html');
  // })
  // .catch(err => console.log(err));
// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'
  

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
//     <link rel="stylesheet" href="style.css">
//     <title>Employee management system</title>
//   </head>
//   <body>
//     <div class = "container">
//       <div class="card" style="width: 20rem;">
//         <div class="card-body">
//             <div class = "colorTop">
//           <h5 class="card-title" id="name">Name</h5>
//           <p class = "role" id="role1">Role</p>
//         </div>
//           <div class="card" style="width: 17.5rem;">
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item" id="topListGroup id">ID:</li>
//               <li class="list-group-item" id="email">email:</li>
//               <li class="list-group-item" id="reference">Reference</li>
//             </ul> 
//           </div>
//         </div>      
//       </div>
//     </div>
//     {/* <!-- Optional JavaScript; choose one of the two! -->

    // <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    // <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    // <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
    // <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    // <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    // -->  */}
//   </body>
// </html>

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
/* !doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Employee management system</title>
  </head>
  <body>
    <div class = "container">
      <div class="card" style="width: 20rem;">
        <div class="card-body">
            <div class = "colorTop">
          <h5 class="card-title">Card title</h5>
          <p class = "role">Manager</p>
        </div>
          <div class="card" style="width: 17.5rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="topListGroup">ID:</li>
              <li class="list-group-item">email:</li>
              <li class="list-group-item">Reference</li>
            </ul> 
          </div>
        </div>      
      </div>
    </div>
    <!-- Optional JavaScript; choose one of the two! -->
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    -->
  </body>
</html> */