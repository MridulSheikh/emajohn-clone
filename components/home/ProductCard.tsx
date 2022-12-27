import { useRouter } from "next/router";
import React from "react";
import Ratting from "../shared/Ratting";

function ProductCard({ title, image, price, description, id, rating }: any) {
  const router = useRouter()
  return (
    <div onClick={()=> router.push(`/product/${id}`)} className="bg-white p-3 hover:shadow-md cursor-pointer z-20">
      <div className="h-36">
        <img src={image} className="h-full object-contain m-auto" alt="" />
      </div>
      <div className="mt-2">
        <div className="text-sm font-bold">{title.substring(0, 20)}</div>
        {
          description && <div className="text-sm mt-3 text-gray-500 mb-3">{description?.substring(0, 70)}....</div>
        }
        <Ratting rating={rating} />
        <div className="text-xl mt-2">
            <h1>${price}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
