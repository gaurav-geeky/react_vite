
import { Link, Outlet } from "react-router-dom"
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoGooglePlus, BiLogoLinkedin } from "react-icons/bi";


function Layout() {

    return (
        <>

            <nav className=" flex  items-center  bg-blue-500  border-b-1 border-white  p-2   " >
                <Link className=" text-6xl  font-bold " to="/home">  Outfit</Link> &ensp; &ensp;
                <Link className=" text-xl " to="/new">  New</Link>  &ensp;  &ensp;
                <Link className=" text-xl " to="/women">  Women</Link>  &ensp;  &ensp;
                <Link className=" text-xl " to="/men">  Men </Link>
            </nav>

            <Outlet />

           

        </>
    )

}

export default Layout
