
import { Link } from 'react-router-dom'
import im1 from '../assets/cloth/w1.png'
import im2 from '../assets/cloth/w2.png'
import im3 from '../assets/cloth/w3.png'
import im4 from '../assets/cloth/w4.png'
import im5 from '../assets/cloth/w5.png'
import im6 from '../assets/cloth/w6.png'
import { useDispatch } from 'react-redux'
import { additem } from './Cartslice'


function Women() {

  let ProductList = [
    { pid: 1, pname: "Peach printed t-shirt ", pimg: im1, pprice: 250.00 },

    { pid: 2, pname: "white t-shirt", pimg: im2, pprice: 222.00 },

    { pid: 3, pname: "green t-shirt", pimg: im3, pprice: 350.00 },

    { pid: 4, pname: "sky blue t-shirt", pimg: im4, pprice: 411.00 },

    { pid: 5, pname: "latest t-shirt", pimg: im5, pprice: 500.00 },

    { pid: 6, pname: "latest t-shirt", pimg: im6, pprice: 459.00 },

  ] 

  let dispath = useDispatch() 

  let handleCart = (e)=> {
    dispath(additem(e))
  }

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
          {
            ProductList.map((e) => (

              <div className=" h-105 w-70 hover:scale-105 hover:bg-amber-200 transform duration-300 ease-in-out ">
                <img className=" h-90 w-70 " src={e.pimg} alt="pic" />

                <p> {e.pname} </p>


                <h2 className=' flex justify-between p-1'>
                  <p className=' font-bold text-2xl'> ₹ {e.pprice} </p>

                  <button className=' p-1 bg-red-500 hover:bg-blue-400  text-white font-bold ' onClick={() => handleCart(e)}>Add to Cart</button>
                </h2>

              </div>

            ))
          }

        </article>

      </section>


    </>
  )
}

export default Women
