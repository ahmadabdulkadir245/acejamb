import { Pause } from "heroicons-react";
import { useState, useEffect } from "react";

function Option({
  ans,
  SelectAns,
  letter,
  position,
  correctAnswer,
  questions,
  number,
  color,
  ansButton,
}) {
  return (
    <div className='grid'>
      {ans !== "green" ? (
        <div
          className=' row-span-1  text-xl md:text-3xl transition duration-300 transform ease-in-out active:animate-pulse'
          onClick={SelectAns}
        >
          {!ansButton ? (
            <div className='flex w-full h-full bg-[#015f5f] p-2'>
              {letter}
              {questions.map((question) => {
                if (question.id === number) {
                  return (
                    <p key={question.id} className='flex'>
                      {"  "}
                      {question.option[position]}
                    </p>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          ) : (
            ""
          )}
          {ansButton && ans === "lightGreen" ? (
            <div className='flex w-full h-full bg-green-500 p-2'>
              {letter}
              {questions.map((question) => {
                if (question.id === number) {
                  return (
                    <p key={question.id} className='flex'>
                      {"  "}
                      {question.option[position]}
                    </p>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          ) : (
            ""
          )}

          {ansButton && ans === "red" ? (
            <div className='flex w-full h-full bg-red-600 p-2'>
              {letter}
              {questions.map((question) => {
                if (question.id === number) {
                  return (
                    <p key={question.id} className='flex'>
                      {"  "}
                      {question.option[position]}
                    </p>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div
          className='bg-[#0ab2b8] row-span-1 p-2 text-xl md:text-3xl'
          onClick={SelectAns}
        >
          <div className='flex'>
            {letter}

            {questions.map((question) => {
              if (question.id === number) {
                return (
                  <p key={question.id} className='flex'>
                    {"  "}
                    {question.option[position]}
                  </p>
                );
              } else {
                return "";
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Option;
