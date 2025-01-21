import React from 'react'
import './Wishlist.css'
import { favoriteContext } from '../../Context/FavoritesContext';
import { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions'
function index() {
  let {favorite,setFavorite}=useContext(favoriteContext)


  function handleDeleteFavorite(id){
      let filteredFavorite=favorite.filter(item=>item._id!==id)
      setFavorite(filteredFavorite)
  }
 
  return (
    <div>

      <section id='wishlist'>
    {favorite.length === 0 ?(
      <h2>Wishlist Empty...</h2>
    ) :(
      <div className="wishcards">
        {
             favorite.map(wish=>(
              <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={wish.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {wish.name}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight:'bold' }}>
                    {wish.price}$
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {wish.desc}
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={()=>handleDeleteFavorite(wish._id)} size="small" color="primary">
                  Unlist
                </Button>
              </CardActions>
            </Card>
            ))
        }
      </div>
    )}
      </section>
    </div>
  )
}

export default index
