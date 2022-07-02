const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        companyName: faker.company.companyName(),
        address: [
            {   street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCodeByState(),
                country: "United States"
            } 
        ]
    };
    return newCompany;
};



app.get("/", (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
});

app.get('/api/company', (req, res) => {
    res.json([createUser(), createCompany()]);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );