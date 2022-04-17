import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as LightStar } from "@heroicons/react/outline";

function OurServices() {
  return (
    <div className='p-4 text-xl'>
      <div className='flex mb-1  text-4xl justify-center'>
        <span className='text-[#015f5f] z-auto mr-3 '>OUR</span> SERVICES
      </div>
      <div className=' w-36 h-1 bg-[#015f5f] flex m-auto mb-6'></div>
      <div className='md:flex'>
        <div>
          <h2 className='text-3xl semi-bold text-[#015f5f] '>English</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            nobis odit vero rem itaque cupiditate quasi mollitia dolor vel,
            rerum ipsum? Et quasi, nisi veritatis amet earum ad esse optio ipsa
            velit recusandae. Praesentium totam accusantium soluta laudantium
            dolores ipsum adipisci minima quasi quis dignissimos cum odio,
            magnam delectus consequatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
