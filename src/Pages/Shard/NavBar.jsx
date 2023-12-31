import { Link } from "react-router-dom";
import logo from '../../assets/assets/logo.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from './../../Providers/AuthProvider';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log("User:", user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logout successful");
            })
            .catch(error => console.log(error))

    }
    const Links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/services">Services</Link></li>
        {user?.email ? (
            <>
                <li><Link to="/bookings">MyBookings</Link></li>
                <li><button onClick={handleLogOut}>Log Out</button></li>
            </>
        ) : (
            <li><Link to="/login">Login</Link></li>
        )}
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <Link to="/" className="rounded w-28 h-28">
                    <img src={logo} alt="" />
                    <h3 className=" text-xl font-semibold"><span className="text-yellow-500">Auto</span>RenewalHub</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="gap-2 flex">
                    <p className="text-2xl mt-3 "><AiOutlineSearch></AiOutlineSearch></p>
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;