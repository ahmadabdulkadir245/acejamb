import { useState } from "react";
import Options from "./Options";
function Buttons() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const nextNumber = () => {
    setQuestionNumber((prev) => prev + 1);
  };
  const prevNumber = () => {
    setQuestionNumber((prev) => prev - 1);
  };

  console.log(questionNumber);
  return (
    <div className='grid'>
      <Options number={questionNumber} />
      <div className='flex justify-between row-span-1'>
        <button
          className='bg-[#0ab2b8] w-35p text-2xl md:text-3xl rounded-md '
          onClick={prevNumber}
        >
          Prev
        </button>
        <button
          className='bg-[#0ab2b8] w-35p text-2xl md:text-3xl rounded-md '
          onClick={nextNumber}
        >
          Next
        </button>
      </div>
      <div className='flex row-span-1'>
        <button className='bg-[#015f5f] w-80p text-2xl md:text-3xl  h-full m-auto rounded-md '>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Buttons;
