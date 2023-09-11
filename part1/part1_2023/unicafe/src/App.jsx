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

const Statistics = (props) => {
  const all = props.count1 + props.count2 + props.count3;
  const average =
    (props.count1 * 1 + props.count2 * 0 + props.count3 * -1) / all;
  const positive = props.count1 / all;
  return (
    <div>
      <p>
        {props.feedback1} {props.count1}
      </p>
      <p>
        {props.feedback2} {props.count2}
      </p>
      <p>
        {props.feedback3} {props.count3}
      </p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} % </p>
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
      <Statistics
        feedback1="good"
        feedback2="neutral"
        feedback3="bad"
        count1={good}
        count2={neutral}
        count3={bad}
      />
    </div>
  );
};

export default App;
