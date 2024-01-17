import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [login, setLogin] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:1000/")
            .then(res => setLogin(res.data))
            .catch(err => console.log(err));
    }, []);

    function Authentication(event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        event.preventDefault();

        const matchedUser = login.find(data => data.email === email  && data.password === password && !data.deleted);

        if (matchedUser) {
			if (email === "" || password === "") {
				alert("Please Fill All The Fields..");
				window.location.reload();
			}
			else{
				alert("Login Success!")
            	navigate(`/Userinfo/${matchedUser._id}`);
			}
        } else {
            alert("Please Enter Correct Data");
        }
    }
	return (
		<>
		<body style={{backgroundColor:"lightsteelblue" , height:"640px"}}>
			<div className="container" style={{width:"550px", height:"500px"}}>
				<div className="row text-center">
					<h1 className="text-dark bg-warning">Welcome To User Managment</h1><br/><br/>
					<h2 className="text-primary bg-success">Signin Form</h2>
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
							<button type="submit" class="btn btn-default border bg-light" style={{marginLeft:"20px"}}><Link to="/Signup">Signup</Link></button>
						</form>
					</div>
				</div>
			</div>
		</body>
		</>		
	);
}
export default Login;
