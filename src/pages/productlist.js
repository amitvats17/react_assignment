import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import { Getproducts,GetproductsByCategory } from "../Services/Product";

const Home = () => {
	const [products,setProducts] = useState([]);
    const search = useLocation().search;
	const category = new URLSearchParams(search).get('category');

    useEffect(()=>{
        try {
            if(category){
                const data = GetproductsByCategory(category);
                data.then(src=>{
                    setProducts(src);
                })
            }else{
                const data = Getproducts();
                data.then(src=>{
                    console.log(src.length);
                    setProducts(src);
                })
            }                        
        } catch (error) {
            
        }
    },[])
    

    return (
        <div>   
            <h1>Product List</h1>
            <div>
                {products.map((product,i) => {
                return (
                <div className="pro-list" key={i}>
                    <Link to={`product?id=${product.id}`} >
                        <img height={150} src={product.image}></img>
                        <br/>
                        {product.title}
                    </Link>
                </div> 
                );
                })}
            </div>
        </div>        
    );
// return (
// 	<div>
// 	<h1>Welcome to GeeksforGeeks</h1>
// 	</div>
// );
};

export default Home;
