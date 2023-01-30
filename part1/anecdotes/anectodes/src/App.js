import {useState} from 'react'

const Heading = ({name}) => (
    <h1>{name}</h1>
)

const Display = ({anecdote, voteCount}) => (
    <div>
        <div>{anecdote}</div>
        <div>{voteCount}</div>
    </div>
)

const Button = ({clickVote, clickNext}) => (
    <div>
        <button onClick={clickVote}>vote</button>
        <button onClick={clickNext}>next anecdote</button>
    </div>
)

const Highest = ({anecdote, result}) => (
    <div>
        <div>{anecdote}</div>
        <div>has {result} votes</div>
    </div>
)


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
    const [voteStore, setVoteStore] = useState(Array(8).fill(0))
    console.log(voteStore)
    const handleSelectionClick = () => {
        const index = Math.floor(Math.random() * anecdotes.length);
        setSelected(index);
    }
    const handleVote = () => {
        const voteStoreCopy = [...voteStore];
        voteStoreCopy[selected] += 1;
        setVoteStore(voteStoreCopy)
    }

    const indexOfLargest = () => {
        const highest = Math.max(...voteStore)
        return voteStore.indexOf(highest)
    }

    const calHighest = () => Math.max(...voteStore)

    return (
        <>
            <Heading name='Anecdote of the day'/>
            <Display anecdote={anecdotes[selected]} voteCount={voteStore[selected]}/>
            <Button clickVote={handleVote} clickNext={handleSelectionClick}/>
            <Heading name='Anecdote with most votes'/>
            <Highest anecdote={anecdotes[indexOfLargest()]} result={calHighest()}/>
        </>
    )
}
export default App
