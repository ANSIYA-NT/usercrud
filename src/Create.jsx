import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Create() {
  const [values,setValues] = useState({
    name:'',
    email:'',
    phone:''
  })
 const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err));
  }
  return (
    <div className='d-flex  w-100 vh-100 justify-content-center align-items-center bg-success'>
      <div className="w-50 border bg-warning shadow px-5 pt-3 pb-5 rounded">
        <h1 className='fw-bolder text-success fs-4'>ADD A USER</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className='fw-semibold'>Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e=>setValues({...values,name:e.target.value})} />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className='fw-semibold'>Email:</label>
            <input type="text" name='email' className='form-control' placeholder='Enter Email'
            onChange={e=>setValues({...values,email:e.target.value})} />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className='fw-semibold'>Phone:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone Number'
            onChange={e=>setValues({...values,phone:e.target.value})} />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  ) 
}

export default Create