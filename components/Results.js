import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as LightStar } from "@heroicons/react/outline";
import Link from "next/link";
import Answers from "./Answers";
function Results({
  questions,
  selectedAnswer,
  questionNumber,
  setSubmit,
  setConfirmSubmit,
  setSeeAns,
  setAnsButton,
  setQuestionToOne,
}) {
  const [excellent, setExcellent] = useState(false);
  const [veryGood, setVeryGood] = useState(false);
  const [good, setGood] = useState(false);
  const [fair, setFair] = useState(false);
  const [answerPage, setAnswerPage] = useState(false);

  let newScore = 0;
  for (let i = 0; i < questions.length; i++) {
    if (selectedAnswer[i] === questions[i].answer) {
      newScore++;
    }
  }
  let failed = questions.length - newScore;
  useEffect(() => {
    if ((newScore / questions.length) * 100 > 80) {
      setExcellent(true);
    }
    if (
      (newScore / questions.length) * 100 < 90 &&
      (newScore / questions.length) * 100 > 69
    ) {
      setVeryGood(true);
    }
    if (
      (newScore / questions.length) * 100 < 69 &&
      (newScore / questions.length) * 100 > 51
    ) {
      setGood(true);
    }
    if ((newScore / questions.length) * 100 < 50) {
      setFair(true);
    }
  });
  const goToAnsPage = () => {
    setConfirmSubmit(false);
    setSubmit(false);
    setSeeAns(true);
    setAnsButton(true);
    setQuestionToOne(true);
  };

  return (
    <div className=''>
      {!answerPage ? (
        <div className='flex flex-col items-center justify-center h-screen w-full text-3xl iceland bg-[#0ab2b8] '>
          <div className='bg-[#0ab2b8] w-80p h-5/6 rounded-lg p-2 text-[#015f5f]'>
            <h1 className='text-5xl flex justify-center items-center text-white'>
              RESULT
            </h1>
            <hr className='bg-white mb-6' />
            <div className='text-center'>
              <p className='mb-5'>
                <span className='text-white'>Questions</span> :{" "}
                {questions.length}
              </p>
              <p className='mb-5'>
                <span className='text-white'>Correct</span> : {newScore}
              </p>
              <p className='mb-5'>
                <span className='text-white'>Wrong</span> : {failed}
              </p>
              <p className='mb-5'>
                {" "}
                <span className='text-white'>Score</span> :{" "}
                {(newScore / questions.length) * 100}%
              </p>
              {excellent ? (
                <div className='flex justify-center items-center '>
                  <StarIcon className='h-12 p-3 space-x-3 ' />

                  <StarIcon className='h-12 p-3 space-x-3 ' />

                  <StarIcon className='h-12 p-3 space-x-3 ' />
                </div>
              ) : (
                ""
              )}
              {veryGood ? (
                <div className='flex justify-center items-center '>
                  <StarIcon className='h-12 p-3 space-x-3 ' />

                  <StarIcon className='h-12 p-3 space-x-3 ' />

                  <LightStar className='h-12 p-3 space-x-3 ' />
                </div>
              ) : (
                ""
              )}
              {good ? (
                <div className='flex justify-center items-center '>
                  <StarIcon className='h-12 p-3 space-x-3 ' />

                  <LightStar className='h-12 p-3 space-x-3 ' />

                  <LightStar className='h-12 p-3 space-x-3 ' />
                </div>
              ) : (
                ""
              )}
              {fair ? (
                <div className='flex justify-center items-center '>
                  <LightStar className='h-12 p-3 space-x-3 ' />

                  <LightStar className='h-12 p-3 space-x-3 ' />

                  <LightStar className='h-12 p-3 space-x-3 ' />
                </div>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className='flex justify-between '>
              <button
                className='bg-[#015f5f] p-4 w-35p text-2xl md:text-3xl rounded-md text-white '
                onClick={goToAnsPage}
              >
                <a> Answers</a>
              </button>
              <button className='bg-[#015f5f] p-4 w-35p text-2xl md:text-3xl rounded-md text-white '>
                <Link href='/'>
                  <a> Home</a>
                </Link>
              </button>
            </div>
            <hr className='bg-white mt-6' />
          </div>
        </div>
      ) : (
        <Answers
          questions={questions}
          selectedAnswer={selectedAnswer}
          questionNumber={questionNumber}
        />
      )}
    </div>
  );
}

export default Results;
