import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

function Answers({ questions, selectedAnswer, questionNumber }) {
  console.log(questions[questionNumber].answer);

  const [correctAns, setCorrectAns] = useState(false);
  useEffect(() => {
    if (selectedAnswer[questionNumber] === questions[questionNumber].answer) {
      setCorrectAns(true);
    } else {
      setCorrectAns(false);
    }
  });

  return (
    <div className='l'>
      {/* <h1 className='text-3xl text-center'>ANSWERS</h1> */}
      {/* {questions.map((question) => (
        <div key={question.id}>
          <p>
            {question.id + 1}. {question.question}
          </p>
          <p>Your answer: {question.option[selectedAnswer[question.id]]}</p>
          <p>Correct: {question.option[question.answer]}</p>
        </div>
      ))} */}
      <Quiz questions={questions} />
    </div>
  );
}

export default Answers;
