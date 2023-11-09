import person from "../../assets/assets/images/about_us/person.jpg"
import parts1 from "../../assets/assets/images/about_us/parts1.jpg"
import parts from "../../assets/assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">

                <div className="lg:w-1/2 space-y-5 p-4">
                    <h3 className="text-yellow-400 text-lg font-bold ">About Us</h3>
                    <h1 className="text-5xl font-bold"> Discover Excellence in Car Care with Our Expert Servicing Solutions!</h1>
                    <p className="py-6">
                        Elevate your driving experience with our meticulous car servicing, where quality meets affordability. Trust us to keep your vehicle in peak condition for the road ahead.</p>
                    <button className="btn btn-outline btn-warning">Get More Info</button>
                </div>

                <div className=" lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute right-5 top-1/2" />
                    <img src={parts1} className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute left-5 -bottom-1/2" />
                </div>
            </div>
        </div>
    );
};

export default About;