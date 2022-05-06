
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // const [services, setServices] = useState([]);

    const services=[
        // id, name, img, description, price
        {id:1,name:'HP',img:'https://images.unsplash.com/photo-1623645481161-0d8160281cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80',description:'Wildlife photography is a genre of photography that records the life of animals in their natural settings, like in a forest or underwater. ', price:'$150'},
        {id:3,name:'Asus',img:'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',description:'You’ve worked very hard planning for your “Big Day”. You almost want everything to go flawless. There will be so much happening that day.', price:'$200'},
        {id:2,name:'Lenovo',img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',description:'Fashion photography is a genre of photography which is devoted to displaying clothing and other fashion items.', price:'$150'}
    ]

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> My Services</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service.id}
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