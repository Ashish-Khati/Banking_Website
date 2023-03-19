import {useEffect, useState} from "react";
import axios from "axios";
import { Table,Action,Nav,Contact } from "../components";
import {Link} from 'react-router-dom'
// import axios from "axios";

// const API = "https://jsonplaceholder.typicode.com/users";

const Customer = () => {
 
    const [users, setUsers] = useState([]);

    const getData =  async() => {
        const data=await axios.get('http://localhost:3000/user')
        setUsers(data)
    }


    useEffect(() => {
        getData();
    }, [])
    return <>

           <div  className=' bg-[url("./assets/employee.jpg")] md:bg-repeat bg-fixed bg-cover border border-black h-auto w-screen '>
           <Nav
           l1='action'
           l2='action'
           l3='customer'
           l4='contact'
           l5='contact'

           />
            <Action/>
            <div className="text-center my-10 flex items-center justify-between">
                <h1 className="ml-80">Customer Details</h1>
            <div className=" text-end mr-10 mt-5">  <button className='bg-green-400 '><Link to='/' className='text-white hover:text-white'>Back To Home</Link></button> </div>
            </div>
        <table id="customer" className=" pr-20  table-fixed border-separate w-screen ml-10  rounded-lg mb-40">
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
                    // console.log(curUser)
                    const {id, name, myaccount,balance} = curUser;
                    // const {street, city, zipcode} = curUser.address;

                    return (
                        <tr className="bg-gray-200" key={id}>
                        {/* <td className="p-3 text-sm text-gray-700">{id}</td> */}
                        <td className="p-3 text-sm  text-gray-700">{name}</td>
                        <td className="p-3 text-sm text-gray-700">{myaccount}</td>
                        <td className="p-3 text-sm text-gray-700">{balance}</td>
                        </tr>
                    )
                })}

          
            {/* <Table users={users}/> */}
            </tbody>
        </table>
        <Contact/>
           </div>
        
    </>
}


export default Customer