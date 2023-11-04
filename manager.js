const Employee = require("./employee.js");

class Manager extends Employee { // Phase 02.1
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager)
        this.employees = [];
    }

    addEmployee(employee) { // Phase 02.2
        this.employees.push(employee);
        employee.manager = this;
    }

    _totalSubSalary() {
        let sum = 0
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                return sum += (employee.salary + employee._totalSubSalary())
            } else {
                sum += employee.salary
            }
        }
        return sum
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary(this.employees)) * multiplier
    }

}
// const splinter = new Manager('Splinter', 100000, 'Sensei');
// console.log('Before: ', splinter);

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// console.log('After: ', splinter);

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000



module.exports = Manager
