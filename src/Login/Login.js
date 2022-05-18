import './loginrwo.scss'
import Mockup from '../imgs/Mockup.png'


const Login = () => {
  return (
    <div className='login'>
      <div className="topPart">
        <div className="headerImg">
          <img src={Mockup} alt="img" />
        </div>

      </div>
      <div className='bottomPart'>
        <div className="loginForm">
          <div className="header">Login</div>
          <form className='forms'>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' placeholder='john@example@gmail.com' />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' placeholder='At least 8 characters' />
          </form>
          <div className="terms">
            <input type="radio" />
            <div> By creating an account, you agree to the <a href="#">Terms & Conditions.</a> </div>
          </div>

          <button className='create'>Create an Account</button>
        </div>
      </div>

    </div>

  )
}

export default Login