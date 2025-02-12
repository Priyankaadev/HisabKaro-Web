'use client'

import { Dropdown } from "@/components/cart/dropdown";
import Options from "@/components/input/options";
import ProductDiv from "@/components/products/productDiv";
import ProfileIndicator from "@/components/profile/profileIndicator";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Products() {

  const [checkoutOpen, setCheckoutOpen] = useState(false)
  return (
    <div className="rounded-lg relative shadow-lg border w-full py-4 px-[2%] flex flex-col gap-3">
      <div className="head flex justify-between items-center mb-2 ">
        <p className="font-semibold text-[15px]">Products</p>
        <div className="flex gap-3 items-center">
          <div className="profile-indicator flex gap-1 items-center  ">
    <div className="rounded-full border-2 border-blue-400 border-dashed   ">
            <ProfileIndicator />
            </div>   
    <div className="rounded-full border-2 border-blue-400 border-dashed   ">
            <ProfileIndicator  />
            </div>   
    <div className="rounded-full border-2 border-blue-400 border-dashed   ">
            <ProfileIndicator />
            </div>   
    <div className="rounded-full border-2 border-blue-400 border-dashed   ">
            <ProfileIndicator />
            </div>   
            
          </div>
          <div className="cart border rounded-xl bg-blue-400 px-4 py-1 flex gap-2 items-center">
            <FaShoppingCart color="white"/>
            <p className="text-white">New Cart</p>
          </div>
        </div>
      </div>
      <div className="search-inp flex gap-2 bg-[#f5f8fa] items-center rounded-xl  px-6">
        <FaSearch size={20} />
        <input
          type="text"
          name="search"
          placeholder="Search Products..."
          className="w-full p-2 bg-[#f5f8fa] rounded-xl "
        />
      </div>
      <div className="search-highlights flex items-center gap-3">
        <Options option={"All"} />
        <Options option={"Grocery"} />
        <Options option={"Fruits"} />
        <Options option={"Fruits"} />
        <Options option={"Fruits"} />
        <Options option={"Fruits"} />
      </div>
      <div className="product-items flex flex-wrap gap-3 ">
        {Array.from({ length: 30 }).map((_, index) => (
          <ProductDiv key={index} stock={"7 pcs"} price={"4.99"} />
        ))}
      </div>
      <div className="checkout mt-auto w-full flex justify-end ">
        <div className="buttons flex gap-2 items-center basis-1/2  absolute bottom-2 mr-5">
            <Dropdown />
            <button 
            onClick={()=>{
                setCheckoutOpen(!checkoutOpen)
            }}
            className="bg-green-500 text-white w-52 h-10 shadow-lg border basis-2/3  py-1 rounded-lg">Next</button>
            
        </div>
       
      </div>

    </div>
  );
}

export default Products;
