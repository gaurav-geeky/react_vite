
// total amount page

import { useDispatch, useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { increaseQty, decreaseQty, deleteitem } from "./Cartslice";
import { useNavigate } from 'react-router-dom'


function Showcart() {

    let cartItems = useSelector((item) => item.tray.trayItems);
    const dispatch = useDispatch();

    let Total = () => {
        let totalP = 0;
        let totalQ = 0;

        cartItems.forEach((box) => {
            totalQ += box.quantity;
            totalP += box.quantity * box.pprice;
        });

        return { totalP, totalQ };
    };

    let { totalP, totalQ } = Total();

    let nav = useNavigate();

    let detail = {
        tp: totalP,
        tq: totalQ
    }

    function handelbuy() {
        localStorage.setItem("Proinfo", JSON.stringify(detail))

        nav('/address')
    }

    return (
        <>
            <section className=" bg-gray-200 ">
                <h1 className="text-3xl bg-amber-100 p-2"> Shopping Cart </h1>
                <p className=" text-end text-[blue] bg-amber-100 pr-50 font-bold tracking-[.5em]"> TOTAL </p>

                <hr className=" text-gray-500 w-full " />
                {/*  */}
                <article className=" flex justify-between p-2  ">

                    <article className="  grow-5  grid grid-cols-1 place-items-center gap-y-5   ">
                        {
                            cartItems.map((item) => (
                                <div className=" bg-purple-100 h-80 w-150 rounded-tr-3xl rounded-bl-3xl  flex justify-evenly items-center border-1 m-1 text-[20px]">

                                    <img className=" h-70" src={item.pimg} alt="pic" />

                                    <div className="flex flex-col gap-y-5">
                                        <h1> {item.pname} </h1>
                                        <h1> ₹ {item.pprice} </h1 >

                                        <div className=" text-2xl w-24 flex justify-around items-center ">

                                            <button onClick={() => dispatch(decreaseQty(item.pid))}> < CiCircleMinus /> </button>

                                            <p> {item.quantity} </p>

                                            <button onClick={() => dispatch(increaseQty(item.pid))}> <CiCirclePlus /> </button>
                                        </div>

                                        <p> Total ₹ {item.quantity * item.pprice}  </p>

                                        <button className=" border-1 border-blue-600 bg-blue-600 text-white " onClick={() => dispatch(deleteitem(item.pid))}>delete</button>
                                    </div>
                                </div>
                            ))
                        }

                        {totalQ === 0 && (
                            <div className="min-h-[20em] flex items-center justify-center w-full">
                                <p className="text-gray-600">Your cart is empty. Buy something 🛒</p>
                            </div>
                        )}
                        {/*  where no item then page must have some min. height  */}

                    </article>

                    {totalQ > 0 && (<article className=" bg-blue-200 grow-2 h-40 text-[18px] border-1 m-1 p-5 rounded-2xl ">
                        <p> total no of items ordered : {totalQ} </p>
                        <p> Total Amount : {totalP}  </p> <br />
                        <button className=" border-1 border-red-500 bg-red-500 rounded-[8px] text-white font-bold p-1" onClick={() => handelbuy()}> Buy Now </button>
                    </article>)}
                    
                    {/*  where there is item in cart then only  total section visible */}

                </article>

            </section>
        </>
    )
}

export default Showcart



//  grid prop me same line me     grid-cols-2   =>   2 items in a col     place-items-center  =>  justify, align center 






