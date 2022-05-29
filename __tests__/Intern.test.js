// const { expect } = require('expect');
// const { test } = require('picomatch');
const Intern = require('../lib/Intern');

test('test to see if properties are create', () => {
    const intern = new Intern('Belleville High');

    expect(intern.school).toBe('Belleville High');
    expect(intern.role).toBe('Intern');
});

test('test getSchool funtion', () => {
    const intern = new Intern('Belleville High');

    expect(intern.getSchool()).toEqual('Belleville High');
});

test('test getRole function', () => {
    const intern = new Intern('Belleville High');

    expect(intern.getRole()).toEqual('Intern');
})