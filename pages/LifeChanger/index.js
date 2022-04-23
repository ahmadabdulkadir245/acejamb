import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import TopNav from "../../components/TopNav";

function TestApp({ questions }) {
  const [chapterPageNumber, setChapterPageNumber] = useState("");
  const chapterOneHandler = () => {
    setChapterPageNumber("chapterOne");
  };

  return (
    <div className='iceland'>
      <TopNav />
      <Navigation />
      <div className='mb-8'></div>
      <div className='flex mb-1  text-4xl justify-center'>
        <span className='text-[#015f5f] z-auto mr-3 '>LIFE</span> CHANGER
      </div>
      <div className=' w-36 h-1 bg-[#015f5f] flex m-auto mb-6'></div>
      <div className='flex flex-wrap justify-around md:text-3xl'>
        <Link href='/LifeChanger/chapterOne'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>1</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterTwo'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>2</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterThree'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>3</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterFour'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>4</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterFive'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>5</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterSix'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>6</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterSeven'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>7</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterEight'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>8</div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
        <Link href='/LifeChanger/chapterNine'>
          <div className='bg-[#015f5f] w-28 h-24 md:w-40 md:h-32 rounded-md text-white  py-3 md:py-6 my-4'>
            <div className=' flex justify-center items-center '>
              <a>9</a>
            </div>
            <div className='flex justify-center items-center space-x-2'>
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
              <StarIcon className='h-4 md:h-6 mt-2 md:mt-3' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TestApp;

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/questions/chapterOne`
  );
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
}
