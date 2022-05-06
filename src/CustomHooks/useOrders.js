import axios from "axios";
import { useEffect, useState } from "react";

const useOrders = user => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // Way 1
    // fetch('https://boiling-plateau-02510.herokuapp.com/order')
    // .then(res => res.json())
    // .then(data => setOrders(data));
    // Way 2
    const getOrders = async () =>{
        const email=user.email
        console.log('hello',user,localStorage.getItem('accesstoken'))
        const url = `https://boiling-plateau-02510.herokuapp.com/order?email=${email}`
        const {data}= await axios.get(url,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('accesstoken')}`
            
          }
          
        })
        setOrders(data)
    }
    getOrders()
  }, []);
  return [orders, setOrders];
};
export default useOrders;
