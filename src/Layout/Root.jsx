import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shard/Footer";
import NavBar from "../Pages/Shard/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;