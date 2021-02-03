import React from 'react';
import './App.css';
import Products from './components/Products';
// feature 1
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products : data.products,
       size : " ",
       sort : " ",
    };
  }
  
  render(){

  
  return (
     <div className = "grid-container">
       <header>
         <a href = "/"> React Shopping Cart cgange </a>
       </header>
       <main>
       <div className = "content">
       <div className ="main">
            <Products products = { this.state.products}></Products>
       </div>

       <div className = "sidebar">
            Cart Items
       </div> 
       </div>
       </main>
       <footer>
         All right is reserved.
       </footer>
     </div>
  );
  }
}

export default App;
