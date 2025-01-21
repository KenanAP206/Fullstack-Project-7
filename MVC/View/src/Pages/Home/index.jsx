import React from 'react'
import Hero from '../../Components/Main/Hero/Hero'
import Podcasts from '../../Components/Main/Podcasts'
import Guests from '../../Components/Main/Guests'
import Products from '../../Components/Main/Products'
import { Helmet } from 'react-helmet'; 

function index() {
  return (
    <div>
       <Helmet>
        <title>Home</title> 
        <meta name="description" content="Welcometo the homepage." /> 
      </Helmet>
    <Hero/>
    <Podcasts/>
    <Products/>
    <Guests/>
    </div>
  )
}

export default index
