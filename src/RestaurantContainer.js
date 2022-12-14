import { useState, useEffect } from 'react';
import Restaurant from './Restaurant'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Navbar } from 'react-bootstrap';

function Restaurants( { setRestaurants, restaurants } ) {

   
    const [restaurantFilter, setRestaurantFilter] = ('');

    function getRestaurants(){
        fetch(`http://localhost:9292/restaurants`)
        .then((res)=>res.json())
        .then((restaurantData) => setRestaurants(restaurantData))
    }

    
    
    useEffect(getRestaurants,[])
    // console.log(restaurants)

    const renderRestaurants = restaurants.map((restaurant) => {
        return(
            <Col  xs={3} className="text-dark " key={restaurant.id}> 
                <Restaurant className="xs-mt-5 p-5" restaurant={restaurant}  />
            </Col>
        )
    }) 

    return(
        <div className="text-light p-5" style={{marginTop: "170px"}}>
            <Row className="bg-dark">
                {renderRestaurants}
            </Row>
        </div>
    )
}

export default Restaurants;