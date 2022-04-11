import React from "react"
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () =>{
    const products = useSelector(state => state.products);
    return(
        <ProductComponent/>
    )}
export default ProductListing;