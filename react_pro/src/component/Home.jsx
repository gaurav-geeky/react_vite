
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoGooglePlus, BiLogoPinterestAlt, BiLogoYoutube, BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


function Home() {
  return (
    <>


      <section className=' w-full h-auto   '>

        <article>
          <div className='text-center flex flex-col items-center border-1 p-4'>
            <p className=' hover:bg-yellow-200  text-5xl font-bold '> Outfit </p>
            <p className='text-2xl bg-green-200 w-100 '> There's One for Everyone </p>
          </div>
          <div className='flex justify-evenly items-center border-1 p-2'>
            <img className=' h-110 w-auto ' src="women.png" alt="pic" />
            <img className=' h-110 w-auto ' src="new cloth.png" alt="pic" />
            <img className=' h-110 w-auto ' src="men.png" alt="pic" />
          </div>
        </article>


        <article id="coll" className=" w-full h-auto  pt-4 pb-4">
          <p className="p-4 text-3xl text-center font-bold"> Our latest t-shirt collections </p>

          <div className=" grid grid-cols-4 place-items-center gap-3 gap-y-6    ">

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out"> <img className=" h-auto w-80 " src="../tshirt/tsh1.png" alt="pic" /> Reebok blue t-shirt
              <br /> ₹ 459.00 </p>

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out "> <img className=" h-auto w-80 " src="../tshirt/tsh2.png" alt="pic" /> Monte Carlo men t-shirt
              <br /> ₹ 555.00 </p>

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out "> <img className=" h-auto w-80 " src="../tshirt/tsh3.png" alt="pic" /> Men Puma slim fit t-shirt
              <br /> ₹ 653.00 </p>

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out "> <img className=" h-auto w-80 " src="../tshirt/tsh4.png" alt="pic" /> Nike t-shirt
              <br /> ₹ 250.00 </p>

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out "> <img className=" h-auto w-80 " src="../tshirt/tsh5.png" alt="pic" /> H&M t-shirt
              <br /> ₹ 322.00 </p>

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out "> <img className=" h-auto w-80 " src="../tshirt/tsh6.png" alt="pic" /> Tommy Hilfiger Polyester t-shirt
              <br /> ₹ 459.00 </p>

            <p className=" h-120 w-80  hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out"> <img className=" h-auto w-80 " src="../tshirt/tsh7.png" alt="pic" /> Adidas t-shirt
              <br /> ₹ 329.00</p>

            <p className=" h-120 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out "> <img className=" h-auto w-80 " src="../tshirt/tsh8.png" alt="pic" /> Reebok t-shirt
              <br /> ₹ 299.00 </p>

          </div>


        </article>

      </section>



    </>
  )
}
export default Home





//               https://www.wix.com/website-template/view/html/2936?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%2Ffashion-clothing&tpClick=view_button&esi=ec8897f2-1ffe-4f52-9a41-1c9e197c94a6#
