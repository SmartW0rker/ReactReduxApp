import axios from "axios";
import {fetchProducts,selectedProduct} from "../redux/actions/productActions";
import data from "bootstrap/js/src/dom/data";

const ProductsApi={
    fetchProducts: ()=>{
        return function (dispatch){
            return axios.get("https://fakestoreapi.com/products")
                .then((response)=>{
                    dispatch(fetchProducts(response.data));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    getProduct: (id)=>{
        return function (dispatch){
            return axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((response)=>{
                    console.log("getProduct")
                    console.log(response.data);
                    dispatch(selectedProduct(response.data));
                }).catch((err)=>{
                    console.log(err)
                });
        }
    }
}
export default ProductsApi;