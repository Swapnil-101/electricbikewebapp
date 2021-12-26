const MainData = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-11/12 relative">
          <img src="./circle.gif" className="relative w-743 top-[14.9rem] left-[-6rem]"/>
          <img src="./scoot.png" className="w-979 absolute top-[4.4rem] left-[6.7rem]"/>
        </div>
        <div className="flex-wrap mx-40 mt-32 w-1/2">
            <h1 className="text-7xl w-26 my-16" style={{fontFamily : "Playfair Display"}}>A neat headline comes here !</h1>
            <h1 className="text-2xl w-34 mb-7">A neat sample text to come here super soon. Till then admire the authentic and delightful User Interface Design of the Website. We are glad you came here , thanks for visiting .</h1>
            <button className="bg-[#DB1218] px-8 py-2.5 hover:bg-black text-white ease-in-out duration-500 text-2xl">Show Details</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-64 mb-2">
        <div className="w-5 h-5 rounded-full bg-[#DB1218]"></div>
        <div className="w-5 h-5 rounded-full bg-[#D3D3D3]"></div>
        <div className="w-5 h-5 rounded-full bg-[#D3D3D3]"></div>
        <div className="w-5 h-5 rounded-full bg-[#D3D3D3]"></div>
      </div>
    </div>
  );
};

export default MainData;
