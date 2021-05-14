import React from 'react';

function LoginForm() {
    return (
    <form className="text-center position-absolute"> 
    <img src="./dolphin-logo.jpeg" alt="logo" className="form-logo"/> 
    <div className="login-name">
    <h2>Log in to BDE</h2>
    <h6>using your BDE account</h6>
    </div>
    <form>
        <input type="email" placeholder="Email" className="email"></input>
        <div className="spaces"></div>
        <input type="password" placeholder="Password" className='password'></input>
     </form>
     <div className="little-space"></div>
     <form className="text-start">
         <input type="checkbox" className="checkbox"></input>
         <p className="checkbox">Remember me</p>
    </form>    
     <div className="little-space"></div>
     <button type="submit" class="btn btn-primary" id="button">Log in</button>
     <div className="little-space"></div>
     <a className="reminder" href="#">Already have an account? Log in</a>
     
</form>
    )
}

export default LoginForm

