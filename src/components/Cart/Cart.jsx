import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart,handelRemoveFromCart}) => {
    return (
        <div>
            <h3>cart:{cart.length}</h3>
            <div className="cart-component">
                {cart.map(bottle=> <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={()=>handelRemoveFromCart(bottle.id)}>remove</button>
                </div>)}
            </div>
        </div>
    );
};
Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handelRemoveFromCart:PropTypes.func.isRequired
}
export default Cart;