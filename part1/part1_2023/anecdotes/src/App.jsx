import { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleSelection}>{props.text}</button>
  )
}

const Vote = (props) => {
  return (
    <div>has {props.value} votes</div>
  )
}

const HighestVote = (props) => {
  return (
    <div>
      <p>{props.anecdote}</p>
      <p>has {props.voteCount} votes</p>
    </div>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const maxVote = Math.max(...votes)
  const indexOfMaxVote = votes.indexOf(maxVote)

  //event handler
  const handleSelection = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)

  }

  const handleVotes = () => {
    const copiedVotes = [...votes]
    copiedVotes[selected] += 1
    setVotes(copiedVotes)

  }

  return (
    <div>
      < Display title='Anecdote of the day'/>
      <div><p>{anecdotes[selected]}</p></div>
      <Vote value={votes[selected]} />
      <Button handleSelection={handleVotes} text='vote' />
      <Button handleSelection={handleSelection} text='next anedote' />
      <Display title='Anecdote with most votes'/>
      <HighestVote anecdote={anecdotes[indexOfMaxVote]} voteCount={maxVote}/>
    </div>
  )
}

export default App
