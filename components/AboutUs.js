function AboutUs() {
  return (
    <div className='p-4'>
      <div className='flex  mt-4 mb-1  text-5xl   justify-center'>
        <span className='text-[#015f5f] z-auto mr-3 '>About </span> Us
      </div>
      <div className=' w-32 h-1 bg-[#015f5f] flex m-auto mb-6'></div>
      <div className='lg:flex'>
        <div className='text-lg text-black w-full '>
          <p className='w-full mb-3 lg:px-8 leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nihil laudantium earum officiis repudiandae odio ea, illum corrupti
            tenetur nisi omnis in! Saepe eaque dolores molestias sunt animi
            dolore velit fugit nemo et. Suscipit officia necessitatibus aliquam
            ut omnis dignissimos, cum nobis autem iure, tempore quod ex placeat
            quidem obcaecati!
          </p>
          <p className='w-full mb-3 lg:px-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            aliquam, repellat nulla laudantium, nobis porro voluptatum atque
            eius velit nisi praesentium minus corporis quasi quisquam.
          </p>
        </div>
        <div className='w-full'>
          <img src='/3.jpg' className='w-full' alt='' />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
