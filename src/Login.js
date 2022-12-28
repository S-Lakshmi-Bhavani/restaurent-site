
import { Link } from 'react-router-dom'
function Login() {

    function test() {
        var em = document.getElementById('mail').value
        var pwd = document.getElementById('password').value
        if (em == "") {
            alert('email souldnot be empty ')
        } else if (pwd == '') {
            alert('pwd souldnot be empty ')
        } else {
            alert('thank you')
        }
    }
    // function inpwd(){
    //     var pwd=document.getElementById('password').value
    //      if(pwd==""){
    //      alert('email souldnot be empty ')
    //    }
    //  }

    function Pwdtest() {
        var p = document.getElementById("password")
        if (p.type == "password") {
            p.type = "text";
        }
        else {
            p.type = "password";
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 border border-dark rounded  text-light bg-dark p-5 mt-5 mb-5">
                        <form className='formcontrol'>
                            {/* <img src={loader} alt='***' style={{ width: '100px' }} /> */}
                            <h1 className="text-center text-primary fs-1"><b>LOG IN</b></h1><br />
                            <label for='email' className="form-label"> User Id</label>
                            <input className="form-control" id='mail' type="email" placeholder="Enter User id" required />
                            <label className="form-label"> Password</label>
                            <input className="form-control" id='password' type="password" placeholder="Enter Your Password" required />

                            <input type="checkbox" onClick={Pwdtest} /> showpassword <br />
                            <input className="btn btn-primary m-3" type="submit" onClick={test} value="submit" />
                            <input className="btn btn-primary m-3" type="reset" value="Reset" />
                        </form>
                        <Link className='text-light' to='/signup'>If u dont have account for sign up</Link>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </>
    )
}
export default Login