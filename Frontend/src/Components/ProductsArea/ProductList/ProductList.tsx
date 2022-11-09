import { Component } from "react";
import "./ProductList.css";
import axios from "axios";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../SharedArea/Loading/Loading";
import config from "../../../Utils/Config";
import { NavLink } from "react-router-dom";
import productsStore from "../../../Redux/Store";
import { fetchProductAction } from "../../../Redux/ProductsState";
import productsService from "../../../Services/ProductsService";

interface ProductListState {
	products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public async componentDidMount() {
        try{
            const products = await productsService.getAllProducts();
            this.setState({ products: products });
            // or in one line this.setState({ products: await productsService.getAllProducts() });
        }
        catch(err: any){
            alert(err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
                { /* if the product or the state is undefined we will show the gif loading */ }
                {this.state?.products === undefined && <Loading/>}

                <NavLink to={"/products/new"}>New Product</NavLink>

                {/* couse we put ? on the state and the products we dont need the constractor  */}
                { this.state?.products?.map(p => <ProductCard key={p.id} product={p} />).reverse() } 

            </div>
        );
    }
}

export default ProductList;
