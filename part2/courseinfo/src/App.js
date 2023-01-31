

const Part = (props) => {
    console.log("testing Part comp", props)
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Content = (props) => {
    const { parts } = props
    console.log("testing content comp1", props)
    console.log("testing content comp2", props)
    return (
        <div>
            {parts.map(part => <Part key={part.id} name = {part.name} exercises = {part.exercises}/>)}
        </div>
    )
}

const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}
const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <h1>total of {total} exercises</h1>
    )
};
const Course = ({course}) => {
    console.log(course.parts)
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}
const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course}/>
}

export default App


