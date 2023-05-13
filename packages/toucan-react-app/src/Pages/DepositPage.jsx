import React from "react";
import Navbar from "../components/Navbar";
import DepositBTC from "../components/depositBtc";

const DepositPage = ()=>{
    return(
        <>
         <div className=" w-full bg-slate-800 h-screen">
            <Navbar/>
            <div className="flex h-full justify-center items-center">
                
                <DepositBTC/>

            </div>

        </div>
        </>
       
    )
}
export default DepositPage;