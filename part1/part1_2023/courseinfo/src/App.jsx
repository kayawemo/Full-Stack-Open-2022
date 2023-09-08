const Header = (props) => {
  
  return (
    <>
    <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>{props.name} {props.exercise}</p>
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
      <Total value={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

export default App