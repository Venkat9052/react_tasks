import React, { useState,useEffect } from 'react'
import Navbar from "./Navbar"
import styles from '../styles/products.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserCartContext } from '../Context/Context';
import { useContext } from 'react';


const Products = () => {
    const ProductsURL="https://dummyjson.com/products"

    const {Addtocart}=useContext(UserCartContext);

    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [errors,setErrors]=useState("");


  const fetchproducts= async ()=>{
    try{
      const response= await axios.get(`${ProductsURL}`)
      const data = response.data
      setLoading(false);
      setErrors("");
      setProducts(data.products);
    }catch(error){
      setErrors(`${error}`);
      console.log("oops get error while fetching products",error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    const timer=setTimeout(() => {
      fetchproducts();   
    },1500); 
    
    return ()=>clearTimeout(timer);
  },[])


  return (
    <>
    
      {
        loading?(<div className={`${styles.loading}`}>
          <h1>Loading...</h1>
          <div className={`${styles.loader}`}>
          </div>
        </div>):(<div className={`${styles.main}`}>
          <Navbar/>
          <div className={`${styles.container}`}>
            {
            products.map((product)=>{
              return(<div key={product.id} className={`${styles.procard}`}>
                <div className={styles.proimage}>
                  <Link to={`/products/${product.id}`}><img src={product.thumbnail} alt={product.title}/></Link>
                </div>
                <div className={`${styles.prodetails}`}>
                  <p>{product.title}</p>
                  <p>{product.brand}</p>
                </div>
                <div className={`${styles.addtocartbtn}`}>
                  <button onClick={()=>Addtocart(product)}>Add to Cart</button>
                </div>
              </div>)
            })
          }
          </div>
          

        </div>)
      }
    


    
    </>
  )
}

export default Products