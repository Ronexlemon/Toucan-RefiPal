import React from "react";
import Navbar from "../components/Navbar";

import LandHome from "../components/landhome";

const LandingPage = ()=>{
    return(
        <>
         <div className=" w-full h-full min-h-screen  bg-back  bg-center bg-cover bg-no-repeat" >
            <Navbar/>
            <div className="h-full w-full   ">
                <div className="text-5xl m-10">
                    RefiPal
                </div>
            <div className=" w-full flex h-full justify-center items-center">
                
                <LandHome/>

            </div>
               
            </div>
           

        </div>
        </>
       
    )
}
export default LandingPage;