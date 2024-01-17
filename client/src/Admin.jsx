import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
    const [login, setLogin] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1000/')
            .then(res => {
                const activeLogin = res.data.filter(record => !record.deleted);
                setLogin(activeLogin);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSoftDelete = (id) => {
        axios.put(`http://localhost:1000/deleteLogin/${id}`)
            .then(res => {
                console.log(res);
                const updatedLogin = login.map(record =>
                    record._id === id ? { ...record, deleted: true } : record
                );
                setLogin(updatedLogin);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };


    // useEffect(() => {
    //     axios.get("http://localhost:1000/")
    //         .then(res => setLogin(res.data))
    //         .catch(err => console.log(err));
    // }, []);


    // const handleDelete = (id) =>{
    //     axios.delete("http://localhost:1000/deleteLogin/"+id)
    //     .then(res=>{console.log(res)
    //         window.location.reload();
    //     })
    //     .catch(err=>console.log(err))
    // }

    function fun()
    {
        alert("Logout Success!")
    }
    function fun1()
    {
        alert("Home Page!")
    }

	return (
		<>
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
					<li className="active"><Link to="/Admin">Admin</Link></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
					<li><Link to="/" onClick={fun1}><span className="glyphicon glyphicon-log-in"></span>Home</Link></li>
					<li><Link to="/AdminLogin" onClick={fun}><span className="glyphicon glyphicon-log-in"></span>Sign Out</Link></li>
					</ul>
				</div>
			</nav>
            <h2 className="text-center bg-danger" style={{marginTop:"-20px"}}>Welcome Back Admin</h2>

            <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
                <br/><h2 className="text-center text-danger"><u className="bg-success">User List</u></h2><br/>
                <div className="w-50 bg-primary rounded">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Number</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                login.map((data, i)=>(
                                    <tr key={i}> 
                                        <td>{data._id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.address}</td>
                                        <td>{data.number}</td>
                                        <td>{data.email}</td>
                                        <td><button className="btn btn-danger" onClick={() => handleSoftDelete(data._id)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
		</>		
	);
}
export default Admin;
