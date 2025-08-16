import { useSelector } from "react-redux";


function Showcart() {

    let cartItems = useSelector((item) => item.tray.trayItems)

    return (
        <>
            <section>
                <h1 className="text-3xl bg-amber-100"> Shopping Cart </h1>
                <p className=" text-center pl-200 bg-amber-100 " > Price </p>
                <hr className=" text-gray-400 w-7xl " />

                <article className="  ">
                    { 
                        cartItems.map((item) => (

                            <div className=" flex justify-around p-1">
                                <img className=" h-100" src={item.pimg} alt="pic" />

                                <div className=" font-bold text-2xl">
                                    <h1> {item.pname} </h1>
                                    <h1> ₹ {item.pprice} </h1>
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

