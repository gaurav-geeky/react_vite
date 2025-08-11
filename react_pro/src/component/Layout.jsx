
import { Link, Outlet } from "react-router-dom"
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoGooglePlus, BiLogoPinterestAlt, BiLogoYoutube, BiLogoWhatsapp } from "react-icons/bi"; 
// import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"; 

function Layout() {

    return (
        <>

            <header>

                <section className=" flex justify-between items-center  border-1 bg-indigo-400 ">

                    <Link className=" text-5xl text-center font-bold grow-1 bg-yellow-300 border-1 w-10 p-1 " to="/">  Outfit</Link> &ensp;

                    <nav className=" text-2xl flex items-center justify-evenly pl-100  bg-indigo-400  grow-3  " >
                        <Link className=" border-r-1" to="/new" >  New &ensp;   </Link>
                        <Link className=" border-r-1" to="/women">  Women &ensp;  </Link>
                        <Link className=" border-r-1" to="/men">  Men &ensp; </Link> 

                        <Link className=" border-r-1" to="/sign"> 
                        <p className=" flex text-xl items-center  "> 
                            Sign-up  &ensp; <p className=" text-2xl ">  </p> &ensp; 
                        </p> 
                        </Link>

                        <Link className=" border-r-1" to="/login"> 
                        <p className=" flex text-xl items-center  ">  <CgProfile /> &nbsp;
                            Login  &ensp; <p className=" text-2xl ">  </p> &ensp; 
                        </p>
                        </Link>
                    </nav>

                </section>

            </header>

            <Outlet />

            <footer className=" w-full h-auto mt-1 ">
            
                    <section className=' flex  text-center  border-1  '>
                      <article className='  bg-black text-white  grow-1 p-5 pt-10 pb-10 w-50    '>
                        <p className=' font-bold text-2xl/15   '> Outfit </p>
                        <p> outfit@cloth.com </p>
                        <p className=' '> Tel: 123-456-7899 </p>
                        <p > Registered Office: Outfit Ltd, 319, Vasant Vihar, Phase II, Delhi - 110057. </p>
                      </article>
            
                      <section className=' flex  grow-3  '>
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

export default Layout
