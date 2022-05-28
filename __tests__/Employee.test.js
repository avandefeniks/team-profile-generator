const Employee = require("../lib/Employee");

test('test to check if properties have been set up', () => {
    const employee = new Employee('Angel', 1, 'angel@test.com');

    expect(employee.name).toBe('Angel');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('angel@test.com');
});

test('test to check getName function', () => {
    const employee = new Employee('Angel', 1, 'angel@test.com');
  
    expect(employee.getName()).toBe('Angel');
});

test('test to check getId function', () => {
    const employee = new Employee('Angel', 1, 'angel@test.com');

    expect(employee.getId()).toBe(1);
}); 

test('test to check getEmail  function', () => {
    const employee = new Employee('Angel', 1, 'angel@test.com');

    expect(employee.getEmail()).toBe('angel@test.com');
}); 

test('test to check getRole function', () => {
    const employee = new Employee('Angel', 1, 'angel@test.com');

    let emp = employee.getRole('Employee');
    
    expect(emp).toEqual('Employee');
});