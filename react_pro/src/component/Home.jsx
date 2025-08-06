
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoGooglePlus, BiLogoPinterestAlt, BiLogoYoutube, BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


function Home() {
  return (
    <>
      <header>


        <section className=" flex justify-between items-center  border-1 bg-blue-300">

          <Link className=" text-5xl text-center font-bold grow-1 bg-yellow-300 border-1 w-10 p-1 " to="/home">  Outfit</Link> &ensp; 

          <nav className=" text-2xl flex items-center justify-evenly pl-100  bg-blue-400  grow-3  " >
            <Link className=" border-r-1" to="/new">  New &ensp;   </Link>  
            <Link className=" border-r-1" to="/women">  Women &ensp;  </Link>   
            <Link className=" border-r-1" to="/men">  Men &ensp; </Link>   
            <p className=" flex text-xl items-center  ">  <CgProfile /> 
             Login  &ensp; <p className=" text-2xl "> < FaShoppingCart /> </p> &ensp; 
            </p>   
            
          </nav>

        </section>


      </header>

      <section className=' w-full h-163   '>

        <div className='text-center flex flex-col items-center border-1 p-4'>
          <p className=' hover:bg-yellow-200  text-5xl font-bold '> Outfit </p>
          <p className='text-2xl bg-green-200 w-100 '> There's One for Everyone </p>
        </div>
        <div className='flex justify-evenly items-center border-1 p-2'>
          <img className=' h-110 w-auto ' src="women.png" alt="pic" />
          <img className=' h-110 w-auto ' src="new cloth.png" alt="pic" />
          <img className=' h-110 w-auto ' src="men.png" alt="pic" />
        </div>

        <article>
          <p> New Drops </p>

          <div>

          </div>

        </article>


      </section>

      <footer className=" w-full h-auto  ">

        <section className=' flex  text-center  border-1  '>
          <article className='  bg-black text-white  grow-1 pt-15 pb-15 w-50   '>
            <p className=' font-bold text-2xl/15   '> Outfit </p>
            <p> outfit@cloth.com </p>
            <p className=' '> Tel: 123-456-7899 </p>
            <p > Registered Office: Outfit Ltd, 319, Vasant Vihar, Phase II, Delhi - 110057. </p>
          </article>

          <section className=' flex  bg-amber-200 grow-3  '>
            <article className='  grow-1 text-center  pt-10 pb-10 '>
              <div className=' text-lg/15  font-semibold  ' > Shop </div>
              <div>New</div>
              <div>Women</div>
              <div>Men</div>
            </article>

            <article className='  grow-1 text-center  pt-10 pb-10 '>
              <div className=' text-lg/15 font-semibold ' > Our Store </div>
              <div>About Us</div>
              <div>Subscribe</div>
              <div>FAQ</div>
            </article>

            <article className='   grow-1 text-center  pt-10 pb-10 '>
              <div className=' text-lg/15 font-semibold '> Terms & Conditions </div>
              <div> Store Policy </div>
              <div>Shipping & Resume </div>
              <div>Payment Methods </div>
            </article>
          </section>
        </section>

        <section className="  flex items-center justify-around border-1  ">
          <article className=" flex items-center justify-evenly text-2xl text-center grow-1 p-2 border-r-1  ">
            < BiLogoFacebookCircle />
            < BiLogoPinterestAlt />
            < BiLogoTwitter />
            < BiLogoYoutube />
            < BiLogoGooglePlus />
            < BiLogoWhatsapp />
          </article>

          <p className=" grow-4  text-center p-2 bg-green-200  "> &copy; 2025 All rights reserved. Powered and Secured by Cybrom Pvt. Ltd. </p>
        </section>

      </footer>

    </>
  )
}
export default Home





//               https://www.wix.com/website-template/view/html/2936?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%2Ffashion-clothing&tpClick=view_button&esi=ec8897f2-1ffe-4f52-9a41-1c9e197c94a6#
