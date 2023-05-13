import React from "react";
import Navbar from "../components/Navbar";

import LandHome from "../components/landhome";

const LandingPage = ()=>{
    return(
        <>
         <div className=" w-full bg-back bg-no-repeat h-screen">
            <Navbar/>
            <div className="flex h-full justify-center items-center">
                
                <LandHome/>

            </div>

        </div>
        </>
       
    )
}
export default LandingPage;