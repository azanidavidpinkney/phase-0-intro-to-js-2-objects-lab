// Write your solution in this file!

const employee = {
    name: "John",
    streetAddress: "1201 North Ogden Drive",
}
  

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const employeeUpdate = {...employee};
    employeeUpdate[name] = streetAddress;
    return employeeUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}