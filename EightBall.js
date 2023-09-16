import React, {useState} from "react";
import "./EightBall.css";

const EightBall = (props) => {
  const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];
  const [answer, setAnswer] = useState(null);
  const getRando = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  const resetMessage = () => {
    setAnswer(null);
  };

  return (
    <div className="circle" style={{ backgroundColor: answer ? answer.color : 'black' }}>
      <h1>{answer ? answer.msg : 'Get Answer'}</h1>
      {!answer ? (
        <button onClick={getRando}>Get Answer</button>
      ) : (
        <button onClick={resetMessage}>Reset</button>
      )}
    </div>
  );
};

export default EightBall;