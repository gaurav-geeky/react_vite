
import { Link } from 'react-router-dom'


function Men() {
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

            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/m1.png" alt="pic" /> gray t-shirt 
            <br /> ₹ 999.00 </p> 

            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/m2.png" alt="pic" /> purple t-shirt 
            <br /> ₹ 555.00 </p> 
            
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/m3.png" alt="pic" /> White t-shirt 
            <br /> ₹ 450.00 </p>
            
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/m4.png" alt="pic" /> tommy hilfiger t-shirt 
            <br /> ₹ 350.00 </p> 

            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/m5.png" alt="pic" /> latest t-shirt 
            <br /> ₹ 300.00 </p> 
            
            <p className=" h-100 w-70 "> <img className=" h-90 w-70 " src="../cloth/m6.png" alt="pic" /> Harrow t-shirt 
            <br /> ₹ 249.00 </p> 
            
        </article>
    </section>

      
    </>
  )
}

export default Men
