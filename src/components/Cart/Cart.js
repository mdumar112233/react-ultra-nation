import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((total, country)=> total + country.population, 0);
    // let  totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation += country.population;
    // }
    return (
        <div>
            <h3>this is cart {cart.length}</h3>
            <p>total population {totalPopulation}</p>
        </div>
    );
};

export default Cart;