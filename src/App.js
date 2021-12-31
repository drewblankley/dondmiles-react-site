import logo from './D_Logo_image2vector.svg';
import Balance from './Balance.js';
import ContentViewport from './ContentViewport.js';
import HeaderMenuSliver from './HeaderMenuSliver.js';
import './App.css';
import React from 'react';

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   firstName: "Allen",
   lastName: "Partridge",
   value: 20
  }
};


 render() {
  return (
    <React.Fragment>
    <div className="App">
      <HeaderMenuSliver />
      <header className="App-header">
        <div className="Header-logo">
         <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="headerTitle">
        <h1>
         ondomiles
        </h1>
        </div>
      </header>
      <Balance />
      <ContentViewport />
    </div>
    
    </React.Fragment>
  );
 }
}

export default App;
