import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../localStorage/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles,setBottles]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
    useEffect(()=>{
        // console.log('call the bottle id',bottles.length);
       if(bottles.length){
        const saveCart=[];
        const getStoredId=getStoredCart()
        console.log(getStoredId,bottles);
        for(const id of getStoredId){
            console.log(id);
            const bottle=bottles.find(bottle=>bottle.id===id);
            if(bottle){
                    saveCart.push(bottle)
            }
        }
        console.log(saveCart);
        setCart(saveCart)
       }
    },[bottles])
    const handelAddBottle=bottle=>{
        const newCart=[...cart,bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }
    const handelRemoveFromCart=id=>{
        const remaining=cart.filter(bottle=>bottle.id !==id)
        setCart(remaining)
        removeFromLS(id)
    }
    
    return (
        <div>
            <h2> bottol Avaliable:{bottles.length}</h2>
            <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart} ></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle=> <Bottle bottle={bottle}
                handelAddBottle={handelAddBottle}    
                key={bottle.id}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;