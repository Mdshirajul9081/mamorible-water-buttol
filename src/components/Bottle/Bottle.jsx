
import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle,handelAddBottle}) => {
    const {name,price,img}=bottle
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h3>price :${price}</h3>
            <button onClick={()=>handelAddBottle(bottle)}>purches</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handelAddBottle: PropTypes.func.isRequired
};

export default Bottle;