import React,{useContext} from 'react'
import styles from '../../styles/pagesstyling/Productdesc.module.css'
import { useParams,useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from "axios";
import Navbar from '../Navbar';
import { UserCartContext } from '../../Context/Context';


const ProductDescription = () => {
  const ProductsURL="https://dummyjson.com/products"

  const {Addtocart}=useContext(UserCartContext);

  const {id}=useParams();
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);

  const navigate=useNavigate();

   const fetchproducts= async ()=>{
    try{
      const response= await axios.get(`${ProductsURL}/${id}`)
      const data = response.data
      setLoading(false);
      setProducts(data);
    }catch(error){
      console.log("oops get error while fetching products",error);
    }finally{
      setLoading(false);
    }
  }

  

  useEffect(()=>{
      const timer=setTimeout(() => {
        fetchproducts();   
      },1500);   
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
          <div key={products.id} className={`${styles.procard}`}>
                <div className={styles.proimage}>
                  <img src={products.thumbnail} alt={products.title}/>
                </div>
                <div className={`${styles.procontent}`}>
                  <h2>{products.title}</h2>
                  <h3>Price: {products.price} <span>$</span></h3>
                  <div className={`${styles.desc}`}>
                    <p>{products.description}</p>
                  </div>
                  <div className={`${styles.prodetails}`}>
                    <p>Brand: <span>{products.brand}</span></p>
                    <p>Warranty: <span>{products.warrantyInformation}</span></p>
                    <p>Category: <span>{products.category}</span></p>
                    <p>Rating : <span>{products.rating}</span></p>
                  </div>

                </div>
                <div className={`${styles.allbtns}`}>
                  <button onClick={()=>Addtocart(products)}>Add to Cart</button>
                  <button>Buy</button>
                <button onClick={()=>navigate("/products")}>Back</button>
                </div>
          </div>
          </div>

        </div>)
      }
    
    
    </>
  )
}

export default ProductDescription