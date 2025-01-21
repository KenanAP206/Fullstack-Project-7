import React, { useEffect, useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useParams } from 'react-router';
import axios from 'axios';

import './Details.css'


function Index() {
  const {id} = useParams()
  const [product,SetProduct]=useState(null)



  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then((res)=>{
      SetProduct(res.data.data )
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
  },[id])

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <section id='details'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="furniture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {product.desc}
           <h2>{product.price}$</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </section>
    </div>
  )
}

export default Index
