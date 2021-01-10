import React from "react";
import ReactDOM from "react-dom";
import Cart from './components/Cart';
import Products from './components/Products';
import data from "./data.json";
import Filter from "./components/Filter";

class App extends React.Component{
    constructor()
    {
        super();
        this.state ={
            products: data.products,
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
            sort:"",
        };
    }
    removeFromCart =(product) =>{
      const cartItems=this.state.cartItems.slice();
      this.setState({
          cartItems:cartItems.filter(x=>x._id !== product._id),
      });
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x._id !== product._id)))
    }
    addToCart =(product) =>{
        const cartItems=this.state.cartItems.slice();
        let alreadyInCart=false;

        cartItems.forEach(item =>{
          if(item._id=== product._id)
          {
            item.count++;
            alreadyInCart=true;
          }
        });
        if(!alreadyInCart){
          cartItems.push({...product,count: 1});
        }
        this.setState({cartItems})
    };
    render(){
    return(
      <div className="grid-container">
      <header>
        <a href="/">WATER PURIFIER MACHINERY</a>
      </header>
      <main>

      <div className="content">
        <div className="main">
        <Filter count={this.state.products.length}></Filter>
          <Products products={this.state.products} addToCart={this.addToCart}></Products>
      </div>
      <div className="sidebar ">
          <Cart cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
          />
      </div>
    </div>
  </main>
  <footer>All Right are reserverd</footer>
  </div>
    );
    }
}
export default App;