import React from "react";
import { useSnapshot } from 'valtio';
import store from '../store';

const Cart = () => {

  const { cart } = useSnapshot(store);
  return (
    <div style={{
      margin: 20,
      boxShadow: '1px 1px 1px 1px #ccc',
    }}>
      <h3>Assignments</h3>
      {!cart.length && 
      <p style={{padding: 12}}>
        <em>No Assignments Due!</em>
        </p>
        }
      {cart.length ? (
      <div>
      {cart.map((beverage) => (
        <div
          key={[beverage.producerName, beverage.subjectName].join("")}
          style={{
            marginBottom: 12,
            borderBottom: '1px solid #ccc',
            padding: 12
          }}
        >
          <div style={{display: "flex", justifyContent: 'space-between'}}>
            <div>
              <strong>{beverage.producerName}</strong>&nbsp;
              {beverage.subjectName}
            </div>
            <div>
              In Progress
            </div>
          </div>
          <div>
            <div>{beverage.beverageStyle}</div>
          </div>
        </div>
      ))}
      <div style={{padding: 12}}>
        <button>Mark All Done</button>
      </div>
      </div>): null}
    </div>
  );
};

export default Cart;
