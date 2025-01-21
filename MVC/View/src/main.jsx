import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './Context/ProductContext.jsx'
import FavoriteProvider from './Context/FavoritesContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavoriteProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </FavoriteProvider>
  </BrowserRouter>,
)
