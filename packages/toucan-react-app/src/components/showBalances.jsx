import { useContractRead, useContractWrite } from "wagmi"
import { ToucanCeloContractAddress } from "../Addresses/address"
import ToucanAbi from "../ABI/Toucan.json";
import Ierc20Abi from "../ABI/Ierc20.json";
import { TCo2Address } from "../Addresses/address"
import Image from "../assets/celo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Web3 from "web3"
import { useBalance } from "wagmi";

export default function ShowBalance() {
    const navigate = useNavigate();
    const { data:balance, isError:err, isLoading:load } = useBalance({
        address: TCo2Address,
      })
    
      const contractRead = useContractRead({
        address: ToucanCeloContractAddress,
        abi: ToucanAbi,
        functionName: 'getTotalSupply()',
      
        
      })
      const getBalance = async()=>{
        try{
            await contractRead.data;
        }catch(e){
            console.log("balance error",e)
        }
      }
      useEffect(()=>{
       // getBalance();

      },[contractRead]);
      
      console.log("the data is",parseFloat(Number(contractRead.data).toString()));

    return (
        <div className="h-14  w-3/4 ml-14">
            <div className="flex justify-around items-center">
                <div> BTC Pool Value:{Number(contractRead.data)} </div>
               
                
            </div>
        </div>
    )
}
