import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
const DataForm = () => {
    const navigate = useNavigate();
    // name, email, dob, org
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [org, setOrg] = useState("");
    const [orgName, setOrgName] = useState("");


    const handleOrgName = (e) => {
      setOrgName(e.target.value);
    }

    const changeName = (e) => {
      setName(e.target.value);
    }

    const changeEmail = (e) => {
      setEmail(e.target.value);
    }

    const changeDate = (e) => {
      setDob(e.target.value);
    }

    const changeOrg = (e) => {
      setOrg(e.target.value);
    }

    const sendData = async(e) => {
      try {
        // console.log(name, email, dob, org);
        // const data = {
        //   name: name,
        //   email: email,
        //   dob: dob,
        //   org: org,
        //   orgName: orgName
        // }
  
        // const response = await axios.post('http://localhost:5000/api/v1/visitor/add', data);
        // console.log(response);
        navigate("/");
      } catch (error) {
        console.log(error);        
      }

    }

    return (
    <div className='flex justify-center p-32 h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-300'>
      <div className='block w-1/2 h-max p-10 bg-white text-gray-400 border-2 border-zinc-200 shadow-md shadow-blue-200'>
        <h1 className='text-center font-extrabold text-5xl text-blue-500 p-5'>Registration Form </h1>
        
        {/* <label htmlFor="">Name</label> */}
        <input className='border-blue-800 border-b-2 w-full h-10 focus:border-emerald-500 focus:outline-none' placeholder='Name' type="text" name="" id="" onChange={changeName} />
        
        {/* <label htmlFor="">Email< /label> */}
        <input className='border-blue-800 border-b-2 w-full h-10 focus:border-emerald-500 focus:outline-none' placeholder='Email' type="email" name="" id="" onChange={changeEmail}/>
        
        {/* <label htmlFor="">Date of Birth</label> */}
        <input className='border-blue-800 border-b-2 w-full h-10 focus:border-emerald-500 focus:outline-none' type="date" name="" id="" placeholder='Date of Birth' onChange={changeDate}/>

        {/* <label>Organization</label> */}
        <select name="" id="" placeholder='Organization' className='border-blue-800 border-b-2 bg-white w-full h-10 focus:border-emerald-500 focus:outline-none' defaultValue="college" onChange={changeOrg}>
          <option value="college">College</option>
          <option value="company">Company</option>
          <option value="business">Business</option>
        </select>

        <input className='border-blue-800 border-b-2 w-full h-10 focus:border-emerald-500 focus:outline-none' placeholder='Name of College/Company/Business' type="email" name="" id="" onChange={handleOrgName}/>

        <button className='p-3 w-max text-white mt-3 bg-gradient-to-l from-cyan-500 to-blue-500 rounded-full hover:shadow-md hover:shadow-black font-semibold' onClick={sendData}>Create Account</button>
      </div>
    </div>
  )
}

export default DataForm
