import React, { useState } from 'react'
import './Products.css'
import { productContext } from '../../../Context/ProductContext';
import { NavLink } from 'react-router'
import { FaCircleInfo } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { useContext } from 'react';
import {favoriteContext} from '../../../Context/FavoritesContext'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';
function index() {
    let { products, loading } = useContext(productContext)
    let [search, setSearch] = useState("")
    let [order, setOrder] = useState("asc")
    let {favorite,setFavorite}=useContext(favoriteContext)

    const filteredProducts = products ? products
        .filter(product => (
            product.name.toLowerCase().includes(search.toLowerCase())
        ))
        .sort((a, b) => {
            if (order === "asc") {
                return a.price - b.price
            } else {
                return b.price - a.price
            }
        })
        : [];



        function handleAddFavorite(product){
            let findFavorite= favorite.find(item=>item._id === product._id)
        
            if(findFavorite){
              
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Already in Wishlist"
              });
            }else{
               setFavorite([...favorite,product])
        
               
               const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Added to Wishlist"
              });
            }
         }
    return (
        <div>
            <section id='products'>
                <div className="hadmer"><h3>Our Products</h3></div>
                <input className='src' type="text" placeholder="Seach..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className='sorter' onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
                    Price: {order === "asc" ? "Ascending" : "Descending"}
                </button>
                <div className="pro-cards">
                    {
                        filteredProducts.map((product, index) => (
                            <div className="pro-card">
                                <img src={product.image} alt="" />
                                <div className="pc-hover">
                                    <div className="pc-hover-txt">
                                        <h4>{product.name}</h4>
                                        <h5>{product.price}$</h5>
                                        <p>{product.desc}</p>
                                        <div className="btns">
                                            <GoHeartFill onClick={()=>handleAddFavorite(product)} />
                                            <NavLink to={`/${product._id}`}> <FaCircleInfo /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}



                </div>
            </section>
        </div>
    )
}

export default index
