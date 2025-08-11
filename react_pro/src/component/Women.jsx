

import { Link } from 'react-router-dom'

function Women() {
  return (
    <>
    <section className=' flex flex-row justify-around'>
        <aside className=' grow-1 border-1 p-10 '>
            <div className=' text-3xl font-serif leading-15 '> Browse by </div> 
            <hr /> 
            <Link to="/" > <div className=' text-lg/10 ' > All products </div>  </Link>
            <Link to="/men" > <div className=' text-lg/10 ' > Men </div>  </Link> 
            <Link to="/new" > <div className=' text-lg/10 ' > New Drops </div> </Link> 
            <Link to="/women" > <div className=' text-lg/10 ' > Women </div>  </Link>
        </aside> 

        <article className=" grid grid-cols-3 place-items-center gap-3 grow-7 border-1 p-5  " >
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/w1.png" alt="pic" /> Peach printed t-shirt 
            <br /> ₹ 250.00 </p> 
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/w2.png" alt="pic" /> white t-shirt 
            <br /> ₹ 222.00 </p> 
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/w3.png" alt="pic" /> Elichie t-shirt 
            <br /> ₹ 350.00 </p> 
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/w4.png" alt="pic" /> skyBlue t-shirt 
            <br /> ₹ 411.00 </p> 
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/w5.png" alt="pic" /> latest t-shirt 
            <br /> ₹ 500.00 </p> 
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/w6.png" alt="pic" /> latest t-shirt 
            <br /> ₹ 459.00 </p> 
            
        </article>
    </section>

      
    </>
  )
}

export default Women
