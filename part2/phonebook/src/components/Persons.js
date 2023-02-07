const Persons = ({persons, query}) => {

    return (
        <div>
            {persons.map((person => <div key={person.id}>{person.name} {person.number}</div>))}
        </div>

    )
}
export default Persons
