
import { useLoaderData } from 'react-router-dom';

const BookService = () => {

    const bookService = useLoaderData();
    const { title, _id, price } = bookService;
    return (
        <div>
            <h2>{title}</h2>


            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" placeholder="Service Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="password" placeholder="Service Price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" placeholder="Text here" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="password" placeholder="Service Type" className="input input-bordered" required />

                    </div>
                </div>
                <textarea className="textarea textarea-bordered mt-4" placeholder="Product Description"></textarea>
                <div className="form-control mt-6">

                    <input type="submit" value="Submit" className="btn  btn-warning" />
                </div>
            </form>
        </div>
    );
};

export default BookService;