import { StarIcon } from "@heroicons/react/solid";
import Results from "../../components/Results";
function Submit({ questions }) {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full text-2xl iceland  '>
      <div className='bg-[#0ab2b8] w-80p h-3/5 rounded-lg p-2 text-[#015f5f]'>
        <h1 className='text-4xl flex justify-center items-center text-white'>
          RESULT
        </h1>
        <hr className='bg-white mb-6' />
        {/* <div className='flex justify-between'>
          <span>Score</span>
          <span>90%</span>
        </div>
        <div className='flex justify-between'>
        <span>Correct</span>
        <span>27</span>
        </div>
        <div className='flex justify-between'>
        <span>Wrong</span>
        <span>90%</span>
      </div> */}
        {/* <Results questions={questions} /> */}

        <br />
        <div className='flex justify-between '>
          <button className='bg-[#015f5f] p-4 w-35p text-2xl md:text-3xl rounded-md text-white '>
            Prev
          </button>
          <button className='bg-[#015f5f] p-4 w-35p text-2xl md:text-3xl rounded-md text-white '>
            Next
          </button>
        </div>
        {/* <button className='bg-[#015f5f] flex w-80p py-4 text-2xl md:text-3xl   m-auto rounded-md justify-center text-white'>
          SUBMIT
        </button> */}
      </div>
    </div>
  );
}

export default Submit;

export async function getServerSideProps(context) {
  const response = await fetch(`http://localhost:3000/api/questions`);
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}
