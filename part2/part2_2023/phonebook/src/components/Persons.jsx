const Persons = ({ filteredNames, handleDelete }) => {
  return (
    <div>
      {filteredNames.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
