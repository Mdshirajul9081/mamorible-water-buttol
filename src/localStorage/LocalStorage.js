const getStoredCart=()=>{
    const storedCartString=localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
}
const saveCartToLS=cart=>{
    const cartStringfy=JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfy)
}
const addToLS=id=>{
    const cart=getStoredCart()
    cart.push(id)
    // save cart to local storage 
    saveCartToLS(cart);
}
const removeFromLS=id=>{
    const cart=getStoredCart()
    const remining=cart.filter(idx=>idx !==id)
    saveCartToLS(remining)
}
 export {addToLS ,getStoredCart,removeFromLS}