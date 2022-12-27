import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 bg-watchDogPrimary shadow-md py-2 z-50">
      <div className=" flex text-white  px-5 md:max-w-screen-xl mx-auto justify-between items-center">
        <div onClick={() => router.push("/")} className="h-5 md:h-11 pt-1 cursor-pointer">
          <img src="https://links.papareact.com/f90" alt="logo" className="h-full object-contain my-auto" />
        </div>
        <div className="font-semibold flex items-center">
        <Link href="/dashboard">
            <span className="hover:underline">MyOrder</span>
          </Link>
          <div className="relative link flex items-center mx-3 hover:underline hover:cursor-pointer">
            <span className="absolute -top-1 -right-1 text-xs bg-yellow-500 px-1 text-center rounded-full font-bold">{`0`}</span>
            <AiOutlineShoppingCart className=" text-2xl" />
          </div>
          {
            <div className="w-7 h-7 hidden md:inline ">
              <img
                src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                className="object-contain rounded-full"
                alt=""
              />
            </div>
          }
          <span className="mx-3 hover:underline hover:cursor-pointer">{`Hello, Nazir`}</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
