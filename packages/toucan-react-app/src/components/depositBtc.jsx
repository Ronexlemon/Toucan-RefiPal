import React from "react"
import { useContract } from "wagmi"
import { useSigner } from "wagmi"
import { useContractWrite } from "wagmi"
import { ToucanCeloContractAddress } from "../Addresses/address"
import ToucanAbi from "../ABI/Toucan.json";
import Ierc20Abi from "../ABI/Ierc20.json";
import { TCo2Address } from "../Addresses/address"
import { ethers } from "ethers"


export default function DepositBTC() {
    const {
        
        writeAsync: deposit
        
      } = useContractWrite({
        address:ToucanCeloContractAddress,
        abi:ToucanAbi,
        functionName: "depositTCo2",
        args:[TCo2Address,ethers.utils.parseEther("1")]
      })
      const {
        
        writeAsync: appr
        
      } = useContractWrite({
        address:TCo2Address,
        abi:Ierc20Abi,
        functionName: "approve",
        args:[ToucanCeloContractAddress,ethers.utils.parseEther("1")]
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
          await approve().then(async () => {
            await deposit();
          });
        } catch (e) {
          console.log("the error to approve is", e);
        }
      };
    return (
        <div className="h-3/4 w-3/4 bg-green-400 rounded flex justify-around items-center">
            <div>
<button >
    Close
</button>
            </div>
            <div>
                <button onClick={()=>{depositBtc()}}>
                Deposit
                </button>

            </div>

            
           
 
            
               
            
     
      </div>
    )
  }