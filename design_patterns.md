## Design Pattern

Cover fringed patterns only.

- [Vistor Pattern](#visitor-pattern)

### Visitor Pattern

- The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves. The new logic resides in a separate object called the Visitor.
- Visitors are useful when building extensibility in a library or framework.

```js
var Employee = function(name, salary, vacation) {
    var self = this;

    this.accept = function(visitor) {
        visitor.visit(self);
    };

    this.getName = function() {
        return name;
    };

    this.getSalary = function() {
        return salary;
    };

    this.setSalary = function(sal) {
        salary = sal;
    };

    this.getVacation = function() {
        return vacation;
    };

    this.setVacation = function(vac) {
        vacation = vac;
    };
};

// visitors
var ExtraSalary = function() {
    this.visit = function(emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

var ExtraVacation = function() {
    this.visit = function(emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};

const employee = new Employee('John', 10000, 10);

const visitorSalary = new ExtraSalary();

employee.accept(visitorSalary);

employee.getSalary(); // 11000
```
