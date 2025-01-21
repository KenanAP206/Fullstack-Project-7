import  {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/index.jsx'
import Add from './Pages/Add'
import Details from './Pages/Details'
import Wishlist from './Pages/Wishlist'
import NotFound from './Pages/NotFound'
import UserRoot from './Pages/UserRoot.jsx'
function App(){

  return(
    <>
    
    <Routes>
      <Route path='/' element={<UserRoot/>}>
        <Route index element={<Home/>}/>
        <Route path=':id' element={<Details/>}/> 
        <Route path='add' element={<Add/>}/> 
        <Route path='wishlist' element={<Wishlist/>}/> 
        <Route path='*' element={<NotFound/>}/> 
      </Route>
    </Routes>
    
    </>
  )
}

export default App