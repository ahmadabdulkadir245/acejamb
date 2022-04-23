import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";

function LifeChanger() {
  return (
    <div className='p-3'>
      <div className='flex mb-1  text-4xl justify-center'>
        <span className='text-[#015f5f] z-auto mr-3 '>LIFE</span> CHANGER
      </div>
      <div className=' w-36 h-1 bg-[#015f5f] flex m-auto mb-6'></div>
      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum,
        quod optio ratione vitae autem tempora, impedit, fugiat obcaecati
        deleniti officia minus amet mollitia neque numquam nulla repudiandae
        tempore architecto molestias. Saepe quos distinctio ducimus aperiam
        porro dignissimos ut ipsa quia vitae, accusantium temporibus mollitia
        eligendi dolore magni ipsam, facere consequuntur perspiciatis inventore,
        quidem sapiente natus dolores blanditiis optio quod? Reiciendis est
      </p>
      <p className='text-xl mb-5'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
        assumenda quibusdam voluptates blanditiis alias iste ipsam sunt
        reprehenderit minus reiciendis a, nesciunt debitis, ducimus atque
      </p>
      <Link href='/LifeChanger'>
        <button className='flex m-auto py-2 px-9 text-2xl bg-[#015f5f] text-white rounded-md '>
          Start Test
        </button>
      </Link>
    </div>
  );
}

export default LifeChanger;
