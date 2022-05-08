import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Contact from '../Extra/Extra';
import Extra2 from '../Extra/Extra2';
import Services from '../Services/Services';

const Home = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();
  const navigateSeemore = event => {
      navigate('/services');
  }
  const navigateManage = event => {
      navigate('/manageservice');
  }
    
    return (
        <div>
                   <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hello laptop!</h3>
                    <p>Your dream laptop come true at a reasonable price</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Why us?</h3>
                    <p className='text-dark'>We have the best collection of nearly all the laptops in bd</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src='https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=907&q=80'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Still confused about choosing?</h3>
                    <p className='text-dark'>
                    We know what you need and how much you need to fulfil your dream. Pay us a visit and you'll get all your needs
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Services val='six'></Services>
            <Button className='mt-1 mb-3' variant="success"  size="lg" onClick={()=>navigateSeemore()}>Show all products</Button>
            <Button className='mt-1 mb-3 mx-3' variant="success"  size="lg" onClick={()=>navigateManage()}>Manage Products</Button>
            <hr className='w-75 mx-auto'/>
        <Extra2></Extra2>
        <Contact></Contact>
        
        </div>
    );
};

export default Home;