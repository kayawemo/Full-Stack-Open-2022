import phonebookService from "../services/phonebookService";

const Persons = ({persons, deleteName}) => {

    // const deletePerson = (id) => {
    //     phonebookService.deletePerson(`${id}`)
    //
    // }

    return (
        <div>
            {persons.map((person => <div key={person.id}>
                {person.name} {person.number}
                <button onClick={() => deleteName(person.id)}>
                    Delete
                </button>
            </div>))}
        </div>

    )
}
export default Persons
