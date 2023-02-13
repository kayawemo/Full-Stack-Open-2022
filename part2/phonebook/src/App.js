import {useEffect, useState} from 'react'
import PersonsForm from "./components/PersonsForm"
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import phonebookService from "./services/phonebookService";
import axios from "axios";

const App = (searchElement, fromIndex) => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    //For handling searching
    const [query, setQuery] = useState('');

    useEffect(() => {
        phonebookService
            .getAll()
            .then(initialPhonebook => {
                setPersons(initialPhonebook)
            })
    }, [])

    const addName = (event) => {
        event.preventDefault()

        const newPerson = persons.filter(person => person.name === newName)
        const toAdd = newPerson[0]
        const forUpdate = { ...toAdd, number: newNumber}

        if (persons.some(person => person.name === newName && person.number === newNumber)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')

        }

        else if (persons.some(person => person.name === newName && person.number !== newNumber)) {
            window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)
            console.log(forUpdate)
            phonebookService
                .update(forUpdate.id, forUpdate).then(returnedName => {
                setPersons(persons.concat(returnedName))
            })
        }

        else {

            const nameObject = {
                name: newName,
                number: newNumber,
            }
            phonebookService
                .create(nameObject)
                .then(returnedName => {
                    setPersons(persons.concat(returnedName))
                })
            setNewName('')
            setNewNumber('')
        }


    }
    const deleteName = (id) => {
        const toBeDeleted = persons.filter(person => person.id === id)

        if (window.confirm(`delete ${toBeDeleted[0].name} ?`) ) {
            phonebookService
                .deleteName(`${id}`)
            setPersons(persons.filter(person => person.id !== id))
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

                onClick={addName}
                onSubmit={addName}
                nameValue={newName}
                numberValue={newNumber}
                onNameChange={handleNameChange}
                onNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} deleteName={deleteName}/>
        </div>
    )
}

export default App



