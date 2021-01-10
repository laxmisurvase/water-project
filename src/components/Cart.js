import React,{ Component } from "react";
import Fade from 'react-reveal/Fade';

export default class Cart extends Component {
    render () {
const {cartItems}=this.props;

        return (
            <div>
                {cartItems.length === 0 ?(
                    <div className="cart cart-header"> Cart is Empty</div>
                ):(
                <div className="cart cart-header">You have {cartItems.length} Item in the Cart </div>
                )}
                <div>
                    <div className="cart">
                    <Fade left cascade >
                        <ul className="cart-items">
                        {cartItems.map(item =>(
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}></img>
                                </div>
                                <div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                        {(item.price)} x{item.count}{" "}

                                    <button className="button_red" onClick={()=>this.props.removeFromCart(item)}>Remove</button>

                                    </div>
                                </div>
                            </li>
                        ))}

                        </ul>
                        </Fade>
                    </div>
                </div>

            </div>

        );
    }
}