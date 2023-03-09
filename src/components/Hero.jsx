

export default function Hero() {
  return (
    <div className="w-full ">
      <div className="bg-[url('src/assets/shakinghands.jpg')] w-full h-[600px] bg-no-repeat bg-cover bg-center flex items-center">
        <div className="mx-auto text-center">
          <div className="bg-light-green-200 p-7 rounded-lg  w-96">
            <h1 className=" text-base md:text-3xl  text-[#000000] mb-6  ">
              Join Us in the Fight Against Hunger
            </h1>
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
             <a target={'_blank'} href="https://www.un.org/sustainabledevelopment/hunger/">Learn More</a> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
