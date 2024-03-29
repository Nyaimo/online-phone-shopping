import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                const {id, company, price, img,title,inCart, info}=value.detailProduct;
                return (
                   <div className="container py-5">
                    {/* title */}
                    <id className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                    </div>
                    </id>
                    {/*end of title */}
                    {/* product info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} className="img-fluid" alt="product" />
                        </div>
                        {/* product text */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>Model: {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by : <span className="text-uppercase">{company}</span></h4>
                        <h4 className="text-blue ">
                            <strong>price: <span>$</span>{price}</strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about products
                        </p>
                        <p className="text-muted lead">{info}</p>
                        <div>
                            <Link to="/">
                                <ButtonContainer>
                                    back to products
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer cart 
                            disable={inCart ? true: false}
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }}
                            >
                                {inCart ? "inCart" : "add to cart"}
                            </ButtonContainer>
                        </div>
                        </div>
                        {/* end of product text */}
                    </div>
                    {/* end of product info*/}
                   </div>
                );
                }}
            </ProductConsumer>
        )
    }
}
