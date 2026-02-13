
//   checkout page for address of user

import { useEffect, useState } from "react"
import axios from "axios" 
import { ToastContainer, toast } from 'react-toastify';  
import { useNavigate } from "react-router-dom";


function Address() {

    let [frmdata, setFrmdata] = useState({})

    let [info, setInfo] = useState({})

    useEffect(() => {
        const stored = localStorage.getItem("Proinfo");
        if (stored) {
            setInfo(JSON.parse(stored));
        }
    }, []);

    function handleInput(e) {
        let { name, value } = e.target
        setFrmdata({ ...frmdata, [name]: value })
    }; 

    let move = useNavigate()  

    function handlesubmit(e) {
        e.preventDefault()
        console.log(frmdata) 

        axios.post('http://localhost:3000/persondata', frmdata) 
        .then( ()=> alert("success.."))
        .catch( (err)=> alert(err)) 
        
        move('/apidata')
    }; 


    return (
        <>
            <section className=" h-100 bg-gray-200" >
                <h1 className=" font-medium bg-amber-100 p-2 "> User detail section to receive Products </h1>

                <article className=" flex justify-around items-center p-10">

                    <form className="  bg-pink-200 p-5 h-60 w-150 border-1 rounded-2xl " onSubmit={handlesubmit}> 

                        <label htmlFor=" "> Name </label>
                        <input className="border-1 w-100 p-[2px] " type="text" name="name" onChange={handleInput} /> <br /> <br />

                        <label htmlFor=" "> Email </label>
                        <input className="border-1 w-100 p-[2px] " type="text" name="email" onChange={handleInput} />  <br /> <br />

                        <label htmlFor=" "> Address </label>
                        <input className="border-1 w-100 p-[2px] " type="text" name="address" onChange={handleInput} />  <br /> <br />

                        <input className=" border-1 border-blue-500 bg-blue-500 text-white font-bold p-1 rounded-[10px]" type="submit" /> 

                        <ToastContainer theme="dark" />
                    </form>


                    <article className=" bg-blue-200 h-50 w-100 border-1 m-1 p-5 rounded-2xl ">
                        <p> total no of items ordered : {info.tq} </p>
                        <p> Total Amount : {info.tp}  </p> <br />
                        <button className=" border-1 border-blue-500 bg-blue-500 text-white font-bold p-1 rounded-[10px]"> payment</button>
                    </article>

                </article>

            </section>
        </>
    )
}
export default Address


//    to run json file 1st we need to go into that  folder where that file is kept 

//  inside componenet   using   cd ..   cd .. 