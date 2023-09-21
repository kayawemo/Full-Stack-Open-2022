import {useState, useEffect} from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import phonebookServices from "../services/phonebook";
import Notification from "./components/Notification.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");
    const [notification, setNotification] = useState("");
    const [error, setError] = useState("");

    //Get the names in the phonebook
    useEffect(() => {
        phonebookServices.getAll().then((initialPhonebook) => {
            setPersons(initialPhonebook);
        });
    }, []);

    // Add name and number to the database.
    const addName = (event) => {
        event.preventDefault();

        const newPerson = persons.filter(person => person.name === newName)
        const toAdd = newPerson[0]
        const forUpdate = {...toAdd, number: newNumber} //spread the old array into a new array (no mutation in react!) and update new number

        if (persons.some(person => person.name === newName && person.number === newNumber)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')

        } else if (persons.some(person => person.name === newName && person.number !== newNumber)) {
            window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)
            console.log(forUpdate)
            phonebookServices
                .update(forUpdate.id, forUpdate)
                .then(returnedName => {
                    setPersons(persons.map((person) => person.id === forUpdate.id ? returnedName : person))
                    setNotification(`${forUpdate.name}'s number updated`)
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                }).catch(error => {
                    setNotification(`Information of ${forUpdate.name} has already been removed from server`)
                setTimeout(() => {
                    setNotification(null)
                }, 5000)
                setPersons(persons.filter(n => n.id !== forUpdate.id))
            })
        } else {
            const nameObject = {
                name: newName,
                number: newNumber,
                // id: persons.length + 1
            }
            phonebookServices
                .create(nameObject)
                .then(returnedName => {
                    setPersons(persons.concat(returnedName))
                })
            setNotification(` Added ${nameObject.name}`)
            setTimeout(() => {
                setNotification(null)
            }, 5000)
        }
        setNewName("");
        setNewNumber("");
    };

    const handlePersonChange = (event) => {
        setNewName(event.target.value);
    };

    //Delete contact from database
    const deleteContact = (id) => {
        const toBeDeleted = persons.filter((person) => person.id === id);

        if (window.confirm(`delete ${toBeDeleted[0].name} ?`)) {
            phonebookServices.deleteName(`${id}`);
            setPersons(persons.filter((person) => person.id !== id));
        }
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const filteredNames = persons.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification}/>
            <Filter searchName={searchName} onChange={handleSearchChange}/>
            <Form
                addName={addName}
                newName={newName}
                handleNumberChange={handleNumberChange}
                newNumber={newNumber}
                handlePersonChange={handlePersonChange}
            />
            <h2>Numbers</h2>
            <Persons filteredNames={filteredNames} handleDelete={deleteContact}/>
        </div>
    );
};

export default App;
