/**
 * 	REST API URI 
		- Create : POST
		- Read : GET
		- Update : PUT
		- Delete : DELETE
 */
import { useEffect, useState } from "react";
export default function useFetch(url: string){


    const [data,setData] = useState([]);

    useEffect(()=>{

        fetch(url)
        .then(res =>{
            return res.json()
        }).then(jData =>{
            setData(jData);
        })
    },[url]);    

    return data;

}