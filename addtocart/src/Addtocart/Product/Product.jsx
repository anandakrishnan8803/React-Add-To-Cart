import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({datas,atc,readm}) => {
  return (
    <div className='productscontainer'>
        <div className="container">
            {
                datas.map((e,i)=>{
                    return(
                        <div key={i} className="products">
                            <span>{i+1}</span>
                            <h3>{e.title}</h3>
                            <img src={e.image} alt="" />
                            <h4>{e.category}</h4>
                            <Link onClick={()=>{readm(e)}} to="/readmore">Read more..</Link>
                            <h4>{e.price}</h4>

                            <button onClick={()=>{atc(e)}} type="button" className="btn btn-success">Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Product
