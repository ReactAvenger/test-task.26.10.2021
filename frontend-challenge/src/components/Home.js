import React from "react";
import { connect } from "react-redux";
import {addShipping, addToCart} from "./actions/cartActions";

export const Home = ({ items, addToCart ,increaseShipping}) => {
  const itemList = items.map((item) => (
    <div className="card" key={item.id}>
      <div className="card-image">
        <img src={item.img} alt={item.title}/>
        <span className="card-title">{item.title}</span>
        <span
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => {
              addToCart(item.id);
              increaseShipping();
          }}
        >
            <i className="material-icons">add</i>
          </span>
      </div>

      <div className="card-content">
        <p>{item.desc}</p>
        <p>
          <b>
            Price:
            {item.price}
            $
          </b>
        </p>
      </div>
    </div>

  ));

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {itemList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items
});
const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => { dispatch(addToCart(id)); },
  increaseShipping: () => {dispatch(addShipping())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
