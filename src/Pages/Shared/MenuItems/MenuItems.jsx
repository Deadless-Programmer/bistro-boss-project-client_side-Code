import React from 'react';

const MenuItems = ({item}) => {

    const {image,price, name, recipe } = item;
    console.log(price)
    return (
        <div className='flex space-x-4 mb-10'>
            <img style={{borderRadius: "0 250px 250px 250px"}} className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItems;