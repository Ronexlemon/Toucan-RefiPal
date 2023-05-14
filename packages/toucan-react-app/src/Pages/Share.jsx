import React from "react";
import Navbar from "../components/Navbar";
import ShareTokens from "../components/shareTokens";
import ShowBalance from "../components/showBalances";

const SharePage = ()=>{
    return(
        
         <div className=" w-full bg-slate-800 h-screen bg-back fixed">
            <Navbar/>
           
            <div className="flex h-full justify-center items-center">
                
                <ShareTokens/>

            </div>

        </div>
        
       
    )
}
export default SharePage;