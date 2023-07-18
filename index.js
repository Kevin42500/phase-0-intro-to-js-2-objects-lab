// Write your solution in this file!
const employee = {
    name: "John",
    age: 30,
    role: "Engineer",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log(updateEmployeeWithKeyAndValue(employee, "age", 32));
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Manager"));
  console.log(deleteFromEmployeeByKey(employee, "name"));
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "age"));
  
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };
  