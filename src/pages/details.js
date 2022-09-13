import React,{ useState,useEffect }  from "react";
import {useLocation} from "react-router-dom";
import { GetproductByID } from "../Services/Product";

const Product = (props) => {
	
	const [product,setProducts] = useState([]);
	const search = useLocation().search;
	const id = new URLSearchParams(search).get('id');
    useEffect(()=>{
        try {		
  	        const data = GetproductByID(id);
            data.then(src=>{
                setProducts(src);
            })
        } catch (error) {
            
        }
    },[])

	return (
        <div>   
            <h1>{product.title}</h1>
            <div >
                <img src={product.image} height={250} />
            </div>
            <div >
                {product.description}
            </div>
        </div>        
    );
};

export default Product;
