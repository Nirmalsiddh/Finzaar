import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={stock.mode == "BUY" ? "buy" : "sell"}>{stock.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="orders">
        <div className="no-orders">
          {allOrders.length === 0 && <p>You haven't placed any orders today</p>}

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
