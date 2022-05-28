const Manager = require('../lib/Manager');

test('Test to check if properties have been set up', () => {
    const manager = new Manager(1);

    expect(manager.officeNumber).toEqual(1);
    expect(manager.role).toEqual('Manager');
})