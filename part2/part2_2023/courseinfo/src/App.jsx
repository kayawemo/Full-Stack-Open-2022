import { useLayoutEffect } from "react"

const Header = ({ name }) => <h1>{name}</h1>

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <h2>total of {props.total} exercises</h2>
  )
}

const Content = (props) =>
  <>
    {props.parts.map(part =>
      <Part key={part.id}
        name={part.name}
        exercises={part.exercises}
      />)}

    <h3>total of {props.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h3>
   </>




const Course = (props) => {
  
  return (
    <div>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />

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

  

  return <Course course={course} />
}

export default App