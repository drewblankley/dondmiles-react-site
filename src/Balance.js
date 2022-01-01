import './App.css';
import React from 'react';

class Balance extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   Alert1: "Allen",
  }
  this.btnTapped = this.btnTapped.bind(this);
};
 btnTapped () {
 alert('Test1')
}

 render() {
  return (
    <div className="Balance">
     <p>
          <button type="button" class="button" onclick={this.btnTapped}>Home</button>
     </p>
     <p>
          <button type="button" class="button" onclick="alert('2')" >Current Balance</button>
     </p>
     <p>
          <button type="button" class="button" onclick="alert('3')" >Point Summary</button>
     </p>
     <p>
          <button type="button" class="button" onclick="alert('4')" >Point History</button>
     </p>
     <p>
          <button type="button" class="button" onclick="alert('5')" >Redeem Points</button>
     </p>
     <p>
          <button type="button" class="button" onclick="alert('6')" >Earn points</button>
     </p>
     
    </div>
  );
 }
}

export default Balance;
