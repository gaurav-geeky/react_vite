import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Signform() {

    let [signfrm, setSignfrm] = useState({
        name: "", email: "", mobile: "", password: ""
    })

    let handleInput = (e) => {
        let { name, value } = e.target
        setSignfrm({ ...signfrm, [name]: value })
    }

    let move = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("userdata", JSON.stringify(signfrm))

        if (signfrm.name == "") {
            // alert("enter name")
            toast.warning("Enter valid name");
            // return false; 
        }

        else if (signfrm.email == "") {
            toast.warning("Enter email");
            // return false;  
        }
        else if (!(signfrm.email.includes("@") && signfrm.email.includes(".com"))) {
            toast.warning("please enter valid email only ");
        }

        else if (isNaN(signfrm.mobile)) {
            toast.warning(" Enter Mobile Number");
        }

        else if (signfrm.mobile.length != 10) {
            toast.warning("Please enter valid Number ");
        }

        else if (!(signfrm.password.match(/[a-z]/) &&
            signfrm.password.match(/[A-Z]/) &&
            signfrm.password.match(/[ 1234567890 ]/) &&
            signfrm.password.match(/[ !@#$%^&*() ]/))
        ) {
            toast.warning("🚫 please use special chars in Password");
        }

        move('/login')

    }


    return (
        <>
            <section className=" w-full h-150 bg-[url(../cloth/bg_log.png)] flex flex-col items-center gap-y-5 bg-no-repeat bg-cover">

                <h1 className=" text-3xl p-3 font-black text-blue-600  "> Sign-up here</h1>

                < form className=" border-1 w-130 p-3 rounded-2xl font-bold " onSubmit={handleSubmit}>

                    <label htmlFor="">Name</label> &ensp;
                    <input className=" border-1 p-1 w-100 font-normal " type="text" name="name" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Email</label> &ensp;
                    <input className=" border-1 p-1 w-100 font-normal " type="text" name="email" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Mobile</label> &ensp;
                    <input className=" border-1 p-1 w-100 font-normal " type="text" name="mobile" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Password</label> &ensp;
                    <input className=" border-1 p-1 w-100 font-normal " type="text" name="password" onChange={handleInput} /> <br /> <br />

                    <div className="flex justify-start items-center">

                        <input className=" border-1 rounded-full p-1 bg-blue-600 text-white w-20" type="submit" />

                        <h1 className="text-black"> &emsp; &emsp; Already registered! &ensp;  </h1>

                        <Link to="/login">
                            <h1 className="border-1 border-black bg-black text-white p-1 pl-5 pr-5   ">  Login  </h1>
                        </Link>
                    </div>

                    <ToastContainer theme="dark" />
                </form>

            </section>

        </>
    )
}

export default Signform
