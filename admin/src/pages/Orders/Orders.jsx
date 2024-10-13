import React, { useState, useEffect } from 'react'
import './Orders.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])


  return (
    <div></div>
  )
}

export default Orders