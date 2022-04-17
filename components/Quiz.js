import Link from "next/link";
import { useEffect, useState } from "react";
import Description from "./Description";
import Options from "./Options";
import Question from "./Question";
import Result from "./Results";

function Quiz({ questions }) {
  const initialAns = " bg-[#0ab2b8]";
  const [seeAns, setSeeAns] = useState(false);

  const [ansA, setAnsA] = useState("green");
  const [ansB, setAnsB] = useState("green");
  const [ansC, setAnsC] = useState("green");
  const [ansD, setAnsD] = useState("green");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [stopTime, setStopTime] = useState(false);

  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(59);
  const [ansButton, setAnsButton] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [color, setColor] = useState("green");
  const [questionToOne, setQuestionToOne] = useState(false);

  const tick = () => {
    setSec((prev) => prev - 1);
  };
  if (sec === 0) {
    setMin(min - 1);
    setSec(59);
  }

  if (!ansButton) {
    useEffect(() => {
      const interval = setInterval(tick, 1000);
      if (min === -1) {
        setSubmit(true);
        setMin(100);
        setStopTime(true);
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [sec]);
  }

  if (questionNumber > questions.length - 1) {
    setQuestionNumber(0);
  }
  if (questionNumber < 0) {
    setQuestionNumber(questions.length - 1);
  }
  const nextNumber = () => {
    setQuestionNumber((prev) => prev + 1);
    setQuestionToOne(false);
  };

  const prevNumber = () => {
    setQuestionNumber((prev) => prev - 1);
    setQuestionToOne(false);
  };

  const submitOption = () => {
    setConfirmSubmit(true);
  };
  const hideResult = () => {
    setConfirmSubmit(false);
  };
  const showResult = () => {
    setStopTime(true);
    setSubmit(true);
    setMin(100);
  };

  if (!ansButton) {
    useEffect(() => {
      if (selectedAnswer[questionNumber] === 0) {
        setAnsA("darkGreen");
        setAnsB("green");
        setAnsC("green");
        setAnsD("green");
      } else if (selectedAnswer[questionNumber] === 1) {
        setAnsA("green");
        setAnsB("darkGreen");
        setAnsC("green");
        setAnsD("green");
      } else if (selectedAnswer[questionNumber] === 2) {
        setAnsA("green");
        setAnsB("green");
        setAnsC("darkGreen");
        setAnsD("green");
      } else if (selectedAnswer[questionNumber] === 3) {
        setAnsA("green");
        setAnsB("green");
        setAnsC("green");
        setAnsD("darkGreen");
      } else {
        setAnsA("green");
        setAnsB("green");
        setAnsC("green");
        setAnsD("green");
      }
    }, [selectedAnswer[questionNumber], setQuestionNumber]);
  } else {
    useEffect(() => {
      if (
        questions[questionNumber].answer === 0 &&
        selectedAnswer[questionNumber] === 4
      ) {
        setAnsA("lightGreen");
        setAnsB("red");
        setAnsC("red");
        setAnsD("red");
      } else if (
        questions[questionNumber].answer === 1 &&
        selectedAnswer[questionNumber] === 4
      ) {
        setAnsA("red");
        setAnsB("lightGreen");
        setAnsC("red");
        setAnsD("red");
      } else if (
        questions[questionNumber].answer === 2 &&
        selectedAnswer[questionNumber] === 4
      ) {
        setAnsA("red");
        setAnsB("red");
        setAnsC("lightGreen");
        setAnsD("red");
      } else if (
        questions[questionNumber].answer === 3 &&
        selectedAnswer[questionNumber] === 4
      ) {
        setAnsA("red");
        setAnsB("red");
        setAnsC("red");
        setAnsD("lightGreen");
      } else if (
        questions[questionNumber].answer === 0 &&
        selectedAnswer[questionNumber] === 0
      ) {
        setAnsA("lightGreen");
        setAnsB("green");
        setAnsC("green");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 0 &&
        selectedAnswer[questionNumber] === 1
      ) {
        setAnsA("lightGreen");
        setAnsB("red");
        setAnsC("green");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 0 &&
        selectedAnswer[questionNumber] === 2
      ) {
        setAnsA("lightGreen");
        setAnsB("green");
        setAnsC("red");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 0 &&
        selectedAnswer[questionNumber] === 3
      ) {
        setAnsA("lightGreen");
        setAnsB("green");
        setAnsC("green");
        setAnsD("red");
      } else if (
        questions[questionNumber].answer === 1 &&
        selectedAnswer[questionNumber] === 0
      ) {
        setAnsA("red");
        setAnsB("lightGreen");
        setAnsC("green");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 1 &&
        selectedAnswer[questionNumber] === 1
      ) {
        setAnsA("green");
        setAnsB("lightGreen");
        setAnsC("green");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 1 &&
        selectedAnswer[questionNumber] === 2
      ) {
        setAnsA("green");
        setAnsB("lightGreen");
        setAnsC("red");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 1 &&
        selectedAnswer[questionNumber] === 3
      ) {
        setAnsA("green");
        setAnsB("lightGreen");
        setAnsC("green");
        setAnsD("red");
      } else if (
        questions[questionNumber].answer === 2 &&
        selectedAnswer[questionNumber] === 0
      ) {
        setAnsA("red");
        setAnsB("green");
        setAnsC("lightGreen");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 2 &&
        selectedAnswer[questionNumber] === 1
      ) {
        setAnsA("green");
        setAnsB("red");
        setAnsC("lightGreen");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 2 &&
        selectedAnswer[questionNumber] === 2
      ) {
        setAnsA("green");
        setAnsB("green");
        setAnsC("lightGreen");
        setAnsD("green");
      } else if (
        questions[questionNumber].answer === 2 &&
        selectedAnswer[questionNumber] === 3
      ) {
        setAnsA("green");
        setAnsB("green");
        setAnsC("lightGreen");
        setAnsD("red");
      } else if (
        questions[questionNumber].answer === 3 &&
        selectedAnswer[questionNumber] === 0
      ) {
        setAnsA("red");
        setAnsB("green");
        setAnsC("green");
        setAnsD("lightGreen");
      } else if (
        questions[questionNumber].answer === 3 &&
        selectedAnswer[questionNumber] === 1
      ) {
        setAnsA("green");
        setAnsB("red");
        setAnsC("green");
        setAnsD("lightGreen");
      } else if (
        questions[questionNumber].answer === 3 &&
        selectedAnswer[questionNumber] === 2
      ) {
        setAnsA("green");
        setAnsB("green");
        setAnsC("red");
        setAnsD("lightGreen");
      } else if (
        questions[questionNumber].answer === 3 &&
        selectedAnswer[questionNumber] === 3
      ) {
        setAnsA("green");
        setAnsB("green");
        setAnsC("green");
        setAnsD("lightGreen");
      } else {
        setAnsA("green");
        setAnsB("green");
        setAnsC("green");
        setAnsD("green");
      }
    }, [selectedAnswer[questionNumber], setQuestionNumber, questionNumber]);
  }
  useEffect(() => {
    for (let i = 0; i < questions.length; i++) {
      selectedAnswer[i] = 4;
    }
    if (questionToOne) {
      setQuestionNumber(questions.length - 1);
    }
  }, [selectedAnswer, questionToOne]);

  let newSelectedAnswer = selectedAnswer;
  const SelectAnsA = () => {
    setAnsA("darkGreen");
    setAnsB("green");
    setAnsC("green");
    setAnsD("green");

    if (
      !ansA &&
      !ansB &&
      !ansC &&
      !ansD &&
      selectedAnswer[questionNumber] === 0
    ) {
      newSelectedAnswer[questionNumber] = 0;
      setSelectedAnswer(newSelectedAnswer);
    } else {
      newSelectedAnswer[questionNumber] = 0;
      setSelectedAnswer(newSelectedAnswer);
    }
  };
  const SelectAnsB = () => {
    setAnsA("green");
    setAnsB("darkGreen");
    setAnsC("green");
    setAnsD("green");

    if (!ansA && !ansB && !ansC && !ansD) {
      newSelectedAnswer[questionNumber] = 1;
      setSelectedAnswer(newSelectedAnswer);
    } else {
      newSelectedAnswer[questionNumber] = 1;
      setSelectedAnswer(newSelectedAnswer);
    }
  };

  const SelectAnsC = () => {
    setAnsA("green");
    setAnsB("green");
    setAnsC("darkGreen");
    setAnsD("green");

    if (!ansA && !ansB && !ansC && !ansD) {
      newSelectedAnswer[questionNumber] = 2;
      setSelectedAnswer(newSelectedAnswer);
    } else {
      newSelectedAnswer[questionNumber] = 2;
      setSelectedAnswer(newSelectedAnswer);
    }
  };
  const SelectAnsD = () => {
    setAnsA("green");
    setAnsB("green");
    setAnsC("green");
    setAnsD("darkGreen");

    if (!ansA && !ansB && !ansC && !ansD) {
      newSelectedAnswer[questionNumber] = 3;
      setSelectedAnswer(newSelectedAnswer);
    } else {
      newSelectedAnswer[questionNumber] = 3;
      setSelectedAnswer(newSelectedAnswer);
    }
  };

  return (
    <div>
      {!submit ? (
        <div className='max-w-5xl min-h-screen bg-[#08878b] iceland p-3 grid gap-2 grid-rows-10 text-white relative'>
          <h1 className='text-white text-4xl md:text-6xl font-bold flex justify-center items-center row-span-1 '>
            CHAPTER{"  "}
            {questions.map((question) => (
              <p className='relative left-2' key={question.id}>
                <p> {question.chapterNumber}</p>
              </p>
            ))}
          </h1>

          <Description
            number={questionNumber}
            questions={questions}
            min={min}
            sec={sec}
            stopTime={stopTime}
          />
          <div className='bg-[#0ab2b8] row-span-2 p-2 text-xl md:text-3xl overflow-y-scroll'>
            <Question questions={questions} number={questionNumber} />
          </div>

          <Options
            color={color}
            correctAnswer={correctAnswer}
            ansButton={ansButton}
            ans={ansA}
            SelectAns={SelectAnsA}
            letter={"A. "}
            position={0}
            number={questionNumber}
            questions={questions}
          />
          <Options
            color={color}
            correctAnswer={correctAnswer}
            ansButton={ansButton}
            ans={ansB}
            SelectAns={SelectAnsB}
            letter={"B. "}
            position={1}
            number={questionNumber}
            questions={questions}
          />
          <Options
            color={color}
            correctAnswer={correctAnswer}
            ansButton={ansButton}
            ans={ansC}
            SelectAns={SelectAnsC}
            letter={"C. "}
            position={2}
            number={questionNumber}
            questions={questions}
          />
          <Options
            color={color}
            correctAnswer={correctAnswer}
            ansButton={ansButton}
            ans={ansD}
            SelectAns={SelectAnsD}
            letter={"D. "}
            position={3}
            number={questionNumber}
            questions={questions}
          />
          <div className='flex justify-between row-span-1'>
            <button
              className='bg-[#0ab2b8] w-35p text-2xl md:text-3xl rounded-md '
              onClick={prevNumber}
            >
              Prev
            </button>

            <button
              className='bg-[#0ab2b8] yarn dev
          w-35p text-2xl md:text-3xl rounded-md '
              onClick={nextNumber}
            >
              Next
            </button>
          </div>
          <div className='flex row-span-1'>
            {!ansButton ? (
              <button
                className='bg-[#015f5f] w-80p text-2xl md:text-3xl  h-full m-auto rounded-md '
                onClick={submitOption}
              >
                SUBMIT
              </button>
            ) : (
              <Link href='/'>
                <button className='bg-[#015f5f] w-80p text-2xl md:text-3xl  h-full m-auto rounded-md '>
                  <a>Home</a>
                </button>
              </Link>
            )}
          </div>
          {confirmSubmit ? (
            <div className='absolute flex flex-col  justify-center items-center  w-full h-screen z-999'>
              <div
                className='bg-[#015f5f]  p-6 md:p-8 rounded-md text-xl 
md:text-3xl '
              >
                Are you sure you want to submit?
                <div className='flex justify-between mt-6'>
                  <button
                    className='bg-[#0ab2b8] w-35p rounded-md py-2 '
                    onClick={showResult}
                  >
                    Yes
                  </button>

                  <button
                    className='bg-[#0ab2b8] yarn dev
          w-35p  rounded-md py-2 '
                    onClick={hideResult}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <Result
          questions={questions}
          selectedAnswer={selectedAnswer}
          questionNumber={questionNumber}
          setConfirmSubmit={setConfirmSubmit}
          setSubmit={setSubmit}
          setQuestionToOne={setQuestionToOne}
          setSeeAns={setSeeAns}
          setAnsButton={setAnsButton}
        />
      )}
    </div>
  );
}

export default Quiz;
