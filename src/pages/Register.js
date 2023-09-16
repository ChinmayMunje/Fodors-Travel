import "../pages/login.css"
import registerImg from "../assets/register.png"
import userImg from "../assets/user.png"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [credential, setCredential] = useState({
    userName:undefined,
    email: undefined,
    password: undefined,
})

const {dispatch} = useContext(AuthContext);
const navigate = useNavigate();

const handleChange = (e) => {
    setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
}

const handleClick= async (e) => {
  e.preventDefault();

  try{
    const res = await fetch(`${BASE_URL}/auth/register`,{
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credential)
    })

    const result = await res.json();

    if(!res.ok) alert(result.message)

    dispatch({type: "REGISTER_SUCCESS"})
    navigate('/login')
  }catch(err){
    alert(err.message);
  }
}


  return (
    <>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__Img'>
                <img src={registerImg} alt=''/>
              </div>

              <div className='login__form'>
                <div className='user'>
                <img src={userImg} alt=''/>
                </div>
                <h2>Register</h2>

                <form onSubmit={handleClick}>
                <div className='form-group'>
                    <input type='text' placeholder='UserName' required id='userName' onChange={handleChange}/>
                  </div>
                  <div className='form-group'>
                    <input type='text' placeholder='Email' required id='email' style={{marginTop: '1rem'}} onChange={handleChange}/>
                  </div>
                  <div className='form-group'>
                    <input type='password' placeholder='Password' required id='password' style={{marginTop: '1rem'}} onChange={handleChange}/>
                  </div>
                  <button type='submit' className='btn btn-primary auth__btn' style={{marginTop: '1rem'}}>Create an Account</button>
                </form>
                <p>Already have an account ? <Link to="/login">Login</Link></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register