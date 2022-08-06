import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { adminGetAllOrders } from '../../redux/order/orderSlice'

const OrderListPage = () => {
  const { adminGetAllOrdersRes, adminGetAllOrdersResIsLoading } = useSelector(
    (state) => state.order
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(adminGetAllOrders())
  }, [])

  console.log(adminGetAllOrdersRes)

  if (adminGetAllOrdersResIsLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>OrderList</h1>
      {adminGetAllOrdersRes?.allOrders?.map((order, index) => {
        return (
          <div key={index} className='border m-2 p-4'>
            <p className='text-xl'>
              Order id: <span className='font-bold'>{order._id}</span>
            </p>
            <p>User id:{order.user._id}</p>
            <p>Name:{order.user.name}</p>
            {/* <p>
              Address:{order.shippingAddress.address},
              {order.shippingAddress.city},{order.shippingAddress.country},
              {order.shippingAddress.postalCode}
            </p> */}
            <Link to={`${order._id}`}>
              <button className='bg-black text-white p-3 mt-2'>
                View more details
              </button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default OrderListPage