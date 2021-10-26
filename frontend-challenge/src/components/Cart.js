import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addQuantity, addShipping, decreaseShipping, removeItem, subtractQuantity} from "./actions/cartActions";

export const Cart = (props) => {

  const { items, removeItem, addQuantity, subtractQuantity,totalPrice ,increaseShipping,decreaseShipping} = props;

  let counter = 0;
  items.map((el => {
    if (el.quantity !== 0){
      counter += el.quantity
    }
  }))

  const wholePriceLogic = items.length === 0 ? "Your cart is empty" : `Total price (includes shipping): ${totalPrice}`

  // to remove the item completely
  const handleRemove = (id) => {
    removeItem(id);
  };
  // to add the quantity
  const handleAddQuantity = (id) => {
    addQuantity(id);
    increaseShipping();
  };
  // to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    subtractQuantity(id);
    decreaseShipping();
  };

  const addedItems = items.length
    ? (
      items.map((item) => (
        <li className="collection-item avatar card-chosen" key={item.id}>
          <div className="item-img">
            <img src={item.img} alt={item.img} className=""/>
          </div>
          <div className="item-desc">
            <span className="title">{item.title}</span>
            <p>{item.desc}</p>
            <p>
              <b>
                Price:
                {item.price}
                $
              </b>
            </p>
            <p>
              <b>
                Quantity:
                {item.quantity}
              </b>
            </p>
            <div className="add-remove">
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => { handleAddQuantity(item.id); }}
                >
                  arrow_drop_up
                </i>
              </Link>
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => { handleSubtractQuantity(item.id); }}
                >
                  arrow_drop_down
                </i>
              </Link>
            </div>
            <button
              className="waves-effect waves-light btn pink remove delete-btn"
              onClick={() => { handleRemove(item.id); }}
            >
              Remove
            </button>
          </div>
        </li>
      ))
    )
    : (
      <p>Nothing.</p>
    );
  return (
    <div className="container">
      <div className="cart">
        <div className="cart-info">
          <h5>You have ordered: {counter} items </h5>
          <h5>{wholePriceLogic}</h5>
        </div>
        <ul className='chosen-list'>
          {addedItems}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.addedItems,
  totalPrice: state.total
});
const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => { dispatch(removeItem(id)); },
  addQuantity: (id) => { dispatch(addQuantity(id)); },
  subtractQuantity: (id) => { dispatch(subtractQuantity(id))},
  increaseShipping: () => { dispatch(addShipping()) },
  decreaseShipping: () => { dispatch(decreaseShipping()) }

});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
