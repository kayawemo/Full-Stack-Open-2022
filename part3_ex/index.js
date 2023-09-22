const express = require('express')
const app = express()
const morgan = require('morgan');
const {request} = require("express");

//middlewares
 //Needed for POST request

//Define a custom format
const myFormat = ':method :url :status - :response-time ms  :request-body';

morgan.token('request-body', (request) => JSON.stringify(request.body));
app.use(morgan(myFormat));
app.use(express.json())



let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const formatDate = date => {
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long',
    };
    return date.toLocaleString('en-US', options);
};

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

//Route handler for info/
app.get('/info', (request, response) => {

    const currentTime = formatDate(new Date());
    const count = persons.length

    const text = `<p>Phonebook has info for ${count} people</p>
                  <p>${currentTime}</p>`
    response.send(text)
})

//Route handler for a single person with a unique id
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)


    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

//Route handler for deleting an entry

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

//Route handler for creating a person
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1
}

// Function to generate a random ID
const generateRandomId = () => {
    const min = 1;
    const max = 1000000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number is missing'
        })
    }

    const existingName = persons.some((person) => person.name === body.name)

    if (existingName) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    const person = {
        name: body.name,
        number: body.number,
        id: generateRandomId(),
    }

    persons = persons.concat(person)

    response.json(person)
})

//Start the server
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
