// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, email, id, role)
        this.github = github;
     }
     get Github() {
         return this.github;
     }
     getRole() {
        return "Engineer";
    }
}