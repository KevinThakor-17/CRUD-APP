import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    },[])
    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put(`https://65e14b83d3db23f7624ab5b7.mockapi.io/crud/${id}`,{
            e_name : name,
            e_age : age,
            e_email : email
        }).then(()=>{
            navigate('/');
        }).catch((error)=>{
            console.log(error);
        })

    }


  return (
    <div>
        <div className='row' style={{marginLeft:450}}>
        <div className="col-md-6">
        <div className="my-2 d-flex ">
                <Link to='/'>
                <button className='btn btn-primary px-4'>Read Data</button>
                </Link>
            </div>
            <div className="heading bg-secondary p-4 rounded">
                <h2>Update Form</h2>
            </div>
            <br/>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label htmlFor="">Name </label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Age </label>
                    <input type="text" className="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='Age'/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email </label>
                    <input type="text" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                </div>
                <br/>
                <div className="d-grid">
                    <button className='btn btn-success' type='submit'>Update</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Edit