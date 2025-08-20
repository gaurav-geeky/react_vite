import axios from "axios";
import { useEffect, useState } from "react";

let Apidata = () => {

    let [api, setApi] = useState([])  // 1st show person detail in form

    useEffect(() => {
        axios.get('http://localhost:3000/persondata')
            .then((res) => setApi(res.data))
    }, [])

    return (
        <>
            <section>
                <div className=" bg-amber-100 font-medium p-1"> Details of people who Shopped </div> <hr /> 

                <table  border="1" text-align="center">
                    <tr>
                        <th className=" border-1 p-1" > ID</th>
                        <th className=" border-1 p-1" > NAME</th>
                        <th className=" border-1 p-1" > EMAIL</th>
                        <th className=" border-1 p-1" > ADDRESS</th>
                    </tr>
                    {
                        api.map((e) =>
                            <tr>
                                <td className=" border-1 p-1" > {e.id}</td>
                                <td className=" border-1 p-1" > {e.name}</td>
                                <td className=" border-1 p-1" > {e.email}</td>
                                <td className=" border-1 p-1" > {e.address}</td>
                            </tr>
                        )
                    }
                </table>

            </section>


        </>
    )

}

export default Apidata  

// json-server --watch 

