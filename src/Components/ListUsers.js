import axios from "axios"
import { useEffect, useState } from "react"


const ListUsers=()=>{
    const [users,setUsers] = useState([])
   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .catch(error => console.log(error));
    },[])

    return(
        <div>
            <h2>List of Users :</h2>
            {
                users.map(el=><h3>{el.name}</h3>)
               
            }
        </div>
    )
}

export default ListUsers