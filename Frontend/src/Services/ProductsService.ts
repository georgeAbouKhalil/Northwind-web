import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { addProductAction, fetchProductAction } from "../Redux/ProductsState";
import productsStore from "../Redux/Store";
import config from "../Utils/Config";

// All products logicL
class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]>{

        if(productsStore.getState().products.length === 0){
            const response = await axios.get<ProductModel[]>(config.urls.products); //this funcation get me the data
            const products = response.data; // get the data
            productsStore.dispatch(fetchProductAction(products)); // Send downloaded products to Redux
            return products;
        } 
        else {
            const products = productsStore.getState().products;
            return products;
        }
        
    }

    public async getOneProduct(id: number): Promise<ProductModel>{
        const products = productsStore.getState().products;
        const product = products.find(p => p.id === id);
        if(product) {
            return product;
        }
        const response = await axios.get<ProductModel>(config.urls.products + id);
        return response.data;
        
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {
        
        const myFromData = new FormData();
        myFromData.append("name",product.name);
        myFromData.append("price",product.price.toString()); // he dont know to work with number so we need to tostring the num
        myFromData.append("stock",product.stock.toString()); 
        myFromData.append("image",product.image.item(0)); // FilesList has to be converted to File

        const response = await axios.post<ProductModel>(config.urls.products, myFromData); //Must send formData and not product
        const addedProduct = response.data;
        productsStore.dispatch(addProductAction(addedProduct));
        return addedProduct;

    }

}

//Single Object:
const productsService = new ProductsService();

export default productsService;