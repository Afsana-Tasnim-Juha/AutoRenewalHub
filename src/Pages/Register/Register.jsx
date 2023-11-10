import { Link } from "react-router-dom";

import login from "../../assets/assets/images/login/login.jpg";
const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" w-1/2 ">

                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onClick={handleRegister} className="card-body">
                        <h1 className="text-3xl font-bold  text-yellow-400 ">Register now!</h1>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className="mt-6">Have an account?Then <Link to="/register"> <span className="text-yellow-400 font-semibold">Login here</span></Link> </p>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default Register;