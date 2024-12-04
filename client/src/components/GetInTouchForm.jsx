import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GetInTouchForm = () => {
  
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [org, setOrg] = useState("college");
    const [orgName, setOrgName] = useState("");


    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handleMessage = (e) => {
        setMsg(e.target.value);
        console.log(msg);
    }
    const handleOrg = (e) => {
        setOrg(e.target.value);
        console.log(org);
    }
    const handleOrgName = (e) => {
        setOrgName(e.target.value);
        console.log(orgName);
    }

    const handleFormData = async(e) => {
        try {
            console.log(name, email, org);
            const data = {
              name: name,
              email: email,
              msg: msg,
              org: org,
              orgName: orgName
            }

            const response = await axios.post('http://localhost:5000/api/v1/visitor/add', data);
            console.log(response);
            // navigate("/");
            console.log("Message Sent");
          } catch (error) {
            console.log(error);        
          }
    }

    const sendData = async(e) => {
        try {
          console.log(name, email, msg, org);
          const data = {
            name: name,
            email: email,
            msg: msg,
            org: org,
            orgName: orgName
          }
    
          const response = await axios.post('http://localhost:5000/api/v1/visitor/add', data);
          console.log(response);
        } catch (error) {
          console.log(error.message);        
        }
  
      }
  
      // from-indigo-500 to-yellow-100

  return (
    <div className='bg-gradient-to-bl bg-white grid grid-cols-2 items-center p-10'>
        <div className='p-5'>

            <div className='font-extrabold text-5xl mb-10 text-indigo-800'>
                Get In Touch  
            </div>

            <form className="flex flex-col w-3/4 mt-2 ">
                <input onChange={handleName} className="p-2 bg-blue-100 text-slate-500 placeholder-slate-500 rounded-xl mb-2 focus:outline-none active:translate-y-1" type="text" placeholder='Full Name'/>
                <input onChange={handleEmail} className="p-2 bg-blue-100 text-slate-500 placeholder-slate-500 rounded-xl mb-2 focus:outline-none active:translate-y-1" type="email" placeholder='Email Address'/>
                <textarea onChange={handleMessage} className='p-2 bg-blue-100 text-slate-500 placeholder-slate-500 rounded-xl mb-2 focus:outline-none active:translate-y-1' rows="4" name="" id="" placeholder='Message'></textarea>
                {/* <input className="p-2 bg-blue-100 text-slate-500 placeholder-slate-500 rounded-xl mb-2 focus:outline-none active:translate-y-1" type="date" /> */}
                <select onChange={handleOrg} defaultValue='college' className="p-2 bg-blue-100 text-slate-500 placeholder-slate-500 rounded-xl mb-2 focus:outline-none active:translate-y-1" type="email" placeholder='Email Address'>
                    <option value="college">College</option>
                    <option value="business">Business</option>
                    <option value="company">Company</option>
                </select>
                <input onChange={handleOrgName} className="p-2 bg-blue-100 text-slate-500 placeholder-slate-500 rounded-xl mb-2 focus:outline-none active:translate-y-1" type="text" placeholder='Name of Organization'/>
                <button onClick={sendData} className='p-2 bg-purple-400 text-xl text-white font-mono rounded-3xl active:translate-y-2 hover:bg-violet-500'>Submit</button>
            </form>
        </div>
        <div>
            <img src="https://vidyanchalschool.com/wp-content/uploads/2022/07/email.gif" alt="" srcset="" />
        </div>
    </div>
  )
}

export default GetInTouchForm
