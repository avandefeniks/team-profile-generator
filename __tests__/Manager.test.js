const Manager = require('../lib/Manager');

test('Test to check if properties have been set up', () => {
    const manager = new Manager(1);

    expect(manager.officeNumber).toBe(1);
    expect(manager.role).toBe('Manager');
});

test('test to make sure getRole is working', () => {
    const manager = new Manager(1);

    let man = manager.getRole('Manager')

    expect(man).toEqual('Manager');
})