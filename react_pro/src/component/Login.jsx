import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Login() {

    let [loginfrm, setloginfrm] = useState({})
    let [sign, setSign] = useState({})

    let handleInput = (e) => {
        let { name, value } = e.target
        setloginfrm({ ...loginfrm, [name]: value })
    }

    let move = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginfrm)

        let sett = JSON.parse(localStorage.getItem("userdata"))
        setSign(sett)

        //  form validate 
        if (loginfrm.email == "") {
            toast.warning("Enter email");
        }

        else if (!(loginfrm.email.includes("@") && loginfrm.email.includes(".com"))) {
            toast.warning("please enter valid email only ");
        }

        else if (isNaN(loginfrm.mobile)) {
            toast.warning(" Enter Mobile Number");
        }

        else if (loginfrm.mobile.length != 10) {
            toast.warning("Please enter valid Number ");
        }

        else if (loginfrm.email != sign.email || loginfrm.mobile != sign.mobile) {
            toast.warning(" User not found !");
        }

        else if (loginfrm.email == sign.email || loginfrm.mobile == sign.mobile) {
            move('/');
        }

    }

    return (
        <>

            <section className=" w-full h-150 bg-[url(../cloth/bg_log.png)] bg-cover bg-no-repeat flex flex-col items-center gap-y-5 ">
                <h1 className=" text-blue-600 text-3xl p-3 font-black "> Login page</h1>

                <form className=" border-2 w-130 h-auto p-3 rounded-2xl font-bold " onSubmit={handleSubmit}>

                    <label htmlFor="">Email</label> &ensp;
                    <input className=" border-1  p-1 w-100 font-normal " type="text" name="email" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Mobile</label> &ensp;
                    <input className=" border-1 p-1 w-100 font-normal " type="text" name="mobile" onChange={handleInput} /> <br /> <br />

                    <div className="flex justify-start items-center">

                        <input className=" border-1 rounded-full p-1 bg-pink-600 text-white w-30" type="submit" />

                        <h1 className="text-black"> &emsp; &emsp; first time user! &ensp; </h1>

                        <Link to="/sign">
                            <h1 className="border-1 border-black bg-black text-white p-1 pl-5 pr-5  ">   sign up  </h1>
                        </Link>
                    </div>

                    <ToastContainer theme="dark" />
                </form>
            </section>

        </>
    )
}

export default Login
