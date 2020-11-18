import React, { useState } from "react";
import Questions from "./questions";
import { Switch, Route, Link } from "react-router-dom";

import questions from "../questions.json";

function Quiz() {
  const [progress, setprogress] = useState(0);
  const [correctanswers, setcorrectanswers] = useState(0);
  const [score, setscore] = useState(0);
  console.log("que", questions);

  const progressbar = (queno) => {
    let progress = (queno / questions.length) * 100;
    setprogress(progress);
  };

  const setScore = (questionNo) => {

    setcorrectanswers(correctanswers + 1);
    let score = (correctanswers / questions.length) * 100;
    setscore(score);
    console.log(score, questionNo)

  };

  console.log("score", score);
  return (
    <div>
      <div className="container mt-1">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="option_container">
            <h5 className="mb-5">Welcome to Quiz</h5>
            <Link to="/1">
              <button onClick={() => progressbar(1)}>lets Start !</button>
            </Link>
          </div>
        </Route>
        {questions.map((que, index) => {
          return (
            <Route path={`/${index + 1}`}>
              <Questions
                key={index}
                index={index}
                length={questions.length}
                category={unescape(que.category)}
                difficulty={que.difficulty}
                question={unescape(que.question)}
                correctAns={unescape(que.correct_answer)}
                incorrectAns={que.incorrect_answers}
                progressbar={progressbar}
                setScore={setScore}
              />
            </Route>
          );
        })}
        <Route>
          <div className="option_container">
            <h3> your Score is : {score}</h3>

            <h5 className="mb-5">Restart</h5>
            <Link to="/">
              <button onClick={() => { progressbar(0); setscore(0) }}>lets Start !</button>
            </Link>
          </div>
        </Route>
      </Switch>

      <div className="container">
        <h5>Score: {score}</h5>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${score}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
