import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="space-y-4">
                <h1 className="text-yellow-400 font-bold text-3xl text-center ">Our Services</h1>
                <p className=" text-center">
                    the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly believable.
                </p>

            </div>
            <div className="grid md:grid-cols-3 gap-3 mt-10">
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;