import React, { useState ,useEffect} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function Update() {
    const {id}=useParams()
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:1000/getLogin/"+id)
            .then(result => {console.log(result)
                setName(result.data.name)
                setAddress(result.data.address)
                setNumber(result.data.number)
                setEmail(result.data.email)
                setPassword(result.data.password)
            })
            .catch(err => console.log(err));
    }, []);

    const Update = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:1000/updateLogin/'+id, { name, address, number, email, password })
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    }

	function fun()
	{
		alert("Updated!")
	}
	return (
		<>
		<body style={{backgroundColor:"lightsteelblue" , height:"640px"}}>
			<div className="container" style={{width:"550px", height:"500px"}}>
				<div className="row text-center">
				<h1 className="text-dark bg-warning">Welcome To User Managment</h1><br/><br/>
					<h2 className="text-primary bg-success">Update Form</h2>
					<div className="col-md-12 text-center mt-5" style={{backgroundColor:"goldenrod"}}>
						<form action="" onSubmit={Update}>
							<div className="mb-3">
								<label for="exampleInputPassword1">Name</label>
								<input type="text" value={name} class="form-control"  onChange={e=>setName(e.target.value)} id="name" name="name" placeholder="Enter Name"/>
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1">Address</label>
								<input type="text" value={address} class="form-control"  onChange={e=>setAddress(e.target.value)} name="address" id="address" placeholder="Enter Address"/>								
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1">Number</label>
								<input type="number" value={number} class="form-control"  onChange={e=>setNumber(e.target.value)} name="number" id="number" placeholder="Enter Number"/>								
							</div>
							<div className="mb-3">
								<label for="exampleInputPassword1">Email</label>
								<input type="email" value={email} class="form-control"  onChange={e=>setEmail(e.target.value)} name="email" id="email" placeholder="Enter Mail"/>
							</div>
							<br/>
							<div className="mb-3">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" value={password} class="form-control"  onChange={e=>setPassword(e.target.value)} name="password" id="password" placeholder="Password"/>
							</div>
							<br></br>
							<button type="submit" class="btn btn-default border"><Link to="/">Login</Link></button>
							<button type="submit" onClick={fun} class="btn btn-default border bg-light" style={{marginLeft:"20px"}}>Update</button>
						</form>
					</div>
				</div>
			</div>
		</body>
		</>		
	);
}
export default Update;
