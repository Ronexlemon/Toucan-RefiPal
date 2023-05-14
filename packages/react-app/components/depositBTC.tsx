import React from "react"
import { useContract } from "wagmi"
import { useSigner } from "wagmi"
import { useContractWrite } from "wagmi"
import { ToucanCeloContractAddress } from "../pages/Addresses/address"
import ToucanAbi from "../pages/ABI/Toucan.json";
import Ierc20Abi from "../pages/ABI/Ierc20.json"
import { TCo2Address } from"../pages/Addresses/address"
import { ethers } from "ethers"
import { useState,useEffect } from "react"
import { FaSpinner } from 'react-icons/fa';


 

export default function DepositBTC() {
    const [amount, setAmount] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {
        
        writeAsync: deposit
        
      } = useContractWrite({
        address:ToucanCeloContractAddress,
        abi:ToucanAbi,
        functionName: "depositTCo2",
        args:[TCo2Address,ethers.utils.parseEther(amount || "0")]
      })
      const {
        
        writeAsync: appr
        
      } = useContractWrite({
        address:TCo2Address,
        abi:Ierc20Abi,
        functionName: "approve",
        args:[ToucanCeloContractAddress,ethers.utils.parseEther(amount || "0")]
      })
      const {
        
        writeAsync: allow
        
      } = useContractWrite({
        address:TCo2Address,
        abi:Ierc20Abi,
        functionName: "allowance",
        args:[ToucanCeloContractAddress,ethers.utils.parseEther("1")]
      })
      const approve = async () => {
        try {
          setIsLoading(true); // set isLoading to true before the async call
          await appr();
        } catch (e) {
          console.log("the error to approve is", e);
        } finally {
          setIsLoading(false); // set isLoading to false after the async call
        }
      };
      
      const depositBtc = async () => {
        try {
          if (amount == undefined) {
            alert("Please enter the amount");
          } else {
            setIsLoading(true); // set isLoading to true before the async calls
            await approve();
            setTimeout(async () => {
              await deposit();
              setIsLoading(false); // set isLoading to false after the async calls
            }, 10000);
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
            <h2>Deposit Tco2 tokens for BTC</h2>
          </div>
          <div className="flex justify-around  items-center mt-14  ">
            <h1>Enter Amount:</h1>
            <input className="text-center" onChange={(e) => {setAmount(e.target.value)}}/>
          </div>
          <div className="flex justify-around items-center mt-14">
            <button className="rounded bg-orange-100 w-20">Close</button>
            <button className="rounded bg-orange-100 w-20" onClick={() => {depositBtc()}}>
              Deposit
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