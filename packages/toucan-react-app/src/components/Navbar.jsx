import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "../assets/celo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="h-14 bg-slate-400 flex justify-around items-center">
            <button onClick={()=>{navigate("/home")}}>
                Home
            </button>
            <button onClick={()=>{navigate("/home")}}>
                Retire
            </button>
            <button onClick={()=>{navigate("/deposit")}}>
                Deposit
            </button>
            <div className="h-7">
            <ConnectButton showBalance={true} />

            </div>
            
               
            
     
      </div>
    )
  }