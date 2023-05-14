import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "../assets/celo.png";
import { useNavigate } from "react-router-dom";

export default function ShowBalance() {
    const navigate = useNavigate();
    return (
        <div className="h-14  w-3/4 ml-14">
            <div className="flex justify-around items-center">
                <div> BTC: 3000000000</div>
                <div className="">TC02: 3000000000</div>
                
            </div>
        </div>
    )
}
