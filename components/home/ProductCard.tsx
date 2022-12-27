import { useRouter } from "next/router";
import React from "react";

function ProductCard({ title, image, price, description, id, ratting }: any) {
  const router = useRouter()
  return (
    <div onClick={()=> router.push(`/product/${id}`)} className="bg-white p-3 hover:shadow-md cursor-pointer z-20">
      <div className="h-36">
        <img src={image} className="h-full object-contain m-auto" alt="" />
      </div>
      <div className="mt-2">
        <div className="text-sm">{title}</div>
        <div className="text-xl mt-2">
            <h1>${price}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
