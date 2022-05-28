// const { expect } = require('expect');
// const { test } = require('picomatch');
const Engineer = require('../lib/Engineer');

test('test to see if properties exist', () => {
    const engineer = new Engineer('test');

    expect(engineer.github).toBe('test');
    expect(engineer.role).toBe('Engineer');
});

test('test getGithub function', () => {
    const engineer = new Engineer('test');

    expect(engineer.getGithub()).toBe('test');
});

test('test getRole function', () => {
    const engineer = new Engineer('test');

    expect(engineer.getRole()).toBe('Engineer');
});
