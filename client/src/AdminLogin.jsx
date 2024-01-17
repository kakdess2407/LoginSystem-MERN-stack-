import React, { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
    const [login, setLogin] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:1000/Admin")
            .then(res => setLogin(res.data))
            .catch(err => console.log(err));
    }, []);

    function Authentication() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const isAdmin = login.some(data => email === data.email && password === data.password);
        if (isAdmin) {
			alert("Login Success!")
            navigate("/Admin");
        } else {
            alert("Invalid credentials");
        }
    }

	return (
		<>
		<body style={{backgroundColor:"lightsteelblue" , height:"640px"}}>
			<div className="container" style={{width:"450px", height:"500px"}}>
				<div className="row text-center"><br/>
					<h1 className="text-primary">Admin Login</h1>
					<div className="col-md-12 text-center mt-5" style={{backgroundColor:"goldenrod"}}>
						<form>
							<div className="mb-3">
								<label for="exampleInputPassword1">Email</label>
								<input type="email" class="form-control"  name="email" id="email" placeholder="Enter Mail"/>
								
							</div>
							<br/>
							<div className="mb-3">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" class="form-control"  name="password" id="password" placeholder="Password"/>
								
							</div>
							<br></br>
							<button type="submit" class="btn btn-default border" onClick={Authentication}>Login</button>
						</form>
					</div>
				</div>
			</div>
		</body>
		</>		
	);
}
export default AdminLogin;
