import { useState, useContext } from 'react'
import "../pages/login.css"
import loginImg from "../assets/login.png"
import userImg from "../assets/user.png"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Login = () => {
  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
})

const {dispatch} = useContext(AuthContext);
const navigate = useNavigate();



const handleChange = (e) => {
    setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
}

const handleClick=async(e)=>{
  e.preventDefault();

  dispatch({type: 'LOGIN_START'});
  try{
    const res = await fetch(`${BASE_URL}/auth/login`,{
      method: 'post',
      headers: {
        "content-type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(credential)
    })

    const result = await res.json();
    if(!res.ok) alert(result.message)
    console.log(result.data);

    dispatch({type: "LOGIN_SUCCESS", payload: result.data});
    navigate('/');
    
  }catch(err){
    dispatch({type: "LOGIN_FAILURE", payload: err.message});

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
                <img src={loginImg} alt=''/>
              </div>

              <div className='login__form'>
                <div className='user'>
                <img src={userImg} alt=''/>
                </div>
                <h2>Login</h2>

                <form onSubmit={handleClick}>
                  <div className='form-group'>
                    <input type='text' placeholder='Email' required id='email' onChange={handleChange}/>
                  </div>
                  <div className='form-group'>
                    <input type='password' placeholder='Password' required id='password' style={{marginTop: '1rem'}} onChange={handleChange}/>
                  </div>
                  <button type='submit' className='btn btn-primary auth__btn' style={{marginTop: '1rem'}}>Login</button>
                </form>
                <p>Don't have an account ? <Link to="/register">Create</Link></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login