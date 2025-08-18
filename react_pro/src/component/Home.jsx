
import im1 from '../assets/tshirt/tsh1.png'
import im2 from '../assets/tshirt/tsh2.png'
import im3 from '../assets/tshirt/tsh3.png'
import im4 from '../assets/tshirt/tsh4.png'
import im5 from '../assets/tshirt/tsh5.png'
import im6 from '../assets/tshirt/tsh6.png'
import im7 from '../assets/tshirt/tsh7.png'
import im8 from '../assets/tshirt/tsh8.png'

import { additem } from './Cartslice'
import { useDispatch } from 'react-redux'


function Home() {

  let ProductList = [
    { pid: 1, pname: "Reebok blue t-shirt", pimg: im1, pprice: 459.00 },

    { pid: 2, pname: "Monte Carlo men t-shirt", pimg: im2, pprice: 555.00 },

    { pid: 3, pname: "Men Puma slim fit t-shirt", pimg: im3, pprice: 653.00 },

    { pid: 4, pname: "Nike t-shirt", pimg: im4, pprice: 250.00 },

    { pid: 5, pname: "H&M t-shirt", pimg: im5, pprice: 322.00 },

    { pid: 6, pname: "Tommy Hilfiger Polyester t-shirt", pimg: im6, pprice: 459.00 },

    { pid: 7, pname: "Adidas t-shirt", pimg: im7, pprice: 329.00 },

    { pid: 8, pname: "Reebok t-shirt", pimg: im8, pprice: 299.00 },
  ]

  let dispath = useDispatch()

  let handleCart = (e) => {
    dispath(additem(e))

  }


  return (
    <>
      <section className=' w-full h-auto   '>

        <article>

          <div className='text-center flex flex-col items-center border-1 p-4'>
            <p className=' hover:bg-yellow-200  text-5xl font-bold '> Outfit </p>
            <p className='text-2xl bg-green-200 w-100 '> There's One for Everyone </p>
          </div>

          <div className='flex justify-evenly items-center border-1 p-2'>
            <img className=' h-110 w-auto '
              src="women.png" alt="pic" />
            <img className=' h-110 w-auto ' src="new cloth.png" alt="pic" />
            <img className=' h-110 w-auto ' src="men.png" alt="pic" />
          </div>

        </article>

        <article className=" w-full h-auto  pt-4 pb-4">

          <p className="p-4 text-3xl text-center font-bold"> Our latest t-shirt collections </p>

          <div className=" grid grid-cols-4 place-items-center gap-3 gap-y-6  ">
            {
              ProductList.map((e) => (

                <div className=" h-125 w-80 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out ">
                  <img className=" h-auto w-80 " src={e.pimg} alt="pic" />

                  <p> {e.pname} </p>

                  <h2 className=' flex justify-between p-1'>

                    <p className=' font-bold text-2xl'> ₹ {e.pprice} </p>

                    <button className=' p-1 bg-red-500 hover:bg-blue-400  text-white font-bold ' onClick={() => handleCart(e)}>Add to Cart</button>
                  </h2>

                </div>

              ))
            }
          </div>

        </article>

        {/*  brand section  */}  

        <article className=" w-full h-auto pt-4 pb-4  bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 ">
          <p className="p-4 text-3xl text-center font-bold"> Famous clothing brands </p>

          <div className=" flex justify-around items-center  ">
            <p className="  "> <img className=" h-auto w-50 rounded-full  " src="../cloth/b1.png" alt="pic" />  </p>
            <p className="  "> <img className=" h-auto w-50 rounded-full  " src="../cloth/b2.png" alt="pic" />  </p>
            <p className="  "> <img className=" h-auto w-50 rounded-full  " src="../cloth/b3.png" alt="pic" />  </p>
            <p className="  "> <img className=" h-auto w-50 rounded-full  " src="../cloth/b4.png" alt="pic" />  </p>
            <p className="  "> <img className=" h-auto w-50 rounded-full  " src="../cloth/b5.png" alt="pic" />  </p>
          </div>

        </article>

      </section>



    </>
  )
}
export default Home





//               https://www.wix.com/website-template/view/html/2936?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store%2Ffashion-clothing&tpClick=view_button&esi=ec8897f2-1ffe-4f52-9a41-1c9e197c94a6#






