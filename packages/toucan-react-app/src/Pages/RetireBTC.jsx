import React from "react";
import Navbar from "../components/Navbar";
import RetireBTC from "../components/retire";
import ShowBalance from "../components/showBalances";

const RetireBTCPage = ()=>{
    return(
        
         <div className=" w-full bg-slate-800 h-screen bg-back fixed">
            <Navbar/>
           
            <div className="flex h-full justify-center items-center">
                
                <RetireBTC/>

            </div>

        </div>
        
       
    )
}
export default RetireBTCPage;