import { useEffect, useState } from "react";
function Description({ number, questions, sec, min, stopTime }) {
  const [timeColorToRed, setTimeColorToRed] = useState(false);

  if (sec < 10) {
    sec = "0" + sec;
  }
  useEffect(() => {
    if (min < 1) {
      setTimeColorToRed(true);
    }
  });

  return (
    <div className='grid'>
      {!timeColorToRed ? (
        <div className='flex row-span-1 justify-between '>
          <div className='border-2 border-solid border-[#0ab2b8]  text-xl md:text-3xl rounded-md justify-center items-center flex px-4'>
            {!stopTime ? (
              <div>
                Time : {min} : {sec}
              </div>
            ) : (
              <div> Time : -- : --</div>
            )}
          </div>
          <div className='border-2 border-solid border-[#0ab2b8]  text-xl md:text-3xl rounded-md  justify-center items-center flex px-4'>
            {number + 1} / {questions.length}
          </div>
        </div>
      ) : (
        <div className='flex row-span-1 justify-between '>
          <div className='border-2 border-solid border-[#0ab2b8]  text-xl md:text-3xl rounded-md justify-center items-center flex px-4'>
            Time:{"  "}
            <span className='text-red-500 pl-1 animate-pulse'>
              {"  "}
              {min} : {sec}
            </span>
          </div>
          <div className='border-2 border-solid border-[#0ab2b8]  text-xl md:text-3xl rounded-md  justify-center items-center flex px-4'>
            {number + 1} / {questions.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Description;
