import {useState} from 'react'

//Button component
const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({text, value}) => (
    <>{text} {value}</>
)

const Statistics = ({good, neutral, bad}) => (
    <table>
        <tbody>
        <tr><td><StatisticLine text='good' value={good}/></td></tr>
        <tr><td><StatisticLine text='neutral' value={neutral}/></td></tr>
        <tr><td><StatisticLine text='bad' value={bad}/></td></tr>
        <tr><td><StatisticLine text="all" value={good + neutral + bad}/></td></tr>
        <tr><td><StatisticLine text='average' value={(good * 1 + neutral * 0 + bad * -1) / 3}/></td></tr>
        <tr><td><StatisticLine text='Positive' value={(good / (good + neutral + bad)) * 100}/></td></tr>
        </tbody>
    </table>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <h1>give feedback</h1>
            <Button text='good' handleClick={() => setGood(good + 1)}/>
            <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}/>
            <Button text='bad' handleClick={() => setBad(bad + 1)}/>
            <h1>statistics</h1>
            < Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    )
}
export default App;

