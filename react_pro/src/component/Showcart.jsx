import { useSelector } from "react-redux";

import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci"; 
import { useState } from "react";



function Showcart() {

    let [counter, setCounter] = useState(1)

    let cartItems = useSelector((item) => item.tray.trayItems)

    return (
        <>
            <section>
                <h1 className="text-3xl bg-amber-100 p-2"> Shopping Cart </h1>
             
                <hr className=" text-gray-500 w-full " />

                <article className=" grid grid-cols-2 ">
                    { 
                        cartItems.map((item) => (

                            <div className=" flex justify-around p-1 border-1 m-2">
                                <img className=" h-100" src={item.pimg} alt="pic" />

                                <div className=" font-bold text-2xl"> 
                                    <h1> {item.pid} </h1>
                                    <h1> {item.pname} </h1>
                                    <h1> ₹ {item.pprice} </h1 > 
                                    
                                    <div className=" border-1 w-25 flex justify-around items-center ">
                                        <button className="bg-red-500 rounded-full" onClick={ () => counter >0 && setCounter(counter-1) }> < CiCircleMinus/> </button> 
                                        <p> {counter} </p>
                                        <button onClick={() => setCounter(counter + 1)}> <CiCirclePlus/> </button> 
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    }

                </article>

            </section>
        </>
    )
}

export default Showcart

