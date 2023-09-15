const Header = ({ name }) => {

    return (
        <h2>{name}</h2>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((acc, exercise) => acc + exercise.exercises, 0)
    return (
        <h3>total of {total} exercises</h3>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <div key={part.id}>
                    <p>{part.name} {part.exercises}</p>

                </div>
            ))}
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course