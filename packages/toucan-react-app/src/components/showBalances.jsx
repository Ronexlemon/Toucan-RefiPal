import { useContractRead, useContractWrite } from "wagmi"
import { ToucanCeloContractAddress } from "../Addresses/address"
import ToucanAbi from "../ABI/Toucan.json";
import Ierc20Abi from "../ABI/Ierc20.json";
import { TCo2Address } from "../Addresses/address"
import Image from "../assets/celo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ShowBalance() {
    const navigate = useNavigate();
    const { data, isError, isLoading } = useContractRead({
        address: ToucanCeloContractAddress,
        abi: ToucanAbi,
        functionName: 'getBalance'
        
      })
      useEffect(()=>{

      },[data])
      
      console.log("the data is", Number(data))

    return (
        <div className="h-14  w-3/4 ml-14">
            <div className="flex justify-around items-center">
                <div> BTC: 3000000000</div>
                <div className="">TC02: 3000000000</div>
                
            </div>
        </div>
    )
}
