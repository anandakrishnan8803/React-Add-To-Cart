import React from "react";
import "./Cart.css"

const Cart = ({addtc,del,amount}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
            {
                addtc.map((e,i)=>{
                    return(
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{e.title}</td>
                        <td><img src={e.image} alt="" /></td>
                        <td>{e.price}$</td>
                        <td><button onClick={()=>{del(i,e)}} type="button" className="btn btn-danger">remove</button></td>
                    </tr>
                        
                    )
                })
            }
        </tbody>
      </table>

            <h1>Total amout = {Math.round(amount)}</h1>

    </div>
  );
};

export default Cart;
