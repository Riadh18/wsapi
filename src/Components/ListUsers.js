import axios from "axios"
import { useEffect, useState } from "react"


const ListUsers=()=>{
    const [users] = useState([])
   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    },[])

    return(
        <div>
            <h2>List of Users :</h2>
            {
                users.map(el=>`${el.id}` , <h3>{el.name}</h3>)
               
            }
        </div>
    )
}

export default ListUsers