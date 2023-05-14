import React from "react";
import Navbar from "../components/Navbar";
import DepositBTC from "../components/depositBtc";
import ShowBalance from "../components/showBalances";

const DepositPage = ()=>{
    return(
        
         <div className=" w-full bg-slate-800 h-screen bg-back fixed">
            <Navbar/>
            <div className=" mt-4">
                <ShowBalance/>
            </div>
            <div className="flex h-full justify-center items-center">
                
                <DepositBTC/>

            </div>

        </div>
        
       
    )
}
export default DepositPage;