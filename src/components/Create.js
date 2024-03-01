import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Create() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');

    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();


        if (!name.trim() || !age.trim() || !email.trim()) {
            alert('Please fill data in all fields');
            return;
        }

        axios.post('https://65e14b83d3db23f7624ab5b7.mockapi.io/crud',{
            e_name : name,
            e_age : age,
            e_email : email
        }).then(()=>{
            navigate('/')
        })
    }


  return (
    <div className='row' style={{marginLeft:450}}>
        <div className="col-md-6">
        <div className="my-2 d-flex ">
                <Link to='/'>
                <button className='btn btn-primary px-4'>Read Data</button>
                </Link>
            </div>
            <div className="heading bg-secondary p-4 rounded">
                <h2>Create Form</h2>
            </div>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Name </label>
                    <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Age </label>
                    <input type="text" className="form-control" onChange={(e)=>{setAge(e.target.value)}} placeholder='Age'/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email </label>
                    <input type="text" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                </div>
                <br/>
                <div className="d-grid">
                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create