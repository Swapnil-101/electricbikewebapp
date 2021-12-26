import { useState } from "react";
import Dropdown from "./Dropdown";

const Option = ({prev,handler})=>{
    const[sds,setSds] = useState(false);
    return(
        <div>
            <div className="bg-[#0B090A] text-white flex justify-between pl-40 pr-28 py-7 text-2xl">
                <img src="./rect.svg"/>
                <div className="flex items-center space-x-20 cursor-pointer">
                    <h1>About</h1>
                    <h1>Locate Store</h1>
                    <div className="flex" onClick={()=>{
                        setSds(!sds);
                    }}>
                        <h1 className="pr-2">Scooters</h1>
                        <img src="./arrowdown.svg"/>
                    </div>
                    <div className="flex">
                        <h1 className="pr-2">Purchase Assistance</h1>
                        <img src="./arrowdown.svg"/>
                    </div>
                    <button className="bg-[#DB1218] px-4 py-2.5 hover:bg-white hover:text-black ease-in-out duration-500">Dealership</button>
                </div>
            </div>
            <Dropdown style={sds && {display:"flex",position:"absolute"}}/>
        </div>
    );
}

export default Option;
