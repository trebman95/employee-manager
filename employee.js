class Employee { //Phase 01
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title
        this.manager = manager;
        if (manager !== null) { //Phase 03
            manager.addEmployee(this)
        }
    }

    calculateBonus(multiplier) { //Phase 04a
        return (this.salary) * multiplier
    }

}

// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donny = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.25)); // => 22500
// console.log(donny.calculateBonus(0.15)); // => 12750

module.exports = Employee

// const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo)
