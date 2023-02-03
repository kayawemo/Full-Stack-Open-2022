import {useState} from 'react'
import FormComponent from "./components/FormComponent"
import Display from "./components/Display";

const App = (searchElement, fromIndex) => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            id: 1
        }
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            id: persons.length + 1,

        }

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')

        }
        else {
            setPersons(persons.concat(nameObject))
            setNewName('')
        }

    }
    const handleNameChange = (event) => {
        setNewName((event.target.value))

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <FormComponent
                onSubmit={addName}
                value={newName}
                onChange={handleNameChange}
            />
            <h2>Numbers</h2>
            <Display persons={persons}/>
        </div>
    )
}

export default App


