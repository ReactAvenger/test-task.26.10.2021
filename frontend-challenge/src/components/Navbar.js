import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const Navbar = (props) => {
   const {cartItems} = props;
   let counter = 0;
   const count = cartItems.map(el => {
       if (el.quantity !== 0){
           counter += el.quantity
       }
   });

    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link><span className='shop-counter'>{counter}</span></li>
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.addedItems,
});

export default connect(mapStateToProps)(Navbar) ;
