import React, { useState } from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '50px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div>
            {/* { props.country.map(country => <h4>{country.name}</h4>} */}
            {/* <h5>added country: {handleAddCountry.length}</h5> */}
            <h4>{name}</h4>
            <h4>{population}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h4>{region}</h4>
            <button onClick={() => handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;