import React from "react";
import { Link } from "react-router-dom";

function Questions({
  index,
  length,
  category,
  difficulty,
  question,
  correctAns,
  incorrectAns,
  progressbar,
  setScore,
}) {
  const deficulty = (level) => {
    switch (level) {
      case "hard":
        return (
          <span role="img" aria-label="">
            ⭐⭐⭐
          </span>
        );
      case "medium":
        return (
          <span role="img" aria-label="">
            ⭐⭐
          </span>
        );
      case "easy":
        return (
          <span role="img" aria-label="">
            ⭐
          </span>
        );
      default:
        return null;
    }
  };

  const [clickedAns, setClickedAns] = React.useState('')
  const [optionClicked, setOptionClicked] = React.useState(false)

  const checkanswer = (answer) => {
    let questionNO = index + 1
    console.log(`selected answer "${answer} , correct ans "${correctAns}"`)
    if (answer === correctAns) {
      setClickedAns("correct !")
      setOptionClicked(true)
      setScore(questionNO)
    }
    else {
      setClickedAns("sorry !")
      setOptionClicked(true)
    }
  }

  const OPtions = (correctAns, incorrectAns) => {
    let allAns = []
    allAns.push(correctAns)

    for (let i = 0; i < incorrectAns.length; i++) {
      allAns.push(unescape(incorrectAns[i]))
    }

    console.log("all answers", allAns)

    let allOPtions = allAns.map((answer, index) => {
      return (
        <button onClick={() => checkanswer(answer)} disabled={optionClicked} >
          {" "}
          {answer}
        </button>
      )
    })

    return <div className="col ansewrwraper" >{allOPtions}</div>
  }

  return (
    <div className="container mt-3 mb-3">
      <div className="question">
        <h2 className="pl-2 mb-4">
          {" "}
          Question {index + 1} of {length}
        </h2>
        <p className="pl-2">{category}</p>
        <div className="pl-2 mb-4">{deficulty(difficulty)}</div>
        <div>
          <h5 className="pl-2 mb-4">{question}</h5>
        </div>
        <div className="question_options">
          <div className="container">
            <div className="row">
              {/* <div className="col ansewrwraper">
                <button onClick={() => checkanswer(index, correctAns)}>
                  {" "}
                  {correctAns}
                </button>
              </div>
              {incorrectAns.map((ans, i) => (
                <div className="col ansewrwraper" key={i}>
                  <button onClick={() => checkanswer(index, ans)}>
                    {" "}
                    {unescape(ans)}
                  </button>
                </div>
              ))} */}

              {
                OPtions(correctAns, incorrectAns)
              }
            </div>
            {
              optionClicked ? (<div className="choice">
                <h3>{clickedAns}</h3>
                <Link to={`/${index + 2}`}>
                  <button onClick={() => progressbar(index + 2)}>
                    next question
                </button>
                </Link>
              </div>) : null
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
