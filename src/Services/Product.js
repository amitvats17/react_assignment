import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export async function Getproducts(){
    try {
        const { data } = await api.get('/products');
        return data;
    } catch (error) {
        throw error.message;        
    }
}

export async function Getcategories(){
    try {
        const { data } = await api.get('products/categories');
        return data;
    } catch (error) {
        console.log(error);
        throw error.message;        
    }
}

export async function GetproductsByCategory(cat){
    try {
        const { data } = await api.get(`products/category/${cat}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error.message;        
    }
}

export async function GetproductByID(id){
    try {
        const { data } = await api.get(`products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        throw error.message;        
    }
}
