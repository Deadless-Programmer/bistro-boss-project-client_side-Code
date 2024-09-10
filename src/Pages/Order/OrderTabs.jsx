import React from 'react'
import OrderCard from '../../components/OrderCard/OrderCard'

const OrderTabs = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
           {
                items.map(food=><OrderCard item={food} key={food ._id}></OrderCard>)
            }
           </div>
  )
}

export default OrderTabs