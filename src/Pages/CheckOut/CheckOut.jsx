import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id, price } = service;
    return (
        <div>
            <h2>{title}</h2>


            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="password" placeholder="Last Name" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">

                    <input type="submit" value="Order Confirm" className="btn  btn-warning" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;