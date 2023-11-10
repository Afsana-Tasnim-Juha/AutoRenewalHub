import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-yellow-400 font-semibold">Price:{price}</p>
                <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-warning">Book Now</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;