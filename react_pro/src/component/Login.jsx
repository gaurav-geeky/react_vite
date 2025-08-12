import { useState } from "react"
import { useNavigate } from "react-router-dom";
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
            <section className=" w-full h-100 bg-[url(../tshirt/bglogin.png)] flex flex-col items-center ">
                <h1 className=" text-white text-3xl p-3 font-black "> Login page</h1>

                <form className=" border-1 w-150 p-3  bg-blue-200 rounded-2xl border-none  " onSubmit={handleSubmit}>

                    <label htmlFor="">Email</label> &ensp;
                    <input className=" border-1 p-1 " type="text" name="email" onChange={handleInput} /> <br /> <br />

                    <label htmlFor="">Mobile</label> &ensp;
                    <input className=" border-1 p-1 " type="text" name="mobile" onChange={handleInput} /> <br /> <br />

                    <input className=" border-1 rounded-full p-1 bg-pink-600 text-white w-20" type="submit" />

                    <ToastContainer theme="dark" />
                </form>

            </section>

        </>
    )
}

export default Login
