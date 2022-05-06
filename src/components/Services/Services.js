
import useServices from '../../CustomHooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // const [services, setServices] = useState([]);


    const [services,setServices]=useServices();

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'>Our products</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;