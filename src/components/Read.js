import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [apiData,setApiData] = useState([]);
    

    useEffect(()=>{
        getData();
    },[])

    const handleDelete = (id) => {
        window.confirm( "Are you sure to delete the data");

        axios.delete(`https://65e14b83d3db23f7624ab5b7.mockapi.io/crud/${id}`)
        .then(() =>{
            getData();
        });
    }

    function setDataToStorage(id,name,age,email){
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("age",age);
        localStorage.setItem("email",email);
    }

    function getData(){
        axios.get('https://65e14b83d3db23f7624ab5b7.mockapi.io/crud')
        .then((response)=>{
            setApiData(response.data)
        })
    }


  return (
    <>
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="my-2 d-flex justify-content-end">
                <Link to='/create'>
                <button className='btn btn-primary'>Create New Data</button>
                </Link>
            </div>
            <table className='table table-bordered table-striped table-dark table-hover' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    apiData.map((item,index)=>{
                        return(
                            <Fragment key={index}>
                            <tr>
                                <th>{(item.id)}</th>
                                <th>{(item.e_name)}</th>
                                <th>{(item.e_age)}</th>
                                <th>{(item.e_email)}</th>
                                <th>
                                    <Link to='/edit'>
                                    <button onClick={()=> setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)} className='btn btn-primary'>Edit</button>
                                    </Link>
                                </th>
                                <th>
                                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                </th>
                            </tr>
                            </Fragment>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Read