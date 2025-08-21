import axios from "axios";
import { useEffect, useState } from "react";

let Apidata = () => {

    let [api, setApi] = useState([])  // 1st show person detail in form 

    let [showfrm, setShowfrm] = useState(false)  // 3rd show data to edit 

    let [editdata, setEditdata] = useState({})  // 4th  edit data 

    function handleEdit(e) {
        let { name, value } = e.target  // 5th  handle the edited data 
        setEditdata({ ...editdata, [name]: value })
    }

    function finalEdit(e) {
        e.preventDefault()
        axios.put(`http://localhost:3000/persondata/${editdata.id}`, editdata)  // 6th last edit submit
            .then(() => alert("data updated...!"))
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/persondata/${id}`) // 2nd delete
            .then(() => alert("data Deleted...!"))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/persondata')  // 1st axios to show personal detail in table form
            .then((res) => setApi(res.data))
    }, [handleDelete])

    return (
        <>
            <section className=" h-100  bg-[url(./assets/cloth/addressbg.png)] ">

                <div className=" bg-amber-100 font-medium p-1"> Details of people who Shopped </div> <hr />

                <article className=" flex justify-around ">
                    <table className=" m-10">
                        <tr className=" bg-gray-300">
                            <th className=" border-1 p-1" > ID</th>
                            <th className=" border-1 p-1 w-30" > NAME</th>
                            <th className=" border-1 p-1 w-55" > EMAIL</th>
                            <th className=" border-1 p-1 w-80" > ADDRESS</th>
                            <th className=" border-1 p-1" > DELETE </th>
                            <th className=" border-1 p-1" > EDIT </th>
                        </tr>
                        {
                            api.map((e) =>
                                <tr className=" bg-gray-100">
                                    <td className=" border-1 p-1" > {e.id}</td>
                                    <td className=" border-1 p-1" > {e.name}</td>
                                    <td className=" border-1 p-1" > {e.email}</td>
                                    <td className=" border-1 p-1" > {e.address}</td>

                                    <td className=" border-1 p-1" > <button className="bg-yellow-100" onClick={() => handleDelete(e.id)}>delete</button></td>

                                    <td className=" border-1 p-1" > <button onClick={() => (setShowfrm(true), setEditdata(e))}>edit</button></td>

                                </tr>
                            )
                        }
                    </table>

                    <hr />
                    {showfrm &&
                        <form className=" border-1 w-120 m-10 p-2 bg-blue-50" onSubmit={finalEdit}>

                            <label htmlFor="">Id</label> &ensp;
                            <input className="border-1 w-70 p-[2px] m-1 " type="text" name="id" value={editdata.id} onChange={handleEdit} hidden /> <br />

                            <label htmlFor="">Name</label> &ensp;
                            <input className="border-1 w-70 p-[2px] m-1 " type="text" name="name" value={editdata.name} onChange={handleEdit} /> <br />

                            <label htmlFor="">Email</label> &ensp;
                            <input className="border-1 w-70 p-[2px] m-1 " type="text" name="email" value={editdata.email} onChange={handleEdit} /> <br />

                            <label htmlFor="">Address</label> &ensp;
                            <input className="border-1 w-70 p-[2px] m-1 " type="text" name="address" value={editdata.address} onChange={handleEdit} /> <br />

                            <input className="bg-blue-300 p-1 rounded-[5px]" type="submit" />

                        </form>}
                </article>

            </section>


        </>
    )

}

export default Apidata

// json-server --watch 

