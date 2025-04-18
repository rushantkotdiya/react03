
import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from './Header'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Login=()=> {
return (
<>
<Header />
<Navbar />
<Container>
<Row>
<div className='col-md-5 p-5'>
<h3>Create Account</h3>
<p>Create account using firebase This is a google cloud services i.e used to stored data on google cloud and it is also used to authenticate multiple users</p>

</div>
<div className='col-md-7 p-5'>
<h2>Login Form</h2>
<form>
<div className='form-group mt-2'>
<input type='text' placeholder='Email *' className='form-control' />    
</div>
<div className='form-group mt-2'>
<input type='password' placeholder='Password *' className='form-control' />    
</div>


<div className='form-group mt-2'>
<input type='submit' placeholder='Email *' value="SignIn" className='btn btn-sm btn-primary text-white' />    
</div>


<div className='form-group mt-2'>
<b>don't have and account ?<Link to='/register'> Create account</Link></b>    
</div>
</form>
</div>
</Row>
</Container>
</>
)
}
export default Login
