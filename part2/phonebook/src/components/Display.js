const Display = ({persons}) => {
    return (
        <div>
            {persons.map((person => <div key={person.id}>{person.name}</div>))}
        </div>

    )
}
 export default Display
