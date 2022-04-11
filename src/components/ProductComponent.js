import React, {useEffect} from "react"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import productsApi from "../api/productsApi";

const ProductComponent = () =>{
    const dispatch=useDispatch();
    const products=useSelector(state =>state.allProducts.products);
    useEffect(() =>{
        dispatch(productsApi.fetchProducts())
            .catch((e)=>{});
    },[]);


    const renderList=products.map((product) =>{
        return(
                    <div className="col-md-6 col-lg-4 col-xl-3 my-2" key={product.id}>
                        <div className="card" style={{width : '18rem'}}>
                            <img src={product.image} style={{height : '20rem'}} className="card-img-top" alt={product.image}/>
                            <div className="card-body">
                                <div className="text-truncate">
                                    <h5 className="card-title">{product.title}</h5>
                                </div>
                                <h6><b>{product.price}</b></h6>
                                <Link to={`/products/${product.id}`} className="btn btn-primary">Check details</Link>
                            </div>
                        </div>
                    </div>
        )});

    return(
        <div className="container">
            <div className="row">
        <>{renderList}</>
            </div>
        </div>
    )
}
export default ProductComponent;