const Header = (props) => {
  
  return (
    <>
    <h1>{props.title}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.name1} {props.exercise1}</p>
    <p>{props.name2} {props.exercise2}</p>
    <p>{props.name3} {props.exercise3}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <Part name1={props.name1} exercise1={props.exercise1}/>
    <Part name2={props.name2} exercise2={props.exercise2}/>
    <Part name3={props.name3} exercise3={props.exercise3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.value}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack Application Development"
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>
      <Content name1={part1} exercise1={exercises1}
               name2={part2} exercise2={exercises2}
               name3={part3} exercise3={exercises3}
      />
      <Total value={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

export default App