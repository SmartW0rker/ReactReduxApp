import React from "react"
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import productsApi from "../api/productsApi";
import {useDispatch, useSelector} from "react-redux";

const ProductDetails = () =>{
    const dispatch=useDispatch();
    const productSelected=useSelector(state =>state.allProducts.product);
    const {id}=useParams();
    console.log(id);
    console.log(productSelected);
    useEffect(() =>{

        dispatch(productsApi.getProduct(id))
            .catch((e)=>{});
    },[]);
    return(
        <div className="container">
            {productSelected===undefined ? (
                <div>loading...</div>
            ) : (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={productSelected.image} className="img-fluid" alt={""}/>

                            </div>
                            <div className="col-md-6 flex-column">
                                <div className="card h-100">
                                    <div className="card-title">
                                        <h3>{productSelected.title}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p className="product-description">{productSelected.description}</p>
                                        <h4 className="price my-3">current price: <span>{productSelected.price} $</span></h4>
                                        <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87
                                            votes)</strong></p>
                                    </div>
                                    <div className="card-img-bottom">
                                        <button className="btn btn-success mb-5" type="button">add to cart</button>
                                    </div>
                                    <div className="card-footer">
                                        <span className="text-truncate">41 reviews</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
            )
            }

        </div>
    )
}
export default ProductDetails;