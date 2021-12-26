import { useState } from "react";

const Elements = ({ name }) => {
  const [esh, setEsh] = useState(false);
  return (
    <div className="ease-in duration-200 hover:text-black cursor-default">
      <h1 onMouseEnter={() => setEsh(!esh)} onMouseLeave={() => setEsh(!esh)}>
        {name}
      </h1>
      {esh && <div className="w-36 h-0.6 mt-3 bg-red-500 absolute"></div>}
    </div>
  );
};

const Dropdown = ({ style }) => {
  const scoots = ["HRX350 Bike", "GEAR350 EB", "RX - AK290 EB", "GBM -Heavy"];
  return (
    <div className="w-full" style={{ display: "none", ...style ,zIndex:1000}}>
      <div className="w-full relative">
        <div className="flex justify-between w-full bg-[#F5F3F4] pl-36 pr-48 py-24 text-5xl text-[#7A7A7A]">
          {scoots.map((product) => {
            return <Elements key={product} name={product} />;
          })}
        </div>
      </div>
      {/* <img src="./scoot.png" className="w-979 absolute top-[5.6rem] left-[6.7rem]"/> */}
    </div>
  );
};

export default Dropdown;
