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
    <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <Part part1={props.name} exercise1={props.exercise}/>
    <Part part2={props.name} exercise2={props.exercise}/>
    <Part part2={props.name} exercise3={props.exercise}/>
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
      <Content name={part1} exercise={exercises1}/>
      <Content name={part2} exercise={exercises2}/>
      <Content name={part3} exercise={exercises3}/>
      <Content name={part1} exercise={exercises1}/>
      <Total value={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

export default App