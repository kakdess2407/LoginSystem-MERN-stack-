import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) 
	{
		if (name === "" || email === "" || address === "" || number === "" || password === "") 
		{
			alert("Please Fill All The Fields..");
			window.location.reload();
		}
		else
		{
			event.preventDefault();
			axios.post('http://localhost:1000/signup', { name, address, number, email, password })
				.then(res => {
					navigate('/');
				})
				.catch(err => console.log(err));
			alert("Signup Success!")	
        }
    }

	return (
		<>
		<body style={{backgroundColor:"lightsteelblue" , height:"640px"}}>
			<div className="container" style={{width:"550px", height:"500px"}}>
				<div className="row text-center">
				<h1 className="text-dark bg-warning">Welcome To User Managment</h1><br/><br/>
					<h2 className="text-primary bg-success">Signup Form</h2>
					<div className="col-md-12 text-center mt-5" style={{backgroundColor:"goldenrod"}}>
						<form action="" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label for="exampleInputPassword1">Name</label>
								<input type="text" class="form-control"  onChange={e=>setName(e.target.value)} id="name" name="name" placeholder="Enter Name"/>
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1">Address</label>
								<input type="text" class="form-control"  onChange={e=>setAddress(e.target.value)} name="address" id="address" placeholder="Enter Address"/>								
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1">Number</label>
								<input type="number" class="form-control"  onChange={e=>setNumber(e.target.value)} name="number" id="number" placeholder="Enter Number"/>								
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1">Email</label>
								<input type="email" class="form-control"  onChange={e=>setEmail(e.target.value)} name="email" id="email" placeholder="Enter Mail"/>
							</div>
							<br/>
							<div className="mb-3">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" class="form-control"  onChange={e=>setPassword(e.target.value)} name="password" id="password" placeholder="Password"/>
							</div>
							<br></br>
							<button type="submit" class="btn btn-default border"><Link to="/">Login</Link></button>
							<button type="submit" class="btn btn-default border bg-light" style={{marginLeft:"20px"}}>Signup</button>
						</form>
					</div>
				</div>
			</div>
		</body>
		</>		
	);
}
export default Signup;
