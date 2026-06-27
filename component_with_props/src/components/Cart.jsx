import React from 'react'
import { useContext } from 'react'
import { UserCartContext } from '../Context/Context'
import styles from "../styles/cart.module.css";
import Navbar from "./Navbar"

const Cart = () => {
    const {RemovefromCart,cart}=useContext(UserCartContext);

    const totalprice=()=>{
       return cart.reduce((total,item)=>total+item.price , 0);
    }

  return (
    <>
    <Navbar/>
    {cart.length == 0?(<div className={`${styles.nomainitem}`}>
        <p className={`${styles.maindesc}`}>Items are not Added Yet</p>
        <p className={`${styles.mainitems}`}>Cart items: <span>{cart.length}</span></p>
    </div>):(<>
        <div className={`${styles.main}`}>
            <div className={`${styles.cartlength}`}><p>Cart items: <span>{cart.length}</span></p></div>
            {cart.map((item)=>{
                return (
                <>
                <div className={`${styles.container} key=${item.id}`}>
                    <div className={`${styles.proimage}`}>
                        <img src={item.thumbnail} alt={item.title}/>
                    </div>
                    <div className={`${styles.price}`}>
                        <p>{item.title}</p>
                        <p>{item.brand}</p>
                        <p><span>{item.price}</span> $ </p>
                    </div>
                    <div className={`${styles.butns}`}>
                        <button className ={`${styles.remove}`} onClick={()=>RemovefromCart(item.id)}>Remove from cart</button>
                        <button className={`${styles.buy}`}>Buy</button>
                    </div>
                </div>
                </>
                );
            })}

             <div className={`${styles.summary}`}>
                    <h1>Order Summary : </h1>
                    <div className={`${styles.total}`}>
                    <p>Total items: <span>{cart.length}</span></p>
                    <p>Total : <span>{totalprice()} $</span></p>
                    </div>
                    <div className={`${styles.checkout}`}><button>Checkout</button></div>
                </div>
        </div>
    </>)}
    </>
  )
}

export default Cart