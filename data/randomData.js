let faker = require('faker');

const randomDataCreateDailyReport = {
    checkbox: faker.random.number(11),
    moralSelectorIndexTop: faker.random.number(7),
    moraleSelectorIndex: faker.random.number(10),
    hoursSelectorIndex: faker.random.number({ min: 11, max: 17 }),
    text: faker.random.words(20),
}

module.exports = { randomDataCreateDailyReport };