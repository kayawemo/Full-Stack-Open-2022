import {useState} from 'react'
import PersonsForm from "./components/PersonsForm"
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = (searchElement, fromIndex) => {


    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-5323523', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    //For handling seraching
    const [query, setQuery]  = useState('');

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,

        }

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')

        } else {
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }

    }

    const filteredName = (event) => {
        event.preventDefault()


    }
    const handleNameChange = (event) => {
        setNewName((event.target.value))

    }

    const handleNumberChange = (event) => {
        setNewNumber((event.target.value))

    }

    // To handle the filtering
    const handleFiltering = (event) => {
         setQuery(event.target.value)

        const results = persons.filter(person => {
            if (event.target.value === "") return persons
            return person.name.toLowerCase().includes(event.target.value)
        })

        setPersons(results)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={handleFiltering} value={query}/>
            <h2>add a new</h2>
            <PersonsForm
                onSubmit={addName}
                nameValue={newName}
                numberValue={newNumber}
                onNameChange={handleNameChange}
                onNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} />
        </div>
    )
}

export default App


