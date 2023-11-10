import { Link } from "react-router-dom";
import login from "..//assets/assets/images/login/login.jpg"

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" w-1/2 ">

                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onClick={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold  text-yellow-400 ">Login now!</h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="mt-6">Do not have an account?Then <Link to="/register"> <span className="text-yellow-400 font-semibold">Register here</span></Link> </p>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default Login;