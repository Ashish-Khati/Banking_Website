import {useEffect, useState} from "react";
import { Table } from "../components";
import axios from "axios";

// const API = "https://jsonplaceholder.typicode.com/users";

const Customer = () => {
 
    const [users, setUsers] = useState([]);

    const getData =  async() => {
        const data=await axios.get('http://localhost:3000/user')
        console.log("users===>>>",data )
        setUsers(data)
        console.log(users.data.data)
    }


    useEffect(() => {
        getData();
    }, [])
    return <>
 
        <table className="w-full">
            <thead className="bg-gray-50  border-b-2 border-gray-200">
            <tr>
                {/* <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">ID</th> */}
                <th className="p-3  w-24 text-sm font-semibold tracking-wide text-left">Name</th>
                <th className="p-3  w-24 text-sm font-semibold tracking-wide text-left">Account Number</th>
                <th className="p-3  w-24 text-sm font-semibold tracking-wide text-left">Balance</th>
            </tr>
            </thead>
            <tbody>
           
                {users && users?.data?.data.map((curUser) => {
                    console.log(curUser)
                    const {id, name, myaccount,balance} = curUser;
                    // const {street, city, zipcode} = curUser.address;

                    return (
                        <tr className="" key={id}>
                        {/* <td className="p-3 text-sm text-gray-700">{id}</td> */}
                        <td className="p-3 text-sm text-gray-700">{name}</td>
                        <td className="p-3 text-sm text-gray-700">{myaccount}</td>
                        <td className="p-3 text-sm text-gray-700">{balance}</td>
                        </tr>
                    )
                })}

          
            {/* <Table users={users}/> */}
            </tbody>
        </table>
        
    </>
}


export default Customer