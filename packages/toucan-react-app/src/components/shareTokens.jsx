import React from "react"
import { useContract } from "wagmi"
import { useSigner } from "wagmi"
import { useContractWrite } from "wagmi"
import { ToucanCeloContractAddress } from "../Addresses/address"
import ToucanAbi from "../ABI/Toucan.json";
import Ierc20Abi from "../ABI/Ierc20.json";
import { TCo2Address } from "../Addresses/address"
import { btcAddress } from "../Addresses/address"
import { ethers } from "ethers"
import { useState,useEffect } from "react"



export default function ShareTokens() {
    const [amount, setAmount] = useState();
    const [shareAddress, setAddress] = useState();
    const [selectedOption, setSelectedOption] = useState('BTC');
    const [addressesToken, setAddressToken] = useState(btcAddress);
    const {
        
        writeAsync: deposit
        
      } = useContractWrite({
        address:ToucanCeloContractAddress,
        abi:ToucanAbi,
        functionName: "shareTokens",
        args:[addressesToken,shareAddress,ethers.utils.parseEther(amount || "0")]
      })
      const {
        
        writeAsync: appr
        
      } = useContractWrite({
        address:addressesToken,
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
      const approve =async()=>{
        try{
            
            await appr()

        }catch(e){
            console.log("the error to approve is",e);
        }

      }
      const depositBtc = async () => {
        try {
            if(amount == undefined && shareAddress == undefined){
                alert("Please enter the amount");
            }
            else{
                if(selectedOption === "TCo2"){
                    setAddressToken(TCo2Address);
                }
                await approve();
  setTimeout(async () => {
    await deposit();
  }, 10000);

            }
          
        } catch (e) {
          console.log("the error to approve is", e);
        }
      };
      console.log("the amount",selectedOption);
      useEffect(()=>{

      },[amount,appr,deposit])
      return (
        <div className="h-2/4 w-2/4 bg-green-400 rounded">
          <div className="flex flex-col justify-center items-center mt-10">
            <h2>share token $ transfer</h2>
          </div>
    
          <div className="flex justify-around items-center mt-14">
            
            <div className="">
                <div>
                <h1>Enter Amount:</h1>
                <input className="text-center " value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
            
                <div>
                <h1>Enter Address:</h1>
                <input className="text-center " value={shareAddress} onChange={(e) => setAddress(e.target.value)} />
                </div>
            </div>
            
            <div className="flex justify-around items-center mt-14">
            <div className="relative inline-block text-left">
              <select className="w-20 rounded-md shadow-sm bg-white border-gray-300 text-gray-500 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="BTC">BTC</option>
                <option value="TCo2">TCo2</option>
              </select>
            </div>
          </div>
          </div>
    
         
    
          <div className="flex justify-around items-center mt-14">
            <button className="rounded bg-orange-100 w-20" >
              Cancel
            </button>
            <button onClick={()=>{depositBtc()}} className="rounded bg-orange-100 w-20">
              Share
            </button>
          </div>
        </div>
      );
  }