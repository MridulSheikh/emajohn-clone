import React, {useState} from 'react'

interface props {
    price : number;
    quantity : number;
}

function Counter({price, quantity} : props) {
    const [totalquantity, setTotalquantity] = useState<number>(1)
    const [total, setTotal] = useState<number>(price)
    console.log(quantity)
    const handlequantity = (action : string) => {
        if(action === "increment" && quantity > 0) {
            if(totalquantity === quantity){
                setTotalquantity(quantity)
                setTotal(totalquantity * price)
                
                return;
            }
            setTotal(totalquantity * price)
            setTotalquantity(totalquantity + 1)
        }
        else{
            
            if(totalquantity === 1){
                setTotalquantity(1)
                setTotal(totalquantity * price)
                return;
            }
            setTotalquantity(totalquantity - 1)
            setTotal(totalquantity * price)
        }
    }
  return (
    <div>
        <h1>Total : ${total}</h1>
        <div className='flex gap-3 items-center my-3'>
            <button className='text-2xl font-bold text-gray-600' onClick={() => handlequantity('Decrement')}>-</button>
             <h1 className='text-2xl border px-3'>{totalquantity}</h1>
             <button className='text-4xl font-bold text-gray-600' onClick={() => handlequantity('increment')}>+</button>
        </div>
        <button disabled={quantity <= 0} className="btn text-xs">Add to basket</button>
    </div>
  )
}

export default Counter