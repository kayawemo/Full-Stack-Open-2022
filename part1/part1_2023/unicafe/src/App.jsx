
import { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleGoodFeedback}>good</button>
      <button onClick={props.handleNeutralFeedback}>neutral</button>
      <button onClick={props.handleBadFeedback}>bad</button>
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.extra}
    </div>
  );
};

const Statistics = (props) => {
  const all = props.count1 + props.count2 + props.count3;
  const average =
    (props.count1 * 1 + props.count2 * 0 + props.count3 * -1) / all;
  const positive = props.count1 / all;

  if (props.count1 == 0 && (props.count2 == 0) & (props.count3 == 0)) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left'}}>
              <StatisticLine text="good" value={props.count1} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left'}}>
              <StatisticLine text="neutral" value={props.count2} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left'}}>
              <StatisticLine text="bad" value={props.count3} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left'}}>
              <StatisticLine text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left'}}>
              <StatisticLine text="average" value={average} />
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left'}}>
              <StatisticLine text="positive" value={positive} extra='%'/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Event handlers
  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header name="give feedback" />
      <Button
        handleGoodFeedback={handleGoodFeedback}
        handleNeutralFeedback={handleNeutralFeedback}
        handleBadFeedback={handleBadFeedback}
      />
      <Header name={"statistics"} />
      <Statistics count1={good} count2={neutral} count3={bad} />
    </div>
  );
};

export default App;
