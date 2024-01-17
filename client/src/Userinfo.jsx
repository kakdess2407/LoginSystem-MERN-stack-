import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Userinfo() {
    const { id } = useParams();
	//console.log(id)
	const [login, setLogin] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1000/")
            .then(res => setLogin(res.data))
            .catch(err => console.log(err));
    }, []);

	function fun()
	{
		alert("Logout Success!")
	}

	return (
		<>
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<div className="navbar-header">
					<Link className="navbar-brand" to="#">UserInformation</Link>
					</div>
					<ul className="nav navbar-nav">
					<li className="active"><Link to="/Userinfo">My Information</Link></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
					<li><Link to="/AdminLogin"><span className="glyphicon glyphicon-user"></span>Admin</Link></li>
					<li><Link to={`/Update/${id}`}><span className="glyphicon glyphicon-user"></span>Update</Link></li>
					<li><Link to="/" onClick={fun}><span className="glyphicon glyphicon-log-in"></span>Sign Out</Link></li>
					</ul>
				</div>
			</nav>
			<br></br>
			
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="card bg-info">
							<div className="card-header text-center bg-danger">
								<h2>Welcome Back</h2>
							</div>
							<div className="card-body text-center">
							{
                                login.map((data, i)=>(
									id==data._id &&
									<div key={i}>
										<h3>Name : {data.name}</h3>
										<h3>Address : {data.address}</h3>
										<h3>Number : {data.number}</h3>
										<h3>Email : {data.email}</h3>
									</div>
                                ))
                            }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>		
	);
}
export default Userinfo;
