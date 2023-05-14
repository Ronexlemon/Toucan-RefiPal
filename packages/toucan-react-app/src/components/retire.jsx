import React from "react"
//const ToucanClient = require("toucan-sdk");
import { useProvider, useSigner } from "wagmi";

import { useState,useEffect } from "react"
import { FaSpinner } from 'react-icons/fa';

import { ethers } from "ethers";


export default function RetireBTC() {
  //   const provider = useProvider();
  //   const { data: signer, isError, isLoading } = useSigner();
  
  //   const toucan = new ToucanClient("alfajores", provider);
  //   signer && toucan.setSigner(signer);
  //   const [amount, setAmount] = useState();
  //   // we will store our return value here
  // const [tco2address, setTco2address] = useState("");

  // async function redeemPoolToken() {
  //   const redeemedTokenAddress = await toucan.redeemAuto2(
  //     "NCT",ethers.utils.parseEther("1")
  //   );
  //   if (redeemedTokenAddress) {
  //     setTco2address(redeemedTokenAddress[0].address);
  //   }
  // }
    
     
      
      const retireBtcForTco2 = async () => {
        try {
          if (amount == undefined) {
            alert("Please enter the amount");
          } else {
           redeemPoolToken();
          }
        } catch (e) {
          console.log("the error to approve is", e);
        }
      };
      console.log("the amount",typeof(amount));
      useEffect(()=>{

      },[amount,appr,deposit])
      return (
        <div className="h-2/4 w-2/4 bg-green-400 rounded  ">
          <div className="flex flex-col justify-center items-center mt-10 ">
            <h2>Retire BTC</h2>
          </div>
          <div className="flex justify-around  items-center mt-14  ">
            <h1>Enter Amount:</h1>
            <input className="text-center" onChange={(e) => {setAmount(e.target.value)}}/>
          </div>
          <div className="flex justify-around items-center mt-14">
            <button className="rounded bg-orange-100 w-20">Close</button>
            <button className="rounded bg-orange-100 w-20" onClick={() => {retireBtcForTco2()}}>
              Retire
            </button>
          </div>
          {isLoading && ( // add this conditional rendering for the loading icon
            <div className="flex justify-center items-center">
              <FaSpinner className="animate-spin h-8 w-8 text-green-500" />
            </div>
          )}
        </div>
      );
  }