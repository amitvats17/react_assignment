import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export async function Getproducts(){
    try {
        const { data } = await api.get('/products');
        //console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        throw error.message;        
    }
}

export async function Getcategories(){
    try {
        const { data } = await api.get('products/categories');
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error.message;        
    }
}

export async function GetproductsByCategory(cat){
    try {
        const { data } = await api.get(`products/category/${cat}`);
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error.message;        
    }
}

export async function GetproductByID(id){
    try {
        const { data } = await api.get(`products/${id}`);
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error.message;        
    }
}
