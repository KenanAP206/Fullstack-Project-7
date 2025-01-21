import { useEffect,useState,createContext } from "react";
export const productContext = createContext({});
import axios from 'axios'
function ProductProvider({children}){
    let [products,setProducts]= useState([])
    let [loading,setLoading]= useState(true)
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(res=>{
            setProducts(res.data)
            setLoading(false)
        })
    },[])
    
    let value={
        products,
        loading,
        setProducts,
        setLoading
    }

    return <productContext.Provider value={value}>{children}</productContext.Provider>
}
export default ProductProvider