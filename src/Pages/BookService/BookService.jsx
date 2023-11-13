
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {

    const bookService = useLoaderData();
    const { title, _id, price, img } = bookService;
    const { user } = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            CustomerName: name,
            img,
            date,
            email,
            service: title,

            service_id: _id,
            price: price,

        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })



    }
    return (
        <div>
            <h2 className='text-center text-3xl'><span className='font-bold'>Service Name:</span>{title}</h2>


            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="" defaultValue={'$' + price} className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />

                    </div>
                </div>

                <div className="form-control mt-6">

                    <input type="submit" value="Submit" className="btn  btn-warning" />
                </div>
            </form>
        </div>
    );
};

export default BookService;